const COORDS = 'coords';

function handleGeoSource(position){
    console.log(position);
}
function handleGeoError(){
    console.log("ERROR");
}

function askForCoords(){
    //navigator API
    navigator.geolocation.getCurrentPosition(handleGeoSource,handleGeoError); //위치 획득
}
function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{

    }
}

function init(){
    loadCoords();
}

init();