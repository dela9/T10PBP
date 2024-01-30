const fetch = require('node-fetch');
const postData ={
    nim : 2022004234,
    nama: 'adriq',
    gender: 'L',
    prodi: 'TI',
    alamat: 'Kota cisaat'
};

fetch(`http://localhost:3000/mahasiswa`,{
    method : 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        console.error('error :', error)});