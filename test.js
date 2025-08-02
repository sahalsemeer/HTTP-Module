const http = require('http')

const server = http.createServer(function (request,response){
    if (request.url === "/"){
        response.write("Home Page")
        response.end()
    }
    if(request.url === "/about"){
        response.write(JSON.stringify([{
            name:"Shal",age:22,place:"Mahe"
        }]))
        response.end()
    }
}
)


server.listen(3000)
console.log("Listening to 3000");