import React from 'react';
import MapView, { UrlTile, Marker, Polyline } from 'react-native-maps';
import { View } from 'react-native';

const Mapa = () => {
  // Array de coordenadas para los marcadores, algunos con título y descripción
  const puntosRuta_2 = [
    { latitude: -17.64635628827549, longitude: -71.30894482739937, title: "Inicio", description: "Inicio de la ruta_2" }, // Con callout
    { latitude: -17.64685215150453, longitude: -71.30994260911713 },  // Sin callout.
    { latitude: -17.64920876118231, longitude: -71.30870342859015 }, // Sin callout
    { latitude: -17.649152530096398, longitude: -71.31102085707722 },
    { latitude: -17.65372764018711, longitude: -71.31131053572476 },
    { latitude: -17.6538503231111, longitude: -71.30884290350977}

    //{ latitude: -17.6581, longitude: -71.3365, title: "Final", description: "Fin de la ruta" },  // Con callout
  ];

  const ruta_2 = puntosRuta_2.map(punto => ({
    latitude: punto.latitude,
    longitude: punto.longitude,
  }));

  const ruta_1A = [
    { latitude: -17.64402, longitude: -71.31994 },
    { latitude: -17.650844, longitude: -71.328813 },
    { latitude: -17.6581, longitude: -71.3365 },
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
            key={index}
            coordinate={{ latitude: punto.latitude, longitude: punto.longitude }}
            title={punto.title ? punto.title : undefined}  // Solo mostrar si tiene title
            description={punto.description ? punto.description : undefined} // Solo si tiene descripción
          />
        ))}

        {/* Polyline para la ruta */}
        <Polyline
          coordinates={ruta_2}     // Pasamos las coordenadas de la ruta
          strokeColor="#FF0000"     // Color de la línea
          strokeWidth={4}           // Ancho de la línea
        />

        {/* Agregar más rutas, como ruta_1A */}
        {/* <Polyline
          coordinates={ruta_1A}
          strokeColor="#0000FF"     // Otro color para la segunda ruta
          strokeWidth={4}
        /> */}
      </MapView>
    </View>
  );
};

export default Mapa;
