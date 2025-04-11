import {View,} from 'react-native'

const Quadrado = (props) => {

  return(
    <View style={{
      backgroundColor: props.branca == true ? 'white' : 'black',
      width: props.lado || 75,
      height: props.lado || 75,
    }}></View>
  )
}

export default Quadrado