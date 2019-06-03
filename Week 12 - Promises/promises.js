// Before Promises
function callBack(result) {
  console.log('First function');
}

function callBackError(error) {
  console.log('There was an error: ' + error);
}

callBack(callBackError());

//Callback Pyramid of Doom!!!!!!!!
callBack(function(result) {
  callBackTwo(function(newResult) {
    callBackThree(function(finalResult){
      console.log('Got the final result: ' + finalResult);
    }, callBackError);
  }, callBackError);
}, callBackError);

//Promise example
 const promise = new Promise(function(resolve, reject) {
   setTimeout(function() {
     resolve('This took 3 seconds to resolve!');
   }, 3000)
 });

 promise.then(function(value) {
   console.log(value);
 });

//Chaining Promises
 promise.then(function(value) {
   console.log('One');
 }).then(function() {
   console.log('Two');
   console.error('There was an error in stage two')
 }).then(function() {
   console.log('Three');
 }).catch(function(error) {
   console.error('There was an error: ' + error)
 })

//Fetch example
const data = fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) =>response.json())
  .then((response) =>console.log(response))
  .catch((error) => console.error(`There was an error: ${error}`));

//Try...catch  - async/await
let resultsList = document.querySelector('.results-list');
const getInfo = async () => {
  let html = null;
  try {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const dataJSON = await data.json();
    console.log(dataJSON);

    html = dataJSON.map((item) => {
      li>item.title</li>`
      return resultsList = html;
    })

  } catch (error) {
    console.error(`There was an error fecthing data from the endpoint: ${error}`);
  }
}

getInfo();