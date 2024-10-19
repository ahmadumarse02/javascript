//crete the promise
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    {
      console.log("Task is completed");
      resolve();
    }
  }, 1000);
});

promiseOne.then(() => {
  console.log("promise consumed");
});

// second method we create the promise

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task is completed");
    resolve();
  }, 2000);
}).then(() => {
  console.log("Tasks is resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    {
      resolve({ username: "Ahmad Umar", email: "ahmadumarse02@gmail.com" });
    }
  }, 3000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Ahmad Umar", email: "ahmadumarse02@gmail.com" });
    } else {
      reject("Error: Something is wrong");
    }
  }, 4000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
    return data.username
})
.catch((error) => {
    console.log(error)
})