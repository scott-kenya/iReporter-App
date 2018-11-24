document.getElementById('button').addEventListener("click", function() {
	document.querySelector('.card-container').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});