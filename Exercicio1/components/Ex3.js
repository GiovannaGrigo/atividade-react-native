import { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native'
import { Picker } from '@react-native-picker/picker';

const exercicio = () => {
  const [tipoVeiculo, setTipoVeiculo] = useState('carro');
  const [totalPedagio, setTotalPedagio] = useState();
  const [distanciaKm, setDistanciaKm] = useState();
  let calculoPedagio;
  return (
    <View style={styles.container}>
      <View style={styles.containerMeio}>
        <Text>Informe o tipo do seu veículo:</Text>
        <Picker style={styles.selectTipo}
          selectedValue={tipoVeiculo}
          onValueChange={(itemValue, itemIndex) =>
            setTipoVeiculo(itemValue)
          }>
          <Picker.Item label="Carro" value="carro" />
          <Picker.Item label="Caminhão" value="caminhao" />
          <Picker.Item label="Moto" value="moto" />
        </Picker>
        <TextInput style={styles.distanciaKm} placeholder='Informe a distância percorrida em km!' onChangeText={setDistanciaKm}
        ></TextInput>
        <View style={styles.resultados}>
          <Text>O total do seu pedágio é: {totalPedagio}</Text>
          <Button
            title="Calcular"
            color="green"
            onPress={() => {
              switch (tipoVeiculo) {
                case 'carro':
                  calculoPedagio = 0.10 * distanciaKm;
                  break;
                case 'moto':
                  calculoPedagio = 0.05 * distanciaKm;
                  break;
                case 'caminhao':
                  calculoPedagio = 0.15 * distanciaKm;
                  break;
                default:
                  console.warn("oi val");
              }
              setTotalPedagio(calculoPedagio);
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
  distanciaKm: {
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