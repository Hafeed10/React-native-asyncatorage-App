import {View, StyleSheet, TextInput, Button, Text} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [storadd, setStoradd] = useState("");

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const addValue = async () => {
    try {
      await AsyncStorage.setItem('itemList', inputValue);
      setInputValue("");
      console.log('===========DATA STORED================');
      await getData();
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('itemList');
      setStoradd(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}>
      <TextInput onChangeText={handleInputChange} style={styles.textInput} />
      <Button style={styles.llop} title='Add'  onPress={addValue} color="blue"/>
      <Text style={styles.rext}>Stored data is {storadd}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    width: 320,
    borderColor: 'gray',
    borderWidth: 1,
  },
  llop: {
    width: 10,
    height: 50,
    marginTop: 20,
    backgroundColor: 'blue',
    color: 'white',
  },
  rext: {
    color: 'red',
    fontSize: 20,
    marginTop: 30,
    fontFamily:'monospace' ,
  },
});

export default App;
