const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactPath = path.join(__dirname, './db/contacts.json');

const listContacts = async () => {
    const data = await fs.readFile(contactPath);
    return JSON.parse(data);
}

const getContactById = async (contactId) => {
    const allContacts = await listContacts();
    const data = allContacts.find((contact) => contact.id === contactId);
    return data || null;
}

const addContact = async (name, email, phone) => {
    const allContacts = await listContacts();
    const newContact = { id: nanoid(), name, email, phone };
    allContacts.push(newContact);
    await fs.writeFile(contactPath, JSON.stringify(allContacts, null, 2));
    return newContact;
}

const removeContact = async (contactId) => {
    const allContacts = await listContacts();
    const removedContact = allContacts.find((contact) => contact.id === contactId);
    const data = allContacts.filter((contact) => contact.id !== contactId);
    await fs.writeFile(contactPath, JSON.stringify(data, null, 2));
    return removedContact || null;
}


module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
}