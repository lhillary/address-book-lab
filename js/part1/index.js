"use strict"; {
    class AddressBook {
      constructor() {
        this.contacts = [
          new Contact('Einstein', 'ein@thestein.me', '299.792.4580', 'Hero'),
          new Contact('Euler', 'leonhard@euler.net', '271.828.1828', 'Hero'),
          new Contact('Jenny', 'jenny@neverforget.com', '313.867.5309', 'Friend')
        ];
      }
      add(info) {
        this.contacts.push(info);
      }
      deleteAt(index) {
        this.contacts.splice(index, 1);
      }
      print() {
        for (const contact of this.contacts) {
            console.log(this.contacts.indexOf(contact), contact);
        }
      }
    }
    class Contact {
      constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
      }
    }
    const myBook = new AddressBook();
    while (true) {
        let ask = prompt('Add, Remove, Print, or Quit?');
        if (ask === 'Add') {
            let name = prompt('Enter name.');
            let email = prompt('Enter email address.');
            let phone = prompt('Enter phone number.');
            let relation = prompt('Enter relation.');
            myBook.add(new Contact(name, email, phone, relation));
        } else if (ask === 'Remove') {
            let number = prompt('Which contact (#) do you want to delete?');
            let index = parseInt(number);
            myBook.deleteAt(index);
        } else if (ask === 'Print') {
            myBook.print();
            console.log('');
        } else if (ask === 'Quit') {
            console.log('Farewell!')
            break;
        } else if (ask === null) {
            break;
        }
    } 
}
  