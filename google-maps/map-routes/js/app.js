let map

function initMap() {

    map = new google.maps.Map(
        document.querySelector('#map'), { zoom: 14, center: directions.ironhackMAD.coords, styles: mapStyles.yellowHumanMade }
    )

    const routeDetails = {
        origin: directions.ironhackBCN.coords,
        destination: 'Fabrik Madrid',
        travelMode: 'DRIVING'
    }

    getRouteDetails(routeDetails)
}


function getRouteDetails(details) {
    const directionsService = new google.maps.DirectionsService
    directionsService.route(details, routeInfo => {
        printRouteInfo(routeInfo)
        renderRoute(routeInfo)
    })
}

function printRouteInfo(routeInfo) {

    const { duration, distance, start_address, end_address, steps } = routeInfo.routes[0].legs[0]

    let stepsCode = ''
    steps.forEach(elm => stepsCode += `<p>${elm.instructions}</p>`)

    const infoHTML = `
        <h5>Ruta de ${start_address} a ${end_address}</h5>
        <p>Distancia: ${distance.text}</p>
        <p>Duración: ${duration.text}</p>
        <hr>${stepsCode}`

    document.querySelector('#route').innerHTML = infoHTML
}


function renderRoute(routeInfo) {

    const directionsDisplay = new google.maps.DirectionsRenderer
    directionsDisplay.setDirections(routeInfo)
    directionsDisplay.setMap(map)
}