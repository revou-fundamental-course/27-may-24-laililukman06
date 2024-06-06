document.addEventListener('DOMContentLoaded', function() {
    let userName = prompt("Please enter your name:");

    if (userName) {
        document.getElementById('client-name').textContent = userName;
    } else {
        document.getElementById('client-name').textContent = "Guest";
    }

    const messageForm = document.querySelector('.messageus-form');
    const messagesContainer = document.getElementById('messages-container');

    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message-box').value;

        if (name && email && message) {
            addMessage(name, email, message);
            messageForm.reset();
        }
    });

    function addMessage(name, email, message) {
        const messageItem = document.createElement('div');
        messageItem.classList.add('message-item');
        messageItem.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;
        
        messagesContainer.appendChild(messageItem);

        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    function navSlide() {
        var burger = document.querySelector(".burger");
        var navLists = document.querySelector("nav");
    
        burger.addEventListener("click", function() {
            // Toggle nav list and burger class
            navLists.classList.toggle("nav-active");
            burger.classList.toggle("toggle-burger");
        });
    }
    
    navSlide();
});