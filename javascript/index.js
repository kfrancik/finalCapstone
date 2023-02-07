class SavedElement{
    constructor(type, url, id) {
        this.type = type;
        this.url  = url;
        this.id   = id;
    }
}

window.onload = () => {
    // load the list of saved for later elements from the session storage - or empty list if nothing in the storage 
    let saveForLater = JSON.parse(sessionStorage.getItem("saveForLater")) || [];
    
    // Save for later article - add click listeners
    document.querySelectorAll('.save').forEach(saveElement => {
        saveElement.addEventListener('click', (e) => {
            saveForLater.push(new SavedElement(
                'Article',
                `${e.view.location.href}#${e.target.parentElement.id}`,
                e.target.parentElement.id
            ));
            // alert
            alert(`You saved ${saveForLater.length} elements.`)
            // update session storage
            sessionStorage.setItem("saveForLater", JSON.stringify(saveForLater));
        });
    });
    // Save for later img - add click listeners
    document.querySelectorAll('.save-img').forEach(saveElement => {
        saveElement.addEventListener('click', (e) => {
            saveForLater.push(new SavedElement(
                'Image',
                `${e.view.location.href}#${e.target.attributes.name.nodeValue}`,
                e.target.attributes.name.nodeValue
            ));
            // alert
            alert(`You saved ${saveForLater.length} elements.`)
            // update session storage
            sessionStorage.setItem("saveForLater", JSON.stringify(saveForLater));
        });
    });
    
    // load map of liked elements
    let mapLiked = new Map(JSON.parse(sessionStorage.getItem("likeElement")));

    // like element
    document.querySelectorAll('.like').forEach(element => {
        // set red colour for liked elements
        if (mapLiked.has(element.id) && mapLiked.get(element.id)) {
            element.style = "color: red"; 
        }
        
        // add a click listener ("like it")
        element.addEventListener('click', (e) => {
            // if already liked, unlike
            if (mapLiked.has(e.target.id) && mapLiked.get(e.target.id)) {
                mapLiked.set(e.target.id, false);
                e.target.style = "color: white"; 
            } 
            // else, like
            else {
                mapLiked.set(e.target.id, true);
                e.target.style = "color: red";
            }
            // update session storage
            sessionStorage.setItem("likeElement", JSON.stringify(Array.from(mapLiked.entries())));
        })
    });
    
    // load map of commented elements
    let mapComment = new Map(JSON.parse(sessionStorage.getItem("commentElement")));
    
    // add comment
    document.querySelectorAll('.comment').forEach(element => {
        // create UI
        let form = `<label for = "name-${element.parentNode.id}" style = "margin-top : 20px;">Your name: </label><br>\n`+
                   `<input type = "text" id = "name-${element.parentNode.id}" name = "name" style = "wight : 100px"><br>\n`+
                   `<label for = "comment-${element.parentNode.id}" style = "wight : 100%">Comment: </label><br>\n`+
                   `<textarea rows = "4" id = "comment-${element.parentNode.id}" style = "wight : 100%"></textarea><br>\n`+
                   `<button id="save-comment-${element.parentNode.id}" class="btn btn-primary comment" name="comment-${element.parentNode.id}">Save comment</button>`        
        document.querySelector(`#${element.parentNode.id}-comment`).innerHTML = form;  
        // hide form 
        document.querySelector(`#${element.parentNode.id}-comment`).style = "display : none;"   
        
        // display comments
        if (mapComment.get(element.parentNode.id)) document.querySelector(`#${element.parentNode.id}-left-comment`).innerHTML = mapComment.get(element.parentNode.id);
        else document.querySelector(`#${element.parentNode.id}-left-comment`).innerHTML = "";
        
        // Add comment button click listener - just displays UI
        element.addEventListener('click', () => {
            document.querySelector(`#${element.parentNode.id}-comment`).style = "display : block;"
            document.getElementById(`name-${element.parentNode.id}`).value = ""; 
            document.getElementById(`comment-${element.parentNode.id}`).value = "";
        });
        
        // listener on the save comment button
        document.querySelector(`#save-comment-${element.parentNode.id}`).addEventListener('click', (e) => {
            let leftComment = "<p>Author: " + document.getElementById(`name-${element.parentNode.id}`).value + "<br>" +
                                "Comment: " + document.getElementById(`comment-${element.parentNode.id}`).value + "</p>";
            
            // display comment
            document.querySelector(`#${element.parentNode.id}-left-comment`).innerHTML += leftComment;
            // update session storage
            mapComment.set(element.parentNode.id, (mapComment.get(element.parentNode.id) || "") + leftComment);   
            sessionStorage.setItem("commentElement", JSON.stringify(Array.from(mapComment.entries())));
            // reset form
            document.querySelector(`#${element.parentNode.id}-comment`).style = "display : none;"
        });
    });
};

