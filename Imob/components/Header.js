import React from 'react';
import { StyleSheet } from 'react-native';
//Styled Components
import {
    HeaderView,
    HeaderTitle,
    HeaderButton,
    colors
} from "./../styles/appStyles.js";

//Icons
import {Entypo} from "@expo/vector-icons";

const Header = ({}) => {
    return (
        <HeaderView>
            <HeaderTitle>Imob</HeaderTitle>
        </HeaderView>
    )
}

const styles = StyleSheet.create({
    HeaderView: {
        marginRight: 40,
        marginLeft: 40,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',

    }
    })

export default Header;