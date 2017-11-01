---
title: Making my first instrument
date: 2017-09-08 20:11:07
tags: [nime]
---

## Fiducial Markers 

In the summer, I worked with NYU-X to develop a prototype dresser system to help those with early-onset dementia dress themselves. We developed two different prototypes: one that was controlled by a caretaker, and the other that was controlled automatically. The automatic-controlled dresser system used fiducial markers and [Reactivision](https://en.wikipedia.org/wiki/Reactable#reacTIVision). 

![Reactivision](./reactivision.JPG);

Reactivision was developed as a musical instrument called Reactable, so for my first NIME instrument, I decided to make my own prototype of Reactable using these fiducial markers. My fiducial markers trigger custom software I wrote using Node.js to play different audio funk samples that I found on [Synthtopia](www.synthtopia.com/content/2010/02/05/10000-free-audio-samples/)

![Fiducial Players](./fiducial.JPG);

I hadn't really thought about using software and computer vision for my final NIME instrument, but there is a lot of potential here. I initially thought that I would use a vibrate sensor attached to an Arduino. Depending on how hard you hit the sensor, a different instrument would play. I wanted to feed the data from the Arduino into a Node.js app, but I kept getting a memory leak. I want to spend more time developing this idea this coming week. 

![Original Arduino Proto](./arduino.JPG)