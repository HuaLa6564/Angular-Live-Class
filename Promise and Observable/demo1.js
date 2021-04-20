import {of} from 'rxjs';

let observable = of("Welcome");

let sub = observable.subscribe(
    data=>console.log(data),
    error=>console(error),
    ()=>console.log("completed"));

    //to run this we have to install esm module which help run import concept js
    //>> npm install esm
    //> node -r esm demo1.js