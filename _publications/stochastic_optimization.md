---
title: "Stochastic Online Optimization for Cyber-Physical and Robotic Systems"
authors: "<b>Hao Ma</b>,  Melanie Zeilinger, Michael Muehlebach"
header:
  teaser: "/pubs/estimate.png" 
collection: publications
category: others  # manuscripts, conferences
permalink: /publication/stochastic-optimization
excerpt: ''
date: 2024-04-08
venue: 'arXiv'
paperurl: 'https://arxiv.org/abs/2404.05318'
# slidesurl: "https://mysite.com/slides.pdf"
bibtexurl: "../files/bibtex-stochastic-optimization.bib"
video: 'https://www.youtube.com/watch?v=OLVvKGba7PA'
# code: "https://github.com/username/repo"
# dataset: "https://zenodo.org/record/xxxxx"
# citation: 'Hao Ma, Dieter Buechler, Bernhard Schoelkopf, Micahel Muehlebach. (2009). &quot;Reinforcement learning with model-based feedforward inputs for robotic table tennis.&quot; <i>Autonomous Robots</i>. 47(8):1387-1403.'
---
We propose a gradient-based online optimization framework for solving stochastic programming problems that frequently arise in the context of cyber-physical and robotic systems. Our problem formulation accommodates constraints that model the evolution of a cyber-physical system, which has, in general, a continuous state and action space, is nonlinear, and where the state is only partially observed. We also incorporate an approximate model of the dynamics as prior knowledge into the learning process and show that even rough estimates of the dynamics can significantly improve the convergence of our rithms. Our online optimization framework encompasses both gradient descent and quasi-Newton methods, and we provide a unified convergence analysis of our algorithms in a non-convex setting. We also characterize the impact of modeling errors in the system dynamics on the convergence rate of the algorithms. Finally, we evaluate our algorithms in simulations of a flexible beam, a four-legged walking robot, and in real-world experiments with a ping-pong playing robot.
