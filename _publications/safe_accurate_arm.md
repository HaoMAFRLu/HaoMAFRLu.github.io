---
title: "Safe & Accurate at Speed with Tendons: A Robot Arm for Exploring Dynamic Motion"
authors: "Simon Guist, Jan Schneider, <b>Hao Ma</b>, Le Chen, Vincent Berenz, Julian Martus, Heiko Ott, Felix Gr&uuml;ninger, Michael Muehlebach, Jonathan Fiene, Bernhard Sch&ouml;lkopf, Dieter B&uuml;chler"
header:
  teaser: "/pubs/hysr.png" 
collection: publications
category: conferences
permalink: /publication/safe-accurate-arm
excerpt: ''
date: 2024-07-15
venue: 'Robotics: Science and Systems'
paperurl: 'https://www.roboticsproceedings.org/rss20/p099.pdf'
# slidesurl: "https://mysite.com/slides.pdf"
bibtexurl: "../files/bibtex-safe-accurate-arm.bib"
project: 'https://sites.google.com/view/pamy2'
# video: 'webdav.tuebingen.mpg.de/pamy2'
# code: "https://github.com/username/repo"
# dataset: "https://zenodo.org/record/xxxxx"
# citation: 'Hao Ma, Dieter Buechler, Bernhard Schoelkopf, Micahel Muehlebach. (2009). &quot;Reinforcement learning with model-based feedforward inputs for robotic table tennis.&quot; <i>Autonomous Robots</i>. 47(8):1387-1403.'
---
Operating robots precisely and at high speeds has been a long-standing goal of robotics research. Balancing these competing demands is key to enabling the seamless collaboration of robots and humans and increasing task performance. However, traditional motor-driven systems often fall short in this balancing act. Due to their rigid and often heavy design exacerbated by positioning the motors into the joints, faster motions of such robots transfer high forces at impact. To enable precise and safe dynamic motions, we introduce a four degree-of-freedom (DoF) tendon-driven robot arm. Tendons allow placing the actuation at the base to reduce the robot’s inertia, which we show significantly reduces peak collision forces compared to conventional robots with motors placed near the joints. Pairing our robot with pneumatic muscles allows generating high forces and highly accelerated motions, while benefiting from impact resilience through passive compliance. Since tendons are subject to additional friction and hence prone to wear and tear, we validate the reliability of our robotic arm on various experiments, including long-term dynamic motions. We also demonstrate its ease of
control by quantifying the nonlinearities of the system and the performance on a challenging dynamic table tennis task learned from scratch using reinforcement learning. We open-source the entire hardware design, which can be largely 3D printed, the control software, and a proprioceptive dataset of 25 days of diverse robot motions at [https://sites.google.com/view/pamy2](https://sites.google.com/view/pamy2).