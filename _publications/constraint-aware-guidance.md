---
title: "Constraint-Aware Diffusion Guidance for Robotics: Real-Time Obstacle Avoidance for Autonomous Racing"
authors: "<b>Hao Ma</b>, Sabrina Bodmer, Andrea Carron, Melanie Zeilinger, Michael Muehlebach"
header:
  teaser: "/pubs/track.png" 
collection: publications
category: conferences
permalink: /publication/constraint-aware-guidance
excerpt: ''
date: 2025-09-27
venue: 'Conference on Robot Learning'
paperurl: 'https://link.springer.com/content/pdf/10.1007/s10514-023-10140-6.pdf'
# slidesurl: "https://mysite.com/slides.pdf"
bibtexurl: "../files/bibtex-constraint-aware-guidance.bib"
video: 'https://www.youtube.com/watch?v=KNYsTdtdxOU'
# code: "https://github.com/username/repo"
dataset: "https://github.com/HaoMAFRLu/dataset-CoDiG"
# citation: 'Hao Ma, Dieter Buechler, Bernhard Schoelkopf, Micahel Muehlebach. (2009). &quot;Reinforcement learning with model-based feedforward inputs for robotic table tennis.&quot; <i>Autonomous Robots</i>. 47(8):1387-1403.'
---
 Diffusion models hold great potential in robotics due to their ability to capture complex, high-dimensional data distributions. However, their lack of constraint-awareness limits their deployment in safety-critical applications. We propose Constraint-Aware Diffusion Guidance (CoDiG), a data-efficient and general-purpose framework that integrates barrier functions into the denoising process, guiding diffusion sampling toward constraint-satisfying outputs. CoDiG enables constraint satisfaction even with limited training data and generalizes across tasks. We evaluate our framework in the challenging setting of miniature autonomous racing, where real-time obstacle avoidance is essential. Real-world experiments show that CoDiG generates safe outputs efficiently under dynamic conditions, highlighting its potential for broader robotic applications. Videos are available at: [https://www.youtube.com/watch?v=KNYsTdtdxOU](https://www.youtube.com/watch?v=KNYsTdtdxOU).