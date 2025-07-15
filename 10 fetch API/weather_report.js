function showweatherDetails(event) {
    event.preventDefault();
  
    const city = document.getElementById('city').value;
    const apiKey = '92336d91897e0b9a2463b16da539fced'; // gültiger Key von dir
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=de`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Fehler beim Abrufen der Daten');
        }
        return response.json();
      })
      .then(data => {
        document.getElementById('weatherInfo').innerHTML = `
          <h2>${data.name}</h2>
          <p>Temperatur: ${data.main.temp} &#8451;</p>
          <p>Wetter: ${data.weather[0].description}</p>
        `;
      })
      .catch(error => {
        console.error(error);
        document.getElementById('weatherInfo').innerHTML =
          `<p>Das Wetter konnte nicht abgerufen werden. Bitte versuchen Sie es erneut.</p>`;
      });
  }
  
  document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
  