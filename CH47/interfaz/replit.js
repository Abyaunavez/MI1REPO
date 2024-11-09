
const failed = true;

const myPromise = new Promise((resolve, reject) => { 
    if(failed)
        reject('promesa fallida');
    else
        resolve('¡promesa resuelta amigo!')
});

function success(result){
  console.log(result);
}

function onFailed(error){
  console.log(error);
}

myPromise.then((result) => success(result))
.catch((error) => onFailed(error));