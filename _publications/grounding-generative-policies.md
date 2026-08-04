---
title: "Grounding Generative Policies in Physics: Optimization-Guided Diffusion for Robot Control"
authors: "Sabrina Bodmer, Ren&eacute; Zurbr&uuml;gg, Tifanny Portela, <b>Hao Ma</b>, Alexandre Didier, Marco Hutter, Colin Jones, Melanie Zeilinger"
collection: publications
category: others
permalink: /publication/grounding-generative-policies
excerpt: 'Inference-time optimization grounds diffusion policies in robot reachability, collision-avoidance, and controller-level feasibility constraints without retraining.'
date: 2026-06-23
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2606.24208'
bibtexurl: '../files/bibtex-grounding-generative-policies.bib'
arxiv: '2606.24208'
---
Diffusion policies can generate high-quality task-space behaviors while still violating the physical constraints of a particular robot. We propose an inference-time optimization framework that replaces the sampling perturbation in the reverse diffusion process with an optimized correction. This makes it possible to impose hard constraints or soft penalties during sampling without retraining the diffusion model, while keeping samples close to the learned prior. We evaluate the approach on dexterous grasp synthesis with reachability and collision-avoidance constraints, as well as dynamic manipulation with controller-level trackability constraints.
