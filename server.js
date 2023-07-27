// set the port server will be hosted i.e. localhost:xxxx
const io = require('socket.io')(3000);

io.on('connection', socket => {
    socket.emit('chat-message', 'You have joined the server')
    socket.on('send-chat-message', msg => {
        console.log(msg);
    })
})