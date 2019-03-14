import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { shape } from 'prop-types';

// import styles from './ATMs.scss';

const ATMs = (props) => {
  const { google } = props;
  
  return (
    <Map 
      google={google}
      initialCenter={{ lat: 40.03, lng: -77.02 }}
      zoom={5}
    >
      <Marker position={{ lat: 42.02, lng: -70.01 }} />
      <Marker position={{ lat: 40.03, lng: -77.02 }} />
      <Marker position={{ lat: 49.03, lng: -70.04 }} />
      <Marker position={{ lat: 45.05, lng: -73.02 }} />
    </Map>
  )
};

ATMs.propTypes = {
  google: shape().isRequired,
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyD9GBzVe77PVf3x1FrvDkJCd51-I0gpFf0')
})(ATMs)
