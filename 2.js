function exampleFunction (number) {
    if (number % 3 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(exampleFunction(5))

function getMinLength(a,k){
    let n = a.length;
    let stack = []
    let count = 0;

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && a[i] * stack[stack.length-1] <= k)
         {
            a[i] *= stack.pop();
        }
        stack.push(a[i]);
    } while (stack.length > 0) {
        stack.pop();
        count++;
    }
    return count;
}
console.log(getMinLength(5,11))
