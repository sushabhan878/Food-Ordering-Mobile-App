import { Text, View } from "react-native";
import "./global.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-5xl text-center text-primary font-quicksand-bold">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}
