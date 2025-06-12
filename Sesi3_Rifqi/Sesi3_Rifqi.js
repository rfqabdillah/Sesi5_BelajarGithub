//Segitiga Siku-siku
let tinggi = 7;

let hasil = "";
for(let i=1;i<=tinggi;i++){
	for(let j=1;j<=i;j++){
		hasil+="*";
	}
	hasil+="\n";
}
console.log(hasil);

//Segitiga Siku-siku kebalik
let hasil2 = "";
for(let i=1;i<=tinggi;i++){
	for(let j=i;j<=tinggi;j++){
		hasil2+="*";
	}
	hasil2+="\n";
}
console.log(hasil2);

//Segitiga sama sisi
let hasil3 = "";
for (let i = 1; i <= tinggi; i++) {
	for (let j = 1; j <= tinggi - i; j++) {
      hasil3 += " ";
    }
	for (let k = 1; k <= (2 * i - 1); k++) {
      hasil3 += "*";
    }
    hasil3 += '\n';
  }
console.log(hasil3);

//Segitiga Pascal
let hasil4 = '';
for (let i = 0; i < tinggi; i++) {
	let angka = 1;
    hasil4 += ' '.repeat(tinggi - i - 1);
	
	for (let j = 0; j <= i; j++) {
      hasil4 += angka + ' ';
      angka = angka * (i - j) / (j + 1);
    }
    hasil4 += '\n';
  }
console.log(hasil4);