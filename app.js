let tabs = document.querySelectorAll(".tab");
let tabsContent = document.querySelectorAll(".tabContentContainer");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    for (let k = 0; k < tabs.length; k++) {
      if (tabs[k].getAttribute("data-index") == i) {
        tabs[k].style.backgroundColor = "#33118b";
        tabs[k].style.color = "#ffffff";
        tabsContent[k].style.display = "block";
      } else {
        tabs[k].style.backgroundColor = "#ececec";
        tabs[k].style.color = "#333333";
        tabsContent[k].style.display = "none";
      }
    }
  });
}

let inactiveScreen = document.querySelector(".inactiveScreen");
let alerts = document.querySelectorAll(".alert");

let profileOpen = document.querySelector(".fa-user-circle");
let profileClose = document.querySelector("#closeProfile");

let addOpen = document.querySelector(".journeyAdder");
let addClose = document.querySelector("#closeAdd");

profileOpen.addEventListener("click", () => {
  activateAlert(0, alerts, inactiveScreen);
});

profileClose.addEventListener("click", () => {
  disactivateAlerts(alerts, inactiveScreen);
});

addOpen.addEventListener("click", () => {
  activateAlert(1, alerts, inactiveScreen);
});

addClose.addEventListener("click", () => {
  disactivateAlerts(alerts, inactiveScreen);

  //reset add form
  errorDiv.innerText = "";
  countryField.value = "";
  journeyYearField.value = "";
  addClickedEmoji = "";
  emojiSvgs[0].style.opacity = "0.5";
  emojiSvgs[1].style.opacity = "0.5";
  emojiSvgs[2].style.opacity = "0.5";
});

const activateAlert = (num, arrayAlert, bgBlackScreen) => {
  if (arrayAlert.length >= num) {
    for (let i = 0; i < arrayAlert.length; i++) {
      if (num == i) {
        bgBlackScreen.style.display = "block";
        arrayAlert[i].style.display = "flex";
      } else {
        arrayAlert[i].style.display = "none";
      }
    }
  }
};

const disactivateAlerts = (arrayAlert, bgBlackScreen) => {
  if (arrayAlert.length > 0) {
    for (let i = 0; i < arrayAlert.length; i++) {
      arrayAlert[i].style.display = "none";
    }
    bgBlackScreen.style.display = "none";
  }
};

let journeysContainer = document.querySelector(".journeysAdded");

//adding and memorizing journey system
let loggedInUser = localStorage.getItem("loggedInUser");
if (localStorage.getItem("journeyIndex" + loggedInUser) == undefined) {
  localStorage.setItem("journeyIndex" + loggedInUser, 0);
} else {
  let numRegisteredJourney = localStorage.getItem(
    "journeyIndex" + loggedInUser
  );
  for (let i = 0; i < Number(numRegisteredJourney); i++) {
    let journeyDiv = document.createElement("div");
    journeyDiv.setAttribute("class", "journeyAdded");

    let journeyDivCountryName = document.createElement("h1");
    journeyDivCountryName.innerText = localStorage.getItem(
      "countryJourney" + loggedInUser + "-" + i
    );

    let journeyDivYear = document.createElement("h4");
    journeyDivYear.innerText = localStorage.getItem(
      "yearJourney" + loggedInUser + "-" + i
    );

    let journeyDivEmoji = document.createElement("span");
    let emojiSvg = document.createElement("img");

    if (
      localStorage.getItem("emojiJourney" + loggedInUser + "-" + i) ==
      "deadEmoji"
    ) {
      emojiSvg.src = "./assets/img/emojis/dead.svg";
    } else if (
      localStorage.getItem("emojiJourney" + loggedInUser + "-" + i) ==
      "neutralEmoji"
    ) {
      emojiSvg.src = "./assets/img/emojis/neutral.svg";
    } else {
      emojiSvg.src = "./assets/img/emojis/happy.svg";
    }

    journeyDivEmoji.appendChild(emojiSvg);
    journeyDiv.appendChild(journeyDivCountryName);
    journeyDiv.appendChild(journeyDivYear);
    journeyDiv.appendChild(journeyDivEmoji);

    journeysContainer.appendChild(journeyDiv);
  }
}

let emojiSvgs = document.querySelectorAll(".emojiSvg");
let addClickedEmoji = "";

