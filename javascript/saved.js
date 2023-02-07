window.onload = () => {
    // load the list of saved for later elements from the session storage - or empty list if nothing in the storage 
    let saveForLater = JSON.parse(sessionStorage.getItem("saveForLater")) || [];

    // display list of save for later elements
    saveForLater.forEach(element => {
        let li = document.createElement('li');
        let url = document.createElement('a');

        url.href = element.url;
        url.innerHTML = `${element.type}: ${element.id}`;
        li.appendChild(url);
        document.querySelector('#saveForLaterList').appendChild(li);
    });
};