---
title: "Black-Box vs. Grey-Box: A Case Study on Learning Table Tennis Ball Trajectory Prediction with Spin and Impacts"
authors: "Jan Achterhold, Philip Tobuschat, <b>Hao Ma</b>, Dieter B&uuml;chler, Michael Muehlebach and Joerg Stueckler"
header:
  teaser: "/pubs/black-box-gray-box.png" 
collection: publications
category: conferences  # manuscripts, conferences
permalink: /publication/black-box-gray-box
excerpt: ''
date: 2023-01-15
venue: 'Learning for Dynamics and Control Conference'
paperurl: 'https://proceedings.mlr.press/v211/achterhold23a/achterhold23a.pdf'
# slidesurl: "https://mysite.com/slides.pdf"
bibtexurl: "../files/bibtex-black-box-gray-box.bib"
# video: 'https://www.youtube.com/watch?v=kR9jowEH7PY'
# code: "https://github.com/username/repo"
# dataset: "https://zenodo.org/record/xxxxx"
# citation: 'Hao Ma, Dieter Buechler, Bernhard Schoelkopf, Micahel Muehlebach. (2009). &quot;Reinforcement learning with model-based feedforward inputs for robotic table tennis.&quot; <i>Autonomous Robots</i>. 47(8):1387-1403.'
---
In this paper, we present a method for table tennis ball trajectory filtering and prediction. Our gray-box approach builds on a physical model. At the same time, we use data to learn parameters of the dynamics model, of an extended Kalman filter, and of a neural model that infers the ball’s initial condition. We demonstrate superior prediction performance of our approach over two black-box approaches, which are not supplied with physical prior knowledge. We demonstrate that initializing the spin from parameters of the ball launcher using a neural network drastically improves long-time prediction performance over estimating the spin purely from measured ball positions. An accurate prediction of the ball trajectory is crucial for successful returns. We therefore evaluate the return performance with a pneumatic artificial muscular robot and achieve a return rate of 29/30 (97.7%).
