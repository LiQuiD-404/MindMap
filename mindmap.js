const date = new Date();
const hours = date.getHours();
var greet = document.querySelector('.greet');
if(hours < 12 && hours >= 0){
    greet.innerHTML = "Good Morning, what would you like to do today?";
}
else if(hours >= 12){
    greet.innerHTML = "Good Evening, what would you like to do today?";
}

function mode_toggle() {
	let dark = document.getElementById('darkmode');
	let light = document.getElementById('lightmode');
	let mode = document.body.style.backgroundColor;
	if(mode == 'rgb(249, 249, 240)'){
		dark.style.visibility = 'hidden';
		light.style.visibility = 'visible';
		document.body.style.backgroundColor = '#212121';
		document.querySelector('.greet').style.color = '#c094f9';
		document.querySelector('.container').style.color = '#7f63a5';
		document.querySelector('.left-panel').style.borderColor = '#7f63a5';
		document.querySelector('.right-panel').style.borderColor = '#7f63a5';
		document.querySelector('.mid-panel').style.borderColor = '#7f63a5';
		document.getElementById('light').style.visibility = 'hidden';
		document.getElementById('dark').style.visibility = 'visible';
	
	}
	else{
		dark.style.visibility = 'visible';
		light.style.visibility = 'hidden';
		document.body.style.backgroundColor = '#f9f9f0';
		document.querySelector('.greet').style.color = '#4e6464';
		document.querySelector('.container').style.color = '#4e6464';
		document.querySelector('.left-panel').style.borderColor = '#4e6464';
		document.querySelector('.right-panel').style.borderColor = '#4e6464';
		document.querySelector('.mid-panel').style.borderColor = '#4e6464';
		document.getElementById('light').style.visibility = 'visible';
		document.getElementById('dark').style.visibility = 'hidden';
	}
}

function add_task(){
	let task = prompt("Enter the task to track");
	let parent = document.querySelector('.task');
	const div = document.createElement('div');
	div.innerHTML = task;
	div.classList.add('task-style');
	parent.appendChild(div);

}