import React from 'react'
import {StyleSheet,View, TextInput, Button,FlatList,Text} from 'react-native'
import films from '../helpers/filmData'
import FilmItem from "./FilmItem";

class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder="Titre du film"/>
                <Button style={{height: 2}} title="Rechercher" onPress={() => {
                }}/>
                <FlatList style={{marginLeft: 5, marginRight: 5}}
                    data={films}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item}) => <FilmItem film={item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create ( {
    main_container:{marginTop: 20,flex:1},
    textinput: {marginLeft: 5, marginRight: 5, height: 50, borderColor: '#ff764e', borderWidth: 2, paddingLeft: 5}
});

export default Search