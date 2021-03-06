let map

function initMap() {

    map = new google.maps.Map(
        document.querySelector('#map'), { zoom: 16, center: directions.ironhackMAD.coords, styles: mapStyles.yellowHumanMade }
    )
    getUserGeolocation()
}

function getUserGeolocation() {

    console.log('Objeto navigator ojo', navigator)

    if (navigator.geolocation) {

        // navigator.geolocation.getCurrentPosition(successFn, failFn)
        navigator.geolocation.getCurrentPosition(
            pos => centerMap(pos.coords),
            err => console.log('No se ha permitido el acceso', err)
        )
    } else console.error('NO DISPONES DE GEOLOCALIZADOR')
}


function centerMap(coords) {
    const position = { lat: coords.latitude, lng: coords.longitude }
    map.setCenter(position)

    new google.maps.Marker({ position, map, title: 'Estás aquí ahora' })
}