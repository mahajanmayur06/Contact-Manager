//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getAllContact = (req,res) => {
    res.status(200).json({ 'message' : 'Get All Contacts'});
}

//@desc create a contacts
//@route POST /api/contacts
//@access public
const createContact = (req,res) => {
    res.status(200).json({ 'message' : 'Create A contact'});
}

//@desc update contacts
//@route PUT /api/contacts
//@access public
const updateContact = (req,res) => {
    res.status(200).json({ 'message' : 'Create A contact'});
}

//@desc delet contacts
//@rout DELETE /api/contacts
//@access public
const deleteContact = (req,res) => {
    res.status(200).json({ 'message' : `Delete contact for ${req.params.id}`});
};
//@desc Get a contact
//@route GET /api/contacts
//@access public
const getContact = (req,res) => {
    res.status(200).json({ 'message' : `Get a contact for ${req.params.id}`});
}

module.exports = { getAllContacts , createContact, updateContact, deleteContact, getContact };