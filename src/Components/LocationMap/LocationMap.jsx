import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import contributors from "../../Jsons/Contributors.json";

const containerStyle = {
    width: '100%',
    height: '400px',
};

const LocationMap = ({ contributors }) => {
    const [locations, setLocations] = useState([]);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const newLocations = await Promise.all(
                    contributors.map(async (contributor) => {
                        const response = await fetch(
                            `https://api.api-ninjas.com/v1/geocoding?city=${encodeURIComponent(
                                contributor.location
                            )}`,
                            {
                                headers: {
                                    'X-Api-Key': process.env.REACT_APP_API_NINJAS_KEY,
                                },
                            }
                        );
                        const data = await response.json();
                        console.log(data);
                        return {
                            ...contributor,
                            coordinates: {
                                lat: data[0].latitude,
                                lng: data[0].longitude,
                            },
                        };
                    })
                );
                setLocations(newLocations);
            } catch (error) {
                console.log(error);
            }
        };
        fetchLocations();
    }, [contributors]);

    return isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} zoom={2} center={{ lat: 0, lng: 0 }}>
            {locations.map((location) => (
                <Marker key={location.id} position={location.coordinates} />
            ))}
        </GoogleMap>
    ) : (
        <div>Loading...</div>
    );
};

export default LocationMap;
