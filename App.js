import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const App = () => {
  const [showBluetoothDevices, setShowBluetoothDevices] = useState(false);
  const onConnectDevice = () => {
    setShowBluetoothDevices(!showBluetoothDevices);
  };

  return (
    <View
      style={
        showBluetoothDevices == false ? styles.centerButton : styles.buttonUp
      }>
      <TouchableOpacity style={styles.button} onPress={onConnectDevice}>
        <Text style={styles.gaz}>Connect device with bluetooth </Text>
      </TouchableOpacity>
      <View style={showBluetoothDevices == false ? styles.hide : styles.show}>
        <Text style={styles.device}>Device1</Text>
        <Text style={styles.device}>Device2</Text>
        <Text style={styles.device}>Device3</Text>
        <Text style={styles.device}>Device4</Text>
        <Text style={styles.device}>Device5</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  centerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    flex: 1,
  },
  hide: {
    display: 'none',
  },
  show: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  },
  device: {
    padding: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
  gaz: {
    display: 'flex',
    textAlign: 'center',

    width: 300,
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 8,
    paddingLeft: 8,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
