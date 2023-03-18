//Sum Zero problem : method1
//Time complexity : O(n^2)
function sumZeroproblem(array) {
	for(let i=0; i<array.length; i++) {
		for(let j=i; j<array.length; j++) {
			if(array[i] + array[j] == 0) {
				return [array[i], array[j]];
                
			}
		}
	}
}
const res = sumZeroproblem([-5,-4,-3,-2,-1,1,2,3,4]);
console.log(res);
