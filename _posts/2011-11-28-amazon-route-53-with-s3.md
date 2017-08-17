---
title: Amazon Route 53 with S3/Cloudfront
date: 2011-11-28 23:44:53 Z
permalink: "/2011/11/28/amazon-route-53-with-s3/"
categories:
- AWS
layout: single
author_profile: true
type: pages
---

I&#8217;d been meaning to investigate Amazon Route 53 for a few months, but the addition of Route 53 support to the AWS Console (hopefully) just makes this even simpler.

Amazon Route 53 allows you to create and manage your public DNS records, however Amazon does not act as a domain registrar, so you need to use your usual provider for that.

Remember it typically takes 2 to 48 hours for the DNS updates to propagate across the internet &#8211; after a few hours I started wondering if I&#8217;d made a mistake somewhere, but patience prevailed, after around 6 hours I was starting to see the expected results.

In order to map the Route 53 controlled domain to an AWS S3 bucket (or in my case a Cloudfront distribution) you need create a CNAME record in AWS Route 53 console for your domain and the S3 bucket/CloudFront distribution.

Note: you also need Amazon CloudFront distribution (or S3 bucket) with the CNAME entry to complete the alias between your domain name and the bucket/distribution. (I used Cloudberry S3 Pro for this)

* I mistakenly included the &#8216;http://&#8217; in my CNAME reference the first time.

pricing: $0.50 per month per hosted, and $0.50 per million queries

All in all it was pretty straight forward to set up, and now that the Name Server change has been completed by my domain registrar, I look forward to seeing what sort of performance I get out of future Route 53 updates.
