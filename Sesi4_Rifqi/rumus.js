export function kalkulator(angka1, angka2, operator) {
    switch (operator) {
        case "+":
            return angka1 + angka2;
        case "-":
            return angka1 - angka2;
        case "/":
            //Cek angka ke 2 apakah 0
            if (angka2 === 0) {
                return "Tidak bisa membagi dengan nol!";
            }
            return angka1 / angka2;
        case "*":
            return angka1 * angka2;
        default:
            return "Operator tidak valid!";
    }
}