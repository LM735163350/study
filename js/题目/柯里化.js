function currying(fn, ...rest1){
    return function(...rest2){
        fn.apply(null, [...rest1, ...rest2])
    }
}
function say1(name, age, sex){
    console.log(name,age,sex)
}
function say2(name, age, sex){
    console.log(name,age,sex)
}
const say1Fun = currying(say1, '张三')
say1Fun(11, '男')
say1Fun(12, '女')
