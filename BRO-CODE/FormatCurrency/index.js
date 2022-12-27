let number = 12345.6789;
let result;

result = number.toLocaleString("en-US");
result = number.toLocaleString("hi-IN");
result = number.toLocaleString("de-DE");

result = number.toLocaleString("en-US", { style: "currency", currency: "USD" });
result = number.toLocaleString("hi-IN", { style: "currency", currency: "INR" });
result = number.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
result = number.toLocaleString("bg-BG", { style: "currency", currency: "BGN" });

let newNum = 12;

result = newNum.toLocaleString(undefined, { style: "percent" });
result = newNum.toLocaleString(undefined, { style: "unit", unit: "celsius" });

console.log(result);