import { SafeAreaView, StyleSheet } from 'react-native';

import Exercicio from './components/Ex1'; //Altere o número do exercício pra acessar os outros!

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Exercicio/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
