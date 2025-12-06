//task1
let data = prompt("Enter some data: YYYY.MM.DD");
let year = 0;
let month = 0;
let day = 0;
switch (data.slice(0, 4)) { //2020.06.05
    case "2020":
        year = 2020;
        break;
    case '2021':
        year = 2021;
        break;
    case '2022':
        year = 2022;
        break; 
    
    case '2023':
        year = 2023;
        break;
        
    case '2024':
        year = 2024;
        break;
    case '2025':
        year = 2025;
        break;
}
switch (data.slice(5, 7)) {
    case '01':
        month = "yanuary";
        break;
    case '02':
        month = "february";
        break;
    case '03':
        month = "march";
        break;
    case '04':
        month = "april";
        break;
    case '05':
        month = "may";
        break;
    case '06':
        month = "june";
        break;
    case '07':
        month = "july";
        break;
    case '08':
        month = "august";
        break;
    case '09':
        month = "september";
        break;
    case '10':
        month = "october";
        break;
    case '11':
        month = "november";
        break;
    case '12':
        month = "december";
        break;
}
switch (data.slice(8, 10)) {
    case '01':
        day = 1;
        break;
    case '02':
        day = 2;
        break;
    case '03':
        day = 3;
        break;
    case '04':
        day = 4;
        break;
    case '05':
        day = 5;
        break;
}
console.log(day+" "+month+ " " +year+"-cu il");

//task2
let month1 = 0
switch (month1) {
    case '1':
        month = "yanuary";
        break;
    case '2':
        month = "february";
        break;
    case '3':
        month = "march";
        break;
    case '4':
        month = "april";
        break;
    case '5':
        month = "may";
        break;
    case '6':
        month = "june";
        break;
    case '7':
        month = "july";
        break;
    case '8':
        month = "august";
        break;
    case '9':
        month = "september";
        break;
    case '10':
        month = "october";
        break;
    case '11':
        month = "november";
        break;
    case '12':
        month = "december";
        break;
}
console.log(month1);