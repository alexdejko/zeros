module.exports = function getZerosCount(number) {
  // your implementation
	let num = number
	let tmp = num;
	let count = 0;
	let pow = 1;
	while (tmp>=1){
		tmp = Math.floor(num/Math.pow(5,pow));
		count = count + tmp;
		pow++;
	}
	return count;
}
