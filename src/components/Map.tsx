
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  address: string;
  className?: string;
}

const Map: React.FC<MapProps> = ({ address, className = "h-full w-full" }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string | null>(localStorage.getItem('mapbox-token'));

  const initializeMap = (token: string, coordinates: [number, number]) => {
    if (!mapContainer.current) return;
    
    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coordinates,
      zoom: 15
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    
    marker.current = new mapboxgl.Marker({ color: '#C87941' })
      .setLngLat(coordinates)
      .addTo(map.current);
  };

  useEffect(() => {
    // Segovian coordinates (aproximately)
    const segoviaCoordinates: [number, number] = [-4.110742, 40.941731];
    
    const geocodeAddress = async (token: string) => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${token}`
        );
        const data = await response.json();
        
        if (data.features && data.features.length > 0) {
          const [lng, lat] = data.features[0].center;
          initializeMap(token, [lng, lat]);
        } else {
          initializeMap(token, segoviaCoordinates);
        }
      } catch (error) {
        console.error('Error geocoding address:', error);
        initializeMap(token, segoviaCoordinates);
      }
    };

    if (mapboxToken) {
      geocodeAddress(mapboxToken);
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [address, mapboxToken]);

  const handleSaveToken = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const token = formData.get('token') as string;
    
    if (token) {
      localStorage.setItem('mapbox-token', token);
      setMapboxToken(token);
    }
  };

  if (!mapboxToken) {
    return (
      <div className={`${className} bg-vas-gray/10 rounded-lg flex flex-col items-center justify-center p-6`}>
        <h3 className="text-xl font-bold mb-4 text-center">Configurar Mapa</h3>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Para ver el mapa, ingrese su token público de Mapbox.
          <br />
          Puede obtener uno gratuito en <a href="https://www.mapbox.com/signup/" target="_blank" rel="noreferrer" className="text-vas-bronze underline">mapbox.com</a>
        </p>
        <form onSubmit={handleSaveToken} className="w-full max-w-md space-y-4">
          <input 
            type="text" 
            name="token"
            placeholder="Ingrese su token público de Mapbox"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <button 
            type="submit"
            className="w-full bg-vas-bronze text-white p-2 rounded hover:bg-vas-bronze/90"
          >
            Guardar Token
          </button>
        </form>
      </div>
    );
  }

  return <div ref={mapContainer} className={className} />;
};

export default Map;
