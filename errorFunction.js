//Copyright (c) 2019 Orion Wuji Tian

function errorFunction(output, subject)
{
    for(var i = 9; i<13; i++)
    {
        output[i] = "error";
    }
    output.Level = "error"
    document.getElementById("OverallSchedule").rows[findSubjectRow(subject)].style = "color: red"
}

function findSubjectRow(subject)
{
    for(var i = 0; i<document.getElementById("OverallSchedule").rows.length; i++)
    {
        if(document.getElementById("OverallSchedule").rows[i].cells[0].innerHTML.indexOf(subject) > 0)
        {
            return i;
            break;
        }
    }
}

function debug(name, value)
{
    document.getElementById("Debug").innerHTML = 
        document.getElementById("Debug").innerHTML + "<br>" +
        name + " = " + value
}