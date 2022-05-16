/**
 * const person = new lazyMan()
 * person.sleep(2000).eat().sleep(1000).start()
 */
// 做法1
class lazyMan {
    constructor(){
        this.taskQuee = []
    }
    sleep(time){
        this.taskQuee.push(()=>{
            setTimeout(()=>{
                console.log(`sleep:${time}`)
                this.next()
            }, time)
        })
        return this
    }
    eat(){
        this.taskQuee.push(()=>{
            console.log(`eat`)
            this.next()
        })
        return this
    }
    start() {
        this.next()
    }
    next() {
        if(this.taskQuee.length) {
            this.taskQuee.shift()()
        }
    }
}

// 做法2
class lazyMan1 {
    constructor(name){
        this.taskQuee = []
        this.named(name)
        Promise.resolve().then(()=>{
            this.start()
        })
    }
    sleep(time){
        this.taskQuee.push(()=>{
           return new Promise((resolve)=>{
               setTimeout(() => {
                    console.log(`sleep:${time}`)
                    resolve()
               }, time);
            })
        })
        return this
    }
    named(name){
        this.taskQuee.push(()=>{
            return new Promise((resolve)=>{
                console.log(`my name is ${name}`)
                resolve()
             })
         })
    }
    eat(){
        this.taskQuee.push(()=>{
            return new Promise((resolve)=>{
                console.log(`eat`)
                resolve()
             })
         })
        return this
    }
    start() {
        this.taskQuee.reduce((pre, next)=>{
          return pre.then(next)
        },Promise.resolve())
    }
}


const person = new lazyMan1('test')
// person.sleep(3000).eat().sleep(1000).start()
person.sleep(3000).eat().sleep(3000).eat().sleep(3000).eat()