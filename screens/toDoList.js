import React from 'react';
import {Text, View, FlatList} from 'react-native';
import TodoItem from '../component/todoItem';
import {connect} from 'react-redux';
const Foodlist = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
      }}>
      <FlatList
        data={props.todoes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <TodoItem
            title={item.todo}
            id={item.id}
            deleteItem={(task) => props.delete(task)}
          />
        )}
        style={{flex: 1, alignSelf: 'stretch'}}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    todoes: state.todosReducer.todolist,
  };
};

export default connect(mapStateToProps)(Foodlist);
