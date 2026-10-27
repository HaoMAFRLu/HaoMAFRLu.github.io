/* Keep site navigation in this tab; open external sites and files in new tabs. */
(() => {
  const selector = "a[href], area[href]";
  const originalTargets = new WeakMap();

  function linkTarget(link) {
    const href = (link.getAttribute("href") || "").trim();
    if (!href) return null;

    let url;
    try {
      url = new URL(href, document.baseURI);
    } catch {
      return null;
    }

    if (url.protocol !== "http:" && url.protocol !== "https:") return null;

    const current = new URL(window.location.href);
    const isFile = link.hasAttribute("download") ||
      /\.(?:pdf|bib|zip|gz|tar|7z|rar|docx?|xlsx?|pptx?|csv|tsv|txt|json|xml|png|jpe?g|gif|svg|webp|mp4|webm|mp3|wav)$/i.test(url.pathname);
    return url.origin !== current.origin || isFile ? "_blank" : "_self";
  }

  function updateLink(link) {
    const desiredTarget = linkTarget(link);
    if (desiredTarget === null) {
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
    if (link.getAttribute("target") !== desiredTarget) {
      link.setAttribute("target", desiredTarget);
    }
    if (desiredTarget !== "_blank") return;
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
    attributeFilter: ["href", "target", "rel", "download"]
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
