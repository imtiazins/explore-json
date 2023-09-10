// console.log('index added');
function loadUsers2(){
    // console.log('btn-handeler');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data =>displayUser2(data));
}

function displayUser2(data){
    // console.log(data);
   const ol = document.getElementById('users-list');
   for(const user of data){
    console.log(user.name);
    const li=document.createElement('li');
    li.innerText=user.name
    ol.appendChild(li);

   }
}