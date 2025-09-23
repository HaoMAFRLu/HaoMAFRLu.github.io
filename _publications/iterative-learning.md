---
title: "A Learning-based Iterative Control Framework for Controlling a Robot Arm with Pneumatic Artificial Muscles"
authors: "<b>Hao Ma</b>, Dieter B&uuml;chler, Bernhard Sch&ouml;lkopf, Michael Muehlebach"
header:
  teaser: "/pubs/main_body.png" 
collection: publications
category: conferences
permalink: /publication/learning_based_iterative_control
excerpt: ''
date: 2022-07-01
venue: 'Robotics: Science and Systems'
paperurl: 'https://www.roboticsproceedings.org/rss18/p029.pdf'
# slidesurl: "https://mysite.com/slides.pdf"
bibtexurl: "../files/bibtex-learning-based-iterative-control.bib"
# video: 'https://www.youtube.com/watch?v=kR9jowEH7PY'
# code: "https://github.com/username/repo"
# dataset: "https://zenodo.org/record/xxxxx"
# citation: 'Hao Ma, Dieter Buechler, Bernhard Schoelkopf, Micahel Muehlebach. (2009). &quot;Reinforcement learning with model-based feedforward inputs for robotic table tennis.&quot; <i>Autonomous Robots</i>. 47(8):1387-1403.'
---
In this work, we propose a new learning-based iterative control (IC) framework that enables a complex soft-robotic arm to track trajectories accurately. Compared to traditional iterative learning control (ILC), which operates on a single fixed reference trajectory, we use a deep learning approach to generalize across various reference trajectories. The resulting nonlinear mapping computes feedforward actions and is used in a two degrees of freedom control design. Our method incorporates prior knowledge about the system dynamics and by learning only feedforward actions, it mitigates the risk of instability. We demonstrate a low sample complexity and an excellent tracking performance in real-world experiments. The experiments are carried out on a custom-made robot arm with four degrees of freedom that is actuated with pneumatic artificial muscles. The experiments include high acceleration and high velocity motion.
