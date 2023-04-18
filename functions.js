//You manage a grocery store and need to keep track of the inventory of various items. 
//You will use arrays to store the data and various functions to manipulate and analyze the data. 

//Create an array containing the names of all items in the inventory maximum of 10

let arr=["Apple","orange","banana","pawpaw","avocado","berry","mango","lemon","melon","passion"]

//Create a separate array with the corresponding stock quantities of each item maximum of 10
let quantity=[5,10,15,25,20,50,25,30,35,40]

//Write a function to add a new item to the inventory, updating both arrays.



function AddItems(){
  arr.push("kiwi")
  console.log(arr)
  quantity.push(40)
  console.log(quantity)
}
AddItems()

//Write a function to update the stock quantity of an existing item.

function update(itemName,newquantity){
  let index=arr.indexOf(itemName);
  if(index !==-1){
    quantity[index]=newquantity;
    return (`quantity of ${itemName} updated to ${newquantity}`);

  }  else{
    return "item not found"
  }
}
update("kiwi", 25);

console.log(quantity)



//Write a function to calculate the total number of items in the inventory.
function totalItems(){
  let total =0 ;
  for(let i=0;i<quantity.length;i++){
  total +=quantity[i]
    
  }
return total;
  
}
console.log(totalItems());
//Write a function to find the item with the lowest stock quantity.

function loweststock(){
  let loweststock=quantity[0]
  let lowestIndex=0
for(let i=0;i<quantity.length;i++){
if(quantity[i]<loweststock){
  loweststock=quantity[i]
  lowestIndex=i
}

}
return arr[lowestIndex]
}
console.log(loweststock())
