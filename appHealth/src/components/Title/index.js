import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>APP HEATH</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3CB371",
    height: 100,
    
  },
  text: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  }
});
