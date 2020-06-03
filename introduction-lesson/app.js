const identify = require('./src/identity')
const {usernameValidate, passwordValidate} = require('./src/validate')


console.log(identify)
console.log(usernameValidate("1234!"))
console.log(passwordValidate("123456789"))