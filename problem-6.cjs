function problem6(inventory){

let BMWAndAudiCars = [];
   

 {
       
 for (let i = 0; i < inventory.length; i++) 
{
         
   if (inventory[i].car_make === 'BMW' || inventory[i].car_make === 'Audi')
 {
              
  BMWAndAudiCars.push(inventory[i]);
 
           }
   
     }

    }

    return BMWAndAudiCars
}

