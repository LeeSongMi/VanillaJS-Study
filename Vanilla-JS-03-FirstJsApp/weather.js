const weather = document.querySelector(".js-weather");
const API_KEY ="9175de3a26f46233397ea9877ff6b1ab";
const COORDS = 'coords';

function getWeather(lat,lon){
    //fetch(url,[options]) :네트워크 요청
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){      // fetch가 완료될 때까지 기다려야하기 때문에 then 사용
        //console.log(response.json());
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });

}
function saveCoords(coordsObj){
    // object를 string으로 변환하여 localStorage에 저장
    localStorage.setItem(COORDS,JSON.stringify(coordsObj))
}
function handleGeoSucces(position){
    const latitude = position.coords.latitude;  //위도
    const longitude = position.coords.longitude;    //경도
    const coordsObj = {
        latitude,       // === (latitude: latitude):변수명과 키가 같을 때 사용 
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
function handleGeoError(){
    console.log("ERROR");
}

function askForCoords(){
    //navigator API
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError); //위치 획득
}
function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude,parseCoords.longitude);

    }
}

function init(){
    loadCoords();
}

init();