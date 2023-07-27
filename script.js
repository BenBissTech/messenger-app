// reference to server location, specify websocket transportation method
const socket = io('http://localhost:3000',{ transports : ['websocket'] });

const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

// grabs socket emit and stores within data
socket.on('chat-message', data => {
    console.log(data);
})
 
messageForm.addEventListener('submit', e => {
    // prevents page from refreshing on send click (refresh will lose all previos messages)
    e.preventDefault()

    // grabs value of types message and sends it to the server
    const message = messageInput.value;
    socket.emit('send-chat-message', message);

    // clear message input after send
    messageInput.value = '';
})