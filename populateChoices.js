//Copyright (c) 2019 Orion Wuji Tian

//Creating the Buttons Functions
function createToggle(id, toggle)
{
    var l = document.createElement("LABEL");
    l.setAttribute("class", "switch")

    var i =  document.createElement("INPUT")
    i.setAttribute("type", "checkbox")
    i.setAttribute("id", id) 
    i.setAttribute("onchange", "ToggleFunction(this)") 

    var s =  document.createElement("SPAN")
    s.setAttribute("class", toggle) 

    l.appendChild(i)
    l.appendChild(s)

    return l;
}

function createDropDownList(id, options)
{
    s = document.createElement("SELECT");
    s.setAttribute("id", id);
    s.setAttribute("onchange", "PullDownFunction(this)");

    for(var i = 0;i<options.length;i++)
    {
        var o = document.createElement("OPTION");
        o.setAttribute("value", options[i])
        var t = document.createTextNode(options[i]);
        o.appendChild(t);
        s.appendChild(o);    
    }
    return s;
}

//Populate the Tables
for(var row = 0; row<subjects.length; row++)
{
    var groupNumber = row + 1
    
    document.getElementById("Selection").rows[row].cells[0].innerHTML = "Group " + groupNumber + ": " + options.Subjects[row].Subject;

    for(var col = 0; col<options.Subjects[row].numOfButtons; col++)
    {
        document.getElementById("Selection").rows[row].cells[col+1].innerHTML = options.Subjects[row].Button[col].Name + ":  ";
        var id = options.Subjects[row].Subject + "."  + options.Subjects[row].Button[col].Name

        if(options.Subjects[row].Button[col].ButtonType === "Toggle")
        {
            document.getElementById("Selection").rows[row].cells[col+1].appendChild(createToggle(id, "SLorHLSlider")) // slider(choices)
            choices[id] = ["Toggle", "false"]
        }
        else if(options.Subjects[row].Button[col].ButtonType === "DropDownList")
        {
            document.getElementById("Selection").rows[row].cells[col+1].appendChild(createDropDownList(id, options.Subjects[row].Button[col].ButtonChoices))
            choices[id] = ["DropDownList", document.getElementById(id).value]
        }
    }
}


//Creating the Clear Button
var clear = document.createElement("P");
clear.setAttribute("class", "button");
clear.setAttribute("id", "Clear");
clear.setAttribute("onclick", "clearFunction()");
t = document.createTextNode("Clear");
clear.appendChild(t);
document.getElementById("SubmitAndClearButtons").rows[0].cells[1].appendChild(clear);

//Creating the Submit Button
var submit = document.createElement("P");
submit.setAttribute("class", "button");
submit.setAttribute("id", "Submit");
submit.setAttribute("onclick", "submitFunction()");
var submitText = document.createTextNode("Generate");
submit.appendChild(submitText);
document.getElementById("SubmitAndClearButtons").rows[0].cells[2].appendChild(submit);