for (let i = 0; i < emojiSvgs.length; i++) {
  emojiSvgs[i].addEventListener("click", () => {
    addClickedEmoji = emojiSvgs[i].getAttribute("alt");

    if (i == 0) {
      emojiSvgs[0].style.opacity = "1";
      emojiSvgs[1].style.opacity = "0.5";
      emojiSvgs[2].style.opacity = "0.5";
    } else if (i == 1) {
      emojiSvgs[0].style.opacity = "0.5";
      emojiSvgs[1].style.opacity = "1";
      emojiSvgs[2].style.opacity = "0.5";
    } else {
      emojiSvgs[0].style.opacity = "0.5";
      emojiSvgs[1].style.opacity = "0.5";
      emojiSvgs[2].style.opacity = "1";
    }
  });
}

let addBtn = document.querySelector("#btnAdd");
let countryField = document.querySelector(".country");
let journeyYearField = document.querySelector(".journeyYear");
let errorDiv = document.querySelector(".alertError");
let journeyIdx = localStorage.getItem("journeyIndex" + loggedInUser)
let legendCount = 0;

let jsonCountries = [{"name":"Afghanistan","code":"AF"},{"name":"land Islands","code":"AX"},{"name":"Albania","code":"AL"},{"name":"Algeria","code":"DZ"},{"name":"American Samoa","code":"AS"},{"name":"AndorrA","code":"AD"},{"name":"Angola","code":"AO"},{"name":"Anguilla","code":"AI"},{"name":"Antarctica","code":"AQ"},{"name":"Antigua and Barbuda","code":"AG"},{"name":"Argentina","code":"AR"},{"name":"Armenia","code":"AM"},{"name":"Aruba","code":"AW"},{"name":"Australia","code":"AU"},{"name":"Austria","code":"AT"},{"name":"Azerbaijan","code":"AZ"},{"name":"Bahamas","code":"BS"},{"name":"Bahrain","code":"BH"},{"name":"Bangladesh","code":"BD"},{"name":"Barbados","code":"BB"},{"name":"Belarus","code":"BY"},{"name":"Belgium","code":"BE"},{"name":"Belize","code":"BZ"},{"name":"Benin","code":"BJ"},{"name":"Bermuda","code":"BM"},{"name":"Bhutan","code":"BT"},{"name":"Bolivia","code":"BO"},{"name":"Bosnia and Herzegovina","code":"BA"},{"name":"Botswana","code":"BW"},{"name":"Bouvet Island","code":"BV"},{"name":"Brazil","code":"BR"},{"name":"British Indian Ocean Territory","code":"IO"},{"name":"Brunei Darussalam","code":"BN"},{"name":"Bulgaria","code":"BG"},{"name":"Burkina Faso","code":"BF"},{"name":"Burundi","code":"BI"},{"name":"Cambodia","code":"KH"},{"name":"Cameroon","code":"CM"},{"name":"Canada","code":"CA"},{"name":"Cape Verde","code":"CV"},{"name":"Cayman Islands","code":"KY"},{"name":"Central African Republic","code":"CF"},{"name":"Chad","code":"TD"},{"name":"Chile","code":"CL"},{"name":"China","code":"CN"},{"name":"Christmas Island","code":"CX"},{"name":"Cocos (Keeling) Islands","code":"CC"},{"name":"Colombia","code":"CO"},{"name":"Comoros","code":"KM"},{"name":"Congo","code":"CG"},{"name":"Congo, The Democratic Republic of the","code":"CD"},{"name":"Cook Islands","code":"CK"},{"name":"Costa Rica","code":"CR"},{"name":"Cote D\"Ivoire","code":"CI"},{"name":"Croatia","code":"HR"},{"name":"Cuba","code":"CU"},{"name":"Cyprus","code":"CY"},{"name":"Czech Republic","code":"CZ"},{"name":"Denmark","code":"DK"},{"name":"Djibouti","code":"DJ"},{"name":"Dominica","code":"DM"},{"name":"Dominican Republic","code":"DO"},{"name":"Ecuador","code":"EC"},{"name":"Egypt","code":"EG"},{"name":"El Salvador","code":"SV"},{"name":"Equatorial Guinea","code":"GQ"},{"name":"Eritrea","code":"ER"},{"name":"Estonia","code":"EE"},{"name":"Ethiopia","code":"ET"},{"name":"Falkland Islands (Malvinas)","code":"FK"},{"name":"Faroe Islands","code":"FO"},{"name":"Fiji","code":"FJ"},{"name":"Finland","code":"FI"},{"name":"France","code":"FR"},{"name":"French Guiana","code":"GF"},{"name":"French Polynesia","code":"PF"},{"name":"French Southern Territories","code":"TF"},{"name":"Gabon","code":"GA"},{"name":"Gambia","code":"GM"},{"name":"Georgia","code":"GE"},{"name":"Germany","code":"DE"},{"name":"Ghana","code":"GH"},{"name":"Gibraltar","code":"GI"},{"name":"Greece","code":"GR"},{"name":"Greenland","code":"GL"},{"name":"Grenada","code":"GD"},{"name":"Guadeloupe","code":"GP"},{"name":"Guam","code":"GU"},{"name":"Guatemala","code":"GT"},{"name":"Guernsey","code":"GG"},{"name":"Guinea","code":"GN"},{"name":"Guinea-Bissau","code":"GW"},{"name":"Guyana","code":"GY"},{"name":"Haiti","code":"HT"},{"name":"Heard Island and Mcdonald Islands","code":"HM"},{"name":"Holy See (Vatican City State)","code":"VA"},{"name":"Honduras","code":"HN"},{"name":"Hong Kong","code":"HK"},{"name":"Hungary","code":"HU"},{"name":"Iceland","code":"IS"},{"name":"India","code":"IN"},{"name":"Indonesia","code":"ID"},{"name":"Iran, Islamic Republic Of","code":"IR"},{"name":"Iraq","code":"IQ"},{"name":"Ireland","code":"IE"},{"name":"Isle of Man","code":"IM"},{"name":"Israel","code":"IL"},{"name":"Italy","code":"IT"},{"name":"Jamaica","code":"JM"},{"name":"Japan","code":"JP"},{"name":"Jersey","code":"JE"},{"name":"Jordan","code":"JO"},{"name":"Kazakhstan","code":"KZ"},{"name":"Kenya","code":"KE"},{"name":"Kiribati","code":"KI"},{"name":"Korea, Democratic People\"S Republic of","code":"KP"},{"name":"Korea, Republic of","code":"KR"},{"name":"Kuwait","code":"KW"},{"name":"Kyrgyzstan","code":"KG"},{"name":"Lao People\"S Democratic Republic","code":"LA"},{"name":"Latvia","code":"LV"},{"name":"Lebanon","code":"LB"},{"name":"Lesotho","code":"LS"},{"name":"Liberia","code":"LR"},{"name":"Libyan Arab Jamahiriya","code":"LY"},{"name":"Liechtenstein","code":"LI"},{"name":"Lithuania","code":"LT"},{"name":"Luxembourg","code":"LU"},{"name":"Macao","code":"MO"},{"name":"Macedonia, The Former Yugoslav Republic of","code":"MK"},{"name":"Madagascar","code":"MG"},{"name":"Malawi","code":"MW"},{"name":"Malaysia","code":"MY"},{"name":"Maldives","code":"MV"},{"name":"Mali","code":"ML"},{"name":"Malta","code":"MT"},{"name":"Marshall Islands","code":"MH"},{"name":"Martinique","code":"MQ"},{"name":"Mauritania","code":"MR"},{"name":"Mauritius","code":"MU"},{"name":"Mayotte","code":"YT"},{"name":"Mexico","code":"MX"},{"name":"Micronesia, Federated States of","code":"FM"},{"name":"Moldova, Republic of","code":"MD"},{"name":"Monaco","code":"MC"},{"name":"Mongolia","code":"MN"},{"name":"Montenegro","code":"ME"},{"name":"Montserrat","code":"MS"},{"name":"Morocco","code":"MA"},{"name":"Mozambique","code":"MZ"},{"name":"Myanmar","code":"MM"},{"name":"Namibia","code":"NA"},{"name":"Nauru","code":"NR"},{"name":"Nepal","code":"NP"},{"name":"Netherlands","code":"NL"},{"name":"Netherlands Antilles","code":"AN"},{"name":"New Caledonia","code":"NC"},{"name":"New Zealand","code":"NZ"},{"name":"Nicaragua","code":"NI"},{"name":"Niger","code":"NE"},{"name":"Nigeria","code":"NG"},{"name":"Niue","code":"NU"},{"name":"Norfolk Island","code":"NF"},{"name":"Northern Mariana Islands","code":"MP"},{"name":"Norway","code":"NO"},{"name":"Oman","code":"OM"},{"name":"Pakistan","code":"PK"},{"name":"Palau","code":"PW"},{"name":"Palestinian Territory, Occupied","code":"PS"},{"name":"Panama","code":"PA"},{"name":"Papua New Guinea","code":"PG"},{"name":"Paraguay","code":"PY"},{"name":"Peru","code":"PE"},{"name":"Philippines","code":"PH"},{"name":"Pitcairn","code":"PN"},{"name":"Poland","code":"PL"},{"name":"Portugal","code":"PT"},{"name":"Puerto Rico","code":"PR"},{"name":"Qatar","code":"QA"},{"name":"Reunion","code":"RE"},{"name":"Romania","code":"RO"},{"name":"Russian Federation","code":"RU"},{"name":"RWANDA","code":"RW"},{"name":"Saint Helena","code":"SH"},{"name":"Saint Kitts and Nevis","code":"KN"},{"name":"Saint Lucia","code":"LC"},{"name":"Saint Pierre and Miquelon","code":"PM"},{"name":"Saint Vincent and the Grenadines","code":"VC"},{"name":"Samoa","code":"WS"},{"name":"San Marino","code":"SM"},{"name":"Sao Tome and Principe","code":"ST"},{"name":"Saudi Arabia","code":"SA"},{"name":"Senegal","code":"SN"},{"name":"Serbia","code":"RS"},{"name":"Seychelles","code":"SC"},{"name":"Sierra Leone","code":"SL"},{"name":"Singapore","code":"SG"},{"name":"Slovakia","code":"SK"},{"name":"Slovenia","code":"SI"},{"name":"Solomon Islands","code":"SB"},{"name":"Somalia","code":"SO"},{"name":"South Africa","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","code":"GS"},{"name":"Spain","code":"ES"},{"name":"Sri Lanka","code":"LK"},{"name":"Sudan","code":"SD"},{"name":"Suriname","code":"SR"},{"name":"Svalbard and Jan Mayen","code":"SJ"},{"name":"Swaziland","code":"SZ"},{"name":"Sweden","code":"SE"},{"name":"Switzerland","code":"CH"},{"name":"Syrian Arab Republic","code":"SY"},{"name":"Taiwan, Province of China","code":"TW"},{"name":"Tajikistan","code":"TJ"},{"name":"Tanzania, United Republic of","code":"TZ"},{"name":"Thailand","code":"TH"},{"name":"Timor-Leste","code":"TL"},{"name":"Togo","code":"TG"},{"name":"Tokelau","code":"TK"},{"name":"Tonga","code":"TO"},{"name":"Trinidad and Tobago","code":"TT"},{"name":"Tunisia","code":"TN"},{"name":"Turkey","code":"TR"},{"name":"Turkmenistan","code":"TM"},{"name":"Turks and Caicos Islands","code":"TC"},{"name":"Tuvalu","code":"TV"},{"name":"Uganda","code":"UG"},{"name":"Ukraine","code":"UA"},{"name":"United Arab Emirates","code":"AE"},{"name":"United Kingdom","code":"GB"},{"name":"United States","code":"US"},{"name":"United States Minor Outlying Islands","code":"UM"},{"name":"Uruguay","code":"UY"},{"name":"Uzbekistan","code":"UZ"},{"name":"Vanuatu","code":"VU"},{"name":"Venezuela","code":"VE"},{"name":"Viet Nam","code":"VN"},{"name":"Virgin Islands, British","code":"VG"},{"name":"Virgin Islands, U.S.","code":"VI"},{"name":"Wallis and Futuna","code":"WF"},{"name":"Western Sahara","code":"EH"},{"name":"Yemen","code":"YE"},{"name":"Zambia","code":"ZM"},{"name":"Zimbabwe","code":"ZW"}]
let addedCountries = {'areas': {}};

