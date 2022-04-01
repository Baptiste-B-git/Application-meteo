let town = "Paris";
recevoirTemperature(town);
let changerDeVille = document.querySelector("#change");
changerDeVille.addEventListener("click", () => {
  town = prompt("Quelle ville souhaitez-vous voir ?");
  recevoirTemperature(town);
});

function recevoirTemperature(town) {
  const url ="https://api.openweathermap.org/data/2.5/weather?q=" + town + "&appid=a6c71c328ff9fdf6164cf3c95775a174&units=metric";
  console.log(url);

  let requete = new XMLHttpRequest();

  // Get créer la requête
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let temperature = reponse.main.temp;
        let town = reponse.name;
        console.log(temperature);
        console.log(town);
        document.querySelector("#temperature_label").textContent = temperature;
        document.querySelector("#town").textContent = town;
      } else {
        alert("Un problème est intervenu, merci de revenir plus tard.");
      }
    }
  };
}
