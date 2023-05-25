import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAddressBook, faUsers, faComments, faBoxesStacked, faFileInvoiceDollar,faChartLine } from '@fortawesome/free-solid-svg-icons';

export default function BrenView({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableHighlight
                    
                    style={[styles.box, { backgroundColor: '#1AA8F3' }]}
                    onPress={() => navigation.navigate('Contactos')}
                >
                    <View style={styles.iconContainer}>
                        <FontAwesomeIcon icon={faAddressBook} size={46} color="white" style={styles.icon} />
                        <Text style={styles.text}>Agenda</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={[styles.box, { backgroundColor: '#0020FF' }]}
                    onPress={() => navigation.navigate('GruposContactos')}
                >
                    <View style={styles.iconContainer} >
                        <FontAwesomeIcon icon={faUsers} size={46} color="white" style={styles.icon} />
                        <Text style={styles.text}>Grupos Contactos</Text>
                    </View>
                </TouchableHighlight>
            </View>

            <View style={styles.row}>
                <TouchableHighlight
                    style={[styles.box, { backgroundColor: '#CCD500' }]}
                    onPress={() => navigation.navigate('Inventario')}
                >
                    <View style={styles.iconContainer}>
                        <FontAwesomeIcon icon={faBoxesStacked} size={46} color="white" style={styles.icon} />
                        <Text style={styles.text}>Inventario</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={[styles.box, { backgroundColor: '#C40000' }]}
                    onPress={() => navigation.navigate('Presupuestos')}
                >
                    <View style={styles.iconContainer}>
                        <FontAwesomeIcon icon={faFileInvoiceDollar} size={46} color="white" style={styles.icon} />
                        <Text style={styles.text}>Presupuestos</Text>
                    </View>
                </TouchableHighlight>
            </View>

            <View style={styles.row}>
                <TouchableHighlight
                    style={[styles.box, { alignSelf: 'center', backgroundColor: '#6300C4' }]}
                    onPress={() => navigation.navigate('Estadisticas')}
                >
                    <View style={styles.iconContainer}>
                        <FontAwesomeIcon icon={faChartLine} size={46} color="white" style={styles.icon} />
                        <Text style={styles.text}>Estadisticas</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={[styles.box, { backgroundColor: 'green' }]}
                    onPress={() => navigation.navigate('ListaDifusion')}
                >
                    <View style={styles.iconContainer} >
                        <FontAwesomeIcon icon={faComments} size={46} color="white" style={styles.icon} />
                        <Text style={styles.text}>Lista Difusión</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
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
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    icon: {
        textAlign: 'center',
    },
});