//add btn sys
addBtn.addEventListener("click", () => {
  let countryFound = false;
  let countryCode = "";
  if (countryField.value == "") {
    errorDiv.innerText = "country field blank";
  } else {
    for (let i = 0; i < jsonCountries.length; i++) {
      if(countryField.value.toLowerCase()==jsonCountries[i].name.toLowerCase()){
        countryFound=true;
        countryCode = jsonCountries[i].code;
        countryField.value = jsonCountries[i].name;
        break;
      } 
    }

    if(countryFound){
      if (journeyYearField.value == "") {
        errorDiv.innerText = "year field blank";
      } else {
        if(isNaN(journeyYearField.value)){
          errorDiv.innerText = "invaild year";
        }else{
          currentYear = new Date().getFullYear()
          if(journeyYearField.value<1900 || journeyYearField.value>currentYear){
            errorDiv.innerText = "year should be between 1900-" + currentYear;
          }else{
            if (addClickedEmoji == "") {
              errorDiv.innerText = "emoji not selected";
            } else {
              localStorage.setItem(
                "countryJourney" +
                  localStorage.getItem("loggedInUser") +
                  "-" +
                  localStorage.getItem("journeyIndex" + loggedInUser),
                countryField.value
              );

              
              //assign color to year
              let randomColor = Math.floor(Math.random()*16777215).toString(16);

              if(localStorage.getItem(journeyYearField.value + "-" +loggedInUser)==undefined){
                localStorage.setItem(
                  journeyYearField.value + "-" +loggedInUser,
                  "#" + randomColor
                );
              }

      
              localStorage.setItem(
                "emojiJourney" +
                  localStorage.getItem("loggedInUser") +
                  "-" +
                  localStorage.getItem("journeyIndex" + loggedInUser),
                addClickedEmoji
              );
      
              disactivateAlerts(alerts, inactiveScreen);
      
              let journeyDiv = document.createElement("div");
              journeyDiv.setAttribute("class", "journeyAdded");
      
              let journeyDivCountryName = document.createElement("h1");
              journeyDivCountryName.innerText = countryField.value;
      
              let journeyDivYear = document.createElement("h4");
              journeyDivYear.innerText = journeyYearField.value;
      
              let journeyDivEmoji = document.createElement("span");
              let emojiSvg = document.createElement("img");
      
              if (addClickedEmoji == "deadEmoji") {
                emojiSvg.src = "./assets/img/emojis/dead.svg";
              } else if (addClickedEmoji == "neutralEmoji") {
                emojiSvg.src = "./assets/img/emojis/neutral.svg";
              } else {
                emojiSvg.src = "./assets/img/emojis/happy.svg";
              }
      
              profileData[2].innerText = localStorage.getItem(
                "journeyIndex" + loggedInUser
              );
      
              journeyDivEmoji.appendChild(emojiSvg);
              journeyDiv.appendChild(journeyDivCountryName);
              journeyDiv.appendChild(journeyDivYear);
              journeyDiv.appendChild(journeyDivEmoji);
      
              journeysContainer.appendChild(journeyDiv);

              //insert added country to obj and update map

              addedCountries.areas[countryCode] = {"attrs":{fill:localStorage.getItem(journeyYearField.value + "-" +loggedInUser)}}
              
              $(".mapcontainer").trigger('update', [{
                mapOptions: addedCountries, 
              }]);

            
              let createIndication = false;
              let legendFound = false;
              let mapIndicationContainer = document.querySelector(".mapIndicationContainer");

              if(mapIndicationContainer.children.length==0){
                createIndication = true;
              }else{
                for (let i = 0; i < localStorage.getItem("journeyIndex" + loggedInUser); i++) {
                  let year = localStorage.getItem("yearJourney" + loggedInUser + "-" + i);
  
                  if(year==journeyYearField.value){
                    legendFound = true;
                  }
                }

                if(legendFound){
                  createIndication = false;
                }else{
                  createIndication = true;
                }
              }
              


              if(createIndication){
                
                let divIndication = document.createElement("div");
                divIndication.setAttribute("class", "mapIndication");
  
                let divColorIndication = document.createElement("div");
                divColorIndication.style.backgroundColor = localStorage.getItem(journeyYearField.value + "-" +loggedInUser)
  
                let divTextIndication = document.createElement("p");
                divTextIndication.innerText = journeyYearField.value
                
                divIndication.appendChild(divColorIndication);
                divIndication.appendChild(divTextIndication);

                mapIndicationContainer.appendChild(divIndication);

                
                localStorage.setItem("legendColor" + loggedInUser + "-" + legendCount, divColorIndication.style.backgroundColor);
                localStorage.setItem("legendYear" + loggedInUser + "-" + legendCount, divTextIndication.innerText);

                legendCount++;
                localStorage.setItem("legendNum" + loggedInUser, legendCount)
                createIndication = false;
              }
              
              localStorage.setItem(
                "yearJourney" +
                  localStorage.getItem("loggedInUser") +
                  "-" +
                  localStorage.getItem("journeyIndex" + loggedInUser),
                journeyYearField.value
              );

              localStorage.setItem(
                "journeyIndex" + loggedInUser,
                Number(localStorage.getItem("journeyIndex" + loggedInUser)) + 1
              );
      
              //reset add form
              errorDiv.innerText = "";
              countryField.value = "";
              journeyYearField.value = "";
              addClickedEmoji = "";
              emojiSvgs[0].style.opacity = "0.5";
              emojiSvgs[1].style.opacity = "0.5";
              emojiSvgs[2].style.opacity = "0.5";
      
      
            }
          }
        }
      }
    }else{
      errorDiv.innerText = "invalid country";
    }
  }
});

