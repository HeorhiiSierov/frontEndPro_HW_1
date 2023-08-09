function checkDataType(arg) {
  const dataType = typeof arg;
  console.log(`Тип данных аргумента: ${dataType}`);
}

// Примеры вызова функции с разными аргументами
checkDataType(5); // Тип данных аргумента: number
checkDataType("Hello, world!"); // Тип данных аргумента: string
checkDataType(true); // Тип данных аргумента: boolean
checkDataType(null); // Тип данных аргумента: object
checkDataType(undefined); // Тип данных аргумента: undefined
checkDataType({}); // Тип данных аргумента: object
