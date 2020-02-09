import React from 'react';
import {
  Container,
  Text,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Button,
  List,
  ListItem,
  Item,
  Input
} from 'native-base';

class ItemDisc extends React.Component {
  render() {
    return (
      <ListItem icon>
        <Left>
          <Button
            transparent
            onPress={() => {
              this.props.toggle(this.props.item._id)
            }}
          >
            {
              this.props.item.status === 0
                ? <Icon name="ios-square-outline"></Icon>
                : <Icon name="ios-checkbox-outline"></Icon>
            }
          </Button>
        </Left>
        <Body>
          <Text>{this.props.item.subject}</Text>
        </Body>
        <Button
          transparent
          onPress={() => {
            this.props.remove(this.props.item._id)
          }}>
          <Icon name="ios-trash"></Icon>
        </Button>
      </ListItem>
    )
  }
}

let autoID;

class App extends React.Component {

  api = "http://172.20.10.2:8000/tasks";

  componentDidMount() {
    fetch(this.api).then(res => res.json()).then(items => {
      this.setState({ items });
    });
  }

  state = {
    isReady: false,
    items: [],
    //input: ''
  };

  add = () => {
    this.setState({
      items: [
        ...this.state.items,
        { '_id': autoID++, 'subject': this.state.input, 'status': 0 }
      ],
      input: ''
    });
  }

  remove = _id => {
    this.setState({
      items: this.state.items.filter(item => item._id !== _id)
    })
  }

  toggle = _id => {
    this.setState({
      items: this.state.items.map(item => {
        if (item._id === _id) item.status = +!item.status;
        return item;
      })
    })
  }

  clear = () => {
    this.setState({
      items: this.state.items.filter(item => item.status === 0)
    })
  }

  render() {
    return (
      <Container>
        <Header transparent>
          <Left>
            <Button transparent>
              <Icon name="ios-menu"></Icon>
            </Button>
          </Left>
          <Body>
            <Title>Todoru</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.clear}>
              <Text>Clear</Text>
            </Button>
          </Right>
        </Header>

        <Item regular>
          <Input
            onChangeText={(input) => this.setState({ input })}
            value={this.state.input}
            placeholder="New todo">
          </Input>
          <Button transparent onPress={this.add}>
            <Icon name="ios-add-circle"></Icon>
          </Button>
        </Item>

        <List>
          <ListItem itemDivider>
            <Text>Todos</Text>
          </ListItem>
          {
            this.state.items.filter(i => i.status === 0).map(item => {
              return (
                <ItemDisc
                  item={item}
                  key={item._id}
                  remove={this.remove}
                  toggle={this.toggle}
                />
              )
            })
          }
        </List>

        <List>
          <ListItem itemDivider>
            <Text>Done</Text>
          </ListItem>
          {
            this.state.items.filter(i => i.status === 1).map(item => {
              return (
                <ItemDisc
                  item={item}
                  key={item._id}
                  remove={this.remove}
                  toggle={this.toggle}
                />
              )
            })
          }
        </List>
      </Container>
    )
  }
}

export default App;
