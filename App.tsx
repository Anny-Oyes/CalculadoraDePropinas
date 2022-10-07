
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        < Image style={styles.logo} source={require("./assets/logo.png")} />
      </View>

      <View style={styles.threeContainer}>

        <View style={styles.containerPerson}>
          <Text style={styles.containerBill}> Bill </Text>
          <View style={styles.containerBillTwo}>
            < Image source={require("./assets/icon-dollar.png")} style={styles.image} />
            <TextInput inlineImageLeft='./assets/icon-dollar.png' style={styles.inputs} />
          </View>

        </View>

        <Text style={styles.select}>Select Tip %</Text>

        <View style={styles.rows}>

          <TouchableOpacity>
            <View style={styles.buttons}>
              <Text style={styles.buttonText}> 5% </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.buttons}>
              <Text style={styles.buttonText}> 10% </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.rows}>
          <TouchableOpacity>
            <View style={styles.buttonsCenter}>
              <Text style={styles.texts}> 15% </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.buttons}>
              <Text style={styles.buttonText}> 25% </Text>
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.rows}>
          <TouchableOpacity>
            <View style={styles.buttons}>
              <Text style={styles.buttonText}> 50% </Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.buttonsCenterTwo}>
              <Text style={styles.textBtn}> Custom </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.containerPerson}>
          <Text style={styles.containerBill}> Number of People </Text>
          <View style={styles.containerBillTwo}>
            < Image source={require("./assets/icon-person.png")} style={styles.image} />
            <TextInput style={styles.inputs} />
          </View>

        </View>

        <View>

          <View style={styles.fourContainer}>
            <Text style={styles.amaunt}>Tip Amount</Text>
            <View>
              <Text style={styles.person}>/ Person</Text>
              <TextInput style={styles.inputPerson} editable={false} value={'$'} />
            </View>

            <Text style={styles.amaunt}>Total</Text>
            <View>
              <Text style={styles.person}>/ Person</Text>
              <TextInput style={styles.inputPerson} editable={false} value={'$'} />
            </View>

            <TouchableOpacity style={styles.reset}>
              <Text style={styles.textReset}> RESET </Text>
            </TouchableOpacity>
          </View>

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
    justifyContent: 'center',
    margin: -10,
  },

  threeContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'hsl(0, 0%, 100%)',
    width: '100%',
    height: '82%',
    marginTop: '10%',
    borderTopStartRadius: 35,
    borderTopRightRadius: 35,
  },

  containerBill: {
    flexDirection: 'row',
    marginBottom: 19,
    marginVertical: 15,
    justifyContent: 'center'

  },

  containerPerson: {
    fontSize: 18,
    marginHorizontal: 26,
  },

  image: {
    width: 17,
    height: 20,
  },

  inputs: {
    width: '85%',
    height: 50,
    fontSize: 20,
    marginHorizontal: 23,
    marginTop: -3,
    borderRadius: 6,
    backgroundColor: 'hsl(189, 41%, 97%)',
    textAlign: 'right',
    color: 'hsl(183, 100%, 15%)',
  },

  select: {
    fontSize: 18,
    textAlign: 'left',
    marginLeft: 30,
    margin: 5,

  },

  rows: {
    flexDirection: 'row',
    marginBottom: 19,
    justifyContent: 'center',
  },

  buttons: {
    backgroundColor: "hsl(183, 100%, 15%)",
    borderRadius: 10,
    height: 50,
    width: 170,
    justifyContent: "center",
    marginHorizontal: 10,
  },

  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 25,
    color: "white",
  },

  buttonsCenter: {
    height: 50,
    width: 170,
    backgroundColor: 'hsl(172, 67%, 45%)',
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  texts: {
    color: 'hsl(0, 0%, 100%)',
    textAlign: "center",
    padding: 10,
    fontSize: 25,
  },

  buttonsCenterTwo: {
    backgroundColor: 'hsl(189, 41%, 97%)',
    width: 170,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  textBtn: {
    color: 'hsl(186, 14%, 43%)',
    textAlign: "center",
    padding: 10,
    fontSize: 25,
  },

  fourContainer: {
    margin: 20,
    width: "85%",
    height: 280,
    backgroundColor: 'hsl(183, 100%, 15%)',
    alignSelf: 'center',
    borderRadius: 35,
  },

  amaunt: {
    color: 'hsl(189, 41%, 97%)',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 40,
    fontWeight: 'bold',

  },

  person: {
    fontSize: 18,
    marginLeft: 40,
    color: 'hsl(186, 14%, 43%)',
  },

  inputPerson: {
    width: '10%',
    height: 50,
    textAlign: 'right',
    fontSize: 30,
    color: 'hsl(172, 67%, 45%)',
    fontWeight: 'bold',
    marginLeft: '77%',
    marginTop: -60,
  },

  reset: {
    backgroundColor: 'hsl(172, 67%, 45%)',
    height: '20%',
    width: '82%',
    justifyContent: 'center',
    marginTop: 70,
    alignSelf: 'center',
  },

  textReset: {
    color: 'hsl(183, 100%, 15%)',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  containerBillTwo: {
    width: "82%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 40,
    backgroundColor: "hsl(189, 41%, 97%)",
    borderRadius: 5,
    margin: 10,
  },
});

