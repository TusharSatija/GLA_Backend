let arr=[3,1,2,3,4,5,3,3,3,3,3,3];

let num=arr.find((data)=>data==3)
console.log(num);

let sq=arr.map((data)=>data*data);
console.log(sq);

let f=arr.filter((data)=>data!=3)
console.log(f);