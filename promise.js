// setTimeout(() => {
//     console.log('Harusnya ini dulu')
// }, 200);
// console.log('Lah ko ini dulu')

const data = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("harusnya ini dulu");
	}, 2000);
	setTimeout(() => {
		reject("ke reject");
	}, 1000);
});

// data
// 	.then((val) => {
// 		console.log(val);
// 	})
// 	.catch((error) => {
// 		console.log(error);
//     });
    
 const asyncFunc = async() =>{
    try{
        const getData = await data
        console.log(getData)
        console.log('Sudah promise')
    }catch(error){
        console.log(error)
    }
 }

 asyncFunc()
