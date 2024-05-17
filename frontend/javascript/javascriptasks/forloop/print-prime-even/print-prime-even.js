// //print
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//   {
//     if (i % 2 === 0) {
//         console.log(i);
//     }}
//     {

//     }
// }

for (let i = 1; i <= 100; i++) {
    let Prime = 1;
    for (let j = 2; j < i; j++) 
        {
        if (i % j === 0) {
            Prime =0;
            break;
        }
    }
    if (Prime) {
        console.log(i);
    }
}