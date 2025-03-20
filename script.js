
console.log("--------------------part1 feeling loopy upgraded 2.0---------------------- ")

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
rowObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" }); //inserting objects at index 1
rowObjects.splice(rowObjects.length, 0, { id: "7", name: "Bilbo", occupation: "None", age: "111" });//inserting objects to the end of the array
console.log(rowObjects);
//Finding the average age of the group 
let count = 0;
let totalAge = 0;
for (let i = 0; i < rowObjects.length; i++) {
    let valueAge = parseInt(rowObjects[i].age);
    totalAge += valueAge;
    count++;
}
let averageAge = totalAge / count;
console.log(`Total age of ${count} people is ${totalAge} and the average age is  ${averageAge}\n`);

console.log("-----------------------Part 5: Full Circle------------------------------------------\n")

const dataArray = [];
for (let i = 0; i < rowObjects.length; i++) {

    let tempArrayData = rowObjects[i];
    dataArray.push(Object.entries(tempArrayData)); //pushing every object into an array

}
const finalArray = dataArray.flat(2); // flattening  the  3D array to one dimensional array
let finalStr = "";
let ageCounter = 1;
let idCounter = 0;
let nameCounter = 0;
let occupationCounter = 0;
let firstData ="";
for (let i = 0; i < finalArray.length; i++) { //looping throught the final array to separate the columns
    if (finalArray[i] == "id") {
        
        if (idCounter === 0) { //checking if the data is a header 
            idCounter++; 
            finalStr += finalArray[i]+",";
            firstData += finalArray[i+1]+","; //adding the first row data to a temporary string variable
        }
        else{
            finalStr += finalArray[i + 1] + ","; //adding the data to the final string if its not header or first row
        }
    }
    else if (finalArray[i] === "name") {
        if (nameCounter === 0) {
            nameCounter++;
            finalStr += finalArray[i]+",";
            firstData +=finalArray[i+1]+",";
        }
        else {
            finalStr += finalArray[i + 1] + ",";
        }
    }
    else if (finalArray[i] === "occupation") {
        if (occupationCounter === 0) {
            occupationCounter++;
            finalStr += finalArray[i]+",";
            firstData +=finalArray[i+1]+",";
        }
        else {
            finalStr += finalArray[i + 1] + ",";
        }
    }
    else if (finalArray[i] === "age") {
        if (ageCounter === 1) {
            ageCounter++;
            finalStr += finalArray[i]+"\\n"; //adding new line character to mark the end of line
            firstData += finalArray[i+1];
            finalStr +=firstData+"\\n";
        }
        else if (finalArray[i] === "age" && ageCounter < rowObjects.length) { //checking the length to see if \n to be added or not
            finalStr += finalArray[i + 1];
            finalStr += "\\n";
            ageCounter++;
        }
        else {
            finalStr += finalArray[i + 1];
        }
    }

}

console.log(`The final data in CSV format is: ${finalStr}`);