import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import ContactsAPI from '../utils/ContactsAPI';



export default {
  receiveContacts: () => {
    ContactsAPI
    .getContacts('https://jsonplaceholder.typicode.com/users')
    .then(contacts =>{
      AppDispatcher.dispatch({
       actionType: AppConstants.RECEIVE_CONTACTS,
       contacts: contacts
     });
    })
    .catch(message =>{
      AppDispatcher.dispatch({
        actionType: AppConstants.RECEIVE_CONTACTS_ERROR,
        message: message
      });

    });
  }
};
