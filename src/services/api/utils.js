// Get current position

const success = (position) => {
  window.console.log(position.coords.longitude, position.coords.latitude)
}

const initGeolocation = () => {
  if( navigator.geolocation ) {
    navigator.geolocation.getCurrentPosition( success );
  } else {
    alert('Sorry, your browser does not support geolocation services.');
  }
}
window.console.log(initGeolocation);