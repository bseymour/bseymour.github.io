---
title: Sync All The Things
date: 2013-08-07 18:22:09 Z
permalink: "/2013/08/07/sync-all-the-things/"
categories:
- Mac
- photography
- services
- Workflow
layout: single
author_profile: true
type: pages
post_image:
- "/images/allbsuploads/2013/08/Screen-Shot-2013-08-11-at-19.26.20.png"
---

While we love DropBox and Google Drive for cloud based file sync&#8217;ing across all our devices, today I&#8217;m trying out an option for local-network Mac/PC sync&#8217;ing: **<span style="text-decoration: underline;">SyncMate Extra</span>**. [<span style="color: #ff3417;">*Warning : check out my update at the bottom before considering trying it</span>]

As a family, we already have a set of well established internal and offsite backup routines. Having recently introduced some Macs into the family inventory, (and a DropBox/WiFi enabled Galaxy Camera) we wanted to integrate the new Macs and update our family photo workflow, without having to dismantle the existing setup.

Current setup:

&#8211; a couple of Window machines, each which automatically backs up to local network drives using &#8216;WD Anywhere Backup&#8217;.

&#8211; 1 of the windows machines is the &#8216;master&#8217; which maintains our offsite backup via Crashplan [[previous post](http://allbs.co.uk/2011/08/24/limits-of-unlimited-offsite-backup/)] &#8211; where we currently have appx 1.3TB of family assets/data.

&#8211; a sprinkling of Android phones, which auto-upload any photos to our 50 GB DropBox account

&#8211; a Galaxy Camera which has built in wifi and DropBox, set to auto-upload when connected.

&#8211; Google Drive (100GB) for cross device sync&#8217;ing the bigger, and less changeable assets. (I generally find gDrive slower that Dropbox, and the gDrive Mac app seems to crash more than I would like)

&#8211; the new &#8216;ish MacBook Pro…

&nbsp;

Until now, we&#8217;d been sync&#8217;ing assets to and from the Mac just via DropBox and gDrive, and then running some manual file movement on the Windows machine to get any Mac-derived new assets into the rest of the backup workflow. But it seems a bit crazy to keep sending stacks of data/assets out to cloud based services, when the for some of the workflows we were just moving between devices on the same local network.

Enter SyncMate Extra : <http://mac.eltima.com/sync-mac.html>

Install the app on Mac and Windows.

<img title="syncmate pc install.png" src="http://seymourpotential.com/wp-content/uploads/2013/08/syncmate-pc-install2.png" alt="Syncmate pc install" width="282" height="564" border="0" /> <img title="Screen Shot 2013-08-11 at 17.22.28.png" src="http://seymourpotential.com/wp-content/uploads/2013/08/Screen-Shot-2013-08-11-at-17.22.282.png" alt="Screen Shot 2013 08 11 at 17 22 28" width="250" height="202" border="0" />

&nbsp;

I then connected to the Win7 machine, and then configure the local and remote folders to be sync&#8217;d and if the sync&#8217;ing should be one or two way.

<img title="Screen Shot 2013-08-11 at 17.29.03.png" src="http://seymourpotential.com/wp-content/uploads/2013/08/Screen-Shot-2013-08-11-at-17.29.03.png" alt="Screen Shot 2013 08 11 at 17 29 03" width="500" height="408" border="0" />

<img title="Screen Shot 2013-08-11 at 17.51.01.png" src="http://seymourpotential.com/wp-content/uploads/2013/08/Screen-Shot-2013-08-11-at-17.51.01.png" alt="Screen Shot 2013 08 11 at 17 51 01" width="500" height="385" border="0" />

and setup some auto-sync setting:

<img title="Screen Shot 2013-08-11 at 18.11.30.png" src="http://seymourpotential.com/wp-content/uploads/2013/08/Screen-Shot-2013-08-11-at-18.11.30.png" alt="Screen Shot 2013 08 11 at 18 11 30" width="500" height="288" border="0" />

and that&#8217;s all there is to it. Initial test were with around 10GB, that was only on the Win7 machine, and another 10GB that was only on the Mac, and in about 20 minutes both machines were in sync.

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screen Shot 2013-08-11 at 17.58.19.png" src="http://seymourpotential.com/wp-content/uploads/2013/08/Screen-Shot-2013-08-11-at-17.58.19.png" alt="Screen Shot 2013 08 11 at 17 58 19" width="200" height="68" border="0" />

&nbsp;

More testing to come, I&#8217;ll report back any problems.

[<span style="color: #ff300a;">update 2013-09-06</span>] After my first main proper sync had finished, I just went to check the destination machine &#8211; <span style="color: #ff2d08;"><strong>to find the folders empty…. oh, and my trash can size is now 45.9GB</strong></span>…….. \[redacted\] \[redacted\] ….. glad I took external HDD backups. I suspect I&#8217;ll uninstall it now, as I really can&#8217;t trust our family photos to a workflow unless I have very high confidence that it won&#8217;t delete all our photos!

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screen Shot 2013-09-06 at 19.42.43.png" src="/images/allbsuploads/2013/09/Screen-Shot-2013-09-06-at-19.42.43.png" alt="Screen Shot 2013 09 06 at 19 42 43" width="296" height="65" border="0" />

[update 2013-09-16] The Support team from Eltima have been pretty responsive, but their latest response reinforces that it was definitely for the best that I removed the software from my computers. <span style="color: #ff0000;"><span style="color: #000000;">Apparently, 45GB of family photos may have been deleted</span></span>**<span style="text-decoration: underline; color: #ff0000;">because one of the machine went into stand-by mode</span>** , and that this behaviour is not considered to be the software malfunctioning :

&#8220;The difficulty you encountered could have been related to the fact that, while the sync process was running, one of your computers was automatically switched to stand-by mode. During stand-by, the hard drive was un-powered, and your images became unreachable for SyncMate. Thus, the software was unable to detect the images and considered them as deleted, and applied the deletion to the other sync side. That is why your photos were moved to the Trash folder.

If our assumption is correct, then the issue is not related to the software malfunctioning.&#8221;

Yikes.

&nbsp;

(note: our respective business devices all run backup processes, independent of those described here)
