"use strict"; {
  class AddressBook {
    constructor() {
      this.contacts = [
        new Contact('Einstein', 'ein@thestein.me', '299-792-4580', 'Hero'),
        new Contact('Euler', 'leonhard@euler.net', '271-828-1828', 'Hero'),
        new Contact('Jenny', 'jenny@neverforget.com', '313-867-5309', 'Friend'),
        new Contact('Lydia', 'lhill@dreamhost.com', '313-456-3267', 'Friend')
      ];
    }
    add() {
      const info = {
        name: document.querySelector('#name').value, 
        email: document.querySelector('#email').value, 
        phone: document.querySelector('#phone').value, 
        relation: document.querySelector('#relation').value
      };
      let newContact = new Contact(info.name, info.email, info.phone, info.relation);
      this.contacts.push(newContact); 
    }
    deleteAt(index) {
      this.contacts.splice(index, 1);
    }
    display() {
      let contacts = document.querySelector('#contacts');
      contacts.innerHTML = '';
      for (let contact of this.contacts) {
        let entry = document.createElement('div');
        entry.classList.add('entry');
        entry.innerHTML = ` 
          <ul class="entryList">
            <li>Name: ${contact.name}</li> 
            <li>Email: ${contact.email}</li>
            <li>Phone: ${contact.phone}</li>
            <li>Relation: ${contact.relation}</li>
          </ul>
          <button class="delete">
            <div class="icon"></div>
          </button>`;
        contacts.appendChild(entry);
      }
      let deleteBtn = document.querySelectorAll('.delete');
      for (let i = 0; i < deleteBtn.length; i++) {
        let deleteThis = deleteBtn[i];
        deleteThis.addEventListener("click", () => {
          myBook.deleteAt(i);
          myBook.display();
        });
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
    
  let myBook = new AddressBook();
    
  let name = document.querySelector('#name');
  let email = document.querySelector('#email');
  let phone = document.querySelector('#phone');
  let relation = document.querySelector('#relation');
  let add = document.querySelector('#button');
    
  add.addEventListener('click', () => {
    myBook.add();
    myBook.display();

    name.value = "";
    email.value = "";
    phone.value = "";
    relation.value = 'Family';
  });

  window.addEventListener("load", () => {
    myBook.display();
  });
}
  