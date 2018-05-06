class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
        let jimmy = new Contact("Jimmy", "Jimmy@jimmy.com", "12312565545", "Sketchy Friend");
        this.contacts[0] = jimmy;
        let billy = new Contact("billy", "billy@gmail.com", "+12368081141", "The other guy");
        this.contacts[1] = billy;
    }
    Display() {

    }
    Add() {
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let phone = document.querySelector("#phone").value;
        let relation = document.querySelector("#relation").value;

        let newFriend = new Contact(name, email, phone, relation);
        this.contacts.push(newFriend);
    }
    Delete() {
        let deleteContact = prompt("What index would you like to delete?");
        this.contacts.splice(deleteContact, 1);
    }
}

let book = new AddressBook();

let listContacts = document.querySelector("#lower");
let card = document.querySelector(".card");

let submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
    book.Add();
});

// book.contacts["0"].email
