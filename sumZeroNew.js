//Sum Zero problem : method2
//Time complexity : O(n)
function findSumZeroProblem(array) {
    let left = array[0];
    let right = array.length-1;
    while(left<right) {
        let sum = array[left] + array[right];
        if(sum == 0) {
            return [array[left], array[right]];
        }
        else if(sum>0) {
            right--;
        }
        else{
            left++;
        }
    }
}

const res = findSumZeroProblem([-5,-4,-3,-2,-1,1,2,3,4]);
console.log(res);