//Copyright (c) 2019 Orion Wuji Tian

//create subject Error and Exception Fields
for (var i = 0; i<subjects.length; i++)
{
    var errorField = document.createElement("P");
    errorField.setAttribute("id", subjects[i] + "Error");
    errorField.setAttribute("style", "color: red");
    document.getElementById("ErrorsAndExceptions").appendChild(errorField);
    
    var exceptionField = document.createElement("P");
    exceptionField.setAttribute("id", subjects[i] + "Exception");
    exceptionField.setAttribute("style", "color: blue");
    document.getElementById("ErrorsAndExceptions").appendChild(exceptionField);
}

//create course level and SL error and exception fields
var levelErrorField = document.createElement("P");
levelErrorField.setAttribute("id",  "LevelError");
levelErrorField.setAttribute("style", "color: red");
document.getElementById("ErrorsAndExceptions").appendChild(levelErrorField);

var levelExceptionField = document.createElement("P");
levelExceptionField.setAttribute("id", "LevelException");
levelExceptionField.setAttribute("style", "color: blue");
document.getElementById("ErrorsAndExceptions").appendChild(levelExceptionField);

var levelExceptionField = document.createElement("P");
levelExceptionField.setAttribute("id", "SLError");
levelExceptionField.setAttribute("style", "color: red");
document.getElementById("ErrorsAndExceptions").appendChild(levelExceptionField);

var levelExceptionField = document.createElement("P");
levelExceptionField.setAttribute("id", "SLException");
levelExceptionField.setAttribute("style", "color: blue");
document.getElementById("ErrorsAndExceptions").appendChild(levelExceptionField);
