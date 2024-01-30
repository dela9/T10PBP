const fetch = require('node-fetch');
const mahasiswaNim = '2022004004';
const updatedData ={
    nama: 'aim',
    gender: 'L',
    prodi: 'TI',
    alamat: 'Kota Bandung'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`,{
    method : 'PUT',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('error :', error));