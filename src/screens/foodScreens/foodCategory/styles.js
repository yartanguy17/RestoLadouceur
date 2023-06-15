import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    banner:{
        marginTop:20,
        marginStart:30,
        marginEnd:20,
        width: 300,
        height: 40,
    },
    content:{
        height:height,
        marddingTop:20,
        paddingTop:10,
        backgroundColor:'#eee',
    },
    price:{
        marginTop:10,
        marginBottom:10
    }
})

export default styles;