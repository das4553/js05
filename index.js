const myBtn = document.getElementById("myBtn");

function display() {
  myBtn.style.display = "none";
}

let myImg = document.createElement("img");
myImg.src = "img.jpg";
myImg.alt = "c";
myBtn.before(myImg);

let mySection = document.querySelector("#countries-list");
const countries = [
  {
    name: "Georgia",
    currencies: {
      GEL: {
        name: "lari",
        symbol: "₾",
      },
    },
    capital: ["Tbilisi"],
    flag: "https://flagcdn.com/w320/ge.png",
    map: "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Tbilisi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
  },
  {
    name: "Federal Republic of Germany",
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    capital: ["Berlin"],
    flag: "https://flagcdn.com/w320/de.png",
    map: "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Berlin+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
  },
  {
    name: "Ukraine",
    currencies: {
      UAH: {
        name: "Ukrainian hryvnia",
        symbol: "₴",
      },
    },
    capital: ["Kyiv"],
    flag: "https://flagcdn.com/w320/ua.png",
    map: "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kyiv+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
  },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    currencies: {
      GBP: {
        name: "British pound",
        symbol: "£",
      },
    },
    capital: ["London"],
    flag: "https://flagcdn.com/w320/gb.png",
    map: "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=London+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
  },
];
function renderCountries(countries) {
  const countryElements = countries.map(
    (country, index) => `
    <div class="country-card">
      <img src="${country.flag}" alt="${country.name}">
      <h1>${country.name}</h1>
      <p>${country.capital}</p>
      <div>
        <button id="show-btn" class="Btn1" type="button">Show more info</button>
        <button class="Btn2 delete-btn" type="button">Delete Card</button>
        <div class="map-container">
        <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        frameBorder="0"
        width="300"
        height="200"
        src="${country.map}"
      >
      </iframe>
        </div>
      </div>
    </div>
  `
  );

  return countryElements.join("");
}

mySection.innerHTML = renderCountries(countries);

mySection.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const deleteCard = event.target.closest(".country-card");
    if (deleteCard) {
      deleteCard.style.display = "none";
    }
  }
});

let mapContainers = document.querySelectorAll(".map-container");
let showBtn = document.getElementById("show-btn");
mapContainers.forEach((mapContainer) => {
  mapContainer.style.display = "none";
});

showBtn.addEventListener("click", (event) => {
  mapContainers.forEach((mapContainer) => {
    mapContainer.style.display = "block";
  });
});
