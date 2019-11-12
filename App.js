import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
// import store from './container/store/store'
import  store from './components/container/store/store'
import Todo from './components/Todo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todo : '',
                  todoList: []}
  }

  onInputChange = (text) => {
    this.setState({todo: text});
  }

onClick = () => {
  let arr = this.state.todoList;
  arr.push(this.state.todo);
  this.setState({todo: '', todoList : arr});
}
  styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
});
  render() {
    return (
      <Provider store={store}>
       {/* <View style={this.styles.container}>
        <TextInput placeholder="input field" onChangeText={(text) => this.onInputChange(text)} value={this.state.todo}></TextInput>
        <Button title="add" onPress={()=>this.onClick()}></Button>
        {this.state.todoList.map((data, index) => {
          return <Text key={index}>{data}</Text>
        })
        } */}
        <Todo></Todo>
        <TodoList></TodoList>
      {/* </View> */}
      </Provider> 
    )
  }
}

export default App;
