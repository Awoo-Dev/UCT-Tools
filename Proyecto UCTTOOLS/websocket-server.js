const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();
const io = new Server(server);

// Variable para almacenar el número de clientes conectados
let activeUsers = 0;

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  // Incrementar el contador de usuarios activos al conectarse un cliente
  activeUsers++;
  console.log('Usuarios activos:', activeUsers);

  socket.on('message', (newMessage) => {
    console.log('Mensaje recibido:', newMessage);
    io.emit('message', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
    // Decrementar el contador de usuarios activos al desconectarse un cliente
    activeUsers--;
    console.log('Usuarios activos:', activeUsers);
  });
});

server.listen(4000, () => {
  console.log('Servidor WebSocket iniciado en el puerto 4000');
});
