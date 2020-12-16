import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {addTodo} from '../actions/todo';

const AddToDoScreen = (props) => {
  const [todo, setToDo] = React.useState('');
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
      <Text style={styles.title}>Set your next goal </Text>
      <TextInput
        value={todo}
        onChangeText={(text) => {
          setToDo(text);
        }}
        style={styles.todoFiled}
        placeholder="Enter to do"
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => props.add(todo)}>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => props.navigation.navigate('TODOES')}>
        <Text style={styles.addText}>Go TODO list</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '600',
    // top: 50,
  },
  todoFiled: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'stretch',
    position: 'relative',
    // top: 100,
    margin: 30,
  },
  addButton: {
    // top
    alignSelf: 'stretch',
    backgroundColor: '#e31ab4',
    color: 'red',
    height: 50,
    margin: 40,
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    fontSize: 30,
    color: '#fff',
  },
});

const mapStateToProps = (state) => {
  return {
    todoes: state.todosReducer.todolist,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    add: (task) => dispatch(addTodo(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToDoScreen);
