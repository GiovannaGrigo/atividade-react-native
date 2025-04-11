import { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native'
import { Picker } from '@react-native-picker/picker';

const exercicio = () => {
  const [tipoBandeira, setTipoBandeira] = useState('v');
  const [total, setTotal] = useState();
  const [consumoKW, setConsumoKW] = useState();
  let calculoTarifa;
  return (
    <View style={styles.container}>
      <View style={styles.containerMeio}>
        <Text>Informe o tipo do seu veículo:</Text>
        <Picker style={styles.selectTipo}
          selectedValue={tipoBandeira}
          onValueChange={(itemValue, itemIndex) =>
            setTipoBandeira(itemValue)
          }>
          <Picker.Item label="Bandeira verde" value="v" />
          <Picker.Item label="Bandeira amarela" value="a" />
          <Picker.Item label="Bandeira vermelha 1" value="vermelho1" />
          <Picker.Item label="Bandeira vermelha 2" value="vermelho2" />
        </Picker>
        <TextInput style={styles.consumoKW} placeholder='Informe o consumo total em kWh!' onChangeText={setConsumoKW}
        ></TextInput>
        <View style={styles.resultados}>
          <Text>O total da sua tarifa é: {total}</Text>
          <Button
            title="Calcular"
            color="green"
            onPress={() => {
              switch (tipoBandeira) {
                case 'v':
                  calculoTarifa = consumoKW * 0.5;
                  break;
                case 'a':
                  calculoTarifa = consumoKW * 0.55;
                  break;
                case 'vermelho1':
                  calculoTarifa = consumoKW * 0.60;
                  break;
                case 'vermelho2':
                  calculoTarifa = consumoKW * 0.70;
                  break;
                default:
                  console.warn("oi val");
              }
              setTotal(calculoTarifa);
            }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    paddingVertical: 8,
    paddingHorizontal: 0
  },
  containerMeio: {
    backgroundColor: 'white',
    flexWrap: 'nowrap',
    textAlign: 'center',
    padding: 20,
    borderRadius: 15
  },
  resultados: {
    alignItems: 'center',
  },
  consumoKW: {
    borderColor: 'darkgray',
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 5
  },
  selectTipo: {
    backgroundColor: 'gainsboro',
    borderRadius: 15,
    marginBottom: 5,
  }
});
export default exercicio  