function kaliTerusRekursif(angka) {
    var nomor = String(angka)
    var hasil = 1;

    if(nomor.length === 1){
        return angka;
    } else {
        for(var m = 0; m < nomor.length; m++){
            hasil = hasil * Number(nomor[m])
        }

        return kaliTerusRekursif(hasil);
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6