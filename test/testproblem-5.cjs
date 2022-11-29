let {inventory} = require('../inventory.js')

let {problem4} = require('../problem4.cjs')
let {problem5} = require('../problem5.cjs')

const yearList = problem4(inventory);

const yearOlderThan2000 = problem5(yearList);

console.log(yearOlderThan2000.length);

