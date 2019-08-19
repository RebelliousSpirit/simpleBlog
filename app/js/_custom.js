document.addEventListener("DOMContentLoaded", function() {

	// date output in the site footer
	let date = new Date();
	let currentYear = date.getFullYear();
	let footerDate = document.querySelector('.footer__date');
	
	footerDate.innerHTML = currentYear;

});
