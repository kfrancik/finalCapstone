class SavedElement{
    constructor(name, surname, address, message) {
        this.name     = name;
        this.surname  = surname;
        this.address  = address;
        this.message  = message;
    }
}

// load data from the session storage to email's array
let saveEmail = JSON.parse(sessionStorage.getItem("saveEmail")) || [];

window.onload = () => {
    // collect data from the form
    document.querySelector('#submit').addEventListener('click', () => {
    let email = new SavedElement (
        document.querySelector('#first-name').value,
        document.querySelector('#surname').value,
        document.querySelector('#email-add').value,
        document.querySelector('#text-message').value,
    )
    // add data to email's array    
    saveEmail.push(email);
    // update session storage data
    sessionStorage.setItem("saveEmail", JSON.stringify(saveEmail));
    });
}