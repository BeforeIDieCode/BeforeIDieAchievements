import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const LocationMap = ({ userLocation }) => {
    const [userPosition, setUserPosition] = useState({ lat: 0, lng: 0 });
    const [geoCodingStatus, setGeoCodingStatus] = useState(false);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    useEffect(() => {
        const getPosition = async () => {
            try {
                const geoParams = {
                    format: 'json',
                    address: `address=${encodeURIComponent(userLocation)}`,
                    key: `key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
                }
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/geocode/${geoParams.format}?${geoParams.address}&${geoParams.key}`
                );
                const { results, status } = await response.json();
                if (status == 'OK') {
                    setGeoCodingStatus(true);
                    const coordinates = {
                        lat: results[0].geometry.location.lat,
                        lng: results[0].geometry.location.lng
                    };
                    setUserPosition(coordinates);
                } else {
                    setGeoCodingStatus(false);
                }
            } catch (e) {
                console.log(e.message);
            }
        }
        getPosition();
    }, [userLocation]);

    const mapOptions = {
        zoomControl: true,
        mapTypeControl: false,
        minZoom: 2,
        maxZoom: 15,
        fullscreenControl: false,
        streetViewControl: false
    };

    return geoCodingStatus ?
        isLoaded && (userPosition.lat !== 0 || userPosition.lng !== 0) ?
            (<GoogleMap
                mapContainerStyle={{ width: '400px', height: '200px' }}
                zoom={5}
                center={userPosition}
                mapTypeId='roadmap'
                options={mapOptions}
            >
                <Marker position={userPosition} />
            </GoogleMap >) :
            (<div>Loading...</div>) :
        <h6>Couldn't display map for the given location!</h6>;
};

export default LocationMap;
