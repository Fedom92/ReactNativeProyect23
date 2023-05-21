import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';
import princesa from '../resources/princesa.png';
import principe from '../resources/principe.png';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.navigate('Fede')}
        >
          <View>
            <Image source={principe} style={styles.image} />
            <Text style={styles.text}>Fede</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.navigate('Bren')}
        >
          <View>
            <Image source={princesa} style={styles.image} />
            <Text style={styles.text}>Bren</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 30,
        margin: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
      },
});