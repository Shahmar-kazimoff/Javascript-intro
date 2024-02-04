//5) SWITCH operatoru ile yoxla.
// Verilmish ededdin sonuncu reqemi
               
//      1 olarsa-"I gun" sozunu
              
//      2 olarsa-"II gun" sozunu
  
//                     ...
// 7 olarsa-"VII gun" sozunu yaz.

var reqem = prompt("Bir reqem daxil edin:");

var sonReqem = reqem % 10;

switch (sonReqem) {
    case 1:
        console.log("1. Gün");
        break;
    case 2:
        console.log("2. Gün");
        break;
    case 3:
        console.log("3. Gün");
        break;
    case 4:
        console.log("4. Gün");
        break;
    case 5:
        console.log("5. Gün");
        break;
    case 6:
        console.log("6. Gün");
        break;
    case 7:
        console.log("7. Gün");
        break;
    default:
        console.log("Her hansi bir gün");
        break;
}
