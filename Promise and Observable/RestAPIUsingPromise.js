fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>console.log(data)).catch();

// got to https://jsonplaceholder.typicode.com/
//to run check index.html , file included there 
// go to browser then inspect , "console" tab
// install rxjs by >> npm install rxjs