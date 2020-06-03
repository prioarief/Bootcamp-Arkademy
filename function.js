function sum(param1, param2) {
    console.log(param1 + param2)
}

const sumArrow = (param1, param2) => {
    console.log(param1, param2)
}

const profile = {
    name : 'John',
    age : 10,
    sumAge : function (param1){
        console.log(this.age + param1)
    }
}

profile.sumAge(10)

// arrow function tidak bisa memakai this