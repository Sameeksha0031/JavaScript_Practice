var number = 53;
var num = number
var sum = 0;

while(number > 0) {
    let num = number % 10;
    sum = sum + (num * num * num);
    number = parseInt(number / 10);
}

if(sum == num) {
    document.write("Number is Armstrong");
} else {
    document.write("Number is not an Armstrong" + sum);
}