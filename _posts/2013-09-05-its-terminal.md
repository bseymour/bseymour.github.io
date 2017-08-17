---
title: Terminal Velocity
date: 2013-09-05 19:42:01 Z
permalink: "/2013/09/05/its-terminal/"
category: [feature]
categories:
- Workflow
- feature
tags:
- terminal
- bash
- injustanhour
layout: single
author_profile: false
type: pages
post_image:
- "/images/allbsuploads/2013/09/Screen-Shot-2013-09-04-at-20.55.58.png"
sidebar:
  nav: blog_sidenav
---

I had one of those problems to solve, that initially had me toying with blowing the dust of some Python, but in the end it struck me as the perfect time to get more in touch with my Mac&#8217;s Command Line a.k.a. The Terminal.

A few years ago I was working with the brilliant Jan Exner, and on a client site was spellbound as he used the command line to completely pacify and coerce a massive SiteCat log file. A few deft, and obscure looking commands, and he had whittled the monster text file into the usable and meaningful snippets (for the problems at hand). He then contorted it, and output into a sequence of secondary files, which became the human-readable data for the analysis that would follow.

Last month, I went to the second 12Devs event, based out of the Mozilla Hackspace, and of the many great talks, I was really inspired by Paul&#8217;s (@nrocy) rapid-fire and completely hands-on (I love talks with live coding!) talk all about &#8220;Make Darwin your …..&#8221; &#8211; The 12dev&#8217;s team have made the video available here: <https://vimeo.com/72650338> (note: it&#8217;s a bit sweary)

<a title="12 Devs Video" href="https://vimeo.com/72650338" target="_blank"><img style="display: block; margin-left: auto; margin-right: auto; border: 0px;" title="Screen Shot 2013-09-05 at 20.38.11.png" src="/images/allbsuploads/2013/09/Screen-Shot-2013-09-05-at-20.38.11.png" alt="Screen Shot 2013 09 05 at 20 38 11" width="480" height="262" border="0" /></a>

I&#8217;ll admit that for parts of the solution I used Sublime Text 2&#8217;s powerful operators, but I&#8217;m pretty sure that next time it&#8217;ll be even quicker if I figured out the append/prepend commands.

So, here are the steps in the problem, and the command I used to solve it (I&#8217;d happily learn of improvements if anyone has tips to share):

1) parsing a large manifest file

2) extracting the relevant subset of the contents

> >>$ grep &#8220;key=value&#8221; myfile.txt > criteria1_output.txt

3) extracting a specific subpart of that information (that was within double quotes)

> >>$ cat criteria1_output.txt | cut -d'&#8221;&#8216; -f4 > outputIDs.txt

4) reconstructing that data into a full URL

I used ST2 amazing multi-caret control, simultaneously editing a 150,000 line file!! (it was a little slow)

5) downloading a local copy of each remote file from the formed URL

> >>$ cat outputIDs.txt | xargs -n1 curl -O

6) analyse each file for a given criteria

7) output the list of matching files into a flat file

[6 & 7 combined]

>   >>$ find . -size +5M > OUTPUT.txt

8) use that file&#8217;s contents to generate the src for the img elements in an html file.

I again used ST2&#8217;s amazing multi-caret control, this time editing far fewer lines, instantaneously

I had to utilise multiple terminals running multiple cURLs for quite some time to do all of the downloads (apparently no multi-connections in cURL), but otherwise, my actual hands-on time was probably only 30 minutes, with the majority of that Googling for the necessary commands.

&nbsp;

<img style="display: block; margin-left: auto; margin-right: auto; border: 0px;" title="Screen Shot 2013-09-05 at 08.46.21.png" src="/images/allbsuploads/2013/09/Screen-Shot-2013-09-05-at-08.46.21.png" alt="Screen Shot 2013 09 05 at 08 46 21" width="480" height="282" border="0" />

&nbsp;

&nbsp;

&nbsp;
