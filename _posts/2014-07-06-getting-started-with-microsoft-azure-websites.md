---
title: 'Azure Like It : Getting started with Microsoft Azure Websites'
date: 2014-07-06 13:35:16 Z
permalink: "/2014/07/06/getting-started-with-microsoft-azure-websites/"
categories:
- HEADER
- services
- WebDev
- Workflow
- feature
layout: single
author_profile: true
type: pages
post_image:
- "/images/allbsuploads/2014/07/Screenshot-2014-07-06-14.59.34.png"
---

A current pet project runs on IIS, and having found too many restrictions with the IIS instance on my shared hosting accounts I needed to look for alternatives. Digital Ocean and Linode are great reasonably priced VPS services, but Linux only, and this project doesn’t yet warrant the cost of getting a dedicated box somewhere. My familiarity with Amazon Web Services meant that I have quickly been able to setup Amazon Web Services stack utilising Windows Server EC2 instances, Elastic Load Balancing, Auto Scaling, and Cloudfront…. the biggest downside to this approach is the ongoing management and maintenance of the Windows Updates that the VM’s will need, so I’ll probably loop back at some point to try out IIS on AWS Beanstalk. [update: feedback from some friends is that Beanstalk doesn&#8217;t automagically update the OS/IIS ]

I’ve had a few little looks at the Microsoft Azure offering, but have found the information on the Azure site difficult to navigate, however this felt like it should be the perfect opportunity to get to know Microsoft Azure better.

As I mentioned, the Azure Website is unfortunately the first barrier to entry… it’s very nice looking, but initially I struggled to easily find the information I was looking for:

<div>
</div>

On the services list, what do they mean by a ‘Website’?

Do I want a ‘website’ or a VM?

Does a ‘Website’ give me full IIS control, and if so what version?

Is there a free tier for a year (like with AWS) or developer environments &#8211; how much can I explore the offering before the cost becomes noticeable.

(Perhaps Microsoft should consider an “Introduction to Azure for AWS users…”)

<div>
  <p>
    My ideal would be more of maintained IIS in a PaaS fashion, rather than a VM running a full OS that I have to maintain and update…. I hoped this was what ‘Azure Websites’ was about, and I’m glad to have fond the following confirmation: <a href="https://azure.microsoft.com/en-us/services/web-sites/">https://azure.microsoft.com/en-us/services/web-sites/</a>
  </p>
</div>

<div>
  &#8220;Run your Web apps in a high-availability environment with <strong><span style="text-decoration: underline;">automatic patching</span></strong>. Web apps deployed with Azure Web Sites are isolated and are hosted in VMs dedicated to your applications – ensuring predictable performance and security isolation. <strong><span style="text-decoration: underline;">Built-in OS and web-server patch management performed automatically with zero downtime.</span>&#8220;</strong></p>

  <div>
  </div>
</div>

<div>
  So &#8211; let’s get stuck in:
</div>

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screenshot 2014-07-05 10.34.08.png" src="/images/allbsuploads/2014/07/Screenshot-2014-07-05-10.34.08.png" alt="Screenshot 2014 07 05 10 34 08" width="494" height="263" border="0" />

<div>
</div>

<div>
</div>

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screenshot 2014-07-05 10.44.50.png" src="/images/allbsuploads/2014/07/Screenshot-2014-07-05-10.44.50.png" alt="Screenshot 2014 07 05 10 44 50" width="489" height="295" border="0" />

<div>
</div>

<div>
   and a free 30 day trial (though I really do value the 1 year free tier you get with AWS)
</div>

<div>
</div>

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screenshot 2014-07-05 10.50.00.png" src="/images/allbsuploads/2014/07/Screenshot-2014-07-05-10.50.00.png" alt="Screenshot 2014 07 05 10 50 00" width="465" height="62" border="0" />

<div>
</div>

<div>
</div>

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screenshot 2014-07-05 10.50.44.png" src="/images/allbsuploads/2014/07/Screenshot-2014-07-05-10.50.44.png" alt="Screenshot 2014 07 05 10 50 44" width="481" height="270" border="0" />

<div>
</div>

<div>
    Initial confusing layout:
</div>

<div>
</div>

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screenshot 2014-07-05 10.51.26.png" src="/images/allbsuploads/2014/07/Screenshot-2014-07-05-10.51.26.png" alt="Screenshot 2014 07 05 10 51 26" width="473" height="193" border="0" />

<div>
</div>

<div>
  <div>
    But gave some guidance in suggesting a refresh:
  </div>

  <div>
  </div>

  <p>
    <img style="display: block; margin-left: auto; margin-right: auto;" title="Screenshot 2014-07-05 10.51.38.png" src="/images/allbsuploads/2014/07/Screenshot-2014-07-05-10.51.38.png" alt="Screenshot 2014 07 05 10 51 38" width="467" height="63" border="0" />
  </p>

  <div>
  </div>
</div>

<div>
  <div>
    It’s a good looking interface, though for the unfamiliar, not an entirely intuitive set of choices:
  </div>
</div>

<div>
</div>

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screenshot 2014-07-05 10.51.55.png" src="/images/allbsuploads/2014/07/Screenshot-2014-07-05-10.51.55.png" alt="Screenshot 2014 07 05 10 51 55" width="480" height="299" border="0" />

<div>
</div>

<div>
  Let’s fire up a New &#8216;Web Site’:
</div>

<div>
</div>

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screenshot 2014-07-05 10.53.43.png" src="/images/allbsuploads/2014/07/Screenshot-2014-07-05-10.53.43.png" alt="Screenshot 2014 07 05 10 53 43" width="475" height="240" border="0" />

<div>
</div>

<div>
  Within a few minutes it’s looking good:
</div>

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screenshot 2014-07-05 10.53.53.png" src="/images/allbsuploads/2014/07/Screenshot-2014-07-05-10.53.53.png" alt="Screenshot 2014 07 05 10 53 53" width="457" height="103" border="0" />

<div>
</div>

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screenshot 2014-07-05 10.54.22.png" src="/images/allbsuploads/2014/07/Screenshot-2014-07-05-10.54.22.png" alt="Screenshot 2014 07 05 10 54 22" width="470" height="296" border="0" />

<div>
</div>

<div>
  <span style="font-size: 13px;">mysite.azurewebsites.net is now public:</span>
</div>

<div>
  <span style="font-size: 13px;"> </span>
</div>

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screenshot 2014-07-05 10.55.24.png" src="/images/allbsuploads/2014/07/Screenshot-2014-07-05-10.55.24.png" alt="Screenshot 2014 07 05 10 55 24" width="459" height="295" border="0" />

<div>
  <span style="font-size: 13px;"> </span>
</div>

<div>
  Some nice clear options for configuring my WebSite:
</div>

<div>
</div>

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screenshot 2014-07-05 10.57.36.png" src="/images/allbsuploads/2014/07/Screenshot-2014-07-05-10.57.36.png" alt="Screenshot 2014 07 05 10 57 36" width="452" height="310" border="0" />

<div>
</div>

<span style="font-family: Arial;">Next step was to get some of my project tests files on to the instance. I’ll consider a Visual Studio based deployment workflow, but for now using FTP, so needing to: ‘Setup Deployment Credentials’</span>

<p style="font-family: Arial;">
  &#8220;Git and FTP cannot use your Windows account to authenticate, so this dialog lets you specify a user name and password that can be used when using those technologies.”
</p>

<div style="font-family: Arial;">
</div>

<p style="font-family: Arial;">
  The interface displays details of the instances FTP and SFTP, but this bit puzzled me for a little while as I was getting errors trying to connect using Filezilla.
</p>

<div style="font-family: Arial;">
</div>

<p style="font-family: Arial;">
  The solution was to &#8216;Download the publishing profile’, and to extract the details from there, the password appears to be a more complex and secure derivative, rather than the password I keyed in.
</p>

<div style="font-family: Arial;">
</div>

<p style="font-family: Arial;">
  Files uploaded, and initial tests all looking good.
</p>

<p style="font-family: Arial;">
  I’ll need to upgrade the instance to a basic or standard one in order to be able to enable auto-scaling, but for now, I’m going to point an AWS Cloudfront distribution at the Azure instance, and then CNAME that distribution to a subdomain on my project. (I’ll explore the Azure CDN offering at a later date.)
</p>

<div style="font-family: Arial;">
</div>

<div style="font-family: Arial;">
</div>

<p style="font-family: Arial;">
  A few things to note about the ‘free’ tier:
</p>

<p style="font-family: Arial;">
  * it does not support a custom domain &#8211; but appears to fine be doing this via a CNAME Cloudfront distro.
</p>

<span style="font-size: 13px;">** &#8220;Free and Shared (Preview) tiers include<span style="text-decoration: underline;"><strong> 60 minutes and 240 minutes of CPU capacity per day</strong></span>, respectively.&#8221;  (</span><http://azure.microsoft.com/en-us/pricing/details/web-sites/>). So I’ll have to be somewhat ‘measured’ about how I utilise the instance while on a Free or Shared Tier, which isn’t exactly helpful for the project development phase, where I’m likely to have some variability in the times when I am working on this pet project.
