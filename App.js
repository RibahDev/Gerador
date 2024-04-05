import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import { ModalPassword } from './src/components/modal'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export default function App(){

  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword() {
    
    let password = "";
    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password);
    setModalVisible(true);

  }

  return(
    <View style={styles.container}>
      <Image 
        source={require("./src/assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height:50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#ff4444'
          minimumTrackTintColor='#ff0000'
          thumbTintColor='#ECD172'
          value={size}
          onValueChange={ (value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
          <ModalPassword />
      </Modal>

      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#f3f3f3",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom: 60,
    width: 150,
    height: 150,
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "60%",
    backgroundColor: "#fff",
    borderRadius: 15,
    
  },
  button:{
    backgroundColor: "#ECD172",
    width: "40%",
    height: 60,
    alignItems: "center",
    justifyContent:"center",
    borderRadius: 10,
    marginBottom: 18,
  },
  buttonText:{
    color: "#fff",
    fontSize: 20,
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
  }
})  