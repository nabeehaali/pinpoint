let count = 0;
function checkInput() {
	const input = document.getElementById("user-input").value;
	const correctCode = "Demand on Third Party (DTP) sources";

	const panel1 = document.getElementById("panel-1");
	const panel2 = document.getElementById("panel-2");
	const panel3 = document.getElementById("panel-3");
	const panel4 = document.getElementById("panel-4");
	const panel5 = document.getElementById("panel-5");
	const panel6 = document.getElementById("panel-6");
	


	if(input == correctCode) {
		panel6.textContent = "You win!";
		panel6.style.backgroundColor = "#4CAF50";
	}
	else {
		count = count + 1;
		console.log(count);
		switch(count) {
			case 1:
				panel2.textContent = "Rental income";
				break;
			case 2:
				panel3.textContent = "Bonuses";
				break;
			case 3:
				panel4.textContent = "Commissions";
				break;
			case 4:
				panel5.textContent = "Bank accounts";
				break;
			default:
				panel6.textContent = "You lose!";
				panel6.style.backgroundColor = "#FF0000";
		}
	}
	document.getElementById("user-input").value ='';
}