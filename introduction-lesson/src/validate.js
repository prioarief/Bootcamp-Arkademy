module.exports = {
	usernameValidate: (username) => /[a-zA-Z0-9]{5,}$/.test(username),
	passwordValidate: (password) => /^[a-zA-Z0-9!@#$%^&*()_+]{8}$/.test(password),
};
