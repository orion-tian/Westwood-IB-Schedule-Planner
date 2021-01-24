//Copyright (c) 2019 Orion Wuji Tian

document.getElementById("modal-body").innerHTML = 
    "<p> \
    <b> \
    This is only an <em>unofficial</em> tool to plan your IB courses. \
    For your specific needs not covered by this tool, \
    please contact your IB counselor. \
    <br><br>\
    By pressing proceed, you are agreeing to the terms and conditions \
    for this software as stated by the MIT License below: \
    </b> \
    </p> \
    <hr> \
    <p>Copyright (c) 2019 Orion Wuji Tian, class of 2021</p> \
\
    <p>Permission is hereby granted, free of charge, to any person obtaining a copy \
    of this software and associated documentation files (the \"Software\"), to deal \
    in the Software without restriction, including without limitation the rights \
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell \
    copies of the Software, and to permit persons to whom the Software is \
    furnished to do so, subject to the following conditions:</p> \
\
    <p>The above copyright notice and this permission notice shall be included in all \
    copies or substantial portions of the Software.</p> \
\
    <p>THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR \
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, \
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE \
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER \
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, \
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE \
    SOFTWARE.</p> \
    <hr> \
    <button class = \"close\" onclick = \"closeFunction()\" style = \"float: right\">Proceed</button> \
    <br>"

function closeFunction() 
{
    document.getElementById("disclaimer").style.display = "none";
}