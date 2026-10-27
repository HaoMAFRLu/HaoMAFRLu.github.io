---
title: "Rethinking Routing Exploration in Modern Mixture-of-Experts"
authors: "Bingcong Li, <b>Hao Ma</b>, Michael Muehlebach, Niao He, Yi Ma"
collection: publications
category: others
permalink: /publication/rethinking-routing-exploration
excerpt: 'MirrorMoE adapts the routing exploration space to help shared-expert models realize the benefits of fine-grained expert segmentation.'
date: 2026-10-15
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2610.22353'
bibtexurl: '/files/bibtex-rethinking-routing-exploration.bib'
code: 'https://github.com/BingcongLi/MirrorMoE'
arxiv: '2610.22353'
---
Modern mixture-of-experts models combine finer expert segmentation with experts shared across all tokens. We show that these choices create an exploration dilemma: segmentation expands the routing space, while shared experts reduce the variation needed to explore it effectively. MirrorMoE addresses this mismatch by adaptively suppressing unnecessary experts for each token. Experiments across model scales show improved pretraining and downstream performance, allowing shared-expert models to better exploit their available capacity.
