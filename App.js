import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [nro1, setNro1] = useState(0);
  const [nro2, setNro2] = useState(0);

  const [tulos, setTulos] = useState(nro1 + nro2);

  const [data, setData] = useState([]);
  //const [text, setText] = useState();

  let historia;
  

  const plussaa = () => {
    console.log("Plus, " + nro1 + ", " + nro2);
    setTulos(nro1 + nro2)
  
    //setText(nro1 + ' + ' + nro2 + ' = ' + parseInt(nro1+nro2)); 
    //setData([...data, { key: text }]);    

    historia = nro1 + ' + ' + nro2 + ' = ' + parseInt(nro1+nro2); 
    setData([...data, { key: historia }]); 
    
    console.log("plussa listaan");  
   
    setNro1(''); //
    setNro2('');
  
  };     

  const miinusta = () => {
    console.log("Miinus, " + nro1 + ", " + nro2);
    setTulos(nro1-nro2)
  
    //setText(nro1 + ' - ' + nro2 + ' = ' + parseInt(nro1-nro2));
    //setData([...data, { key: text }]);    

    historia = nro1 + ' - ' + nro2 + ' = ' + parseInt(nro1-nro2);
    setData([...data, { key: historia }]);    
    
    console.log("miinus listaan");
    
    setNro1('');
    setNro2('');
  
  };


  return (
    <View style={styles.container}>

      <Text style={{marginTop: 100, marginBottom: 20}}>Result: {tulos}</Text>

      <TextInput 
      keyboardType='numeric' 
      style={styles.input}
      onChangeText={arvo1 => setNro1(Number(arvo1))}value={nro1} 
      />

      <TextInput 
      keyboardType='numeric' 
      style={styles.input}
      onChangeText={arvo2 => setNro2(Number(arvo2))}value={nro2}       
      />

      <View style={styles.buttons}> 

        <Button onPress={plussaa} title=" + "></Button>
        <Button onPress={miinusta} title=" - "></Button>

      </View>
      
      <Text style={{marginTop: 20}}>History: </Text>

      <FlatList 
        data={data}        
        renderItem={({ item }) => <Text>{item.key}</Text> }
        keyExtractor={(item, index) => index.toString()}
        
      />

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width : 100,
    borderWidth : 2,
    borderColor : 'black',    
  },
  buttons: {
    flexDirection: 'row', 
    marginTop : 20,     
    justifyContent: 'space-between' , 
    width : 75,
  }

});
