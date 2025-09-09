import { Link, useRouter } from "expo-router";
import { View } from "react-native";
import { AppText } from "../components/AppText";
import { Button } from "../components/Button";

export default function ThirdScreen() {
  const router = useRouter();
  return (
    <View className="justify-center flex-1 p-4 bg-green-300">
      <AppText center size="heading" bold>
        Third Screen
      </AppText>
      <Link href="/" push asChild className="p-3 m-4 text-center rounded-lg">
        <Button className="mt-4 bg-yellow-700" title="Push to /"></Button>
      </Link>
      <Link href="/" dismissTo asChild>
        <Button
          title="Dismiss to /"
          className="p-3 m-4 text-center rounded-lg bg-slate-700"
        ></Button>
      </Link>
      <Link href="/second" replace asChild>
        <Button
          title="Replace to second"
          className="p-3 m-4 text-center bg-pink-700 rounded-lg"
        ></Button>
      </Link>

      <Button
        title="Navigate to second"
        className="p-3 m-4 text-center bg-pink-200 rounded-lg"
        onPress={() => router.navigate("/second")}
      ></Button>
    </View>
  );
}
