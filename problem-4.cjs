function problem4(inventory)
 {
   
 let caryearList =[];
 
   for (i=0; i<inventory.length; i++)
{
       
       caryearList.push(inventory[i].car_year)
  
  }


    return caryearList;

}