mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v11', // style URL
    center: cafe.geometry.coordinates, // starting position [lng, lat]
    zoom: 10 // starting zoom
});




new mapboxgl.Marker()
    .setLngLat(cafe.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({offset:25})
        .setHTML(
            `<h6>${cafe.name}</h6><p>${cafe.location}</p>`
        )
    )
    .addTo(map)