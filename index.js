console.log("Working");

//Question1,Question7

function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}


function callMe() {
    console.log('hello Everyone');//Calling Function
}


greet('Peter', callMe);// passing function as an argument

//Question2;


function numberCALL(n) {
    for (let i = 1; i <=7; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * n);
    }
};

numberCALL(1500);

//Question 4;
let countValue = new Promise(function (resolve, reject) {
    reject('value Getting'); 
 });
 
 countValue.then(
     function Value(result) {
         console.log(result);
     },
  )
 .catch(
     function zeroValue(result) {
         console.log(result);
     }
 );

//Question14;


/*let promise = new Promise(function (resolve, reject) { 
    setTimeout(function () {
    resolve('Promise resolved')}, 2000); //Pronise Function used
});


async function asyncFunc() { //Async function used 


    let result = await promise;// wait until the promise resolves 

    console.log(result);
    console.log('hello');
}


asyncFunc();//call Async function*/

//Question10;

/*const makeBurger = async () => {
    const beef = await getBeef();
    const cookedBeef = await cookBeef(beef);
    const buns = await getBuns();
    const burger = await putBeefBetweenBuns(cookedBeef, buns);
    return burger;
  };
  

  makeBurger().then(serve);*/

  //Question16;

 /* const Micro = new Promise((resolve, reject) => {
    const value = sum(5, 6);
    if (value === 10) resolve(value);
    else reject(value);
  });
  
  const allpromises = Promise.all([first, second, third, fourth, fifth]);
  allpromises.then(success => console.log('sucess: ', success)).catch(error => console.log('error: ', error));*/

  //question7;
let z=new Promise((resolve,reject)=>{
    const value = Number(1,7);
    if(value<=7) resolve(value);
    else reject(value);
});
var promise = Promise.all([1,2,3,4,5,6,7]);
promise.then(result=>console.log("Result1:" ,result)).catch(error=>console.log('error:',error));
