import React from 'react';
import { Text , View, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addToTodo } from './container/action/action'
 
class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state = {todo: ''}
    }
    onChange = (todo)=> {
        this.setState({todo: todo});
    }
    onClick = () => {
        this.props.addToTodo(this.state.todo);
        this.setState({todo: ''})
    }
    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 100
          },
    })
    render() {
        return(
            <View style={this.styles.container}>
                <TextInput placeholder='enter todo' onChangeText={(text) => this.onChange(text)} value={this.state.todo}></TextInput>
                <Button title='Add' onPress={() => this.onClick()}/>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToTodo : (data) => {dispatch(addToTodo(data))}
});

export default connect(null, mapDispatchToProps) (Todo);