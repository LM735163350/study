const arr = [1, 2, 5, 7]
const target = 8
function getSumVal (list, target) {
    const map = new Map();
    const listLen = list.length;
    for(let i=0; i<listLen; i++) {
        const diffVal = target - list[i]
        const diffIndex = map.get(diffVal)
        if(diffIndex !== undefined) {
            return [i, diffIndex]
        }
        map.set(list[i], i)
    }
}
const indexArr = getSumVal(arr, target)
console.log(indexArr)