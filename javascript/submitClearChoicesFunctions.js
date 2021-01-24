//Copyright (c) 2019 Orion Wuji Tian

var allOutputs = [englishOutput, languageOutput, socialStudiesOutput, scienceOutput, mathOutput, electiveOutput]

//Toggle and Drop Down List Functions
function ToggleFunction(element)
{
    choices[element.id] = ["Toggle", document.getElementById(element.id).checked.toString()]
}

function PullDownFunction(element)
{
    choices[element.id] = ["DropDownList", document.getElementById(element.id).value];
}

//Submit and Clear Functions
function submitFunction()
{
    clearAllTables();
    clearAllErrorAndExceptionFields();
    clearOutputs();
    makeEverythingBlack()

    englishSchedule();
    languageSchedule();
    socialStudiesSchedule();
    scienceSchedule();
    mathSchedule();
    electiveSchedule();
    document.getElementById("OverallSchedule").rows[8].cells[6].innerHTML ="Theory of Knowledge 1 IB"
    document.getElementById("OverallSchedule").rows[8].cells[7].innerHTML ="Theory of Knowledge 2 IB"

    for(var row = 0; row<allOutputs.length; row++)
    {
        var pointer = 9;
        var currentOutput = allOutputs[row];
        //ouput courses
        for(var col = 1; col<document.getElementById("OverallSchedule").rows[row+2].cells.length-1; col = col+2)
        {
            document.getElementById("OverallSchedule").rows[row+2].cells[col].innerHTML = currentOutput[pointer];
            document.getElementById("OverallSchedule").rows[row+2].cells[col+1].innerHTML = currentOutput[pointer];

            pointer++;
        }
        //output course level
        document.getElementById("OverallSchedule").rows[row+2].cells[document.getElementById("OverallSchedule").rows[row+2].cells.length-1].innerHTML = currentOutput.Level;
    }

    //Check constraints
    slHLConstraint();
    gradConstraintsFunction();
    slConstraint();
}


function clearFunction()
{
    Object.keys(choices).forEach(function(key) {
        if (choices[key]) 
        {
            [t, v] = choices[key];
            if ( t === "Toggle")
            {
                document.getElementById(key).checked = false;
                choices[key] = [t, "false"]
            }
            else if (t === "DropDownList") 
            {
                document.getElementById(key).selectedIndex = 0;
                choices[key] = [t, document.getElementById(key).value]
            }
        }
    });

    clearAllTables();
    clearAllErrorAndExceptionFields();
    clearOutputs();
    makeEverythingBlack()
}

function clearAllTables()
{
    for(row = 2; row<document.getElementById("OverallSchedule").rows.length; row++)
        {
            for(var collumn = 1; collumn<document.getElementById("OverallSchedule").rows[row].cells.length; collumn++)
                {
                    document.getElementById("OverallSchedule").rows[row].cells[collumn].innerHTML = "";
                }
        }
}

function clearAllErrorAndExceptionFields()
{
    for(var i = 0; i<subjects.length; i++)
    {
        document.getElementById(subjects[i] + "Error").innerHTML = ""
        document.getElementById(subjects[i] + "Exception").innerHTML = ""
    }

    document.getElementById("LevelError").innerHTML = ""
    document.getElementById("LevelException").innerHTML = ""
    document.getElementById("SLError").innerHTML = ""
    document.getElementById("SLException").innerHTML = ""
    document.getElementById("gradConstraints").innerHTML = ""
}

function clearOutputs()
{
    for(var i = 0; i<allOutputs.length; i++)
    {
        var currentOutput = allOutputs[i];
        for(var j = 9; j<13; j++)
        {
            currentOutput[j] = " ";
        }
    }
    gradConstraints = {};
}

function makeEverythingBlack()
{
    for(var i = 0; i<document.getElementById("OverallSchedule").rows.length; i++)
    {
        document.getElementById("OverallSchedule").rows[i].style = "color: black"
    }
}
