import React, {useState} from "react";
import {Modal, TextInput, Text, Button, SafeAreaView, StyleSheet, View} from 'react-native';
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


    const handleSubmit = () => {
        if (todoInputValue !== '') {
                handleAddTodo({
                    "title": todoInputValue,
                    // description: descriptionInputValue,
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
                <ModalContainer>
                    <ModalView>
                    <ModalIcon>
                        <HeaderTitle>Imóveis</HeaderTitle>
                        <AntDesign name="edit" size={15} color={colors.tertiary}/>
                    </ModalIcon>
                    
                    <StyledInput
                        placeholder="Adione um Imóvel"
                        style={{height: 40}}
                        placeholderTextColor={colors.alternative}
                        selectionColor={colors.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setTodoInputValue(text)}
                        value={todoInputValue}
                        onSubmitEditing={handleSubmit}
                        />
                        {/* <Text></Text>
                         <Text></Text> */}
                        <SafeAreaView style={{ flex: 1 }}>
    </SafeAreaView>
                    <ModalActionGroup>
                        <ModalAction color={colors.primary} onPress={() => setModalVisible(!modalVisible)}>
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
