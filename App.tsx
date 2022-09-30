
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        < Image style={styles.logo} source={require("./assets/logo.png")} />
      </View>

      <View style={styles.threeContainer}>
        <Text> Bill </Text>
        <TextInput placeholder='$' />
        <Text>Select Tip %</Text>

        <View>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.texts}> 5% </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonsCenter}>
            <Text style={styles.texts}> 15% </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.texts}> 50% </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btn}>
          <TouchableOpacity style={styles.buttonsTwo}>
            <Text style={styles.texts}> 10% </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonsTwo}>
            <Text style={styles.texts}> 25% </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonsCenterTwo}>
            <Text style={styles.textBtn}> Custom </Text>
          </TouchableOpacity>
        </View>
        <View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(185, 41%, 84%)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  subContainer: {
    width: '30%',
    height: '10%',
    marginTop: '5%',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  logo: {
    width: 87,
    height: 54,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  threeContainer: {
    backgroundColor: 'hsl(0, 0%, 100%)',
    width: '100%',
    height: '59%',
    marginTop: '10%',
    borderRadius: 35,
  },

  buttons: {
    backgroundColor: 'hsl(183, 100%, 15%)',
    width: '15%',
    height: '30%',
    borderRadius: 10,
    alignItems: 'stretch',
    marginLeft: '20%',
    marginTop: 20,
  },

  buttonsCenter: {
    backgroundColor: 'hsl(172, 67%, 45%)',
    width: '15%',
    height: '30%',
    borderRadius: 10,
    alignItems: 'stretch',
    marginLeft: '20%',
    marginTop: 20,
  },

  texts: {
    color: 'hsl(0, 0%, 100%)',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },

  btn: {
    margin: '-15%',
  },

  buttonsTwo: {
    backgroundColor: 'hsl(183, 100%, 15%)',
    width: '12%',
    height: '30%',
    borderRadius: 10,
    alignItems: 'stretch',
    marginLeft: '60%',
    marginTop: 20,
  },

  buttonsCenterTwo: {
    backgroundColor: 'hsl(189, 41%, 97%)',
    width: '12%',
    height: '30%',
    borderRadius: 10,
    alignItems: 'stretch',
    marginLeft: '60%',
    marginTop: 20,
  },

  textBtn: {
    color: 'hsl(186, 14%, 43%)',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  }
});

