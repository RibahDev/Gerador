import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'


export default function App(){
  return(
    <View style={styles.container}>
      <Image 
        source={require("./src/assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>20 Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height:50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='ff4444'
          minimumTrackTintColor='#ff0000'
          thumbTintColor='#ECD172'
        />
      </View>

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
    height: 150
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 15,
    
  }
}) 