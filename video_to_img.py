import cv2
vidcap = cv2.VideoCapture('./Ibaco - flavours 2O18 - your Ice Cream Destination - TVC.webm')
success,image = vidcap.read()
count = 0
while success:
  cv2.imwrite("Ibaco-%d.jpg" % count, image)     # save frame as JPEG file      
  success,image = vidcap.read()
  print('Read a new frame: ', success)
  count += 1