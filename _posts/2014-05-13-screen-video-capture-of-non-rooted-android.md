---
layout: single
author_profile: true
type: pages

title: Screen Video Capture of non-rooted Android Tablet
date: 2014-05-13T20:47:26+00:00
permalink: /2014/05/13/screen-video-capture-of-non-rooted-android/
post_image:
  - http://ox10.it/allbs/wp-content/uploads/2014/05/Screenshot-2014-05-13-21.49.13.png
categories:
  - android
  - HEADER
  - Mac
tags:
  - android
  - mac
  - minecraft
---
My Android Tablet is NOT ROOTED, but I needed to capture some video of the screen footage from my son’s Pocket Minecraft based project. The Google Play store appears to have stacks of apps which will capture video of the screen with one button press, but due to an Android platform restriction, at this time they all require that the device be rooted. I was using a Mac and a non-rooted Nexus7, and here are the steps that worked for me:

Grab the the Android SDK: <https://developer.android.com/sdk/index.html>

No need to install, just extract it and open the Terminal to where you placed the contents and: adk > platform-tools

(I think Windows user will also need to grab the Google USB Driver: <http://developer.android.com/sdk/win-usb.html#download> though I have only done this on Mac)

Ensure Developer Mode and USB debugging are enabled on your device, and then connect your device via USB, and in the terminal:

$ ./adb devices

Initially I saw one device attached, which was labelled as being unauthorised:

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screenshot 2014-05-13 20.48.33.png" src="http://ox10.it/allbs/wp-content/uploads/2014/05/Screenshot-2014-05-13-20.48.33.png" alt="Screenshot 2014 05 13 20 48 33" width="300" height="60" border="0" />

meanwhile on the device I had a security warning, asking me to permit USB debugging:

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screenshot_2014-05-13-20-49-15.png" src="http://ox10.it/allbs/wp-content/uploads/2014/05/Screenshot_2014-05-13-20-49-15.png" alt="Screenshot 2014 05 13 20 49 15" width="500" height="312" border="0" />

Having accepted the adb devices command now returned:

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screenshot 2014-05-13 20.51.22.png" src="http://ox10.it/allbs/wp-content/uploads/2014/05/Screenshot-2014-05-13-20.51.22.png" alt="Screenshot 2014 05 13 20 51 22" width="300" height="41" border="0" />

To start a recording:

$ ./adb shell screenrecord /sdcard/minecraft.mp4

ctrl-c to end the recording

Then pull the file back to the Mac:

$ ./adb pull /sdcard/minecraft.mp4

et voila:



&nbsp;

Thanks to the guidance received by the following site:

<http://nexus7.wonderhowto.com/how-to/record-your-nexus-7-screen-using-adb-kitkats-hidden-screen-capture-tool-0149740/>

&nbsp;
