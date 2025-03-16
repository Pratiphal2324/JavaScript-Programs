const temps = [12, 5, -5, 0, 4];
printforecast = function (temps) {
  let string = `... `;
  for (let i = 0; i < temps.length; i++) {
    string = string + `${temps[i]} degrees celsius in ${i + 1} days ...`;
  }
  return string;
};
console.log(printforecast(temps));
