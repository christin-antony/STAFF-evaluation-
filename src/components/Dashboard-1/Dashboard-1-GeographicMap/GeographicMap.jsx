import React from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';

const mapData = {
  IN: '#0d6efd',
  US: '#15b70a',
  RU: '#f41127',
  AU: '#ffb207',
};

const hoverData = {
  IN: '#0942a8',
  US: '#0d9e06',
  RU: '#b20919',
  AU: '#c98e03',
};

const markers = [
  { latLng: [21, 78], name: 'I Love My India' },
];

const GeographicMap = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <style>{`
        .jvectormap-zoomin{
          width: 15px !important;
          height: 15px !important;
          bottom: 5px !important;
          margin-bottom: 5px !important;
          background-color: #4d4c4c !important;
          top:7px !important;
        
        }
        .jvectormap-zoomout {
          width: 15px !important;
          height: 15px !important;
          bottom: 5px !important;
          margin-bottom: 5px !important;
          background-color: #4d4c4c !important;
        
        }
      `}</style>
      <VectorMap
        map={worldMill}
        backgroundColor="transparent"
        zoomOnScroll={false}
        zoomButtons={true}
        containerStyle={{
          width: '100%',
          height: '100%',
        }}
        regionStyle={{
          initial: {
            fill: '#6c757d',
          },
        }}
        series={{
          regions: [
            {
              values: mapData,
              attribute: 'fill',
              hover: {
                attribute: 'hoverFill', // This is used to identify the hover color attribute
              },
            },
          ],
        }}
        regions={{
          hover: Object.fromEntries(
            Object.keys(mapData).map((key) => [key, { fill: hoverData[key] }])
          ),
        }}
        markers={markers}
        markerStyle={{
          initial: {
            r: 9,
            fill: '#fff',
            'fill-opacity': 1,
            stroke: '#000',
            'stroke-width': 5,
            'stroke-opacity': 0.4,
          },
        }}
        onRegionClick={(e, code) => {
          alert(`You clicked on a region with the code "${code.toUpperCase()}"`);
        }}
      />
    </div>
  );
};

export default GeographicMap;
