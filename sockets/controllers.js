export const socketController = (socket) =>{
    socket.send('Client connected');

    socket.on('disconnect', () =>{
        console.log('Cliente desconectado')
    });

    socket.on('send-msg', (payload, callback) =>{
        //this.io.emit('send-msg', payload);
        const id = 123456;
        callback(id);
        socket.broadcast.emit('send-msg',payload);
    });
}