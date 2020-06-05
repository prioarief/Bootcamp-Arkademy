const reverse = (str) => {
    if(str.length < 1){
		console.log('input tidak boleh kosong')
		return false
	}

	const strPisah = str.split(" ")
	const strBalik = strPisah.reverse()
	const result = strBalik.join(" ")

	console.log(result)
}

reverse("Saya Belajar Javascript")