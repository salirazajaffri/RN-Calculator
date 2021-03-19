import React, { Children, Component } from 'react';
import { View, Text, SafeAreaView ,StyleSheet } from 'react-native';

export default class CalculatorScreen extends Component {

    state ={
        valu1:[],
        valu2:[]
    }

    render() {
        return (
            
                <View style={styles.topContainer}>
                    <View style={{height:150, padding: 20, alignItems:'flex-end',justifyContent:'flex-end',backgroundColor:'green'}}>
                        <Text style={{fontSize:100,color:'white'}}>{props.value} </Text>
                    </View>

                    
                </View>
           

        );
    }

}

const styles = StyleSheet.create({
    topContainer:{
        height:200
    }
    

  
})
