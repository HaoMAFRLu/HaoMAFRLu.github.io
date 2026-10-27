/* Open page and file links in new tabs without changing in-page controls. */
(() => {
  const selector = "a[href], area[href]";
  const originalTargets = new WeakMap();

  function isNavigationLink(link) {
    const href = (link.getAttribute("href") || "").trim();
    if (!href || href.startsWith("#")) return false;

    let url;
    try {
      url = new URL(href, document.baseURI);
    } catch {
      return false;
    }

    if (url.protocol !== "http:" && url.protocol !== "https:") return false;

    // Full URLs to this page's sections are still in-page navigation.
    const current = new URL(window.location.href);
    return !(href.includes("#") && url.origin === current.origin &&
      url.pathname === current.pathname && url.search === current.search);
  }

  function updateLink(link) {
    if (!isNavigationLink(link)) {
      if (originalTargets.has(link)) {
        const target = originalTargets.get(link);
        originalTargets.delete(link);
        if (target === null) link.removeAttribute("target");
        else link.setAttribute("target", target);
      }
      return;
    }

    if (!originalTargets.has(link)) {
      originalTargets.set(link, link.getAttribute("target"));
    }
    if (link.getAttribute("target") !== "_blank") {
      link.setAttribute("target", "_blank");
    }
    const rel = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
    rel.add("noopener");
    rel.add("noreferrer");
    const value = Array.from(rel).join(" ");
    if (link.getAttribute("rel") !== value) link.setAttribute("rel", value);
  }

  function updateLinks(root) {
    if (root.matches && root.matches(selector)) updateLink(root);
    root.querySelectorAll(selector).forEach(updateLink);
  }

  updateLinks(document);
  new MutationObserver((records) => {
    records.forEach((record) => {
      if (record.type === "attributes") {
        if (record.target.matches("a, area")) updateLink(record.target);
      }
      else record.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) updateLinks(node);
      });
    });
  }).observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["href", "target", "rel"]
  });

  // Also cover links created and clicked before the observer's next callback.
  function updateClickedLink(event) {
    const element = event.target instanceof Element ? event.target : event.target.parentElement;
    const link = element && element.closest(selector);
    if (link) updateLink(link);
  }
  document.addEventListener("click", updateClickedLink, true);
  document.addEventListener("auxclick", updateClickedLink, true);
})();
