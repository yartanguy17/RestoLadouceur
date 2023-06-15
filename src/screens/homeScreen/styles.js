import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    content:{
        height:height,
        marddingTop:20,
        paddingTop:10,
        backgroundColor:'#eee',
    }
})

export default styles;