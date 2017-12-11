---
title: Automating Video - assignment 1
date: 2017-11-02 12:11:23
tags: [automating-video]
---

# Homework 1

For my assignment this week, I wanted to create a video that poked fun at all the tech marketing material that claims their companies change the world. Having worked in tech for five years before coming to ITP, I got to see firsthand the troubling contradiction of tech-speak vs. the world that they were actually creating around them. 

So I spliced up some news videos and tech marketing videos and juxtaposed them to illustrate the stark contrast between them. 

## Source Material

[Airbnb](https://www.youtube.com/embed/-XSAqfK_UwY?feature=oembed)

[Asana](https://www.youtube.com/embed/jfQvNx9fsQ8?feature=oembed)

[Uber Protests](https://www.youtube.com/embed/JC9riXLMAak?feature=oembed)

[SF Homeless](https://www.youtube.com/embed/fUtyW4FRn78?feature=oembed)

[Gentrification](https://www.youtube.com/embed/QIR2E8bpzfs?feature=oembed)

[First World Problems](https://www.youtube.com/embed/gGgnpem0mNU?feature=oembed)

[Uber](https://www.youtube.com/embed/7-1fCFBtfj4?feature=oembed)

## Generated Videos

[juxtaposition1](https://player.vimeo.com/video/241025142)

[juxtaposition2](https://player.vimeo.com/video/241025150)

[juxtaposition3](https://player.vimeo.com/video/241025115)

## Code

    import moviepy.editor as mp
    import random
    
    video = mp.VideoFileClip("airbnb1.mp4")
    video2 = mp.VideoFileClip("asana1.mp4")
    video3 = mp.VideoFileClip("uber3.mp4")
    video4 = mp.VideoFileClip("fwp.mp4")
    video5 = mp.VideoFileClip("gentrification.mp4")
    video6 = mp.VideoFileClip("sfhomeless.mp4")
    video8 = mp.VideoFileClip("uberprotest.mp4")
    
    clips = []
    
    for i in range(0, 3):
     start = random.uniform(0, video.duration - 1)
     end = start + 1
     clip1 = video.subclip(start, end)
    
     start = random.uniform(0, video2.duration - 1)
     end = start + 1
     clip2 = video2.subclip(start, end)
    
     start = random.uniform(0, video3.duration - 1)
     end = start + 1
     clip3 = video3.subclip(start, end)
    
     start = random.uniform(0, video4.duration - 1)
     end = start + 1
     clip4 = video4.subclip(start, end)
    
     start = random.uniform(0, video5.duration - 1)
     end = start + 1
     clip5 = video5.subclip(start, end)
    
     start = random.uniform(0, video6.duration - 1)
     end = start + 1
     clip6 = video6.subclip(start, end)
    
     start = random.uniform(0, video8.duration - 1)
     end = start + 1
     clip8 = video8.subclip(start, end)
    
     clips.append(clip1)
     clips.append(clip2)
     clips.append(clip3)
     clips.append(clip4)
     clips.append(clip5)
     clips.append(clip6)
     clips.append(clip8)
    
    
    random.shuffle(clips)
    composition = mp.concatenate(clips)
    composition.write_videofile("juxta3.mp4", fps=25)