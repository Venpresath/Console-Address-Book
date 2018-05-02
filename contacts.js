class Contact {
    constructor(name, email, phone, relation){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    } 
}

class AddressBook {
    constructor(){
        this.contacts = [];
        let jimmy = new Contact("Jimmy", "Jimmy@jimmy.com", "12312565545", "Sketchy Friend");
        this.contacts[0] = jimmy;
        let billy = new Contact("billy", "billy@gmail.com", "+12368081141", "freakin' dink");
        this.contacts[1] = billy;
    }
        Add(){
            let name = prompt("please input your contact's name");
            let email = prompt("please put in an email");
            let phone = prompt("please put in phone number");
            let relation = prompt("and... who dis");

            let newFriend = new Contact(name, email, phone, relation);
            this.contacts.push(newFriend);
        }
        deleteAt(){
            let deleteContact = prompt("What index would you like to delete?");
            this.contacts.splice(deleteContact, 1);
        }
        Print(){
            for(let i = 0; i < this.contacts.length; i++){
            console.log(`${this.contacts[i].name} E: ${this.contacts[i].email} P: ${this.contacts[i].phone} R: ${this.contacts[i].relation}`);
        }
    }
}

let book = new AddressBook();

while(true){
    let input = prompt("Would you like to add, print, delete, or quit?");

    if(input === "add"){
        book.Add();
    } else if (input === "quit") {
        console.log("kbye");
        break;
    } else if (input === "print"){
        book.Print();
        break;
    } else if (input === "delete"){
        book.deleteAt();
    } else {
        console.log("bruh, what even is this");
        input;
    }
}

// delete contact and print functions