import React, { Component } from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';


class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
    this.onChange = this.onChange.bind(this);
  }

componentWillMount(){
  AppStore.addChangeListener(this.onChange);
}

componentDidMount(){
  AppActions.receiveContacts();
}

componentWillUnmount(){
  AppActions.removeChangeListener(this.onChange);
}

onChange(){
  this.setState({
    contacts: AppStore.getContacts()
  }, function(){
    console.log(this.state);
  });
}
  render() {
    return (
      <div>
        Contacts
      </div>
    );
  }
}

export default Contacts;
