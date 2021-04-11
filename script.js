function MainAPI()
{
    event.preventDefault();
    var country=document.getElementById("country").value;
    var startdate=document.getElementById("startdate").value;
    var enddate=document.getElementById("enddate").value;

    var confirmed=document.getElementById("confirmed");
    var active=document.getElementById("active");
    var deaths=document.getElementById("deaths");

    console.log(startdate);
    if(country=='' || startdate=='' || enddate=='')
    alert("please fill the details");
    else
    {
        var url="https://api.covid19api.com/country/"+country+"?from="+startdate+"T00:00:00Z&to="+enddate+"T00:00:00Z";

        fetch(url)
        .then((cases) => cases.json())
        .then((cases) => {
            console.log(cases);
            var length=cases.length;
            var index=length-1;

            var c=cases[index].Confirmed;
            var a=cases[index].Active;
            var d=cases[index].Deaths;

            confirmed.innerHTML=c;
            active.innerHTML=a;
            deaths.innerHTML=d;

            document.getElementById("cases").style.display="block";
            
        })
    }
}