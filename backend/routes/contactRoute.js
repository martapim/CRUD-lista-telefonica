const express = require("express");
const router = express.Router();
const Contact = require("../models/contactModel");

//rota para recuperar todos os registros
router.get('/', async (req,res) =>{
    try{
       const contact = await Contact.find({});
       res.json({error: false, contact: contact });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
  });

//rota para recuperar um registro
router.get('/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const contact = await Contact.findById(id);
        res.json({ error: false, contact });
    } catch(err) {
        res.json({ error: true, message: err.message });
    } 
  });

//rota para criar um registro
router.post('/', async (req,res) => {
    try {
     const contact = req.body;
     const response = await new Contact(contact).save();
      res.json({error: false, contact: response });
    } catch(err) {
        res.json({ error: true, message: err.message });
    }
  });

//rota para atualizar registro
router.put('/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const novo_contact = req.body;
        const contact = await Contact.findByIdAndUpdate(id, novo_contact);
        res.json({ error: false, contact});
    } catch(err){
        res.json({ error: true, message: err.message });
    }    
  });

//rota para deletar registro
router.delete('/:id', async (req,res) => {
    try{
        const id = req.params.id;
        await Contact.findByIdAndDelete(id);
        res.json({ error: false  });
    } catch(err){
        res.json({ error: true, message: err.message });
    }     
 });

module.exports = router;