//profile filled
let userNameDiv = document.querySelector(".userName");
let profileData = document.querySelectorAll(".profileDataDiv2>p");
let profilePic = document.querySelector(".avatarDiv>img");

if (localStorage.getItem("sex" + loggedInUser) == "Male") {
  profilePic.src = "./assets/img/profileAvatars/boy1.svg";
} else {
  profilePic.src = "./assets/img/profileAvatars/girl1.svg";
}

userNameDiv.innerText = localStorage.getItem("name" + loggedInUser);
profileData[0].innerText = localStorage.getItem("email" + loggedInUser);
profileData[1].innerText = localStorage.getItem("sex" + loggedInUser);
profileData[2].innerText = localStorage.getItem("journeyIndex" + loggedInUser);



//map
$(".mapcontainer").mapael({
  map: {
    name: "world_countries",
    defaultArea: {
        attrs: {
            fill: "#fff",
            stroke: "#232323",
            "stroke-width": 0.3
        }
    },
    defaultPlot: {
        text: {
            attrs: {
                fill: "#4a2c9b",
                "font-weight": "normal"
            },
            attrsHover: {
                fill: "#fff",
                "font-weight": "bold"
            }
        }
    }
    , zoom: {
        enabled: true
        , step: 0.25
        , maxLevel: 20
    }
  },
});

