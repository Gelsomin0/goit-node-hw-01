const fs = require('fs/promises');
const path = require('path');

const contactPath = path.join(__dirname, 'contacts.json');

const listContacts = async () => {
    const data = await fs.readFile(contactPath);
    return JSON.parse(data);
}

const getContactById = async (contactId) => {
    const allContacts = await listContacts();
    const data = allContacts.find((contact) => contact.id === contactId);
    return data || null;

}


module.exports = {
    listContacts,
    getContactById
}