import React, { useState } from 'react';

function Map(props) {

mapboxgl.accessToken = 'pk.eyJ1Ijoid2YxNyIsImEiOiJja2Iwc2VncW8wYjU1MnNtdDYxeGZtbjdoIn0.j4N-CO6JKlROIO2y9eR4eg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [175.28, -37.78],
        zoom: 8
    });

    var marker = new mapboxgl.Marker()
        .setLngLat([175.28, -37.78])
        .addTo(map);


	if(props.responseData.cod === 200) {
        return (
        <div id="map"></div>
        )
    }
}

export default Map