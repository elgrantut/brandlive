document.getElementById('form').addEventListener('submit', validation);

function validation() {
	event.preventDefault();
	let email = document.forms['validate']['courriel'].value;
	let at = email.indexOf('@');
	let point = email.lastIndexOf('.');
	let non = document.getElementById('novalid');
	let oui = document.getElementById('valid');

	if (at < 1 || point < at + 2 || point + 2 >= email.length) {
		non.style.display = 'block';
		oui.style.display = 'none';
		return false;
	} else {
		oui.style.display = 'block';
		non.style.display = 'none';
		return false;
	}
}
