let prom = new Promise ((resolve, reject)=>
{
    resolve("Successfully done "),
    reject("Error generated ... ")
})

prom.then(data=>console.log("In Then " + data )).catch( e=>console.log("In Catch " + e));

//to run >> node promiseDemo.js