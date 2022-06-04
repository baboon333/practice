// jQuery each 함수를 사용하여 배열의 짝수 합 구하기

var result = 0;
var array = [03, 12, 33, 47, 51, 68, 70, 88];

$.each(array, function(index, value) {
  
        if (value % 2 == 0) {
            result += value;
        }
  
    });


console.log(result);