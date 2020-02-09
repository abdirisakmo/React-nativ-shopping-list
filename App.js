import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Alert,
} from 'react-native';
import Header from './components/Header';
import ListItems from './components/ListItem';
import AddItem from './components/AddItems';
import { uuid } from 'uuidv4';


const App = () => {

  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Egss' },
    { id: uuid(), text: 'Bread' },
    { id: uuid(), text: 'Mongo' }
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter some text', [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
        { cancelable: true });
    } else {
      setItems(prevItems => {
        return [{ id: uuid(), text }, ...prevItems];
      })
    }
  }
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItems item={item} deleteItem={deleteItem} />}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App