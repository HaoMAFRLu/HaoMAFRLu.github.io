---
title: "SALAAD: Sparse And Low-Rank Adaptation via ADMM for Large Language Model Inference"
authors: "<b>Hao Ma</b>, Melis Ilayda Bal, Liang Zhang, Bingcong Li, Niao He, Melanie Zeilinger, Michael Muehlebach"
header:
  teaser: "/pubs/elephant.png" 
collection: publications
category: conferences
permalink: /publication/salaad-sparse-low-rank-adaptation
excerpt: 'A plug-and-play sparse and low-rank adaptation framework for large language model inference under heterogeneous memory budgets.'
date: 2026-07-07
venue: 'International Conference on Machine Learning'
paperurl: 'https://arxiv.org/abs/2602.00942'
# slidesurl: ''
bibtexurl: '../files/bibtex-salaad.bib'
# video: ''
# code: ''
# dataset: ''
# arxiv: '2602.00942'
---
Modern large language models are increasingly deployed under compute and memory constraints, making flexible control of model capacity a central challenge. While sparse and low-rank structures naturally trade off capacity and performance, existing approaches often rely on heuristic designs that ignore layer and matrix heterogeneity or require model-specific architectural modifications. We propose SALAAD, a plug-and-play framework applicable to different model architectures that induces sparse and low-rank structures during training. By formulating structured weight learning under an augmented Lagrangian framework and introducing an adaptive controller that dynamically balances the training loss and structural constraints, SALAAD preserves the stability of standard training dynamics while enabling explicit control over the evolution of effective model capacity during training. Experiments across model scales show that SALAAD substantially reduces memory consumption during deployment while achieving performance comparable to ad-hoc methods. Moreover, a single training run yields a continuous spectrum of model capacities, enabling smooth and elastic deployment across diverse memory budgets without the need for retraining.
