"use strict";

console.log("--- Выражение 1 ---");
console.log("Результат:", "8" + 2);
console.log("Тип результата:", typeof ("8" + 2));

console.log("\n--- Выражение 2 ---");
console.log("Результат:", "8" - 2);
console.log("Тип результата:", typeof ("8" - 2));

console.log("\n--- Выражение 3 ---");
console.log("Результат:", Number("8") + 2);
console.log("Тип результата:", typeof (Number("8") + 2));

console.log("\n--- Выражение 4 ---");
console.log("Результат:", "12" > "3");
console.log("Тип результата:", typeof ("12" > "3"));

console.log("\n--- Выражение 5 ---");
console.log("Результат:", 12 === "12");
console.log("Тип результата:", typeof (12 === "12"));

console.log("\n--- Выражение 6 ---");
console.log("Результат:", Number(""));
console.log("Тип результата:", typeof Number(""));

console.log("\n--- Выражение 7 ---");
console.log("Результат:", Number("text"));
console.log("Тип результата:", typeof Number("text"));

console.log("\n--- Выражение 8 ---");
console.log("Результат:", Boolean("false"));
console.log("Тип результата:", typeof Boolean("false"));

console.log("\n--- Выражение 9 ---");
console.log("Значение выражения typeof null:", typeof null);
console.log("Тип самого результата выражения:", typeof (typeof null));

console.log("\n--- Выражение 10 ---");
console.log("Значение выражения typeof NaN:", typeof NaN);
console.log("Тип самого результата выражения:", typeof (typeof NaN));
