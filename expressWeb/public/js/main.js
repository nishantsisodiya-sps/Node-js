const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status'); 

const getInfo = async (event)=>{
    event.preventDefault()
    let cityVal = cityName.value
    if(cityVal === ""){
        city_name.innerHTML = 'Please Enter City to search';
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ff1bc4683fc7325e9c57e586c20cc03e`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data]

            city_name.innerText = `${arr[0].name} , ${arr[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main

            //Condition to check weather sunny or cloudy

        }
        catch{
            city_name.innerHTML = 'Please Enter Correct city'
        }
    }
}

submitBtn.addEventListener('click' , getInfo);