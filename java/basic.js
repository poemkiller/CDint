
  for (var x=0; x<=25; x++) {
        if (x === 0) {
                console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");
        }
        else {
                console.log(x + " is odd");
        }

}



const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);


const reversed = array1.reverse();
console.log('reversed:', reversed);


const arr3 = [10, 17, 9, 1, 15,];
const arr4 = [11, 12, 18, 20, 29,];

var results = [];

for (var i=0; i < arr3.length; i++) {
  results.push(arr3[i] + arr4[i])
  console.log(results)
}

var str = "abcdefoihewfojias".split('');
var nth = 2;
var replaceWith = "Z" 
for (var i = nth-1; i < str.length-1; i+=nth) {
    str[i] = replaceWith;
}
alert( str.join("") );
