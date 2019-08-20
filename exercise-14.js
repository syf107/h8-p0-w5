function changeVocals (str) {
    var ray = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'];
    var kataBaru = '';

    for(var m = 0; m < str.length; m++){
        for(var n = 0; n < ray.length; n++){
            if(str[m] === ray[n]){
                kataBaru += String.fromCharCode(str.charCodeAt(m) + 1);
                break;
            }
        }
        if(str[m] !== ray[n]){
            kataBaru = kataBaru + str[m];
        }
    }
    return kataBaru;
}
  
function reverseWord (str) {

    var balik = str.split("").reverse().join("");
    return balik;     

}
  
function setLowerUpperCase (str) {

    var kataBaru = '';

    for(var m = 0; m < str.length; m++){
        if(str[m] === str[m].toLowerCase()){
            kataBaru = kataBaru + str[m].toUpperCase();
        } else if (str[m] === str[m].toUpperCase()){
            kataBaru = kataBaru + str[m].toLowerCase();
        }
    }
    return kataBaru;
}
  
function removeSpaces (str) {
    
    var kataBaru = '';
    for(var m = 0; m < str.length; m++){
        if(str[m] !== " "){
            kataBaru = kataBaru + str[m];
        }
    }
    return kataBaru;
    
}
  
  function passwordGenerator (name) {
    var change = changeVocals(name);
    var balik = reverseWord(change);
    var lowUp = setLowerUpperCase(balik);
    var remove = removeSpaces(lowUp); 
    
    return remove; 
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'