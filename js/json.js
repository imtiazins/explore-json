const user = { roll:19098, name: 'Nadia Kaucher Suchana', job: 'Student'};

const stringify = JSON.stringify(user);
console.log(user);
console.log(stringify);


const shop = {
    owner :'Taspiya ',
    address : {
        street:'Meradia',
        city: 'Dhaka',
        Country:'Bangladesh'
    },
    products: ['Laptop','Monitor','Keyboard'],
    revenue : 3435345,
    isOpen: true,
    isNew:false
}
console.log(shop);

const shopJson = JSON.stringify(shop);
console.log(shopJson);

const jsonParse = JSON.parse(shopJson);
console.log(jsonParse);