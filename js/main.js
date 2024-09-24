//1-masala

// function multiples(m, n) {
//   let arr = [];

//   for (let i = 1; i <= m; i++) {
//      arr.push( n * i );
//   }
//   return arr
// }

// console.log(multiples(3,5))

//2-masala


function oddOne(arr){
    let count = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 == 1){
            count++
            return i
        }
        
    }
    if(count == 0){
        return -1
    }
}


let arr = [2, 4, 6, 12, 10];//3

console.log(oddOne(arr));