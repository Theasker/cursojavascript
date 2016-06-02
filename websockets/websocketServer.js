// # npm install websocket

// ejecutar
// $ node websocketServer.js

var webSocket = require('websocket').server;
var http = require('http');

var servidorHttp = http.createServer(function(request,response){ }).listen(8080);

var servidorWebSocket = new webSocket({
	httpServer: servidorHttp
});

var clientes = [];

servidorWebSocket.on('request',function(request){
	var cliente = request.accept();
	console.log((new Date())+" -- Conexión establecida");
	clientes.push(cliente);
	// Esucho si el cliente me ha enviado algo
	cliente.on('message',function(sms){
		console.log(sms);
		console.log("Mensaje recibido "+sms.utf8Data);
		// Cuando recibimos algo, lo reenviamos a todos los clientes
		// Nos recorremos el array de clientes para enviarselo a todos
		for (var c=0;c<clientes.length;c++){
			clientes[c].sendUTF("Hola: "+sms.utf8Data);
		}
	});

});