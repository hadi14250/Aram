"use client";

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize the map
    mapInstance.current = L.map(mapRef.current, {
      zoomControl: true,
      scrollWheelZoom: true,
      attributionControl: false,
      dragging: true,
      doubleClickZoom: true
    }).setView([25.261050, 55.319000], 15);

    // Add OpenStreetMap tiles with custom style
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      className: 'map-tiles'
    }).addTo(mapInstance.current);

    // Add marker with custom icon
    const marker = L.marker([25.261050, 55.319000], {
      icon: L.divIcon({
        className: 'custom-marker',
        html: `<div class="w-4 h-4 bg-green-600 rounded-full border-2 border-white shadow-lg"></div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8]
      })
    }).addTo(mapInstance.current);

    // Add popup with custom style
    marker.bindPopup(`
      <div class="p-2 bg-gray-900 text-white rounded-lg">
        <h3 class="font-bold text-green-400">Aram Group Office</h3>
        <p class="text-sm text-gray-300">4th St, Dubai, UAE</p>
      </div>
    `).openPopup();

    // Cleanup function
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
      }
    };
  }, []);

  return (
    <div className="w-full h-full">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default Map; 