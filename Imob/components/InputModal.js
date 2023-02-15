import React, {useState} from "react";
import {Modal, TextInput, Text, Button, SafeAreaView, StyleSheet, View, Alert} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

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


    const handleSubmit = () => {
        if (todoInputValue !== '') {
                handleAddTodo({
                    "title": todoInputValue,
                    // description: descriptionInputValue,
                    "adress": adressInputValue,
                    "purpose": purposeInputValue,
                    "type": typeInputValue,
                    "price": priceInputValue,
                    // "Image":
                    "color": "#845EC2",
                    "key": uuidv4()
                });
                }
        // console.log(priori);
        setTodoInputValue("");
    };
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
                        placeholder="Adione a finalidade do Imovél"
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
                        placeholder="Adione o tipo do Imovél"
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
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',

    }
    })
export default InputModal;
