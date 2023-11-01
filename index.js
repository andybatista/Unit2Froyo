
//Prompt upon opening website "Enter list of Froyo Flavors"

const froyoOrdered = prompt(`Please enter list of Froyo Flavors`);
const array= froyoOrdered.split(",");
console.log(array);

// Input will be "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
//Browser console will show table listing of each flavor they ordered

let vanilla=0;
let coffee=0;
let strawberry=0;
for(let i=0; i< array.length;i++) 
    if (array[i] == 'vanilla'){
        vanilla++;
    }
    for(let i=0; i< array.length;i++) 
        if (array[i] == 'coffee'){
            coffee++;
        }
        for(let i=0; i< array.length;i++) 
            if (array[i] == 'strawberry'){
                strawberry++;
            }
        


//They ordered: 3 vanilla, two coffee, 1 strawberry froyo.

const totalOrder = {
    vanillaOrdered: vanilla,
    coffeeOrdered: coffee,
    strawberryOrdered: strawberry,
}

console.log(totalOrder);