//get map info from localStorage
for (let i = 0; i < Number(journeyIdx); i++) {
  let country = localStorage.getItem("countryJourney" + loggedInUser + "-" + i);

  for (let i = 0; i < jsonCountries.length; i++) {
    if(country.toLowerCase()==jsonCountries[i].name.toLowerCase()){
      countryCode = jsonCountries[i].code;
      break;
    } 
  }

  countryColor = localStorage.getItem(localStorage.getItem("yearJourney" + loggedInUser + "-" + i) + "-" + loggedInUser);
  addedCountries.areas[countryCode] = {"attrs":{fill:countryColor}}
}

console.log(addedCountries)

$(".mapcontainer").trigger('update', [{
  mapOptions: addedCountries, 
}]);

//get map legends from localStorage

let mapIndicationContainer = document.querySelector(".mapIndicationContainer");
for (let k = 0; k < Number(localStorage.getItem("legendNum" + loggedInUser)); k++) {
  let color = localStorage.getItem("legendColor" + loggedInUser + "-" + k);
  let year = localStorage.getItem("legendYear" + loggedInUser + "-" + k);

  let divIndication = document.createElement("div");
  divIndication.setAttribute("class", "mapIndication");
    
  let divColorIndication = document.createElement("div");
  divColorIndication.style.backgroundColor = color;
    
  let divTextIndication = document.createElement("p");
  divTextIndication.innerText = year;
      
  divIndication.appendChild(divColorIndication);
  divIndication.appendChild(divTextIndication);
    
  mapIndicationContainer.appendChild(divIndication);
  
}

