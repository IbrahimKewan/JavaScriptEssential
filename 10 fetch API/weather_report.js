function showweatherDetails(event){
    event.preventDefault();
}

const city = document.getElementById('city').value;
const apiKey = '92336d91897e0b9a2463b16da539fced';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('waetherInfo');
        weatherInfo.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} $#8451;</p>
            <p>Weather: ${data.waether[0].discription}</p>
        `;
    })
    .catch(error => {
        console.error('Fehler beim Abrufen des Wetters:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Das Wetter konnte nicht abgerufen werden. Bitte versuchen Sie es erneut.</p>`;
    });

document.getElementById('waetherForm').addEventListener('submit', showweatherDetails);