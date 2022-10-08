var serial=localStorage.getItem('value');
document.getElementById("serial_no").innerHTML = serial;

qr.set({
    foreground: 'black',
    size: 250,
    value: serial
        });