import React, { useEffect, useState  } from 'react';
import { Map, Marker, InfoWindow } from 'google-maps-react';
import { shape, func, arrayOf } from 'prop-types';

import styles from './ATMs.scss';

const ATMs = (props) => {
  const { google, fetchData, results } = props;
  const [ selectedPlace, setSelectedPlace ] = useState({});
  const [ activeMarker, setActiveMarker ] = useState({});
  const [ showingInfoWindow, setshowingInfoWindow ] = useState(true);

  useEffect(() => {fetchData()}, []);
  
  const points = results.map((point) => point.geometry.location );

  var bounds = new google.maps.LatLngBounds();
  points.forEach(point  => {
    bounds.extend(point);
  });

  const onMarkerClick = (options, marker) => {
    setSelectedPlace(options);
    setActiveMarker(marker);
    setshowingInfoWindow(true);
  }

  return (
    <Map 
      google={google}
      className={styles.mapContainer}
      bounds={bounds}
    >
      { 
        results.map((marker) => (
          <Marker 
            key={marker.place_id} 
            position={marker.geometry.location} 
            onClick={onMarkerClick} 
            name={marker.name}
            vicinity={marker.vicinity} 
            photos={marker.photos}
          />
        ))
      }
      <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
        <div>
          <h3>{selectedPlace.name}</h3>
          <p>{selectedPlace.vicinity}</p>
        </div>
      </InfoWindow>
    </Map>
  )
};

ATMs.propTypes = {
  google: shape().isRequired,
  fetchData: func.isRequired,
  results: arrayOf.isRequired
};

export default ATMs;
