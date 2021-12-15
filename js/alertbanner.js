const alertApiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=39.710835&lon=-104.812500&units=imperial&exclude=minutely&appid=53aea94dcf1ed49f207e0bf80bd4f100";
fetch(alertApiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        
        
        jsObject.alerts.forEach((alert) => {

            let alertGroup = document.createElement("div");

            let alertSender = document.createElement("p");
            alertSender.innerHTML = `Sender: ${alert.sender_name}`

            let alertEvent = document.createElement("p");
            alertEvent.innerHTML = `Event: ${alert.event}`

            var startDate = new Date((alert.start) *1000).toLocaleString('en-US');
            let alertStart = document.createElement("p");
            alertStart.innerHTML = `Start Time: ${startDate}`

            var endDate = new Date((alert.end) *1000).toLocaleString('en-US');
            let alertEnd = document.createElement("p");
            alertEnd.innerHTML = `End Time: ${endDate}`

            let alertDescription = document.createElement("p");
            alertDescription.textContent = alert.description;

            let alertTags = document.createElement("div");
            alert.tags.forEach((tag) => { 
                let alertTag = document.createElement("p");
                alertTag.innerHTML = `Tag: ${tag}`
                alertTags.append(alertTag);
            });
            var breakLine =  document.createElement("HR");
            alertGroup.setAttribute("class","alert-group");
            alertGroup.append(alertSender);
            alertGroup.append(alertEvent);
            alertGroup.append(alertStart);
            alertGroup.append(alertEnd);
            alertGroup.append(alertDescription);
            alertGroup.append(alertTags);
            alertGroup.append(breakLine);
            document.querySelector("div.alert").append(alertGroup);
        });
});

function hideAlerts() {
    var x = document.getElementById("alert-header");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }