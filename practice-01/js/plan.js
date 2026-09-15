"use strict";

const totalTasks = 12;
const completedTasks = 5;
const dailyLimit = 3;

if (typeof totalTasks !== "number" || typeof completedTasks !== "number" || Number.isNaN(totalTasks) || Number.isNaN(completedTasks)) {
  console.log("Ошибка: входные данные задач должны быть числовыми значениями.");
}
else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
  console.log("Ошибка: дробное количество задач.");
}
else if (totalTasks < 0 || completedTasks < 0) {
  console.log("Ошибка: отрицательное количество задач.");
}
else if (totalTasks > 1000) {
  console.log("Ошибка: превышена верхняя граница количества задач.");
}
else if (completedTasks > totalTasks) {
  console.log("Ошибка: некорректное число выполненных задач.");
}
else if (typeof dailyLimit !== "number" || Number.isNaN(dailyLimit)) {
  console.log("Ошибка: дневная норма задана не числом.");
}
else if (!Number.isInteger(dailyLimit)) {
  console.log("Ошибка: дробной дневной нормы быть не должно.");
}
else if (dailyLimit < 1 || dailyLimit > 1000) {
  console.log("Ошибка: дневной лимит должен быть от 1 до 1000.");
}
else {
  let remaining = totalTasks - completedTasks;
  console.log(`Осталось задач: ${remaining}`);

  if (remaining === 0) {
    console.log("Все задачи уже выполнены!");
    console.log("Потребуется дней: 0");
  } else {
    let day = 0;

    while (remaining > 0) {
      day++;
      const tasksDoneToday = Math.min(dailyLimit, remaining);
      remaining -= tasksDoneToday;

      console.log(`День ${day}: выполнено ${tasksDoneToday}, осталось ${remaining}`);
    }

    console.log(`Потребуется дней: ${day}`);
  }
}
