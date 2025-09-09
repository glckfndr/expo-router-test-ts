import { Link, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { AppText } from "../components/AppText";
import { Button } from "../components/Button";

export default function SecondScreen() {
  const params = useLocalSearchParams<{ name: string }>();
  return (
    <View className="justify-center flex-1 p-4 bg-blue-300">
      <AppText center size="heading" bold>
        Second Screen
      </AppText>
      {params.name && (
        <AppText center bold size="heading" className="mb-4">
          Hello, {params.name}!
        </AppText>
      )}
      <Link
        href="/third"
        className="p-3 m-4 text-center rounded-lg"
        push
        asChild
      >
        <Button
          className="mt-4 bg-green-700"
          title="Push to Third Screen"
        ></Button>
      </Link>
    </View>
  );
}
