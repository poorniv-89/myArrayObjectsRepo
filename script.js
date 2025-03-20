//Part 3: Feeling Loopy 
console.log("--------------------part1 feeling loopy upgraded 2.0---------------------- ")
// const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// let cells = []; //storing the data in an array
// let cellVal = "";
// let commas = 0;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === ',') {
//         // if char is a comma, do this
//         cells.push(cellVal);
//         cellVal = "";
//         commas++;
//     } else if (str[i] === '\n') {
//         //If char is a "\n", do this\
//         cells.push(cellVal);
//         console.log(cells[0],cells[1],cells[2],cells[3]);
//         commas = 0;
//         cellVal = "";
//         cells = [];
//     } else {
//         // any other char
//         if (commas == 0) {
//             // if 0 commas
//             cellVal += str[i];
//         } else if (commas == 1) {
//             // if 1 commas
//             cellVal += str[i];
//         } else if (commas == 2) {
//             // if 2 commas
//             cellVal += str[i];
//         } else {
//             // if 3 or more
//             cellVal += str[i];
//         }
//     }

//     if (i === str.length - 1) {
//         cells.push(cellVal); // if index number is the same as length of string
//         console.log(cells[0],cells[1],cells[2],cells[3]); //To dis
//     }
// }

const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let val = [];
val = str.split("\n");
let data = [];
for (let row of val) {
    data = row.split(",");
    console.log(data.join(" "));


}

console.log("----------------------------Part2 Expanding Functionality-----------------------------------------")
let cellData = "";
let commas1 = 0;
let columns = []; // array to hold each celldata
let rows = []; // array to hold the column array 

for (i = 0; i < str.length; i++) {
    if (str[i] === ',') {
        columns.push(cellData); //pushes celldata to column array
        cellData = "";
        commas1++;
    }
    else if (str[i] === '\n') {
        columns.push(cellData);
        rows.push(columns); // pushes columns  to rows array 
        columns = [];
        cellData = "";
        commas1 = 0;
    }
    else {
        // any other char
        if (commas1 == 0) {
            // if 0 commas
            cellData += str[i];
        } else if (commas1 == 1) {
            // if 1 commas
            cellData += str[i];
        } else if (commas1 == 2) {
            // if 2 commas
            cellData += str[i];
        } else {
            // if 3 or more
            cellData += str[i];
        }
    }
    if (i === str.length - 1) { //to push the last celldata to columns and column to rows
        columns.push(cellData);
        rows.push(columns);
    }
}
console.log(rows);

console.log("------------------part 3Transforming data-------------");

const rowObjects = [];
const header = [];



for (let i = 0; i < rows[0].length; i++) { //Getting the keys for heading
    header.push(rows[0][i].toLowerCase());
}
for (let i = 1; i < rows.length; i++) {
    const objectData = {}; //creating a new object for every row
    for (let j = 0; j < rows[i].length; j++) {
        objectData[header[j]] = rows[i][j];
    }
    rowObjects.push(objectData);  //Adding the objects array in an array
}

console.log(rowObjects);


console.log("-------------------------Part 4: Sorting and Manipulating Data-----------------------------");

rowObjects.pop(); //Removes the last element from the sorted array.
console.log(rowObjects);
rowObjects.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" }); //inserting objects at index 1
rowObjects.splice(rowObjects.length, 0 ,{ id: "7", name: "Bilbo", occupation: "None", age: "111" });//inserting objects to the end of the array
console.log(rowObjects);
//Finding the average age of the group 
let count = 0;
let totalAge = 0;
for ( let i =0; i<rowObjects.length; i++){
    let valueAge = parseInt(rowObjects[i].age);
    totalAge += valueAge;
    count++;
}
let averageAge = totalAge/count;
console.log(`Total age of ${count} people is ${totalAge} and the average age is  ${averageAge}`);