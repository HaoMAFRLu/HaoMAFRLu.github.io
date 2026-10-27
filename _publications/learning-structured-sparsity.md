---
title: "Learning Structured Sparsity for Large Models: Bridging Model Compressibility and Efficient Inference"
authors: "Tianxiang Xia, Kai Lion, Niao He, Michael Muehlebach, Melanie Zeilinger, <b>Hao Ma</b>"
collection: publications
category: others
permalink: /publication/learning-structured-sparsity
excerpt: 'S-SALAAD learns structured sparse and low-rank weights to enable elastic model compression and efficient CPU and GPU inference across memory budgets.'
date: 2026-10-22
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2610.31897'
project: 'https://egretwalker.github.io/S-SALAAD/'
code: 'https://github.com/egretwAlker/S-SALAAD'
bibtexurl: '/files/bibtex-learning-structured-sparsity.bib'
arxiv: '2610.31897'
---
Reducing model size does not always accelerate inference, because irregular sparse operations can introduce substantial overhead. We introduce S-SALAAD, which learns low-rank components together with hardware-compatible structured sparsity during training. Budget-aware compression and dedicated CPU and GPU kernels let a single checkpoint serve devices with different memory limits. Experiments on Llama2 and Qwen3, spanning pretraining and distillation, demonstrate improved trade-offs among perplexity, memory consumption, and inference latency relative to the evaluated baselines, supporting efficient deployment of large models on edge devices.
