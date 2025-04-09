import { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native'

const exercicio = () => {
  const [salario, setSalario] = useState(2000)
  const [qtdeHorasTrabalhadas, setQtdeHorasTrabalhadas] = useState(170)
  let qtdeHorasTrabalhadasOriginal;
  let qtdeHorasExtras;
  let valorHora;
  let valorHoraExtra;
  const [salarioFinal, setSalarioFinal] = useState(0)
  return (
    <View>
      <View style={estilos.linha}>
        <TextInput
          value={salario}
          onChangeText={setSalario}
          placeholder="Salário"
          style={estilos.input}
          />
        <TextInput
          value={qtdeHorasTrabalhadas}
          onChangeText={setQtdeHorasTrabalhadas}
          placeholder="Horas Trabalhadas"
          style={estilos.input}
          />
      </View>
      <Text>O seu salário final é: {Number(salarioFinal)}</Text>
      <Button
        title="Calcular"
        color="green"
        onPress={() => {
          if (Number(qtdeHorasTrabalhadas) > 160) {
            qtdeHorasExtras = (Number(qtdeHorasTrabalhadas) - 160)
          }
          
          qtdeHorasTrabalhadasOriginal = (Number(qtdeHorasTrabalhadas) - qtdeHorasExtras)
          valorHora = (salario / qtdeHorasTrabalhadasOriginal)
          valorHoraExtra = (valorHora + (valorHora / 2))
          setSalarioFinal(
            (valorHora * qtdeHorasTrabalhadasOriginal) + (valorHoraExtra * qtdeHorasExtras)
          )
          console.warn(salario + " " + qtdeHorasTrabalhadas + " " + qtdeHorasExtras + " " + valorHoraExtra + " " + valorHora);
        }
        }
      />
    </View>
  )
}

const estilos = StyleSheet.create({
  input: {
    backgroundColor: "white",
    width: 150,
    textAlign: "center",
    margin: 5,
    borderRadius: 5
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  elements: {
    margin: 5,
    color: "black",
    fontWeight: "bold"
  },

  title: {
    textAlign: "center"
  }
})
export default exercicio