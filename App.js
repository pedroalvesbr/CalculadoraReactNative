import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView , Platform} from 'react-native';

import Botao from './components/Botoes.js'
import Display from './components/display.js'


const initialState ={
  displayValue: '0',
  clearDisplay: false,      //se o display precisa ser limpo
  operation: null,          //qual operação foi setada
  values: [0,0],            //array com os dois valores para fazermos a operação
  current: 0                //ponteiro do indice array
}

export default class App extends Component {

  state ={...initialState}

  clearMemory =() => {
    this.setState({...initialState})
  }

  addDigit = n => {
    const clearDisplay = this.displayValue === '0' || this.state.clearDisplay
    //console.debug(typeof this.state.displayValue) verifica o tipo de valor
    
    if(n ==='.' && !clearDisplay && this.state.displayValue.includes('.')){
      return 
    }    
    const currentValue = clearDisplay ? '' : this.state.displayValue    //o currentValue é exatamente o que esta no display se estiver vazio ele deixa ''
    const displayValue = currentValue === '0'? n : currentValue+ n //concatena o numero quando passa de 1 digito
    this.setState({ displayValue, clearDisplay: false})


    if(n!=='.'){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values] //clone do array de valores[0,0] la de cima. ao inves de atualizar o de cima, eu gero um novo e atualizo com o estado
      values[this.state.current] = newValue
      this.setState({values})
    }
  }

  setOperation = operation =>{
    if(this.state.current === 0){
      this.setState({operation, current: 1, clearDisplay: true})
    }
    else{
      const simboloDoIgual = operation === '='
      const values = [...this.state.values]  //clone do array atual que nos temos no estado do objeto
      try{
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)

      }catch(e) {
        values[0] = this.state.values[0] //garantir que quando um valor errado for setado o values[0] continua a mesma coisa
      }
      //sempre que seto uma nova operação o valor do indice 1 ficara zerado
      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`,     //colocar dentro de um template string vai garantir que seja uma string quando digitar so '.'
        operation: simboloDoIgual ? null : operation,
        current: simboloDoIgual ? 0 : 1,
        clearDisplay : true ,
        values: values
      })


    }

  }

render(){
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue}></Display>
        <View style={styles.buttons}>
        <Botao label='ac' triple onClick={ this.clearMemory} ></Botao>
        <Botao label='/' onClick={ this.setOperation} operation></Botao>
        <Botao label='7' onClick={this.addDigit}></Botao>
        <Botao label='8' onClick={ this.addDigit}></Botao>
        <Botao label='9' onClick={ this.addDigit}></Botao>
        <Botao label='*' onClick={ this.setOperation} operation></Botao>
        <Botao label='4' onClick={ this.addDigit}></Botao>
        <Botao label='5' onClick={ this.addDigit}></Botao>
        <Botao label='6' onClick={ this.addDigit}></Botao>
        <Botao label='-' onClick={ this.setOperation} operation></Botao>
        <Botao label='1' onClick={ this.addDigit}></Botao>
        <Botao label='2' onClick={ this.addDigit}></Botao>
        <Botao label='3' onClick={ this.addDigit}></Botao>
        <Botao label='+' onClick={ this.setOperation} operation></Botao>
        <Botao label='0' double onClick={ this.addDigit}></Botao>
        <Botao label='.' onClick={ this.addDigit}></Botao>
        <Botao label='=' onClick={ this.setOperation} operation></Botao>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1
  },
  buttons:{
    
    flexDirection:'row' ,
    flexWrap: 'wrap'
  }
});
