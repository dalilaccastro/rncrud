import React from "react";
import { View, FlatList, Alert } from 'react-native'
import users from "../data/users";
import { ListItem, Avatar } from '@rneui/themed'
import { Button, Icon } from "@rneui/base";

export default props => {
    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja realmente excluir o usuário?', [
            {
                text: 'Sim',
                onPress(){
                    console.warn('deletou' + user.id)
                }
            },
            {
                text: 'Não'
            }
        ])
    }


    function getActions(user){
        return(
            <>
                <Button
                    onPress={()=> props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={()=> confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem.Swipeable
                key={user.id}
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}>
            <Avatar rounded source={{uri: user.avatar_url}}/>
            <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
                {getActions(user)}
            </ListItem.Swipeable>    
      )
    }

    return (
        <View>
           <FlatList 
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
           /> 
        </View>
    )
}