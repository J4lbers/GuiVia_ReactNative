import React from 'react';
import MapView, { UrlTile, Marker, Polyline } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

const Mapa = () => {
  /**
   * 9M3R+G9, Ilo 18601
   * -17.646108259780366, -71.30907233061944
   * -17.646866006892818, -71.30993613725403
   * -17.646349695685817, -71.30892226229813
   */
  //rutas
  const puntosRuta_2 = [
    { latitude: -17.646349695685817, longitude: -71.30892226229813, title: "Inicio de la Ruta-2", description: "Inicio de la ruta" },
    { latitude: -17.646866006892818, longitude: -71.30993613725403 },
    { latitude: -17.64927655056574, longitude: -71.30871683682662 },
    { latitude: -17.6491, longitude: -71.31102 },
    { latitude: -17.65370198488115, longitude: -71.31125967207824 },
  ];

  const ruta_2 = puntosRuta_2.map(punto => ({
    latitude: punto.latitude,
    longitude: punto.longitude,
  }));
  
  const ruta_1A = [
    { latitude: -17.64402, longitude: -71.31994 }, // Punto inicial
    { latitude: -17.650844, longitude: -71.328813 }, // Punto intermedio
    { latitude: -17.6581, longitude: -71.3365 },     // Punto final
  ];

 const ruta_1b = [
  { latitude: -17.64402, longitude: -71.31556}
 ];
  return (

    <View style={{ flex: 1 }}>
      <MapView
        style={{ height: '100%', width: '100%' }}
        provider={undefined}  // Desactivar Google Maps como proveedor
        initialRegion={{
          latitude: -17.64402,
          longitude: -71.31994,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* OpenStreetMap Tile */}
        <UrlTile
          urlTemplate="https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
        />
        {/* Marcadores generados mediante un bucle */}
        {puntosRuta_2.map((punto, index) => (
          <Marker
            key={index ? index: undefined }
            coordinate={{ latitude: punto.latitude, longitude: punto.longitude }}
            title={punto.title ? punto.title: undefined}
            description={punto.description ? punto.description: undefined}
          />
        ))}
                {/* Polyline para la ruta */}
        <Polyline
          coordinates={ruta_2} // Pasamos las coordenadas de la ruta
          strokeColor="#FF0000" // Color de la línea
          strokeWidth={4}       // Ancho de la línea
        />
      </MapView>
    </View>
  );
};

export default Mapa;
