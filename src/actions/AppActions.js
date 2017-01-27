import AppDispatcher from '../dispacther/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import ContactsAPI from '../utils/ContactsAPI';



export default {
  receiveContacts: () => {
    ContactsAPI
    .getContacts('https://jsonplaceholder.typicode.com/users')
    .then(contacts =>{

    })
    .catch(message =>{

    });
  }
};
