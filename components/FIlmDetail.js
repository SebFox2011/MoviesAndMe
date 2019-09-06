import React from 'react'
import {StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity} from 'react-native'
import {getFilmDetailFromApi, getImageFromApi} from '../api/TMDBapi'

class FIlmDetail extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            film : undefined,
            isLoading : true
        }
    }

    displayFilm(){
        const film = this.state.film
        if (film !== undefined) {
            return(
                <ScrollView style = {styles.scrawlView_container}>
                    <Text> {film.title}: id={film.id} </Text>
                    <Image style={styles.image}
                        source={{uri: getImageFromApi(film.backdrop_path)}}/>
                    <Text> {film.tagline} </Text>
                    <Text> {film.release_date} </Text>
                    <Text> {film.overview}</Text>
                    <Text> {film.homepage}</Text>
                    <Text>Budget: {film.budget}</Text>
                    <Text>Revenus: {film.revenue}</Text>
                    <Text>Note: {film.vote_average} / 10</Text>



                </ScrollView>
            )}
    }

    componentDidMount() {
        getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
            this.setState({
                film : data,
                isLoading : false
            })
        })

    }

    displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
    }
    render() {
        const idFilm = this.props.navigation.state.params.idFilm
        return (
            <View style={styles.main_container}>
                {this.displayFilm()}
                {this.displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrawlView_container: {
        flex:1
    },
    image: {
        height: 200,
        margin: 5,
        backgroundColor: 'gray'
    }
})

export default FIlmDetail