const palindrome = (string) => {
	const regex = new RegExp("^[a-zA-Z][a-zA-Z ]+$");
	if (string.trim().length > 1 || regex.test(string)) {
		const stringToLowwer = string.toLowerCase();
		const result = stringToLowwer.split("").reverse().join("");
		if (result == stringToLowwer) {
			console.log("palindrome");
		} else {
			console.log("bukan palindrome");
		}
	} else {
		console.log("input tidak sesuai");
		return false;
	}
};

palindrome("MalAm Malam");
