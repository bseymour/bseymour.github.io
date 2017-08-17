---
title: 'ASP to PHP migration : PicasaWeb feed XSLT'
date: 2013-01-01 17:37:07 Z
permalink: "/2013/01/01/asp-php-migration/"
categories:
- general
- quicktip
layout: single
author_profile: true
type: pages
post_image:
- "/images/allbsuploads/2013/01/xslt.png"
---

I&#8217;ve been transferring most of my hosting away from 1&1 [<a title="1&1 : the savings come at too great a cost" href="/2012/03/27/1and1-savings-not-worth-the-cost/" target="_blank">previous blog article</a>] and as part of that I am also moving from ASP hosting services to PHP. I have been using XSLT to transform a feed from PicasaWeb to create a simple interface to browse our family photos, and so needed to convert these ASP pages to PHP (the XSL will initially remain the same, though I should also really update the design)

The minor changes needed were as follows:

Querystring params: $_GET[&#8216;field&#8217;] instead of request.querystring(&#8216;field&#8217;)

Concatenating Strings: use &#8216;.&#8217; instead of &#8216;+&#8217;

(PHP String Operators: <a title="PHP String Operators" href="http://php.net/manual/en/language.operators.string.php" target="_blank">http://php.net/manual/en/language.operators.string.php</a> )

&nbsp;

XLST  Transformation code now [PHP]:

$xslDoc = new DOMDocument();

$xslDoc->load(&#8220;file.xsl&#8221;);

$xmlDoc = new DOMDocument();

$xmlDoc->load(&#8220;source.xml&#8221;);

$proc = new XSLTProcessor();

$proc->importStylesheet($xslDoc);

echo $proc->transformToXML($xmlDoc);

&nbsp;

<span style="color: #808080;">XLST  Transformation code <span style="text-decoration: underline;">WAS</span> [ASP]:</span>

 <span style="color: #808080;">var mm_xsl = new MM_XSLTransform();</span>

 <span style="color: #808080;">mm_xsl.setXML(source.xml&#8221;);</span>

 <span style="color: #808080;">mm_xsl.setXSL(&#8220;file.xsl&#8221;);</span>

 <span style="color: #808080;">Response.write (mm_xsl.Transform());</span>

The temporary home of the migrated page is:<a title="Seymour Potential - PicasaWeb feed" href="/picasa/picasa.php" target="_blank"> http://allbs.co.uk/picasa/picasa.php</a>
