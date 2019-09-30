export const geolocalizar = () => {
   navigator.geolocation.getCurrentPosition(
      position => {
         return {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
         }
      },
      error =>
         Alert.alert(
            'Erro na localização',
            'Não foi possível encontrar sua localização atual.'),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
   );
}