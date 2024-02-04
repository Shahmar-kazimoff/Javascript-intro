// 3) 2 dene eded verilib. 
//    I eded 4 reqemli II eded 7 reqemlidir.
//    I ededin 4%-ni tap. 
//    Sonra II ededin 9% ni tap. 
//    Sonra Cavalari toplayib 10 %ni tap.

var a = "1234";//ve ya var a = 1234;
var b = 1754544;// ve ya var b = "1754544"; 

if (a >= 1000 && a <= 9999 && b >= 1000000 && b <= 9999999) {
    a = a * 4 / 100;
    b = b * 9 / 100;
    var final = (a + b) * 10 / 100;// ve ya (a + b) / 10
    console.log(final)
} else {
    console.log("1-ci eded 4 reqemli, 2-ci eded 7 reqemli olmalidir.!")
}