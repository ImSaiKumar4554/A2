

const visitors = [
    { month: "January", visits: 130158 },
    { month: "February", visits: 12295 },
    { month: "March", visits: 250300 },
    { month: "April", visits: 58587 },
    { month: "May", visits: 98968 },
    { month: "June", visits: 99999 },
  ];
  
  const visitorSection =  document.querySelector("#section-visitorsTable");
  
  if (visitorSection) {
    const visitorTable = document.createElement("table");
    const visitorTableRow = document.createElement("tr");
    visitorTable.appendChild(visitorTableRow);
  
    const Month = document.createElement("th");
    Month.appendChild(document.createTextNode("Month"));
    const siteVisits = document.createElement("th");
    siteVisits.appendChild(document.createTextNode("Visits"));
  
    visitorTableRow.appendChild(Month);
    visitorTableRow.appendChild(siteVisits);
  
    visitorTable.setAttribute("id", "visitors-table");
  
    visitorSection.appendChild(visitorTable);
  
    for (let i = 0; i < visitors.length; i++) {
      const newRow = document.createElement("tr");
      const tableDataMonth = document.createElement("td");
  
      tableDataMonth.appendChild(document.createTextNode(visitors[i].month));
      const DataVisits = document.createElement("td");
      DataVisits.appendChild(document.createTextNode(visitors[i].visits));
  
      newRow.appendChild(tableDataMonth);
      newRow.appendChild(DataVisits);
      visitorTable.appendChild(newRow);
    }
  
    visitorSection.appendChild(visitorTable);
  }
  

 
  const siteCookies = document.querySelector("#cookies");
  if (siteCookies) {
    siteCookies.children[0].addEventListener("click", toggleCookies);
  
    function toggleCookies(e) {
      if (e.target.id === "accept-all-cookies") {
        e.target.remove();
        const p = document.createElement("p");
        const a = document.createElement("a");
        

        p.appendChild(document.createTextNode(
          "Permission granted. Would you like to withdraw? "
        ));
        a.appendChild(document.createTextNode("Click Here!"));
        a.setAttribute("href", "#");
        a.setAttribute("id", "revoke-cookies");
        a.addEventListener("click", toggleCookies);
        p.appendChild(a);
        siteCookies.append(p);
      } else {
        e.target.parentElement.remove();
        const a = document.createElement("a");
      
        a.appendChild(document.createTextNode("Accept cookies"));
        a.setAttribute("href", "#");
        a.setAttribute("id", "accept-all-cookies");
        a.addEventListener("click", toggleCookies);
        siteCookies.appendChild(a);
      }
    }
  }
  
 
  
  let isContrastHigh = false;
  
  const changeContrastButton = document.querySelector("#change-contrast");
  
  changeContrastButton.addEventListener("click", toggleContrast);
  
  function toggleContrast() {
    const body = document.querySelector("body");
    if (isContrastHigh === false) {
      body.style.lineHeight = "25px";
      body.style.letterSpacing = "1.5px";
      body.style.padding = "25px";
       body.style.color = "white";
       body.style.backgroundColor = "tomato";
       body.style.fontSize ="20px"
      isContrastHigh = !isContrastHigh;
      
    } else {
      body.style.lineHeight = "normal";
      body.style.letterSpacing = "normal";
       body.style.padding = "normal";
       body.style.color = "black";
      body.style.backgroundColor = "white";
      body.style.fontSize ="18px"
      isContrastHigh = !isContrastHigh;
      
    }
  }
  

  
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "a") {
      toggleContrast();
    }
  });