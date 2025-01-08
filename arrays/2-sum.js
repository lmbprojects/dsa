function find2Sum(arr, target) {

    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        
        let diff = target - arr[i];
        
        if (map.has(diff)) {
            return [map.get(diff), i];
        }

        map.set(arr[i], i);
    }    
}

console.log('2Sum: ', find2Sum([1,2,3,4,5,6,7,8,9], 10));

function find2SumOptimized(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j];
            }
        }
    }
}

console.log('2Sum: ', find2Sum([1,2,3,4,5,6,7,8,9], 10));

