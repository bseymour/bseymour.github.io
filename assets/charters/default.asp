<HTML>
<HEAD>
   <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso-8859-1">
   <META NAME="Author" CONTENT="Ben Seymour">
   <META NAME="GENERATOR" CONTENT="Mozilla/4.04 [en] (Win95; I) [Netscape]">
   <TITLE>Charters School</TITLE>

<SCRIPT>

<!-- Hiding
      function myscroll(seed)

      {
        var m1 = "Welcome to ";
        var m2 = "Charters School ";       
        var m3 = "Web Site ";

        var msg = m1+m2+m3;
        var out = " ";
        var c   = 1;

        if (seed > 100) {
             seed--;
             var cmd="myscroll(" + seed + ")";
             timerTwo=window.setTimeout(cmd,100);
        }

        else if (seed <= 100 && seed > 0) {
                 for (c=0;c<seed;c++) {
                       out += " ";

                 }
                 out += msg;
                 seed--;
                 var cmd = "myscroll(" + seed + ")";
                 window.status=out;
                 timerTwo = window.setTimeout(cmd,100);
        }

        else if (seed <=0) {
                 if (-seed < msg.length) {
                        out += msg.substring(-seed, msg.length);
                        seed--;
                        var cmd = "myscroll(" + seed + ")";
                        window.status=out;
                        timerTwo = window.setTimeout(cmd,100);
                 }

                 else {
                        window.status=" ";
                        timerTwo = window.setTimeout("myscroll(100)",75);
                 }
       }
      } 
// -->
</SCRIPT>


</HEAD>

<BODY onLoad="timerONE=window.setTimeout('myscroll(100)',500);"  TEXT="#000000" BGCOLOR="white" LINK="#0000EE" VLINK="#551A8B" ALINK="#FF0000">

<CENTER><IMG SRC="chbanner6small.JPG" ></CENTER>


<center>
  <A HREF="default.htm" onMouseOver="img5.src='searchweb2.gif' " onMouseOut="img5.src='searchweb1.gif'"
    onClick="window.open('frontlinks/searchpage.html','searchpage',config='height=450,width=600,toolbar=yes,menubar=no,scrollbars=yes,resizable=yes')">
  <IMG NAME="img5"  border=0 SRC="searchweb1.gif" onLoad="tempImg=new Image(0,0); tempImg.src='searchweb2.gif'"></a> 
  
  <IMG SRC="crestwhite.JPG" HEIGHT=250 WIDTH=185 border=0 ALIGN=ABSCENTER>

  <A HREF="default.htm" onMouseOver="img4.src='contactus2.gif' " onMouseOut="img4.src='contactus1.gif'"
    onClick="window.open('frontlinks/contactus.html', 'contactus',config='height=450,width=320')">
  <IMG NAME="img4"  border=0 SRC="contactus1.gif" onLoad="tempImg=new Image(0,0); tempImg.src='contactus2.gif'"></a> 

</center>

<center>
 <A HREF="pupil/pupilframestart.html" onMouseOver="img1.src='pupbute2.gif' " onMouseOut="img1.src='pupbute1.gif' ">
 <IMG NAME="img1"  border=0 SRC="pupbute1.gif" onLoad="tempImg=new Image(0,0); tempImg.src='pupbute2.gif'"></a>

 <A HREF="visitor/visitorframestart.html" onMouseOver="img2.src='visbute2.gif' " onMouseOut="img2.src='visbute1.gif' ">
 <IMG NAME="img2"  border=0 SRC="visbute1.gif" onLoad="tempImg=new Image(0,0); tempImg.src='visbute2.gif'"></a>

 <A HREF="staff/staffframestart.html" onMouseOver="img3.src='stabute2.gif' " onMouseOut="img3.src='stabute1.gif' ">
 <IMG NAME="img3"  border=0 SRC="stabute1.gif" onLoad="tempImg=new Image(0,0); tempImg.src='stabute2.gif'"></a>
</center> 


<%
	Application("HitCount") = Application("HitCount") + 1
	Response.Write Application("HitCount")
%>


</BODY>
</HTML>