// Promises

const myPromise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            const data = "Promise Resolved"

            if(data){
                resolve(data);
            }else{
                reject("Error Occured..!")
            }
        }, 1000);
});


myPromise
    .then((result)=>{
        console.log(result);
    })