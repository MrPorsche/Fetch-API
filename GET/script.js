
let Name = document.querySelector(".name");
let Email = document.querySelector(".email");

let Facts = document.querySelector(".facts");

// GET request

/*
fetch("https://cat-fact.herokuapp.com/facts")
// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(res => res.json())
//     .then(data => {
//         Name.textContent = data.name;
//         Email.textContent = data.email;
//     })
    .then(res => res.json())
    .then(data => {
        data.forEach(fact => {
            let Fact = document.createElement("li");
            Fact.textContent = fact.text;
            Facts.appendChild(Fact);
        });
    })
*/
let URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async () => {
    console.log("fetching data...");
    let promise = await fetch(URL);
    let data = await promise.json();
    // data.forEach(fact => {
    //     let Fact = document.createElement("li");
    //     Fact.textContent = fact.text;
    //     Facts.appendChild(Fact);
    // });
    for (let i = 0; i < data.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 500)); // half second delayed
        let Fact = document.createElement("li");
        Fact.textContent = data[i].text;
        Facts.appendChild(Fact);
    }
};

// getFacts();

// Practice

let Names = document.querySelector(".names");
let Users = document.querySelector(".users");
let Emails = document.querySelector(".emails");
let Numbers = document.querySelector(".phones");
let Addresses = document.querySelector(".addresses");

let userURL = "https://jsonplaceholder.typicode.com/users";

const getUsers = async () => {
    console.log("getting users data...");
    let promise = await fetch(userURL);
    let data = await promise.json();

    for (let i = 0; i < data.length; i++) {
        await new Promise(res => setTimeout(res, 500));

        let Name = document.createElement("li");
        Name.textContent = data[i].name;
        let UserName = document.createElement("li");
        UserName.textContent = data[i].username;
        let Email = document.createElement("li");
        Email.textContent = data[i].email;
        let Number = document.createElement("li");
        Number.textContent = data[i].phone;
        let Address = document.createElement("li");
        Address.textContent = `${data[i].address.suite}, ${data[i].address.street}, ${data[i].address.city} - ${data[i].address.zipcode}`;

        Names.appendChild(Name);
        Users.appendChild(UserName);
        Emails.appendChild(Email);
        Numbers.appendChild(Number);
        Addresses.appendChild(Address);
    }
};

getUsers();

fetch(userURL)
    .then(res => res.json())
    .then(data => console.log(data))

// const getUsers = async () => {
//     console.log("getting users data...");
//     let promise = await fetch(userURL);
//     let data = await promise.json();

//     for (let i = 0; i < data.length; i++) {
//         await new Promise(res => setTimeout(res, 500));

//         let userItem = document.createElement("li");
//         userItem.textContent = `${data[i].name} - ${data[i].username}`;

//         Users.appendChild(userItem);
//     }
// };