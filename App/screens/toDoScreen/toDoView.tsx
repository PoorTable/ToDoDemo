import React, { ReactElement } from "react";
import {FlatList, Pressable, SafeAreaView, Text, TouchableOpacity, unstable_enableLogBox, View} from "react-native";
import {Button, Input} from "react-native-elements";
import {Item} from "../../types";

interface i1 {
    onPress: Function,
    onTextChange: Function,
    text: string,
    Items:Item,
    onDelete:Function
}



const ToDoView =({onPress, onTextChange, text,Items,onDelete}:i1): ReactElement  => {

    // @ts-ignore
    const renderItem = ({item}:Item) => {
        return(

            <Pressable onLongPress={()=>{ onDelete(item)
                }}>
                <View style={{ marginHorizontal: 10, borderStyle: "dashed", borderColor:"#000000", borderWidth: 2, height: 50, justifyContent: "center", alignItems:"center"}}>
                    <Text>{item.description}</Text>
                </View>
            </Pressable>
        )
    }

    return(
        <SafeAreaView>
            <View style={{flexDirection:'row', justifyContent:"space-between", marginHorizontal: 10}}>
                <Input
                    placeholder='Write your ToDo'
                    containerStyle={{width:"80%"}}
                    value={text}
                    onChangeText={(value)=>{onTextChange(value)}}
                />
                <Button
                    title="OK"
                    type="outline"
                    onPress={()=>{onPress()}}
                />
            </View>
            {/*// @ts-ignore */ }
            <FlatList data={Items} renderItem={renderItem}/>
        </SafeAreaView>
    )
}

export default ToDoView;
