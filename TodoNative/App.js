import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1cf'
  },
  appbar: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#1cf',
    flexDirection: 'row'
  },
  title: {
    fontWeight: '800',
    color: '#fff',
    fontSize: 25,
    flex: 1,
    marginLeft: 20
  },
  item: {
    padding: 20,
    flexDirection: "row"
  },
  itemText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    flex: 1,
    marginLeft: 20
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
  },
  done: {
    marginTop: 40,
    marginLeft: 20
  },
  doneTitle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '800',
  },
  clear: {
    fontWeight: '800',
    color: '#fff',
    fontSize: 20,
    flex: 1,
  }
});

const Item = props => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => {
        props.toggle(props.item._id)
      }}>
        {
          props.item.status === 0
            ? <Ionicons name="md-square-outline" size={32}></Ionicons>
            : <Ionicons name="md-checkbox-outline" size={32}></Ionicons>
        }
      </TouchableOpacity>
      <Text style={styles.itemText}>{props.item.subject}</Text>
      <TouchableOpacity onPress={() => {
        props.remove(props.item._id)
      }}>
        <Ionicons name="md-trash" size={32}></Ionicons>
      </TouchableOpacity>
    </View>
  )
}

const api = "http://172.20.10.2:8000/tasks";

const App = props => {

  let [items, setItem] = useState([
    { _id: "1", subject: "Milk", status: 0 },
    { _id: "2", subject: "Egg", status: 0 },
    { _id: "3", subject: "Flour", status: 0 },
    { _id: "4", subject: "Salt", status: 0 },
  ]);

  let [input, setInput] = useState('');

  useEffect(() => {
    fetch(api).then(res => res.json()).then(json => {
      setItem(json);
    })
  }, []);

  const add = () => {
    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ subject: input })
    }).then(res => res.json()).then(json => {
      setItem([...items, json]);
      setInput('');
    });
  }

  const remove = _id => {
    fetch(`${api}/${_id}`, { method: 'DELETE' });
    setItem(items.filter(item => item._id !== _id));
  }

  const clear = () => {
    fetch(api, { method: 'DELETE' });
    setItem(items.filter(item => item.status === 0));
  }

  const toggle = _id => {

    setItem(items.map(item => {
      if (item._id === _id) {
        item.status = +!item.status;
      }

      fetch(`${api}/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: item.status })
      });

      return item;
    }));
  }

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Ionicons name="md-list" size={32} color="white"></Ionicons>
        <Text style={styles.title}>Todo Native</Text>
        <TouchableOpacity onPress={clear}>
          <Text style={styles.clear}>CLEAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.add}>
        <TextInput
          onChangeText={text => setInput(text)}
          value={input}
          style={styles.input}
        />
        <TouchableOpacity onPress={add}>
          <Ionicons name="ios-add-circle" size={32} color="white"></Ionicons>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={items.filter(item => item.status === 0)}
          renderItem={({ item }) => {
            return (
              <Item
                item={item}
                remove={remove}
                toggle={toggle}
                keyExtractor={item => item._id}
              />
            )
          }}
          keyExtractor={item => item._id}
        />
        <View style={styles.done}>
          <Text style={styles.doneTitle}>✅ Done List</Text>
        </View>
        <FlatList
          data={items.filter(item => item.status === 1)}
          renderItem={({ item }) => {
            return (
              <Item
                item={item}
                remove={remove}
                toggle={toggle}
                keyExtractor={item => item._id}
              />
            )
          }}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  );
}

export default App;


