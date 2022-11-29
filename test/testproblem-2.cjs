 let {inventory} =equire ('../inventory.js')
 let {problem2}  =equire  ('../problem2.cjs')

const [make, model]= problem2(inventory);

console.log(`Last car is a ${make} ${model}`);


