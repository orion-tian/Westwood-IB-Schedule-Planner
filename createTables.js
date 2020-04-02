//Copyright (c) 2019 Orion Wuji Tian

var semester= ["Subjects", "Fall", "Spring","IB Exam Option"];
var years = ["Freshmen", "Sophmore", "Junior", "Senior"]
var courses = ["1. English", 
               "2. Foreign Language", 
               "3. Social Studies", 
               "4. Science", 
               "5. Math", 
               "6. IB Elective", 
               "7. IB Core", 
               "8. Non-IB Elective"];


//create cell and row functions
function createCell(type, text, id)
{
    var cell = document.createElement(type);
    var words = document.createTextNode(text);
    cell.appendChild(words);
    document.getElementById(id).appendChild(cell);
}

function createRow(name, id)
{
    var row = document.createElement("TR");
    row.setAttribute("id", name);
    document.getElementById(id).appendChild(row);
}


//Submit and Clear Button Table
//create Row
createRow("SubmitRow", "SubmitAndClearButtons")

//Stretching Cell
var stretchCell = document.createElement("TD");
stretchCell.setAttribute("width", "523px")
var text = document.createTextNode('');
stretchCell.appendChild(text);
document.getElementById("SubmitRow").appendChild(stretchCell);

//Clear Button Cell
createCell("TD", " ", "SubmitRow")

//Submit Button Cell
createCell("TD", " ", "SubmitRow")


//Overall Schedule Table
//create rows
for(var i = 0; i<courses.length+2;i++)
{  
    createRow("scheduleRow" + i, "OverallSchedule")
}

//Create 1st Row
//1st Cell
createCell("TH", " ", "scheduleRow0")
//Name of each year cells
for(i = 0; i<years.length;i++)
{
    var grade = document.createElement("TH");
    grade.setAttribute("colspan", 2)
    var nameOfGrade = document.createTextNode(years[i]);
    grade.appendChild(nameOfGrade);
    document.getElementById("scheduleRow0").appendChild(grade);
}
//Last Cell
createCell("TH", " ", "scheduleRow0")
   
//Create Second Row
//Subjects Cell
createCell("TH", semester[0], "scheduleRow1")
//Fall and Spring Semester Cells
for(i = 0; i<years.length;i++)
{
    createCell("TH", semester[1], "scheduleRow1")
    createCell("TH", semester[2], "scheduleRow1")
}
//IB Exam Option Cell
createCell("TH", semester[3], "scheduleRow1")

//Create rest of rows
var rowIndex = 2;
var numColumn = years.length*2+1;
for(var j = 0; j<courses.length;j++)
{
    createCell("TD", courses[j], "scheduleRow" + rowIndex)

    for(var l = 0; l<numColumn; l++)
    {
        createCell("TD", " ", "scheduleRow" + rowIndex)
    }
    rowIndex++;    
}


//Choice Selection Table
    var numMaxButtons = 3;
    //Create Rows
    for(i = 0; i<subjects.length; i++)
    {  
        createRow("choiceRow" + i, "Selection")
    }
    //Populate Rows
    for(j = 0; j<subjects.length; j++)
    {
        //1st cell where subject goes
        createCell("TD", " ", "choiceRow" + j)
        
        //Button Cells
        for(l = 0; l<numMaxButtons; l++)
        {
            createCell("TD", " ", "choiceRow" + j)
        }  
    }