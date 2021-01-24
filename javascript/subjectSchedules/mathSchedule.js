//Copyright (c) 2019 Orion Wuji Tian

//Math Functions
var mathCatalog = allCatalogs.Math
var mathOutput = {9: '', 10: '', 11: '', 12: '', Level:''}

function mathSchedule()
{
    var tmp = choices["Math.Topic"]
    var topic = tmp[1]
    tmp = choices["Math.Ending Level"]
    var end = parseInt(tmp[1])
    tmp = choices["Math.Level"]
    var level = tmp[1]
    var math = mathCatalog[topic]

    var pointer = 12;

    if(topic === "Analysis")
    {
        if(end == 1)
        {
            document.getElementById("MathError").innerHTML = "Math Error: Analysis 1 cannot be SL or HL."
                errorFunction(mathOutput, "Math")
        }
        else
        {
            for(var i = math.length-1; i>=0; i--)
            {
                if(math[i].Name.indexOf(end)>0)
                {
                    mathOutput[pointer] = math[i].Name;
                    mathOutput[pointer-1] = math[i-1].Name;
                    mathOutput[pointer-2] = math[i-2].Name;
                    mathOutput[pointer-3] = math[i-3].Name;
                    break
                }
            }
            if(level === "true")
            {
                mathOutput.Level = topic + " HL"
                if(end == 2)
                {
                    document.getElementById("MathError").innerHTML = "Math Error: Only Analysis 3 and higher can HL."
                    errorFunction(mathOutput, "Math")
                }
                /*if(end == 4)
                {
                    document.getElementById("MathException").innerHTML = "Math Alternative: You may skip Analysis 2 to take Analysis 1 in Sophmore Year. Course Path: Algebra 2, Analysis 1, Analysis 3, Analysis 4."

                    document.getElementById("OverallSchedule").rows[findSubjectRow("Math")].style = "color: blue"
                }*/
            }
            else
            {
                mathOutput.Level = topic + " SL"
                if(end == 4)
                {
                    document.getElementById("MathError").innerHTML = "Math Error: Level 4 math can only be HL."
                    errorFunction(mathOutput, "Math")
                }
            }
        }
    }
    else
    {
        if(end == 3 || end == 4)
        {
            document.getElementById("MathError").innerHTML = "Math Error: Application does not offer a level " + end + " course."
                errorFunction(mathOutput, "Math")
        }
        else
        {
            for(var i = math.length-1; i>=0; i--)
            {
                if(math[i].Name.indexOf(end)>0)
                {
                    mathOutput[pointer] = math[i].Name;
                    mathOutput[pointer-1] = math[i-1].Name;
                    mathOutput[pointer-2] = math[i-2].Name;
                    mathOutput[pointer-3] = math[i-3].Name;
                    break
                }
            }
            if(level === "true")
            {
                mathOutput.Level = topic + " HL"
                if(end == 1)
                {
                    document.getElementById("MathError").innerHTML = "Math Error: Only Application 2 can HL."
                    errorFunction(mathOutput, "Math")
                }
            }
            else
            {
                mathOutput.Level = topic + " SL"
            }
        }
    }
}
