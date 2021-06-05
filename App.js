import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const App = () => {
  const onConectDevice = () => {};

  return (
    <View style={styles.b}>
      <TouchableOpacity style={styles.button} onPress={onConectDevice}>
        <Text style={styles.gaz}>Connect device with bluetooth </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  b: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
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
