import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Search from '../components/Search'
import Detail from '../components/FIlmDetail'

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher'
        }
    },
    Detail:{
        screen:Detail
    }
})


export default createAppContainer(SearchStackNavigator)