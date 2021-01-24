//Copyright (c) 2019 Orion Wuji Tian

function slHLConstraint()
{
    var SLCounter = 0;
    var HLCounter = 0;
    
    for(var i = 0; i<subjects.length; i++)
    {
        var subject = options.Subjects[i].Subject + ".Level"
        var tmp = choices[subject]
        level = tmp[1]
        //count how many SL and HL courses
        if(level === "true")
        {
            HLCounter++;
        }
        else
        {
            SLCounter++;
        }
    }
    if(SLCounter < 2)
    {
        document.getElementById("LevelError").innerHTML = 
            "Too many HL Courses. You must take at least 2 SL Courses."
    }
    if(HLCounter < 3)
    {
        document.getElementById("LevelError").innerHTML = 
            "Not enough HL Courses. You must take at least 3 HL Courses."
    }
}

function gradConstraintsFunction()
{
    var ssString = ""
    if( !gradConstraints.History && gradConstraints.Economics)
    {
        ssString = 
            "<li> A 0.5 credit of U.S. Government is needed. </li>" +
            "<li> (A 0.5 credit of Economics is already embedded in taking IB Economics.)</li>"
    }
    else if(gradConstraints.History && !gradConstraints.Economics)
    {
        ssString = 
            "<li> A 0.5 credit of Economics is needed. </li>" +
            "<li> (A 0.5 credit of U.S. Government is already embedded in taking IB History HL.)</li>"
    }
    else if(!gradConstraints.History && !gradConstraints.Economics)
    {
        ssString = 
            "<li> A 0.5 credit of Economics and a 0.5 credit of U.S. Government are needed.</li>"
    }
    
    var electiveString = " <li> One P.E. credit "
    if(!gradConstraints.FineArts)
    {
        electiveString += "and one Fine Arts credit are needed. </li>"
    }
    else electiveString += "is needed. </li>"
    
    document.getElementById("gradConstraints").innerHTML = 
        "Note: To fulfill Texas high school graduation requirements, <br>"
        + electiveString + ssString
}

function slConstraint()
{
    var juniorCounter = 0;
    
    var juniorSLCourses = ["Foreign Language", "Social Studies", "Science", "IB Elective"]
    
    for(var i = 1; i<juniorSLCourses.length; i++)
    {
        var subject = juniorSLCourses[i]
        var tmp = choices[subject + ".Starting Year"]
        var year = tmp[1]
        tmp = choices[subject + ".Level"]
        var level = tmp[1]
        
        //count how many junior SL classes
        if(year === "Junior" && level === "false")
        {
            juniorCounter++;
        }
    }
    
    tmp = choices["Foreign Language.Starting Level"]
    year = tmp[1]  
    tmp = choices["Foreign Language.Level"]
    level = tmp[1]
    
    if((year === "2" || year === "3") && level === "false")
    {
        juniorCounter++;
    }
    
    if(juniorCounter > 2)
    {
        document.getElementById("SLError").innerHTML = 
            "Too many SL Courses in Junior year. You can only take at most 2 SL Courses in Junior Year."
    }
}