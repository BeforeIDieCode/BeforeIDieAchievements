import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import locationsData from '../../Jsons/Contributors.json';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import styles from './MapContributors.module.css';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapWithMarkers = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(locationsData);
  }, []);

  return (
    <>
    <p className={styles["contributor-title"]}>Location of Contributors</p>
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {locations.map((location, index) => (
        <GeocodeMarker
          key={index}
          location={location.location}
          name={location.name}
          text={location.text}
          avatar={location.avatar}
          image={location.image}
        />
      ))}
    </MapContainer>
    </>
  );
};

function GeocodeMarker({ location, name, text, avatar, image }) {
  const [coordinates, setCoordinates] = useState([0, 0]);

  useEffect(() => {
    const apiKey = REACT_APP_OPENCAGE_API_KEY;
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        location
      )}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const lat = data.results[0].geometry.lat;
          const lon = data.results[0].geometry.lng;
          setCoordinates([lat, lon]);
        } else {
          console.error('Error fetching location');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [location]);

  return (
    <Marker position={coordinates}>
      <Popup>
        <div className={styles["card-contributor"]}>
          <img src={image} className={styles["background-colaborator"]}/>
          <img src={avatar} alt={name} className={styles["image-colaborator"]}/>
          <div className={styles["about-colaborator"]}>
            <p>{name}</p>
            <p className={styles["about-colaborator-location"]}>{location}</p>
            <p>{text}</p>
            </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default MapWithMarkers;
