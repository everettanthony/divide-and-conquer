function saveBattle()
{
    var elements = document.getElementsByClassName("form-data");
    var formData = new FormData(); 
    for(var i=0; i<elements.length; i++)
    {
        formData.append(elements[i].name, elements[i].value);
    }
    var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function()
        {
            if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
            {
                document.getElementById("success").innerHTML = xmlHttp.responseText;
            }
        }
        xmlHttp.open("post", "stats.php"); 
        xmlHttp.send(formData); 
}