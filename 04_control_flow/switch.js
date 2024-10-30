switch (key) {
    case value:
        
        break;

    default:
        break;
}

const month = 3

switch (month) {
    case 1:
        console.log("Jan");
        break;  
    case 2:
        console.log("Fan");
        break;
    case 3:
        console.log("March");
        break; // in this case if the break 
        // has not been written or commented out the
        // after 3rd case everything would have been executed
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default");
        break;
}


const month1 = "march" // if its string then 
switch (month1) {
    case "jan":
        console.log("jan");
        break;
    case "feb":
        console.log("feb");
        break;

    default:
        console.log("Default");
        break;
}