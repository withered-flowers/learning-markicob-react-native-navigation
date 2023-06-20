import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";

const ScreenKiri = () => {
  const { navigate } = useNavigation();

  const pindahinKeKanan = () => {
    console.log("Halo Dunia, beneran keteken nih !");
    navigate("Kanan");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Ini Halaman Kiri</Text>
        <TouchableOpacity style={styles.button} onPress={pindahinKeKanan}>
          <Text>Pindah ke Kanan</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </>
  );
};

export default ScreenKiri;
