module.exports = function towelSort (matrix) {
    if (arguments.length == 0 || matrix.length == 0){
        return [];
    }
    let res = [];
    let odd = [];

    for (let i = 0; i<matrix.length; i++){
        for (let j = 0; j<matrix[i].length; j++){
            if (i % 2 == 0){
                res.push(matrix[i][j]);
            }else{
                odd.push(matrix[i][j]);
                if (odd.length == matrix[i].length){
                    odd.reverse();
                    res.push(...odd);
                    odd = [];
                }
            }
        } 
    }

  return res;
};
