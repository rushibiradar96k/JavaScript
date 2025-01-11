// function hello(){
//     console.log("hey")
// }
// setTimeout( () =>{
//     console.log("hey" )
// }, 5000);

// var getPromice = () => {
//     return new promise((resolve, reject) =>
//         {
//         console.log("i am a promice");
//         resolve("fullfil");
//     });
// }

// let promise = getPromice();
// promise.then(() => {
//     console.log("promice fulfild");
// });
// var getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("fulfilled");

//         // reject("error")
//     });
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) =>{
//     console.log("reject", err)
// })

//  function asynfunction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data");
//             resolve("sucessful");
//     }, 4000);

// });
   
   
     
//     console.log("featching some data.....")
//     var p1 = asynfunction();
//     p1.then(res => {
//         console.log(res);
//     })
// }

    async function getdata()
    {
        await myfun();
    }

function myfun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data find sucessfully")
        }, 4000)
    })
}




