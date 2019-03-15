import React, { useEffect } from 'react';
import { Map ,Marker, GoogleApiWrapper } from 'google-maps-react';
import { shape, func, arrayOf } from 'prop-types';

// import styles from './ATMs.scss';

const ATMs = (props) => {
  const { google, fetchData, results } = props;

  useEffect(() => {fetchData()}, []);

  const returnMarkers = () => {
    if (results) return results.map((marker) => <Marker key={marker.place_id} position={marker.geometry.location} />);
  } 
  
  return (
    <Map 
      google={google}
      initialCenter={{ lat: 50.4457069, lng: 30.4945147 }}
      zoom={14}
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
  apiKey: ('AIzaSyD9GBzVe77PVf3x1FrvDkJCd51-I0gpFf0')
})(ATMs)
