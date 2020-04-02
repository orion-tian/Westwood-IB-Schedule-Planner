//Copyright (c) 2019 Orion Wuji Tian

//Language Functions
var foreignLanguageCatalog = allCatalogs.ForeignLanguage
var languageOutput = {9: '', 10: '', 11: '', 12: '', Level:''}

function languageSchedule()
{
    var tmp = choices["Foreign Language.Topic"]
    var topic = tmp[1]
    tmp = choices["Foreign Language.Starting Level"]
    var start = tmp[1]
    tmp = choices["Foreign Language.Level"]
    var level = tmp[1]
    
    var startIndex = parseInt(start)
    var language = foreignLanguageCatalog[topic]
    var pointer = 9;

    if(topic === "Latin")
    {    
        for(var i = 0; i<language.length; i++)
        {    
            if(language[i].Name.indexOf(startIndex)>0)
            {    
                languageOutput[pointer] = language[i].Name;
                languageOutput[pointer+1] = language[i+1].Name;
                languageOutput[pointer+2] = language[i+2].Name;
                languageOutput[pointer+3] = language[i+3].Name;
            }
        }
        if(level === "true") 
        {    
            languageOutput.Level = topic + " HL"
        }
        else 
        {
            languageOutput.Level = topic + " SL"
        }
    }
    else
    {
        if(startIndex == 1)
        {
           if(level === "true") 
            {    
                document.getElementById("ForeignLanguageError"). innerHTML = 
                    "Foreign Language Error: Only a level 5 and higher language can HL (Except for Latin)."
                errorFunction(languageOutput, "Foreign Language")
            }
            else 
            {
                for( j = startIndex; j<startIndex+4; j++)
                {
                    languageOutput[pointer] = language[j-1].Name
                    pointer++
                }
                languageOutput.Level = topic + " SL"
            }
        }
        else
        {   
            if(level === "true") 
            {    
                for(var j = startIndex; j<startIndex+4; j++)
                {
                    languageOutput[pointer] = language[j-1].Name
                    pointer++
                }
                languageOutput.Level = topic + " HL"
            }
            else 
            {
                for( j = startIndex; j<startIndex+3; j++)
                {
                    languageOutput[pointer] = language[j-1].Name
                    pointer++
                }
                languageOutput.Level = topic + " SL"
            }
        }
    }
    if(level === "true" && startIndex == 3)
    {    
        document.getElementById("ForeignLanguageException").innerHTML = 
            "You may be eligible for alternate options in Foreign Language. See the IB Coordinator for more details."

        document.getElementById("OverallSchedule").rows[findSubjectRow("Foreign Language")].style = "color: blue"
    }
}