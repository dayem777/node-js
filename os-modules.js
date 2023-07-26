// // const names=require('./names')
// // console.log(names)
// const data=require('./alternative-flavor')
// console.log(data.singlePerson)
// require('./mind-gernad')
const  os =require('os')
const user = os.userInfo()
console.log(user)
console.log(`The system Uptime is ${os.uptime()} s`)
const currentOs ={
name:os.type(),
release:os.release(),
totalmem:os.totalmem(),
freemem:os.freemem()
}
console.log(currentOs)