// 1
document.write('<h1>------------ 1:</h1>');

var gen = function(start =0, step=1) {
    return function() {return start += step }
}

var seq1 = gen(10, 3);
var seq2 = gen(2, 33);
var seq3 = gen(15, -2);


var seq1_str = seq1() + ", "  + seq1() + ", "  +  seq1();
document.write('<h2>Seq1: ' +seq1_str+ '</h2>');

var seq2_str = seq2() + ", "  + seq2() + ", "  +  seq2() + ", "  +  seq2();
document.write('<h2>Seq2: ' +seq2_str+ '</h2>');

var seq3_str = seq3() + ", "  + seq3() + ", "  +  seq3() + ", "  +  seq3() + ", "  +  seq3();
document.write('<h2>Seq3: ' +seq3_str+ '</h2>');

// console.log(seq1(), seq1(), seq1());
// console.log(seq2(), seq2(), seq2(), seq2());
// console.log(seq3(), seq3(), seq3(), seq3(), seq3());


//2
document.write('<h1>------------ 2:</h1>');

function take(gen_f, cnt) {
    let res_array = new Array();
    for (i = 0; i < cnt; i++) {
        res_array.push(gen_f());
    }
    return res_array
}

// var seq1_str = seq1() + ", "  + seq1() + ", "  +  seq1();
document.write('<h2>take result1: ' +take(seq3, 10).join('; ')+ '</h2>');
document.write('<h2>take result2: ' +take(seq2, 5).join('; ')+ '</h2>');
document.write('<h2>take result2: ' +take(seq1, 2).join('; ')+ '</h2>');

// console.log(take(seq3, 10));
// console.log(take(seq2, 5));



// 3
document.write('<h1>------------ 3:</h1>');

var persons = [
        {name: 'Mick', age: '22', country: 'UK'},
        {name: 'Martha', age: '29', country: 'UK'},
        {name: 'Bob', age: '45', country: 'UA'},
        {name: 'Polly', age: '36', country: 'US'},
        {name: 'Fred', age: '70', country: 'BR'},
]

// console.log(persons[4]['age']);

 function pluck_custom(obj, field) {
     let res_array = new Array();
     for (i = 0; i < obj.length; i++) {
        res_array.push(obj[i][field]);
     }
     return res_array;
 }

 document.write('<h2>pluck_custom result1: ' +pluck_custom(persons, 'country').join(', ')+ '</h2>');
 document.write('<h2>pluck_custom result2: ' +pluck_custom(persons, 'name').join(', ')+ '</h2>');
 document.write('<h2>pluck_custom result3: ' +pluck_custom(persons, 'age').join(', ')+ '</h2>');



// 4
document.write('<h1>------------ 4:</h1>');

var arr1 =[1, 4, 55, -100, -56];
var arr2 =[0, 4, 65, -150, -56, 666];
var arr3 =[21, 7, 55, 100, 756, 666, 3];
var arr4 =[33, 4, 0, -100, -56, 666, 23, -45];

function fn1(val = 0) {
    return ++val
}

function fn2(val = 0) {
    return val * 10
}

function fn3(val = 0) {
    return val + 666
}

function fn4(val = 0) {
    return '!!!' + val
}

function map(fun, arr) {
    let res_array = new Array();
    for (i = 0; i < arr.length; i++) {
        res_array.push(fun(arr[i]));
    }
    return res_array
} 

// console.log(map(fn1, arr1));

document.write('<h2>map result1: ' +map(fn1, arr1).join('; ')+ '</h2>');
document.write('<h2>map result2: ' +map(fn4, arr3).join('; ')+ '</h2>');
document.write('<h2>map result3: ' +map(fn3, arr2).join('; ')+ '</h2>');
