import React from 'react';
import { Text, View, FlatList, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { addToTodo } from './container/action/action'
import * as _ from 'lodash';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state= {todo: []};
    }
    onChange = () => {
        this.props.callStore('hello');
    }
    styles = StyleSheet.create({
        container: {
          flex: 1,
          marginTop: 10
        },
      });
      data = [{id: 1, name: 'muruga'}, {id: 2, name: 'lakshmi'}, {id: 3, name: 'raji'}, {id: 4, name: 'jksdd'},]

    render(){
        return(
            <View style = {this.styles.container}>
          <FlatList
        data={_.isUndefined(this.props.todo) ? [] : this.props.todo.todo}
        extraData ={this.props.todo}
        renderItem={({ item }) => <View><Text>{item.todo}</Text><Button title='test state' onPress={()=>this.onChange()}/></View>}
        keyExtractor={(item) => ''+item.id}
      />
      {/* {datas.map((data, index) => {
          return <Text key={data.id}>{data.todo}</Text>
        })
    } */}
        </View>
        )
    }
}
const mapStateToProps = (state) => ({
    todo: state
})
const mapDispatchToProps = (dispatch) => ({
    callStore: (data) => {dispatch(addToTodo(data))}
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);