const palindrome = (string) => {
	if(string.length < 1){
		console.log('input tidak boleh kosong')
		return false
	}

	const strNormal = string.split("")
	const strBalik = strNormal.reverse()
	const result = strBalik.join("")

	if(result == string){
		console.log('palindrome')
	}else{
		console.log('bukan palindrome')
	}
}

palindrome('kasur')