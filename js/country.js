const getCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => allCountry(data))
}
getCountry()

const allCountry = countreis => {
    const allCountries = document.getElementById('countries');
    countreis.forEach(singleCountry => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
                <img src="${singleCountry.flag}" />
                <h4>${singleCountry.name}</h4>
                <p>${singleCountry.capital}</p>
                <button onclick="getSingleCountry('${singleCountry.name}')" type="button" class="btn btn-success modal-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Show More
                </button>
        `
        allCountries.appendChild(div);
    })
}

const getSingleCountry = name => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => singleCountry(data))
}

const singleCountry = name => {
    const countryFlag = document.getElementById('country-flag');
    name.forEach(country => {
        countryFlag.innerHTML = `
            <img src="${country.flag}" alt="">
            <h2>${country.name}</h2>
            <h4>${country.altSpellings}</h4>
            <p>Capital: ${country.capital}</p>
            <p>Currencies: ${country.currencies[0].name}</p>
            <p>Natinality: ${country.demonym}</p>
            <p>Language: ${country.languages[0].name}, ${country.languages[0].nativeName}</p>
            <p>Timezone: ${country.timezones}</p>

        `;
    
  
})
}