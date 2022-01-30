
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
  let args = arguments;
  
    if(args.length === 0) {
        return newArr;
    }

    matrix.map(function(item, index) {

        if(index % 2 === 0){
            newArr.push(...item)
        } else {
            newArr.push(...(item.reverse()))
        }
    })

    return newArr;
  // return [];
}
