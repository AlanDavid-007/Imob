import React, {useState} from "react";
import {Modal, Image, Text, Button, SafeAreaView, StyleSheet, View, Alert, TouchableOpacity} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import * as ImagePicker from 'expo-image-picker';
//Navigation import
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
    ModalButton,
    ModalContainer,
    ModalView,
    StyledInput,
    ModalAction,
    ModalActionGroup,
    ModalIcon,
    HeaderTitle,
    colors,
    TodoText
} from "./../styles/appStyles.js";
import {AntDesign} from "@expo/vector-icons";

const InputModal = ({
    modalVisible,
    setModalVisible,
    setTodos,
    handleAddTodo,
    todos
    }) => {     
    const [todoInputValue, setTodoInputValue] = useState("");
    const [adressInputValue, setAdressInputValue] = useState("");
    const [purposeInputValue, setPurposeInputValue] = useState("");
    const [typeInputValue, setTypeInputValue] = useState("");
    const [priceInputValue, setPriceInputValue] = useState(0);
      // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState('');
    const showImagePicker = async () => {
        // Ask the user for the permission to access the media library 
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Você recusou o acesso a galeria");
          return;
        }
    
        const result = await ImagePicker.launchImageLibraryAsync();
    
        // Explore the result
        console.log(result);
    
        if (!result.canceled) {
            setPickedImagePath(result.assets[0].uri);
          }
    }
        const openCamera = async () => {
            // Ask the user for the permission to access the camera
            const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        
            if (permissionResult.granted === false) {
              alert("Você recusou o acesso a câmera");
              return;
            }
        
            const result = await ImagePicker.launchCameraAsync();
        
            // Explore the result
            console.log(result);
        
            if (!result.canceled) {
                setPickedImagePath(result.assets[0].uri);
              }
        }
    const handleSubmit = () => {
        if (todoInputValue !== '') {
                handleAddTodo({
                    "title": todoInputValue,
                    // description: descriptionInputValue,
                    "adress": adressInputValue,
                    "purpose": purposeInputValue,
                    "type": typeInputValue,
                    "price": priceInputValue,
                    "image": pickedImagePath,
                    "color": "#845EC2",
                    "key": uuidv4()
                });
        // console.log(priori);
        setTodoInputValue("");
    };
}
    return (
        <>
            <Modal 
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                  }}
                  
            >
                <ModalContainer style={{backgroundColor: 'black'}}>
                    <ModalView style={{backgroundColor: 'black'}}>
                    <ModalIcon>
                        <HeaderTitle>Cadastro de Imóveis</HeaderTitle>
                        <AntDesign name="edit" size={15} color={colors.tertiary}/>
                    </ModalIcon>
                    
                    <StyledInput
                        placeholder="Adione o nome do Imóvel"
                        style={{height: 40}}
                        placeholderTextColor={colors.alternative}
                        selectionColor={colors.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setTodoInputValue(text)}
                        value={todoInputValue}
                        onSubmitEditing={handleSubmit}
                        />
                                                <Text></Text>
                         <Text></Text> 
                         <StyledInput
                        placeholder="Adione o endereço do Imovél"
                        style={{height: 40}}
                        placeholderTextColor={colors.alternative}
                        selectionColor={colors.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setAdressInputValue(text)}
                        value={adressInputValue}
                        onSubmitEditing={handleSubmit}
                        />
                                                <Text></Text>
                         <Text></Text> 
                         <StyledInput
                        placeholder="Finalidade: Aluguel ou Venda"
                        style={{height: 40}}
                        placeholderTextColor={colors.alternative}
                        selectionColor={colors.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setPurposeInputValue(text)}
                        value={purposeInputValue}
                        onSubmitEditing={handleSubmit}
                        />
                                                <Text></Text>
                         <Text></Text> 
                         <StyledInput
                        placeholder="Tipo: Casa, Ap. ou Comércio"
                        style={{height: 40}}
                        placeholderTextColor={colors.alternative}
                        selectionColor={colors.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setTypeInputValue(text)}
                        value={typeInputValue}
                        onSubmitEditing={handleSubmit}
                        />
                                                <Text></Text>
                         <Text></Text> 
                         <StyledInput
                        placeholder="Adione o Preço do Imovél"
                        style={{height: 40}}
                        placeholderTextColor={colors.alternative}
                        selectionColor={colors.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setPriceInputValue(text)}
                        value={priceInputValue}
                        keyboardType='numeric'
                        onSubmitEditing={handleSubmit}
                        />
                     <Text></Text>
                         <Text></Text> 
                    <View style={{ flex: 1, flexDirection: 'row'}}>
                        <TouchableOpacity onPress={showImagePicker} style={styles.button}>
                        <Text style={{color: 'white'}}>Abrir Galeria</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openCamera} style={styles.button}>
                        <Text style={{color: 'white'}}>Abrir Câmera</Text>
                        </TouchableOpacity>
                        {/* {this.props.navigation.navigate('Listagem', { uri : pickedImagePath })}; */}
                        </View>

                        <SafeAreaView style={{ flex: 1 }}>
    </SafeAreaView>
                    <ModalActionGroup>
                        <ModalAction style={{backgroundColor: 'black'}} onPress={() => setModalVisible(!modalVisible)}>
                        <AntDesign name="close" size={20} color={colors.tertiary}/>
                        </ModalAction>

                        {/* <ModalAction color={colors.tertiary} onPress= {() => {handleSubmit, setModalVisible(!modalVisible)}}>
                        <AntDesign name="check" size={20} color={colors.secondary}/>                   
                        </ModalAction> */}
                    
                    </ModalActionGroup>
                    </ModalView>
                </ModalContainer>
            </Modal>
        </>
    )
}
const styles = StyleSheet.create({
    button: {
    height: 65,
    width: 100,
    borderRadius: 10,
    marginLeft: 30
    }
    })
export default InputModal;
