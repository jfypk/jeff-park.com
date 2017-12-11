---
title: 'Automating Video Assignment 2: Socially-Awkward Camera'
date: 2017-11-16 15:33:43
tags: [automating-video, open-cv, python]
---

# Blog Draft 2

---

For automating video, we were supposed to automate a video with code. 

Initially, I wanted to use an IP camera and openCV to detect eyes and smiles and composite a face. However, the IP cameras aren't very fast, so by the time openCV detected an eye and the cameras zoomed in to capture, the subject was already out of the picture. 

I then tried to use the smile haar cascades to detect smiles coming out of the ITP elevator, and this worked to some extent, but for some reason, the IP camera would always move up and to the left each time it would detect the camera... even though I had written no such instructions in the code. It was as if the IP camera was inherently socially awkward... so I present you with: 

# Socially Awkward Cam

 [https://vimeo.com/243187371](https://vimeo.com/243187371) 

## Code

    import numpy as np
    import cv2
    import ipcamera
    import time
    
    # download haar cascades from: https://github.com/opencv/opencv/tree/master/data/haarcascades
    face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
    smile_cascade = cv2.CascadeClassifier('haarcascade_smile.xml')
    video_capture = cv2.VideoCapture(ipcamera.MJPG_URL)
    
    # get the current time in seconds
    last_moved = time.time()
    reset_time = time.time()
    
    recording = 0
    
    currentframe = 0
    ipcamera.tilt(3.5)
    time.sleep(1)
    ipcamera.pan(-113)
    time.sleep(1)
    ipcamera.zoom(2200.)
    
    smiles = []
    
    while True:
     currentframe += 1
     current_time2 = time.time()
     if current_time2 - reset_time > 15: 
     ipcamera.tilt(3.5)
     time.sleep(1)
     ipcamera.pan(-113)
     time.sleep(1)
     ipcamera.zoom(2200.)
     reset_time = time.time()
    
     if currentframe % 5 != 0:
     continue 
    
     ret, frame = video_capture.read()
    
     gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
     faces = face_cascade.detectMultiScale(
     gray,
     scaleFactor=1.1,
     minNeighbors=5,
     )
    
     for (x, y, w, h) in faces:
     cv2.rectangle(frame,(x,y),(x+w,y+h),(255,0,0),2)
     roi_gray = gray[y:y+h, x:x+w]
     roi_color = frame[y:y+h, x:x+w]
     smiles = smile_cascade.detectMultiScale(roi_gray)
     for (ex,ey,ew,eh) in smiles:
     cv2.rectangle(roi_color,(ex,ey),(ex+ew,ey+eh),(0,255,0),2)
    
     # find the biggest left_eye and center the camera on it
     current_time = time.time()
     if len(smiles) > 0 and current_time - last_moved > 4:
     biggest_smiles = sorted(smiles, key=lambda x: x[2])[0]
     ipcamera.record(str(recording) + '.mp4', duration='00:00:05')
     ipcamera.center(biggest_smiles[0] + biggest_smiles[2]/2, biggest_smiles[1] + biggest_smiles[3]/2)
     time.sleep(1)
     ipcamera.move('upright')
     time.sl eep(1)
     ipcamera.move('stop')
     time.sleep(1)
     last_moved = time.time()
     recording += 1
    
     # comment out these lines if you don't want to see a preview window
     cv2.imshow('Video', frame)
     if cv2.waitKey(1) & 0xFF == ord('q'):
     break
    
    video_capture.release()
    cv2.destroyAllWindows()
