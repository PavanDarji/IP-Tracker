const lookUpBtn = document.querySelector(".lookup-btn");
const ipDisplay = document.querySelector(".ip-display");
const locationAddress = document.querySelector(".location-address");
const GEOAddress = document.querySelector(".geo-address");
const countryName = document.querySelector(".country-name");
const countryCapital = document.querySelector(".country-capital");
const timeZone = document.querySelector(".time-zone");
const postal = document.querySelector(".postal");
const callingCode = document.querySelector(".calling-code");
const device = document.querySelector(".device");



lookUpBtn.addEventListener("click", () => {

    axios.get("https://ipapi.co/json/").then(response => {
        ipDisplay.textContent = `IP Address is :   ${response.data.ip}`;
        locationAddress.textContent = `Current Address is : ${response.data.city}`;
        GEOAddress.textContent = `GEO Address is : ${response.data.latitude} ${response.data.longitude}`;
        countryName.textContent = `Country Name is : ${response.data.country_name}`;
        countryCapital.textContent = `Country Capital Name is : ${response.data.country_capital}`;
        timeZone.textContent = `Time Zone is : ${response.data.timezone}`;
        postal.textContent = `Zip Code is : ${response.data.postal}`;
        callingCode.textContent = `Country Calling Code is : ${response.data.country_calling_code}`;
        device.textContent = `Internet Device is : ${response.data.org}`;
    });
});


