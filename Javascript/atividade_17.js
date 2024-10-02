// string ñ ordena correto!
// const sortNumbers = (array) => {
//   let sortedArray = [...array].sort((a, b) => a - b)

//   return sortedArray
// }


/* Bubble sort */
const sortNumbers = (array) => {
  let swap
  
  do {
    swap = false
    for(let i = 0; i < array.length - 1; i++){
      console.log(i, ':', array[i], array[i+1]);
      
      if(array[i] > array[i+1]){
        [array[i], array[i+1]] = [array[i+1], array[i]]
        swap = true
      }
    }
  } while (swap);
  return array
}
       
console.log(sortNumbers([4,9,1,5,3,10]))
console.log(sortNumbers(['b','k','t','e','a','m','c','o','p','i','f']))
