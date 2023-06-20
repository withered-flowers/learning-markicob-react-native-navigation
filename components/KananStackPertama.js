import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "../styles/global";

const KananStackPertama = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ini Halaman Kanan</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default KananStackPertama;
