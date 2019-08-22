function totalDigitRekursif(angka) {
    var nomor = String(angka);
    if ( nomor.length === 0){
        return 0;
    } else {
        return Number(nomor[0]) + Number(totalDigitRekursif(nomor.slice(1)));
    }
}
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5