//import React from 'react';
//
//function Map(props) {
//
//    if(props.responseData === null || props.responseData === '') {
//        return null;
//    }
//
//    if(props.responseData.cod === '400' || props.responseData.cod === '404') {
//        setTimeout(function() { props.clearResponse();}, 20000);
//        return (
//            <div className="col-sm-8">
//                <div className="text-danger">{ props.responseData.message }</div>
//            </div>
//        );
//    }
//
//    if(props.responseData.cod === 200) {
//        return (
//            <div className="col-sm-8">
//                mapboxgl.accessToken = 'pk.eyJ1Ijoid2YxNyIsImEiOiJja2Iwc2VncW8wYjU1MnNtdDYxeGZtbjdoIn0.j4N-CO6JKlROIO2y9eR4eg';
//					var map = new mapboxgl.Map({
//					container: 'map',
//					style: 'mapbox://styles/mapbox/streets-v11',
//					center: [175.28, -37.78],
//					zoom: 8
//					});
// 
//					var marker = new mapboxgl.Marker()
//					.setLngLat([175.28, -37.78])
//					.addTo(map);
//            </div>
//        )
//    }
//    return null
//}
//  
//export default Map