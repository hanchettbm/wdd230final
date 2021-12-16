
fetch("wdd230final/json/directory.json")
  .then((response) => {
    return response.json();
  })
  .then((jsonObject) => {
    console.log(jsonObject);
    const businesses = jsonObject["businesses"];
    businesses.forEach((business) => {
      
      let card = document.createElement("section");
      var text = document.createElement("div");
      text.setAttribute('class', 'sectionText');
      let businessName = document.createElement("h2");
      let motto = document.createElement("h3");
      let address = document.createElement("p");
      let phone = document.createElement("p");
      let email = document.createElement("p");
      let website = document.createElement('a');
      let logo = document.createElement("img");


      businessName.textContent = business.name;
      motto.textContent = business.motto;
      address.textContent = business.address;
      phone.textContent = business.phone;
      email.textContent = business.email;
      website.setAttribute("href", business.website);
      website.innerHTML = business.website;
      logo.setAttribute("src", "images/" + business.logo);
      logo.setAttribute("alt", business.name);

      card.appendChild(logo);
      card.appendChild(text);
      card.appendChild(businessName);
      card.appendChild(motto);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
      card.appendChild(email);


      text.appendChild(businessName);
      text.appendChild(motto);
      text.appendChild(address);
      text.appendChild(phone);
      text.appendChild(website);
      text.appendChild(email);

      document.querySelector("div.cards").appendChild(card);
    
    });
  });

  function listView() {
    var x = document.querySelector("div.cards.directory");
      x.style = 'grid-template-columns: 1fr';
  }

  function gridView() {
    var x = document.querySelector("div.cards.directory");
      x.style = 'grid-template-columns: 1fr 1fr 1fr';
  }