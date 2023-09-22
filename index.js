const contactsDb = require('./contacts');
const { program } = require('commander');

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const allContacts = await contactsDb.listContacts();
            return console.table(allContacts);
        case 'get':
            const gettedContact = await contactsDb.getContactById(id);
            return console.table(gettedContact);
        case 'remove':
            const removedContact = await contactsDb.removeContact(id);
            return console.table(removedContact);
        case 'add':
            const addedContact = await contactsDb.addContact(name, email, phone);
            return console.table(addedContact);
        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

program
    .option('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone');

program.parse();
const options = program.opts();

invokeAction(options);