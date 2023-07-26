// const http=require('http')
// const server=http.createServer((req,res)=>{
// res.write("hello baby ")
// res.end();


// })
// server.listen(5000)



const http=require('http')

const server=http.createServer((req,res)=>{
if (req.url==='/'){

    res.end('welcome to our page')
}
if (req.url==='/about'){

    res.end('welcome to content')
}
res.end(`<h1>we cant do theat shit</h1><p>you idiot</p>`)
})
server.listen(5000)
