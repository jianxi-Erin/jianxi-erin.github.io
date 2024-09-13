function externallinks(){
	if(!document.getElementsByTagName)return;

	var anchors=
document.getElementsByTagName("a");
	for(var i=0;i<anchors.length;i++){
		var anchors=anchors[i];
		if(anchors.getAttribute("href")&&
	anchors.getAttribute("rel")=="external")
			anchors.target="_blank";
	}
}
window.onload=externallinks;