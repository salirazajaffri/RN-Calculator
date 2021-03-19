import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      result: "",
      calculationValue: "",
    };
    this.operations = ['AC', 'DEL', '+', '-', '*', '/' , '%'];
  }


  calculationResult(){
    const text =this.state.result;
    this.setState({
      calculationValue:eval(text)
    })
  }

  validate(){
    const text =this.state.result
    switch(text.slice(-1)){
      case '+':
      
      case '-':

      case '*':

      case '/':
        return false
    }
    
    return true
  }

  onPressButton(text){
    console.log(text);

    if(text=='='){
      return this.validate() && this.calculationResult(this.state.result)
    }
    this.setState({
      result: this.state.result + text
    });
  }

  operate(operation){
    switch(operation){
      case 'C':
        this.setState({
          result:"",
          calculationValue:""
        });
        break;
      case 'DEL':
        console.log(this.state.result);
        let text = this.state.result.split('');
        text.pop();
        this.setState({
          result:text.join('')
        });
        break

        case '+':

        case '-':

        case '*':

        case '/':

        case '%':

          const lastChar = this.state.result.split('').pop()

          if(this.operations.indexOf(lastChar)>0) return

          if(this.state.text =="") return
          this.setState({
            result:this.state.result + operation
          })
    }

  }


  render() {
    let rows=[];
    let nums=[[1,2,3],[4,5,6],[7,8,9],['.',0,'='],['(',')','m']];
    for(let i=0;i<5;i++){
      let row=[];
      for(let j=0;j<3;j++){
        row.push(
          <TouchableOpacity
          key={nums[i][j]}
          style={styles.btn}
          onPress={()=> this.onPressButton(nums[i][j])}
          >
            <Text style={styles.btnText}>{nums[i][j]}</Text>

          </TouchableOpacity>
        );
      }
      rows.push(<View key={i} style={styles.row}>{row}</View>);
    }

    let ops=[];
    for(let i=0;i<7;i++){
      ops.push(
        <TouchableOpacity
        key={this.operations[i]}
        style={styles.btn}
        onPress={()=> this.operate(this.operations[i])}
        >
          <Text style={styles.btnText}>
          {this.operations[i]}
          </Text>

        </TouchableOpacity>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.result}</Text>
        </View>
        <View style={styles.calculation} >
          <Text style={styles.calculationText}>{this.state.calculationValue}</Text>

        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>{rows}</View>
          <View style={styles.operations}>{ops}</View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',

  },
  resultText: {
    fontSize: 35,
    paddingRight: 10,
    color: 'black'
  },
  calculation:{
    flex:1,
    backgroundColor:'lightgrey',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  calculationText:{
    fontSize:50,
    paddingRight:10,
    color:'black'
  },
  buttons:{
    flex:9,
    flexDirection:'row'
  },
  numbers:{
    flex:5,
    padding:1,
    backgroundColor:'#1e2326'
  },
  operations:{
    flex:2,
    justifyContent:'space-around',
    alignItems:'stretch',
    backgroundColor:'#454e54'
  },
  btn:{
    flex:1,
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'center'
  },
  btnText:{
    fontSize:40,
    color:'white'
  },
  row:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-around',
    alignItems:'stretch'
  },
  white:{
    color:'white'
  }
})