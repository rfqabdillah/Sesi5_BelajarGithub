import { kalkulator } from './rumus.js'
import readline from 'readline'

//Membuat interface
const inputUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Ambil Input
console.log("\n== KALKULATOR SEDEHANA ==")
inputUser.question("Masukkan angka pertama: ", input1 => {
    inputUser.question("Masukkan angka kedua: ", input2 => {
        inputUser.question("Masukkan operator (+ | - | / | *): ", operator => {
            //Ubah menjadi float
            const angka1 = parseFloat(input1);
            const angka2 = parseFloat(input2);
            //Cek apakah inputan angka
            if (isNaN(angka1) || isNaN(angka2)) {
                console.log("Pastikan kedua input adalah angka yang valid.");
            } else {
                // Panggil fungsi kalkulator
                const hasil = kalkulator(angka1, angka2, operator);
                console.log(
                    `Hasil: ${angka1} ${operator} ${angka2} = ${hasil}`
                );
            }
            inputUser.close()
        })
    })
})
