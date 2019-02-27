
const url1 = "https://api.openaq.org/v1/latest?location=Poznan-Dabrowskiego&parameter=pm25";
fetch(url1)
    .then(resp => resp.json())
    .then(resp => {
        const pm25Value = resp.results[0].measurements[0].value;
        const date = new Date (resp.results[0].measurements[0].lastUpdated);
        const unit = resp.results[0].measurements[0].unit;
        const fullResult = [Math.round(pm25Value),date,unit];
        const hour = document.getElementById("hour");
        hour.innerHTML = date.getUTCHours(date);
        const unitDisp = document.getElementById("unit");
        unitDisp.innerHTML = unit;
        const pm25 = document.getElementById("pm25");
        pm25.innerHTML = fullResult[0];
        const norm = Math.round((pm25Value/25)*100);
        const normPrint = document.getElementById("norm");
        normPrint.innerHTML = norm;
        const decision = document.getElementById("decision");
        if (norm<=100){
            decision.innerHTML = "Spokojnie, dzisiaj jesteś bezpieczny.";
            document.body.style.backgroundColor = "#63ff8f";
            document.getElementById("myImg").src = "good.png"
             
        } else{
            decision.innerHTML = "Zostań w domu i nie otwieraj okien!";
            document.body.style.backgroundColor = "#e07d7d";
            document.getElementById("myImg").src = "good.png"
        }
        function myFunction() {
            let x = document.getElementsByClassName("is-size-5");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          } 
        
    })
    .catch(error => {
        console.warn('ups...', error);
    })