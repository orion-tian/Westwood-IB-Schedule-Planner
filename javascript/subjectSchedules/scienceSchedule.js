//Copyright (c) 2019 Orion Wuji Tian

//Science Functions
var scienceCatalog = allCatalogs.Science
var scienceOutput = {9: '', 10: '', 11: '', 12: '', Level:''}

function scienceSchedule()
{
    var tmp = choices["Science.Topic"]
    var topic = tmp[1]
    tmp = choices["Science.Starting Year"]
    var start = tmp[1]
    tmp = choices["Science.Level"]
    var level = tmp[1]
    
    var science = scienceCatalog[topic]
    var ninthAndTenthGrade = scienceCatalog["9thAnd10thGrade"]

    scienceOutput[ninthAndTenthGrade[0].Grade] = ninthAndTenthGrade[0].Name
    scienceOutput[ninthAndTenthGrade[1].Grade] = ninthAndTenthGrade[1].Name
    
    if(level === "true" && start === "Senior")
    {    
        document.getElementById("ScienceError").innerHTML = "Science Error: You must start in Junior year to HL science."
        document.getElementById("OverallSchedule").rows[findSubjectRow("Science")].style = "color: red"
    }
    if(science.length>2)
    {
        document.getElementById("ScienceException").innerHTML = "Science Note: " + science[1].Name + " has the pre-requisite of " + science[1].Prereq + ". Also, Computer Science is considered as a science credit only for your IB Diploma. For graduation, it is considered an elective credit."
        
        if(level === "true")
        {    
            scienceOutput[11] = science[1].Name
            scienceOutput[science[2].Grade] = science[2].Name

            scienceOutput.Level = topic + " HL"
        }
        else
        {
            if(start === "Senior")
            {    
                scienceOutput[12] = science[1].Name
            }
            else
            {
                scienceOutput[11] = science[1].Name
            }
            scienceOutput.Level = topic + " SL"
        } 
    }
    else
    {
        if(level === "true")
        {    
            scienceOutput[11] = science[0].Name
            scienceOutput[science[1].Grade] = science[1].Name

            scienceOutput.Level = topic + " HL"
        }
        else
        {
            if(start === "Senior")
            {    
                scienceOutput[12] = science[0].Name
            }
            else
            {
                scienceOutput[11] = science[0].Name
            }
            scienceOutput.Level = topic + " SL"
        }  
    }
}