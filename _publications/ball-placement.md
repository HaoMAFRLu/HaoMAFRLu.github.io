---
title: "Data-Efficient Online Learning of Ball Placement in Robot Table Tennis"
authors: "Philip Tobuschat, <b>Hao Ma</b>, Dieter B&uuml;chler, Bernhard Sch&ouml;lkopf, Michael Muehlebach"
header:
  teaser: "/pubs/ball_placement.png" 
collection: publications
category: conferences  # manuscripts, conferences
permalink: /publication/ball-placement
excerpt: ''
date: 2023-10-01
venue: 'International Conference on Intelligent Robots and Systems'
paperurl: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10342132'
# slidesurl: "https://mysite.com/slides.pdf"
bibtexurl: "../files/bibtex-ball-placement.bib"
video: 'https://youtu.be/VC3KJoCss0k'
# code: "https://github.com/username/repo"
# dataset: "https://zenodo.org/record/xxxxx"
# citation: 'Hao Ma, Dieter Buechler, Bernhard Schoelkopf, Micahel Muehlebach. (2009). &quot;Reinforcement learning with model-based feedforward inputs for robotic table tennis.&quot; <i>Autonomous Robots</i>. 47(8):1387-1403.'
---
We present an implementation of an online optimization algorithm for hitting a predefined target when returning ping-pong balls with a table tennis robot. The online algorithm optimizes over so-called interception policies, which define the manner in which the robot arm intercepts the ball. In our case, these are composed of the state of the robot arm (position and velocity) at interception time. Gradient information is provided to the optimization algorithm via the mapping from the interception policy to the landing point of the ball on the table, which is approximated with a black-box and a grey-box approach. Our algorithm is applied to a robotic arm with four degrees of freedom that is driven by pneumatic artificial muscles. As a result, the robot arm is able to return the ball onto any predefined target on the table after about $2$-$5$ iterations. We highlight the robustness of our approach by showing rapid convergence with both the black-box and the grey-box gradients. In addition, the small number of iterations required to reach close proximity to the target also underlines the sample efficiency. A demonstration video can be found here: [https://youtu.be/VC3KJoCss0k](https://youtu.be/VC3KJoCss0k).