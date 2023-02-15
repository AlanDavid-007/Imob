import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState, useEffect} from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';
//Components
import Header from "./components/Header.js";
import ListItems from './components/ListItems.js';
import InputModal from './components/InputModal.js';

//Styled Components
import {colors, Container, TodoText} from "./styles/appStyles.js";

//Navigation import
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

    const App = () => {
      
     const [todos, setTodos] = useState([]);
    //Modal Visibility
    const [modalVisible, setModalVisible] = useState(false);

    const Stack = createStackNavigator();

    //Function to add a new todo
    const handleAddTodo = (todo) => {
        const newTodos = [...todos, todo]; 
            setTodos(newTodos);
            setModalVisible(false);
            console.log(todos);
    }
    //Screen One
      const ScreenOne = props => {

        //onPress To Navigate
        const onPress = () => {
          props.navigation.navigate('Listagem');
        };
        return (
          <>
          <InputModal 
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          handleAddTodo={handleAddTodo}
          todos={todos}
          setTodos={setTodos}
      />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={{color: 'white'}}>Listagem</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setModalVisible(true)}} style={styles.buttonImob}>
          <Text style={{color: 'white'}}>Adicionar Imóvel</Text>
        </TouchableOpacity>

       
      </View>
      </>
        )
      }
      //Home
    const Home = () => {
      return (
        <>
        <Container todos={todos} setTodos={setTodos} style={{backgroundColor: 'black'}}>
        {todos.length == 0 ? <TodoText>Você ainda não possui tarefas</TodoText> : null}
        {todos.length > 0 ? 
        <ListItems 
            todos={todos}
            setTodos={setTodos}
        />
        : null}
              <StatusBar style="light" />
        </Container>
        </>
      );
    };

    return (
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Imob" component={ScreenOne} />
                <Stack.Screen name="Listagem" component={Home} />
              </Stack.Navigator>
            </NavigationContainer>
    );
}
const styles = StyleSheet.create({
  button: {
    fontSize: 18,
    height: 65,
    width: 250,
    borderRadius: 10,
    backgroundColor: '#845EC2',
    cursor: 'pointer',
    justifyContent: 'center', 
    alignItems: 'center'
   },
   buttonImob: {
    marginTop: 5,
    fontSize: 18,
    height: 65,
    width: 250,
    borderRadius: 10,
    backgroundColor: '#845EC2',
    cursor: 'pointer',
    justifyContent: 'center', 
    alignItems: 'center'
   }
})
export default App;

