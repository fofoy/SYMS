function showInfosListe(){
	var suppListe=document.getElementById('supp');
	suppListe.className = (suppListe.className == 'on') ? '' : 'on';
	return false;
}

function showInfosBudget(){
	var suppBudget=document.getElementById('infosSup');
	suppBudget.className = (suppBudget.className == 'on') ? '' : 'on';
	return false;
}