const fetch = require('node-fetch');
const mahasiswaNim = '2022004123';

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`,{
    method : 'DELETE',
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('error :', error));