import React, { useState, useEffect, useRef, useCallback } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../../database/firebase";
import profile from "../../../resources/profile.png"
import { PacmanIndicator } from 'react-native-indicators';

const ContactosView = () => {
  const [contactos, setContactos] = useState([]);
  const [loading, setLoading] = useState(true);
  const renderSeparator = () => <View style={styles.separator} />;
  const [selectedContactos, setSelectedContactos] = useState([]);
  const [longPressActive, setLongPressActive] = useState(false);


  const contactosCollectiona = collection(db, "contactos");
  const contactosCollection = useRef(query(contactosCollectiona, orderBy("nombreApellido")));

  const getContactos = useCallback((snapshot) => {
    const contactosArray = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setContactos(contactosArray);
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(contactosCollection.current, getContactos);
    setLoading(false);
    return unsubscribe;
  }, [getContactos]);

  const renderContacto = ({ item }) => (
    <TouchableOpacity
      onPress={() => abrirEditarContacto(item)}
      onLongPress={() => {setLongPressActive(true); seleccionarContacto(item)}}
      style={styles.contactoCard}
    >
      {longPressActive && (
        <TouchableOpacity
          onPress={() => seleccionarContacto(item)}
          style={[
            styles.checkbox,
            isSelectedContacto(item) && styles.checkboxSelected,
          ]}
        />
      )}
      <Image source={profile} style={styles.imagen} />
      <Text style={styles.nombre}>{item.nombreApellido}</Text>
    </TouchableOpacity>
  );

  const abrirEditarContacto = (contacto) => {
    // Aquí puedes realizar alguna acción antes de abrir el componente EditarContactoView
    // Puedes pasar el contacto como parámetro al componente si es necesario
    // Por ejemplo:
    // navigation.navigate('EditarContacto', { contacto: contacto });
    console.log('Abrir EditarContactoView para el contacto:', contacto);
  };

  const agregarContacto = () => (
    console.log("A")
  );

  const seleccionarContacto = (contacto) => {
    const contactosSeleccionados = [...selectedContactos];
    const index = contactosSeleccionados.findIndex((item) => item.id === contacto.id);
    if (index > -1) {
      // El contacto ya está seleccionado, lo deseleccionamos
      contactosSeleccionados.splice(index, 1);
    } else {
      // El contacto no está seleccionado, lo agregamos a la lista de seleccionados
      contactosSeleccionados.push(contacto);
    }
    setSelectedContactos(contactosSeleccionados);

    if (contactosSeleccionados.length === 0) {
      setLongPressActive(false);
      setSelectedContactos([]);
    }
  
  };

  const isSelectedContacto = (contacto) => {
    return selectedContactos.some((item) => item.id === contacto.id);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <PacmanIndicator color="blue" size={70} animating={true} />
        </View>
      ) : (
        <>
          <FlatList
            data={contactos}
            renderItem={renderContacto}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.contactosList}
            ItemSeparatorComponent={renderSeparator}
          />
          <TouchableOpacity style={styles.addButton} onPress={agregarContacto}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  contactosList: {
    height: '100%',
  },
  contactoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 8,
  },
  checkboxSelected: {
    backgroundColor: 'blue',
  },
  imagen: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default ContactosView;