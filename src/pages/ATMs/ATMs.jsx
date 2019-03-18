import React, { useEffect } from 'react';
import { Map ,Marker, GoogleApiWrapper } from 'google-maps-react';
import { shape, func, arrayOf } from 'prop-types';

import styles from './ATMs.scss';

const ATMs = (props) => {
  const { google, fetchData, results } = props;

  useEffect(() => {fetchData()}, []);

  const returnMarkers = () => {
    if (results) return results.map((marker) => <Marker key={marker.place_id} position={marker.geometry.location} />);
  }

  const points = results.map((point) => point.geometry.location );

  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < points.length; i++) {
    bounds.extend(points[ i ]);
  }
  
  return (
    <Map 
      google={google}
      className={styles.mapContainer}
      initialCenter={{ lat: 50.4457069, lng: 30.4945147 }}
      zoom={14}
      bounds={bounds}
    >
      {returnMarkers()}
    </Map>
  )
};

ATMs.propTypes = {
  google: shape().isRequired,
  fetchData: func.isRequired,
  results: arrayOf.isRequired
};

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
})(ATMs)
