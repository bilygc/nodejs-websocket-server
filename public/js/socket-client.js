const socket = io();

const lblOffline = document.querySelector('#lbloffline');
const lblOnline = document.querySelector('#lblonline');
const txtmensaje = document.querySelector('#txtmensaje');
const btnenviar = document.querySelector('#btnenviar');

socket.on('connect', () =>{
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () =>{
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

socket.on('send-msg', payload =>{
    console.log(payload);
});

btnenviar.addEventListener('click', () =>{
    const msg = txtmensaje.value;
    const data ={
        msg,
        id:123456,
        date:new Date().getTime()
    }

    socket.emit('send-msg',data, (id) =>{
        console.log('desde el server', id);
    });
});
