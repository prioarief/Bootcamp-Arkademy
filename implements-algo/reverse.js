const reverse = (str) => {
	const regex = new RegExp("^[a-zA-Z][a-zA-Z ]+$");
	if (str.trim().length > 1 || regex.test(str)) {
		const result = str.split(" ").reverse().join(" ");
		console.log(result);
	} else {
		console.log("input tidak sesuai");
		return false;
	}
};

reverse("Saya Belajar Javascript");