---
title: "Efficient Model-Based Reinforcement Learning for Robot Control via Online Learning"
authors: "Fang Nan, <b>Hao Ma</b>, Qinghua Guan, Josie Hughes, Michael Muehlebach, Marco Hutter"
header:
  teaser: "/pubs/online_mbrl_diagram.png"
collection: publications
category: manuscripts
permalink: /publication/efficient-model-based-rl
excerpt: 'An online model-based reinforcement learning algorithm for efficient real-world robot control using dynamics models learned from interaction data.'
date: 2025-10-21
venue: 'The International Journal of Robotics Research'
paperurl: 'https://arxiv.org/abs/2510.18518'
bibtexurl: '../files/bibtex-efficient-model-based-rl.bib'
arxiv: '2510.18518'
---
We present an online model-based reinforcement learning algorithm suitable for controlling complex robotic systems directly in the real world. Unlike prevailing sim-to-real pipelines that rely on extensive offline simulation and model-free policy optimization, our method builds a dynamics model from real-time interaction data and performs policy updates guided by the learned dynamics model. This efficient model-based reinforcement learning scheme significantly reduces the number of samples to train control policies, enabling direct training on real-world rollout data. This significantly reduces the influence of bias in the simulated data, and facilitates the search for high-performance control policies. We adopt online learning analysis to derive sublinear regret bounds under standard stochastic online optimization assumptions, providing formal guarantees on performance improvement as more interaction data are collected. Experimental evaluations were performed on a hydraulic excavator arm and a soft robot arm, where the algorithm demonstrates strong sample efficiency compared to model-free reinforcement learning methods, reaching comparable performance within hours. Robust adaptation to shifting dynamics was also observed when the payload condition was randomized. Our approach paves the way toward efficient and reliable on-robot learning for a broad class of challenging control tasks.
