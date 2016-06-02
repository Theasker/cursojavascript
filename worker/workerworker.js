self.onmessage = function(smsMain){
	if (smsMain.data.cmd === "saludar"){
		self.postMessage("Hola "+ smsMain.data.quien);
	}else if (smsMain.data.cmd === "despedir"){
		self.postMessage("Adios "+ smsMain.data.quien);
	}
}