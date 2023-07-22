import { Box } from '@chakra-ui/react'
import React from 'react'
import GoogleMapReact from 'google-map-react';

const Map = ({coordinates, setCoordinates}) => {
  return <Box width={'full'} height={'full'}>
    <GoogleMapReact
    bootstrapURLKeys={{key : "AIzaSyCHOhepw3SN61KfDVWsOsm63WlLq2imup8"}}
    defaultCenter={coordinates}
    center={coordinates}
    defaultZoom={10}
    margin = {[50, 50, 50, 50]}
    options={""}
    onChange={() => {}}
    onChildClick={() => {}}
    >

    </GoogleMapReact>
  </Box>;
};

export default Map