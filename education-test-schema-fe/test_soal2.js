
var input1 = "hallo jesika24 selamat datang!"
var input2 = "hallo anggun selamat datang!"
var input3 = "hallo ** selamat datang!"
var input4 = "hallo Mariage889120! selamat datang!"

function validasi(text) {
	if(/\d/.test(text)) {
    	var angka = text.match(/\d+/)[0]
		console.log("Sistem kami menolak untuk inputan berisi angka " + angka)
    }else {
    	console.log("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + text);
    }
}

validasi(input1)
validasi(input2)
validasi(input3)
validasi(input4)

