// let b = ['1', '2', '3', '4', '5', '6']
// let a = new Set()



// a.add('e')
// a.add('r')
// a.add('i')
// a.add('k')
// a.add('t')
// a.add('h')
// a.add('e')
// a.add('b')
// a.add('e')
// a.add('s')
// a.add('t')

// console.log(a)




// let a = new Set();
// let b = [1, 2, 3, 4, 5];
// let btn1 = document.querySelector('.btn1');
// let inputText = document.querySelector('.text1');
// btn1.onclick = function () {
// 	let userValue = +inputText.value;
// 	console.log(typeof userValue)
// 	console.log(b)
// 	let n = b.includes(userValue);
// 	document.querySelector('.out1').innerHTML = `${checkValue(userValue)}`;

// 	function checkValue() {
// 		console.log(n);
// 		if (n === true) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 		// return;
// 	}
// }

// let btn2 = document.querySelector('.btn2')
// let g = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// btn2.onclick = () => {
// 	for (let b2 of g) {
// 		if (g[b2] > 5) {
// 			console.log(g[b2])
// 		}
// 	}
// }


let btn3 = document.querySelector('.btn3')
let inp = document.querySelector('.inp')
let out2 = document.querySelector('.out2')
let b = [1, 2, 3, 4, 5]
btn3.onclick = () => {
	let userValue = +inp.value
	b.push(userValue)
	console.log(b)
}




