import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';

//Styled Components
import {
    ListView,
    ListViewHidden,
    TodoText,
    TodoDate,
    HiddenButton,
    SwipedTodoText,
    colors, 
} from "../styles/appStyles.js";

import { SwipeListView } from 'react-native-swipe-list-view';
import {Entypo} from "@expo/vector-icons";


const ListItems = ({todos, setTodos}) => {

    //For styling currently swiped todo row
    const [swipedRow, setSwipedRow] = useState(null);

  
    return (
        <>
        {todos.lenght > 2 ?
         <SwipeListView
            data={todos}
            renderItem={(data) => {

                 const RowText = data.item.key == swipedRow ? SwipedTodoText : TodoText;
                //   console.log(data.item);
                return(
                    <ListView
                            // underlayColor = {colors{prioriColor}}
                            style={{backgroundColor: "#845EC2"}}
                            onPress={() => {
                            }}
                        >
                            <>
                                <RowText>{data.item.title}</RowText>
                                {/* <RowText style={styles.rowText}>{data.item.description}</RowText> */}
                            </>
                        </ListView>
                );
                        }}
            />
            : null };
            </>
    );
}
const styles = StyleSheet.create({
    rowText: {
        color: "gray"
    }
    })
export default ListItems;
