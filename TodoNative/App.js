import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1cf'
  },
  appbar: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#1cf'
  },
  title: {
    fontWeight: '800',
    color: '#fff',
    fontSize: 25
  },
  item: {
    padding: 20,
  },
  itemText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff'
  },
  add: {
    flexDirection: 'row'
  },
  input: {
    padding: 20,
    fontSize: 20,
    borderColor: '#fff',
    borderBottomWidth: 1,
    flex: 1
  }
});

const Item = props => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{props.item.subject}</Text>
    </View>
  )
}

const App = props => {
  let [items, setItem] = useState([
    { _id: "1", subject: "Milk", status: 0 },
    { _id: "2", subject: "Egg", status: 0 },
    { _id: "3", subject: "Flour", status: 0 },
    { _id: "4", subject: "Salt", status: 0 },
  ]);

  let [input, setInput] = useState('');

  let autoid;

  const add = () => {
    setItem([
      ...items,
      { _id: autoid++, subject: input, status: 0 }
    ]);

    setInput('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Text style={styles.title}>◉ Todo Native</Text>
      </View>
      <View style={styles.add}>
        <TextInput
          onChangeText={text => setInput(text)}
          value={input}
          style={styles.input}
        />
        <Button
          onPress={add}
          title="Add"
        />
      </View>
      <View>
        <FlatList
          data={items}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  );
}

export default App;


