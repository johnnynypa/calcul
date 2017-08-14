import { StyleSheet} from 'react-native';

const altoBoton = 80;

var Style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'flex-start'
    },
    operacion:{
        width:'100%',
        height: 72,
        backgroundColor:'#DDD'
    },
    operacionText:{
        paddingLeft:5,
        fontSize:20
    },
    resultado:{
        width:'100%',
        height: 96,
        backgroundColor:'#F9F9F9'
    },
    resultadoText:{
        fontSize:40,
        textAlign:'right',
        paddingRight:5,
        color:'#444'
    },
    table:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'flex-start'
    },
    rowButtons:{
        flexDirection: 'row',
        height:altoBoton
    },
    cuadro:{
        width:90,
        height:altoBoton,
        borderWidth:.3,
        borderRadius:1
    },
    num:{
        backgroundColor:'#BBB'
    },
    numText:{
        color:'#333',
    },
    op:{
        backgroundColor:'#FE9700'
    },
    opText:{
        color:'white',
    },
    textButton:{
        paddingTop:8,
        textAlign:'center',
        fontSize:50
    }
});

export default Style;