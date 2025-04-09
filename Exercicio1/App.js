import { SafeAreaView, StyleSheet } from 'react-native';

import Exercicio from './components/Ex1'

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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
