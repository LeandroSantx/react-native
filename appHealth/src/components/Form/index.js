import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from "react-native";
import ResultImc from "./resultImc/index";

export default function Form(){
    const [altura, setAltura]= useState(null)
    const [peso, setPeso]= useState(null)
    const [messageImc, setMessageImc]= useState("Preencha o peso e a altura")
    const [imc, setImc]= useState(null)
    const [textButton, setTextButton]= useState("CALCULAR")

    function imcCalculator(){
        return setImc((peso/(altura*altura)).toFixed(2))
    }

    function validarImc(){
        if (peso != null && altura != null){
            imcCalculator()
            setAltura(null)
            setPeso(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e a altura")
    }

    return(
        <View>
            <View>
                <Text style={styles.text}>ALTURA:</Text>
                <TextInput
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                    style={styles.input}
                />
                <Text style={styles.text}>PESO:</Text>
                <TextInput
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex: 70.750"
                    keyboardType="numeric"
                    style={styles.input}
                />
                <Button color={"green"}
                    onPress={() => validarImc()}
                    title={textButton}
                    buttonStyle={styles.button}
                />
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        backgroundColor: '#72b28e',
        borderColor: 'green',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    button: {
      color: 'white',
      padding: 10,
      borderRadius: 10,
    },
    text: {
      fontSize: 15,
      textShadowColor: "rgba(0, 0, 0, 0.5)",
      textShadowOffset: { width: 0.5, height: 0.5 },
      textShadowRadius: 2
    },
});
