

function calculate(val){
    return val*val;
}

function memoize(fn){
    let cache = {};
    return function(...args){
        const n = args[0];
        if(n in cache){
            console.log("from cache");
            return cache[n];
        }
        console.log("from calculate");
        const result = fn(n);
        cache[n] = result;
        return result;
    }
}

console.time();
const memoized = memoize(calculate);
memoized(5);
console.timeEnd();

console.time();
memoized(5);
console.timeEnd();