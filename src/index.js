
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (!matrix) return [] 
  else {
   let arr = [];
   matrix.forEach((item, i) =>{
     if(i % 2 == 0){
       item.forEach(element => {
         arr.push(element);
       });
     }else{
       item = item.reverse();
       item.forEach(element => {
         arr.push(element);
       });
     }
   })
   return arr;
    }
}
