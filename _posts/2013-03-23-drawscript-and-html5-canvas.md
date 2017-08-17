---
title: Drawscript and HTML5 Canvas
date: 2013-03-23 15:52:23 Z
permalink: "/2013/03/23/drawscript-and-html5-canvas/"
categories:
- general
layout: single
author_profile: true
type: pages
post_image: "/images/allbsuploads/2013/03/Screen-Shot-2013-03-23-at-15.47.54.png"
---

Drawscript is a very interesting Adobe Illustrator extension (currently in beta) which converts vectors into graphics code. This can then be used to make UI elements on iOS or via javascript to use with HTML5 canvas.

Simply download the .zxp from <a title="http://drawscri.pt/" href="http://drawscri.pt/" target="_blank">http://drawscri.pt/</a> and use the Adobe Extension Manager to add and enable it for Adobe Illustrator, and you are away.

Draw a shape, and hey presto, you get the output automatically created.

<p style="text-align: center;">
  <img class="aligncenter  wp-image-1188" src="/images/allbsuploads/2013/03/Screen-Shot-2013-03-23-at-15.38.45-1024x658.png" alt="Screen Shot 2013-03-23 at 15.38.45" width="430" height="277" srcset="/images/allbsuploads/2013/03/Screen-Shot-2013-03-23-at-15.38.45-1024x658.png 1024w, /images/allbsuploads/2013/03/Screen-Shot-2013-03-23-at-15.38.45.png 1113w" sizes="(max-width: 430px) 100vw, 430px" />
</p>

I set it to be &#8216;javascript canvas&#8217; and input the generated code in to a very simple page to place it into a <canvas>

<pre>&lt;canvas id="drawscript" width="750" height="750"&gt;&lt;/canvas&gt;</pre>

<pre>&lt;script type="text/javascript"&gt;
function draw() {</pre>

<pre>var canvas = document.getElementById('drawscript');
 var ctx = canvas.getContext('2d');</pre>

<pre>// generated code goes here</pre>

<pre>&lt;/script&gt;</pre>

See the following live page for an example output:

## <span style="color: #800000;"><a title="http://allbs.co.uk/code/drawscript/drawscript5.html" href="/code/drawscript/drawscript5.html" target="_blank"><span style="color: #800000;">http://allbs.co.uk/code/drawscript/drawscript5.html</span></a></span>

(there is no error handling or fallback code &#8211; if don&#8217;t see anything, your browser may not support HTML5 canvas, or I&#8217;ve probably made a mistake &#8211; but it worked for me in Chrome, FF, Safari&#8230;)

<img class="aligncenter size-full wp-image-1189" src="/images/allbsuploads/2013/03/Screen-Shot-2013-03-23-at-15.29.23.png" alt="Screen Shot 2013-03-23 at 15.29.23" width="489" height="441" srcset="/images/allbsuploads/2013/03/Screen-Shot-2013-03-23-at-15.29.23-300x270.png 300w, /images/allbsuploads/2013/03/Screen-Shot-2013-03-23-at-15.29.23.png 489w" sizes="(max-width: 489px) 100vw, 489px" />

The comments on this blog are 99.9% spam so I rarely check them &#8211; but I regularly check twitter: @bseymour

&nbsp;

&nbsp;
