// массив расходов за 12 месяцев
let yearlyExpences = [
  1200, 250, 3320, 4563, 5560, 7839, 1200, 4200, 150, 530, 1100, 1400,
];

//  функция, содержащая расчет суммы затрат, которые даны в массиве - в расчет берутся суммы только выше 1000

function expence(arrayExpences) {
  let sumValue = 0;
  for (let i = 0; i < arrayExpences.length; i++) {
    if (arrayExpences[i] >= 1000) {
      sumValue += arrayExpences[i];
    }
  }
  return sumValue;
}

console.log(`Сумма затрат за 12 месяцев: ${expence(yearlyExpences)}`);

// тестовая функция, которая будет проверять, что расчет суммы расходов производится верно

let expencesExamples = [
  {
    yearlyExpencesTest: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpencesTest: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpencesTest: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

function testControl(arrayExpences, expectedValue) {
  if (expence(arrayExpences) === expectedValue) {
    console.log("рассчеты верны");
  } else {
    console.log("ошибка в рассчетах");
  }
}

// создаем массив, который содержит ожидаемые результаты суммирования затрат
let sumArray = [];
for (let i = 0; i < expencesExamples.length; i++) {
  let temp = expence(expencesExamples[i].yearlyExpencesTest);
  sumArray.push(temp);
}

// перебираем тестовые данные и проверяем корректность расчетов
expencesExamples.forEach(function (currentvalue, i) {
  testControl(currentvalue.yearlyExpencesTest, sumArray[i]);
});
