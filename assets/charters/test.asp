<HTML>

<HEAD></HEAD>

<BODY>
<%
	Response.Write "Hello ASP World"
	Response.Write Application("HitCount")
	Application("HitCount") = Application("HitCount") + 1
%>

</BODY>

</HTML>
