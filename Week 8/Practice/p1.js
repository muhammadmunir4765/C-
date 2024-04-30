//Default + Rest + Spread:
// function greet(name = 'World', ...languages) {
//     console.log(`Hello, ${name}!`);
//     console.log('Languages:', ...languages);
// }


//Iterators & For…Of:
// const numbers = [1, 2, 3];
// for (const num of numbers) {
// console.log(num);
// }




//Set Timeout

// console.log('Starting setTimeout example...');
// setTimeout(() => {
// console.log('This message will be displayed after 2 seconds.');
// }, 2000); // 2000 milliseconds = 2 seconds
// console.log('setTimeout example scheduled.')



//Set Interval
// let count = 0;
// const intervalId = setInterval(() => {
// count++;
// console.log(`Interval count: ${count}`);
// if (count === 5) {
// clearInterval(intervalId); // Stop the interval after 5 iterations
// console.log('Interval stopped after 5 iterations.');
// }
// }, 1000); // 1000 milliseconds = 1 second
// console.log('setInterval example started.')


//Promises 
function getData() {
    return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    // Simulating successful completion
    //resolve(data);
    // Simulating failure
    //reject(new Error('Failed to fetch data'));
    reject("Reject message.");
    }, 2000); // Simulating a delay of 2 seconds
    });
    }
    // Consuming the Promise
    getData()
    .then(data => {
    console.log('Data received:', data);
    })
    .catch(error => {
    console.error('Error:', error.message);
    });


