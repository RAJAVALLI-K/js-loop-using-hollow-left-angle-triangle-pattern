// 2.Hollow left angle triangle pattern

let num = 6;
let value = "";
for (let i = 1; i <= num; i++) {
    for (let j = 0; j < i; j++) {
        if (i === num) {
            value += "*";
        }
        else {
            if (j == 0 || j == i - 1) {
                value += "*";
            }
            else {
                value += " ";
            }
        }
    }
    value += "\n";
}
console.log(value);