function getElementWidth(content, padding, border) {
  let contentWidth = Number.parseFloat(content);
  let paddingWidth = Number.parseFloat(padding);
  let borderWidth = Number.parseFloat(border);
  return contentWidth + 2 * paddingWidth + 2 * borderWidth;
}

getElementWidth('50px', '8px', '4px');
getElementWidth('60px', '12px', '8.5px');
getElementWidth('200px', '0px', '0px');

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
