const contactsDb = require('./db');

const invokeAction = async ({ action, id }) => {
    switch (action) {
        case 'list':
            const allContacts = await contactsDb.listContacts();
            return console.log(allContacts);
        case 'get':
            const gettedContact = await contactsDb.getContactById(id);
            return console.log(gettedContact);
        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

// invokeAction({ action: 'list' });
invokeAction({ action: 'get', id: 'AeHIrLTr6JkxGE6SN-0Rw' });