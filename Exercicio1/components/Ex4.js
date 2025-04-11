import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native'
import Quadrado from './Quadrado'

const exercicio = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerMeio}>
        <Quadrado branca={true}/>
        <Quadrado/>
        <Quadrado branca={true}/>
        <Quadrado/>
        <Quadrado/>
        <Quadrado branca={true}/>
        <Quadrado/>
        <Quadrado branca={true}/>
        <Quadrado branca={true}/>
        <Quadrado/>
        <Quadrado branca={true}/>
        <Quadrado/>
        <Quadrado/>
        <Quadrado branca={true}/>
        <Quadrado />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    paddingVertical: 8,
    paddingHorizontal: 0
  },
  containerMeio: {
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    borderRadius: 15,
    height: 300,
    width: 300
  },
});
export default exercicio