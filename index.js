let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?#%&=+*/-@_|<>';
let passwords = document.getElementById("passwords").children;
var passwordsEls = Array.from(passwords);

function getPasswordLength() {
	return document.getElementById("password-length").value;
}

function generatePasswords() {
	let passwordLength = getPasswordLength();
	let charactersLength = characters.length;
	for (const passwordsEl of passwordsEls) {
		let result = '';
		for (let i = 0; i < passwordLength; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		passwordsEl.value = result;
	}
}