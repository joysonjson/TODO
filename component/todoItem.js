import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions/todo';
const del = require('../assets/remove.png');
const TodoItem = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity
        style={{alignSelf: 'flex-end', marginLeft: 'auto'}}
        onPress={() => props.delete(props.id)}>
        <Image source={del} style={styles.remove} />
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (task) => dispatch(deleteTodo(task)),
  };
};
export default connect(null, mapDispatchToProps)(TodoItem);
// export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 15,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    alignSelf: 'flex-start',
  },
  remove: {
    height: 50,
    width: 50,
  },
});
