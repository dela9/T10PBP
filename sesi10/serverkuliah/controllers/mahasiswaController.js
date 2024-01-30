const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.get('/',(req, res)=>{
    db.query('select * from mahasiswa', (error, result)=>{
        if (error){
            console.error('error fetching mahasiswa :',error);
            res.status(500).json({message: 'internal server eror'});
        }else{
            res.json(result);
        }
    });
});

router.get('/:nim',(req, res)=>{
    const mahasiswaId = req.params.nim;
    db.query('select * from mahasiswa where nim = ?', [mahasiswaId], (error, result)=>{
        if (error){
            console.error('error fetching mahasiswa :',error);
            res.status(500).json({message: 'internal server eror'});
        }else if (result.length === 0 ) {
            res.status(404).json({message: 'mahasiswa not found'});
        }else{
            res.json(result[0]);
        }
    });
});
router.put('/:nim',(req, res)=>{
    const mahasiswaNim = req.params.nim;
    const {nama, gender, prodi, alamat} = req.body;

    db.query('update mahasiswa set nama = ?, gender = ?, prodi = ?, alamat = ? where nim = ?', [nama, gender, prodi, alamat, mahasiswaNim], (error) => {
        if (error){
            console.error(`eror updapting mahasiswa :`, error);
            res.status(500).json({ message: 'internal server eror'});
        }else{
            res.json(`updating mahasiswa sukses`);
        }
    }); 
});

// Metode POST
router.post('/',(req, res)=>{
    const {nim, nama, gender, prodi, alamat} = req.body;
 
    db.query('insert into mahasiswa (nim, nama, gender, prodi, alamat) values (?, ?, ?, ?, ?)', [nim, nama, gender, prodi, alamat], (error) => {
        if (error){
            console.error(`eror inserting mahasiswa :`, error);
            res.status(500).json({ message: 'internal server eror'});
        }else{
            res.json(`inserting mahasiswa dengan nim ${nim} sukses`);
        }
    }); 
 });
 
 // Metode DELETE
 router.delete('/:nim',(req, res)=>{
    const mahasiswaNim = req.params.nim;
 
    db.query('delete from mahasiswa where nim = ?', [mahasiswaNim], (error) => {
        if (error){
            console.error(`eror deleting mahasiswa :`, error);
            res.status(500).json({ message: 'internal server eror'});
        }else{
            res.json(`deleting mahasiswa dengan nim ${mahasiswaNim} sukses`);
        }
    }); 
 });
 

module.exports = router;