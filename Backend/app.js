// // //creating a server
// const http = require("http");
// const os =require("os");
// console.log(os.type());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.release());
// console.log(os.uptime());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.cpus());
// console.log(os.networkInterfaces());
// const fs =require("fs");
// const { create } = require("domain");
// // fs.mkdir("demo",(err)=>{
// //     if(err){
// //         console.log("error",err)
// //     }
// //     else{
// //         console.log("Created sucessfully")
// //     }
// // })
// // fs.rmdir("demo", (err) => {
// //   if (err) {
// //     console.log("error while removing the folder", err);
// //   } else {
// //     console.log("removed successfully");
// //   }
// // });
// //folder create
//     fs.mkdir("demo2",(err)=>{
//             if(err){
//                 console.log("error",err)
//             }
//             else{
//                 console.log("Created sucessfully")
//             }
//         })

// //file creation
// fs.appendFile("demo2Content.txt","heloo hi",(err)=>{
// if(err){
//     console.log("error found");
// }
// else{
//     console.log("file created sucessfully");

// }
// }

// )
// fs.readFile("demo2Content.txt",(err,data)=>{
//     if(err){
//         console.log("file not found",err);
//     }
//     else{
//         console.log(data.toString(),"file read sucessfully ");
//     }
// })
// fs.rename(
//     'demo2Content.txt',
//     'demo3Content.txt',
//     () => {
//         console.log("\nFile Renamed!\n");
//     });
//     const path = './demoContent.txt';


   


// http.createServer(function(req,res){
// res.write("server is live hi hello")
// res.end();
// }).listen(3000);





const http = require("http");
const os = require("os");
const fs = require("fs");

//  os module
console.log("OS Type:", os.type());
console.log("OS Platform:", os.platform());
console.log("OS Architecture:", os.arch());
console.log("OS Release:", os.release());
console.log("OS Uptime:", os.uptime(), "seconds");
console.log("Total Memory:", os.totalmem(), "bytes");
console.log("Free Memory:", os.freemem(), "bytes");
console.log("CPU Info:", os.cpus());
console.log("Network Interfaces:", os.networkInterfaces());

// Create a directory 
fs.mkdir("demo4", (err) => {
    if (err) {
        console.error("Error creating directory:", err);
    } else {
        console.log("Directory 'demo2' created successfully.");
    }
});

// Create and write 
fs.appendFile("demo2Content.txt", "hello hi", (err) => {
    if (err) {
        console.error("Error creating file:", err);
    } else {
        console.log("File 'demo2Content.txt' created successfully.");
    }
});

// Read the contents 
fs.readFile("demo2Content.txt", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("File content:", data.toString());
    }
});

// Rename 
fs.rename('demo2Content.txt', 'demo3Content.txt', (err) => {
    if (err) {
        console.error("Error renaming file:", err);
    } else {
        console.log("File renamed to 'demo3Content.txt' successfully.");
    }
});

//delete
fs.unlink('demo3Content.txt', (err) => {
    if (err) {
        console.error("Error deleting file 'demoContent.txt':", err);
    } else {
        console.log("File 'demoContent.txt' deleted successfully.");
    }
});

//server
http.createServer((req, res) => {
    res.write("Server is live, hi hello");
    res.end();
}).listen(3000) ;
