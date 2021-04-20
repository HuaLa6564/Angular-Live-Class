import {Observable} from 'rxjs';

let observable= Observable.create((sub)=>{
    sub.next("first");
    sub.next("second");
    sub.error("Error generated");
    sub.next("third");
    sub.next("forth");
    sub.complete("done");


});

observable.subscribe(data=>console.log(data),
                    error=>console.log(error), 
                    ()=>console.log("completed"))

// run >>node -r esm demo2.js