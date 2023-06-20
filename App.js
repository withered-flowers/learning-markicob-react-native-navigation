import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import ScreenKiri from "./screens/ScreenKiri";
import ScreenKanan from "./screens/ScreenKanan";

const Tab = createBottomTabNavigator();

// const FunctionBaru = () => {
//   return (

//   )
// }

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Kiri") {
              iconName = focused
                ? "arrow-back-outline"
                : "arrow-back-circle-outline";
            } else if (route.name === "Kanan") {
              iconName = focused
                ? "arrow-forward-outline"
                : "arrow-forward-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Kiri" component={ScreenKiri}></Tab.Screen>
        <Tab.Screen
          name="Kanan"
          component={ScreenKanan}
          options={{
            headerShown: true,
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
