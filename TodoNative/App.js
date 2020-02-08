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
          <Button transparent>
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
  state = {
    isReady: false,
    items: [
      { '_id': 1, 'subject': 'apple', 'status': 0 },
      { '_id': 2, 'subject': 'orange', 'status': 0 },
      { '_id': 3, 'subject': 'grape', 'status': 0 },
      { '_id': 4, 'subject': 'cinnamon', 'status': 0 },
      { '_id': 5, 'subject': 'papaya', 'status': 1 },
      { '_id': 6, 'subject': 'watermelon', 'status': 1 },
    ],
    input: ''
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
