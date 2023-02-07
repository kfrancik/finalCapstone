# The project name: Kate’s Corner
This project is my personal hobby website, designed mostly in HTML and CSS with a pinch of JavaScript functionality. 
Currently, it includes four html pages. Each one has fixed elements like the header, the navigation menu and the footer. 
The website is styled with CSS with Grid element. Functionalities such as Save for later, Like it, Leave comment and Send message are added with JavaScript. 
Current version of the website does not communicate with the server; all communication is simulated with the browser Session Storage. 

## Contents:
### Directory: root
- Index.html - Main page of the website.
### Directory: pages
- my-story.html - A website page 
- contact.html -	A website page (with the contact form)
- saved.html -	A website page (with list elements “saved for later” - hyperlinks to the saved elements)
### Directory: styles
- myStyles.css - Generic styles for the website
- myStory.css -	Dedicated styles for my-story.html page
- myContact.css -	Dedicated styles for contact form on contact.html page
### Directory: javascript
- index.js - Generic handlers for most pages
- contact.js - Special handlers for contact form
- saved.js - Special handlers for on the saved.html
## Installation:
Copy the directory tree to your computer. Should run locally (no localhost needed)
## Usage:
Click or double click (depending on your system configuration) on the index.html file.

Once the website opens you can use following tools:
- The navigation menu to navigate between pages (top and bottom of the website, available on all pages).
- Like a page item – the heart icon – available for selected articles and images in the Home and My Story pages. Necessary information is stored in the session storage.
- “Save for later” or the disk icon – to save selected articles and images in the session storage. A list of saved elements can be found on the Saved page.
- Leave comment – to comment the element on the page. Comments are stored in session storage.
- Read more – moving you to external websites which are opening in new tabs.

Additionally, you can send a message (only available on the Contact page) and see the list of elements saved for later (only available on the Saved page).

Footer:
- Newsletter:  does not operate
- Site map: navigation menu
- Send message: activate email application.
- Call: activate phone mode if available. 

![screencapture](https://github.com/kfrancik/finalCapstone/blob/master/images/screencapture.jpg)
