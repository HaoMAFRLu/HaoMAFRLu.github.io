---
title: "Reinforcement learning with model-based feedforward inputs for robotic table tennis"
authors: "<b>Hao Ma</b>, Dieter B\"uchler, Bernhard Scholkopf, Michael Muehlebach"
header:
  teaser: "/pubs/interception.png" 
collection: publications
category: others
permalink: /publication/reinforcement_learning_model_based
excerpt: ''
date: 2023-10-17
venue: 'Autonomous Robots'
paperurl: 'https://link.springer.com/content/pdf/10.1007/s10514-023-10140-6.pdf'
slidesurl: "https://mysite.com/slides.pdf"
bibtexurl: "https://mysite.com/bibtex.bib"
video: 'https://www.youtube.com/watch?v=kR9jowEH7PY'
code: "https://github.com/username/repo"
dataset: "https://zenodo.org/record/xxxxx"
# citation: 'Hao Ma, Dieter Buechler, Bernhard Schoelkopf, Micahel Muehlebach. (2009). &quot;Reinforcement learning with model-based feedforward inputs for robotic table tennis.&quot; <i>Autonomous Robots</i>. 47(8):1387-1403.'
---
We rethink the traditional reinforcement learning approach, which is based on optimizing over feedback policies, and propose a new framework that optimizes over feedforward inputs instead. This not only mitigates the risk of destabilizing the system during training but also reduces the bulk of the learning to a supervised learning task. As a result, efficient and well-understood supervised learning techniques can be applied and are tuned using a validation data set. The labels are generated with a variant of iterative learning control, which also includes prior knowledge about the underlying dynamics. Our framework is applied for intercepting and returning ping-pong balls that are played to a four-degrees-of-freedom robotic arm in real-world experiments. The robot arm is driven by pneumatic artificial muscles, which makes the control and learning tasks challenging. We highlight the potential of our framework by comparing it to a reinforcement learning approach that optimizes over feedback policies. We find that our framework achieves a higher success rate for the returns (100% vs. 96%, on 107 consecutive trials, see https://youtu.be/kR9jowEH7PY) while requiring only about one tenth of the samples during training. We also find that our approach is able to deal with a variant of different incoming trajectories.
