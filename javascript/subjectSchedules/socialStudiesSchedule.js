//Copyright (c) 2019 Orion Wuji Tian

//Social Functions
var socialStudiesCatalog = allCatalogs.SocialStudies
var socialStudiesOutput = {9: '', 10: '', 11: '', 12: '', Level: ''}

function socialStudiesSchedule()
{
    var tmp = choices["Social Studies.Topic"]
    var topic = tmp[1]
    tmp = choices["Social Studies.Starting Year"]
    var start = tmp[1]
    tmp = choices["Social Studies.Level"]
    var level = tmp[1]

    var ss = socialStudiesCatalog[topic]

    var ninthAndTenthGrade = socialStudiesCatalog["9thAnd10thGrade"]

    socialStudiesOutput[ninthAndTenthGrade[0].Grade] = ninthAndTenthGrade[0].Name
    socialStudiesOutput[ninthAndTenthGrade[1].Grade] = ninthAndTenthGrade[1].Name

    if(level === "true")
    {    
        if(start === "Senior")
        {    
            document.getElementById("SocialStudiesError").innerHTML = "Social Studies Error: You must start in Junior year to HL History."
            document.getElementById("OverallSchedule").rows[findSubjectRow("Social Studies")].style = "color: red"
        }
        if(ss.length<2)
        {
            document.getElementById("SocialStudiesError").innerHTML = "Social Studies Error: " + topic + " does not have an HL path."
            errorFunction(socialStudiesOutput, "Social Studies")
        }
        else
        {
            socialStudiesOutput[11] = ss[0].Name
            socialStudiesOutput[ss[1].Grade] = ss[1].Name
            socialStudiesOutput.Level = topic + " HL"
            
            if(topic === "Economics" || topic === "History")
            {
                gradConstraints[topic] = true
            }
        }
    }
    else
    {
        if(start === "Senior")
        {    
            socialStudiesOutput[12] = ss[0].Name
        }
        else
        {
            socialStudiesOutput[11] = ss[0].Name
        }
        socialStudiesOutput.Level = topic + " SL"
        if(topic === "Economics")
        {
            gradConstraints[topic] = true
        }
    }
}
