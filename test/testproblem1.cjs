{inventory}equire ('../inventory.js')
{problem1} equire ('../problem1.cjs')

const result = problem1(inventory);

console.log(`Car 33 is a {result.car_year}

{result.car_make}

{result.car_model}`);

