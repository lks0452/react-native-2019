import React from 'react';
import { StyleSheet, Text, View, FlatList, Modal,TextInput } from 'react-native';
import { Font } from 'expo';
// import Item from './components/Item';
// import datos from './Datos';
// import Button from './components/Button';
// import Input from './components/Input';
import { Item, Button, Input } from './components';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
    data: [],
    isVisible: false,
    text: ''
  }


  handlePress = () => {
    this.setState({ isVisible: true });
  }
  handleChange = text  => {
    this.setState({ text })
  }
  handleSave = () => {
    const { text, data } = this.state;
    const datos = [{ key: Math.random().toString(), title: text }].concat(data);
    this.setState({
      data: datos,
      isVisible: false,
      text: ''
    })
  }
  render() {
    const { data } = this.state;
    
    return (
      <View style={[styles.container, styles.gray]}>
        <View style={styles.header}>
          <Text style={styles.title}>Recordatorios</Text>
        </View>
        <View style={styles.view}>
          <Button title="Agregar" onPress={this.handlePress} />
        </View>
        <FlatList data={data} renderItem={Item} />
        <Modal animationType="slide" visible={this.state.isVisible}>
          <View style={[styles.container, styles.center]}>
            <Text style={styles.modaltitle}>Ingrese recordatorio</Text>
            <Input onChangeText={this.handleChange} 
            placeholder="Ingrese recordatorio"
            value={this.state.text}/>
            <Button title="Guardar" onPress={this.handleSave} />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gray: {
    backgroundColor: '#eee',
  },
  header: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 28,
    fontFamily: 'open-sans-bold'
  },
  view: {
    margin: 15,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center'
  },
  modaltitle: {
    fontSize: 28,
  },
  input: {
    flex: 1,

    borderWidth: 1,
    borderRadius: 4,
    padding: 15,
  }
});
