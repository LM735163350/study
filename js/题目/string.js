// function revertString (str){
//     return str.split('').reverse().join('')
// }
// const str = revertString('1234')
// console.log(str)

// 回文
// function isHuiwen(str){
//    return str.split('').reverse().join('') === str
// }
// console.log(isHuiwen('1211'))

// function isHuiwen(str){
//     const strLen = str.length
//     for(let i = 0; i<strLen/2;i++){
//         if(str[i] !== str[strLen-1-i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(isHuiwen('yessey'))


// 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

function isHuiWen(str){
    let i = 0
    let j = str.length-1
    while(i<j && str[i] === str[j]){
        i++;
        j--
    }
    if(isMatch(i+1, j)){
        return true
    }
    if(isMatch(i, j+1)){
        return true
    }

    function isMatch(i, j){
        while(i<j){
            if(str[i] !== str[j]){
                return false
            }
            i++;
            j--
        }
        return true
    }
    return false
}
console.log(isHuiWen('avca'))
