let seconds = document.getElementById('seconds');
let minutes = document.getElementById('minutes');
document.body.style.backgroundColor = 'rgb(249, 249, 240)';
let nIntervId;
let min = 0;
let sec = 0;
// document.getElementById('minutes').innerHTML = 'hello';

function start_timer(){
	if(!nIntervId){
	nIntervId = setInterval(count,1000);
	}
}

function count(){
	if(sec < 9){
		sec = sec + 1;
		seconds.innerHTML = '0'+sec;
	}
	else{
		sec = sec + 1;
		seconds.innerHTML = sec;
	}
	
	
	
}

function reset_timer(){
	seconds.innerHTML = '00';
	minutes.innerHTML = '00';
	min = 0;
	sec = 0;
	clearInterval(nIntervId);
	nIntervId = null;
}


// mode functions

function mode_toggle() {
	let dark = document.getElementById('darkmode');
	let light = document.getElementById('lightmode');
	let mode = document.body.style.backgroundColor;
	if(mode == 'rgb(249, 249, 240)'){
		dark.style.visibility = 'hidden';
		light.style.visibility = 'visible';
		document.body.style.backgroundColor = '#212121';
		document.getElementById('header').style.color = '#c094f9';
		document.getElementById('subintro').style.color = '#7f63a5';
		document.getElementById('btn-get-started').style.backgroundColor = '#212121';
		document.getElementById('btn-get-started').style.borderColor = '#c094f9';
		document.getElementById('btn-get-started').style.color = '#c094f9';
		document.getElementById('light').style.visibility = 'hidden';
		document.getElementById('dark').style.visibility = 'visible';
	
	}
	else{
		dark.style.visibility = 'visible';
		light.style.visibility = 'hidden';
		document.body.style.backgroundColor = '#f9f9f0';
		document.getElementById('header').style.color = '#4e6464';
		document.getElementById('subintro').style.color = '#4e6464';
		document.getElementById('btn-get-started').style.backgroundColor = '#f9f9f0';
		document.getElementById('btn-get-started').style.borderColor = '#4e6464';
		document.getElementById('btn-get-started').style.color = '#4e6464';
		document.getElementById('light').style.visibility = 'visible';
		document.getElementById('dark').style.visibility = 'hidden';
	}
}