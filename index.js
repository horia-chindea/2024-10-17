// JS Promisiuni (Promise) 
function executor(resolve,reject){
    setTimeout(() => {
        const isRejected = false;
        if(isRejected){
            reject('rejected');
        } else {
            resolve('resolved');
        }
    },5000);
}
const promise = new Promise(executor);
promise
    .then((value) => console.log('fulfiled with value: ',value))
    .catch((reason) => console.log('fulfiled with value: ',reason))
    .finally(() => console.log('finally executed'));
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);

// async/await
async function getUserInfo() {
        res=0;
        for(let i=0; i< 1000; i++){
            for(let j=0;j<1000;j++){
                res += i+j;
            }
        }
        console.log({email: 'test@test.com'});
}
getUserInfo();
console.log('operations after calling async function.');

async function main() {
    console.log("operations before calling async function");
    await getUserInfo();
    console.log("operations after calling async function");
}
main();

// fetch
const baseUrl = "https://jsonplaceholder.typicode.com/";
const postsEndpoint = "/posts";

const postsUrl = baseUrl+postsEndpoint;
fetch(postsUrl)
.then(response => response.json)
.then(data => console.log(data))
.catch(reason => console.log("error when feching data: ",reason))
.finally((console.log("done processing request")));

async function preocessPosts() {
    const response = await fetch(postsUrl);
    const data = await response.json();
    console.log("data in async await: ",data);
    const postsContainer = document.querySelector('main');
    for(const post of data){
        const postContainer = document.createElement('article');
        postContainer.innerHTML = `<h3>${post.title}</h3> <p>${post.body}</p>`;
        postsContainer.appendChild(postContainer);
    }
}
preocessPosts();