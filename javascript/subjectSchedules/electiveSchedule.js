//Copyright (c) 2019 Orion Wuji Tian

//Elective Functions
var electiveCatalog = allCatalogs.Elective
var electiveOutput = {9: "", 10: "", 11: "", 12: "", Level:""}

function checkOverlap()
{
    var tmp = choices["IB Elective.Topic"]
    var electiveTopic = tmp[1]
    tmp = choices["Foreign Language.Topic"]
    var languageTopic = tmp[1]
    tmp = choices["Social Studies.Topic"]
    var ssTopic = tmp[1]
    tmp = choices["Science.Topic"]
    var scienceTopic = tmp[1]

    var topics = [languageTopic, ssTopic, scienceTopic]

    for(var i = 0; i<topics.length; i++)
    {
        if(electiveTopic === topics[i])
        {
            return electiveTopic
        }
    }

    return 0;
}

function electiveSchedule()
{
    //Getting All Choice info
    var tmp = choices["IB Elective.Topic"]
    var topic = tmp[1]
    tmp = choices["IB Elective.Starting Year"]
    var start = tmp[1]
    tmp = choices["IB Elective.Level"]
    var level = tmp[1]

    var elective = electiveCatalog[topic]
    
    //Check Overlap
    if(checkOverlap() != 0)
    {
        document.getElementById("ElectiveError").innerHTML = "Elective Erro: You've already chosen this course elsewhere." 
        errorFunction(electiveOutput, "Elective");
    }
    else
    {
        if(elective[0].Prereq !== "none")
        {
            electiveOutput[9] = topic + " has pre-requisite courses you must take."
        }
        
        if(topic === " ")
        {
            document.getElementById("ElectiveError").innerHTML = "Elective Error: You have not chosen a course."
            errorFunction(electiveOutput, "Elective");
        }
        if(topic === "Latin")
        {
            if(start === "Junior")
            {
                electiveOutput[11] = elective[0].Name
            }
            else
            {
                electiveOutput[12] = elective[0].Name
            }
            if(level === "true")
            {
                electiveOutput.Level = topic + " HL"
            }
            else
            {
                electiveOutput.Level = topic + " SL"
            }
        }
        if(topic === "Dance" || topic === "Theater Arts" || topic === "Visual Arts")
        {
            electiveOutput[11] = elective[0].Name
            electiveOutput[12] = elective[1].Name
            
            if(level === "true")
            {
                electiveOutput.Level = topic + " HL"
                if(start === "Senior")
                {
                    document.getElementById("ElectiveError").innerHTML = "Elective Error: You must start in Junior year to HL an elective."
                    document.getElementById("OverallSchedule").rows[findSubjectRow("Elective")].style = "color: red"
                }
                if(elective.length < 2)
                {
                    document.getElementById("ElectiveError").innerHTML = "Elective Error: " + topic + " does not have an HL option."
                    errorFunction(electiveOutput, "Elective");
                }
            }
            else
            {
                electiveOutput.Level = topic + " SL"
                if(start === "Senior")
                {
                    document.getElementById("ElectiveError").innerHTML = "Elective Error: " + topic + " requires 2 years of study even for SL."
                    errorFunction(electiveOutput, "Elective");
                }
            }
        }
        else
        {
            if(level === "true")
            {
                if(start === "Senior")
                {
                    document.getElementById("ElectiveError").innerHTML = "Elective Error: You must start in Junior year to HL an elective."
                    document.getElementById("OverallSchedule").rows[findSubjectRow("Elective")].style = "color: red"
                }
                if(elective.length < 2)
                {
                    document.getElementById("ElectiveError").innerHTML = "Elective Error: " + topic + " does not have an HL option."
                    errorFunction(electiveOutput, "Elective");
                }
                else
                {
                    electiveOutput[11] = elective[0].Name
                    electiveOutput[12] = elective[1].Name

                    electiveOutput.Level = topic + " HL"
                }
            }
            else
            {
                if(start === "Senior")
                {
                    electiveOutput[12] = elective[0].Name
                }
                else
                {
                    electiveOutput[11] = elective[0].Name
                }
                electiveOutput.Level = topic + " SL"
            }
        }
   }

   if(topic === "Visual Arts" || topic === "Theater Arts")
   {
       gradConstraints.FineArts = true
   }

   if(level === "true" && topic === "History")
   {
       gradConstraints[topic] = true
   }

   if(topic === "Economics")
   {
       gradConstraints[topic] = true
   }
}
