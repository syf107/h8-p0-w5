function sorting(arrNumber) {
    var arrBaru = arrNumber.sort();
    return arrBaru;
  }
  
function getTotal(arrNumber) {
    var jumlah = 0;
    for(var m = 0; m < arrNumber.length; m++){
        if(arrNumber[arrNumber.length-1] === arrNumber[m]){
            jumlah++;
        }
    }
    if (arrNumber.length === 0){
        return "''"
    } else {
        return "angka paling besar adalah " + arrNumber[arrNumber.length-1]  + " dan jumlah kemunculannya sebanyak " + jumlah + " kali."
    }
}
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''