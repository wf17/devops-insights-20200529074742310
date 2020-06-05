import React from 'react';

function CityResponse(props) {

    if(props.responseData === null || props.responseData === '') {
        return null;
    }

    if(props.responseData.cod === '400' || props.responseData.cod === '404') {
        setTimeout(function() { props.clearResponse();}, 20000);
        return (
            <div className="col-sm-8">
                <div className="text-danger">{ props.responseData.message }</div>
            </div>
        );
    }

    if(props.responseData.cod === 200) {
        return (
            <div className="col-sm-8">
                <table className="table table-info table-hover">
                    <tbody>
                        <tr>
                            <td>City</td>
                            <td>{props.responseData.name}</td>
                        </tr>
                        <tr>
                            <td>Temperature</td>
                            <td>{props.responseData.main.temp}</td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>{props.responseData.main.pressure}</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{props.responseData.main.humidity}</td>
                        </tr>
                        <tr>
                            <td>Temperature (Min)</td>
                            <td>{props.responseData.main.temp_min}</td>
                        </tr>
                        <tr>
                            <td>Temperature (Max)</td>
                            <td>{props.responseData.main.temp_max}</td>
                        </tr>
                        <tr>
                            <td>Conditions</td>
                            <td>{props.responseData.weather[0].description}</td>
                        </tr>
                        <tr>
                            <td>Lon</td>
                            <td>{props.responseData.coord.lon}</td>
                        </tr>
                        <tr>
                            <td>lat</td>
                            <td>{props.responseData.coord.lat}</td>
                        </tr>
                    </tbody>
                </table>
                <div id='map' style='width: 400px; height: 300px;'></div>
      				<script src='https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.js'></script>
      				mapboxgl.accessToken = 'pk.eyJ1Ijoid2YxNyIsImEiOiJja2Iwc2VncW8wYjU1MnNtdDYxeGZtbjdoIn0.j4N-CO6JKlROIO2y9eR4eg';
					var map = new mapboxgl.Map({
					container: 'map',
					style: 'mapbox://styles/mapbox/streets-v11',
					center: [12.550343, 55.665957],
					zoom: 8
					});
 
					var marker = new mapboxgl.Marker()
					.setLngLat([12.550343, 55.665957])
					.addTo(map);
            </div>
        )
    }
    return null
}
  
export default CityResponse