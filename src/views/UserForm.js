import React, {useContext, useState} from "react";
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import UsersContext from "../context/UsersContext";


export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {} )
    const {dispatch} = useContext(UsersContext)
    return (
        
        <View style={style.form}>
            <Text style={style.text}>Nome: </Text>
            <TextInput 
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Digite seu Nome"
                value={user.name}
            />
            <Text style={style.text}>E-mail: </Text>
            <TextInput 
                style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Digite seu E-mail"
                value={user.email}
            />
            <Text style={style.text}>URL do Avatar: </Text>
            <TextInput 
                style={style.input}
                onChangeText={avatar_url => setUser({...user, avatar_url})}
                placeholder="Informe a URL do Avatar"
                value={user.avatar_url}
            />
            <Button 
                title="Salvar"
                onPress={() => {
                    dispatch({
                    type: user.id ? 'updateUser' : 'createUser',
                    payload: user,
                })
                navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create ({
    form: {
        padding: 15
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
    }
})