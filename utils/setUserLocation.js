export default function setUserLocation(location) {
  const userLocation = localStorage.getItem('userLocation');
  if (location) {
    localStorage.setItem('userLocation', location);
  } else if (!userLocation) {
    localStorage.setItem('userLocation', 'Lagos');
  }
}
