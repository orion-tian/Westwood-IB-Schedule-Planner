//Copyright (c) 2019 Orion Wuji Tian

//English Functions
var englishCatalog = allCatalogs.English
var englishOutput = {9: 'a', 10: '', 11: '', 12: '', Level:''}

function englishSchedule()
{
    for(var i = 0; i<englishCatalog.length; i++)
    {
        var pointer = englishCatalog[i].Grade;
        englishOutput[pointer] = englishCatalog[i].Name;
    }
    
    [tmp, level] = choices["English.Level"]
    
    if(level === "true") 
    {    
        englishOutput.Level = "English HL"
    }
    else 
    {
        englishOutput.Level = "English SL"
    }

}