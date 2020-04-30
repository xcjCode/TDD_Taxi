const fs = require('fs');

function handlePrice(km, min) {
  let result = 6;
  if (km > 2) result += (km - 2) * 0.8;
  if (km > 8) result += (km - 8) * 0.5;
  return Math.round(result + min * 0.25);
}

function getPrice(fileData) {
  let result = '';
  for (let i = 0; i < fileData.length; i += 2) {
    result += `收费${handlePrice(fileData[i], fileData[i + 1])}元\n`;
  }
  return result;
}

export default function main(testDataFile = 'testData.txt') {
  const data = fs.readFileSync(`./src/fixtures/${testDataFile}`).toString();
  const fileData = data.match(/\d+/g);
  const receipt = getPrice(fileData);
  return receipt;
}

main();
