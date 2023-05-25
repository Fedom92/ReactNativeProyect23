import React, { useState, useEffect } from "react";
import { View, Text } from 'react-native';

const GruposView = () => {
  const [estado, setEstado] = useState('');

  useEffect(() => {
    // Lógica del efecto
  }, []);

  return (
    <View>
      <Text>Grupos View</Text>
      {/* Resto del contenido de la vista */}
    </View>
  );
};

export default GruposView;