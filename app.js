let loc =document.getElementById("location");
let tempIcon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate =document.getElementById("climate");
let iconFile;

window.addEventListener("load", () => {
    let long;
    let lat;
    //let temperatureDescription = document.querySelector('description');
    //let temperatureDegree = document.querySelector('temperature-degree');

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position) =>{
            long =position.coords.longitude;
            lat =position.coords.latitude;

            
            
            
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api =`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0ecc8bb1d6d65e1dac0b2b64df5168a1`;
            

         fetch(api)
        .then((Response) => {
            return Response.json();
            
        })

        .then(data => {
            const {name} =data;
            const{feels_like} =data.main;
            const{id, main}= data.weather[0];
            loc.textContent =name;
            climate.textContent =main;
            tempvalue.textContent =Math.round(feels_like-273);

            if(id < 250){
                tempIcon.src=" http://openweathermap.org/img/wn/10d@2x.png"
            }
            
            else if(id < 350){
                tempIcon.src=" http://openweathermap.org/img/wn/10d@2x.png"

            }

            else if(id < 550){
                tempIcon.src=" http://openweathermap.org/img/wn/10d@2x.png"

            }

            else if(id < 650){
                tempIcon.src=" http://openweathermap.org/img/wn/10d@2x.png"

            }

            else if(id < 800){
                tempIcon.src=" http://openweathermap.org/img/wn/10d@2x.png"

            }

            else if(id === 800){
                tempIcon.src=" http://openweathermap.org/img/wn/10d@2x.png"

            }

            

            console.log(data);
            
            })


        })
        

        
    }

})
