import cv2
vidcap = cv2.VideoCapture('./Motivational video _ This will change your mind _ whatsapp 30 sec video _.mp4')
success,image = vidcap.read()
count = 0
while success:
  cv2.imwrite("Ibaco-%d.jpg" % count, image)     # save frame as JPEG file      
  success,image = vidcap.read()
  print('Read a new frame: ', success)
  count += 1