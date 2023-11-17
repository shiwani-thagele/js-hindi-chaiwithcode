//  syntax -> 
//  switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
//for duplicate shift+alt+ down arrow key
const month = "march"
switch (month) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        //break;
    case "april":
        console.log("april");
        break;
    case "may":
        console.log("may");
        break;
    default:
        console.log("default case match");
        break;
}
//if case matched and inside case if break is not present then remaining code will execute untill next break keyword occures, and except default everything will be execute if break is nt present 

//numbers mostly used 