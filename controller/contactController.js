const asyncHandler = require('express-async-handler'); // this is used to overcome to use try-catch block, it automatically handles error
const Contact = require('../models/contactModel')
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = asyncHandler( async (req,res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
})

//@desc create a contacts
//@route POST /api/contacts
//@access public
const createContact =  asyncHandler(async (req,res) => {
    const { name, phone, email } = req.body;
    if (!name || !phone || !email){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    console.log("New User created: " , req.body);
    const contacts = await Contact.create({
        name, email, phone,
        user_id : req.user.id
    });
    res.status(201).json(contacts);
})

//@desc update contacts
//@route PUT /api/contacts
//@access public
const updateContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
  
    if (contact.user_id.toString() !== req.user.id) {
      res.status(403);
      throw new Error("User don't have permission to update other user contacts");
    }
  
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
  
    res.status(200).json(updatedContact);
})

//@desc delet contacts
//@rout DELETE /api/contacts
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact Not found' });

    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
    }
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json(contact);
});


//@desc Get a contact
//@route GET /api/contacts
//@access public
const getContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.sendStatus(404).json({message : 'Contact Not found'});
    res.status(200).json(contact);
})
module.exports = { getAllContacts , createContact, updateContact, deleteContact, getContact };