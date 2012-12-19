function showInfos(){
	var supp=document.getElementById('supp');
	supp.className = (supp.className == 'on') ? '' : 'on';
	return false;
}

function validstep(){
	var done=document.getElementById('etape2done');
	done.className = (done.className == 'on') ? '' : 'on';
	return false;
}