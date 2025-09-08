import { Link, useRouter } from "expo-router";
import { View } from "react-native";
import { AppText } from "../components/AppText";
import { Button } from "../components/Button";

export default function FirstScreen() {
  const router = useRouter();
  return (
    <View className="justify-center flex-1">
      <AppText
        size="heading"
        center
        color="tertiary"
        className="p-6 bg-yellow-200"
      >
        First Screen
      </AppText>
      <Link href="/second" className="mt-4" push>
        <AppText size="heading" color="primary" bold>
          Push to Second Screen
        </AppText>
      </Link>
      <Button
        className="mt-4 bg-blue-500"
        onPress={() => {
          router.push("/third");
        }}
        title={"Go to Third Screen from Button"}
      ></Button>
      <Link href="/fifth/sixth" push className="mt-4">
        <AppText
          size="heading"
          center
          bold
          className="text-yellow-200 bg-purple-600 rounded-md ps-10"
        >
          Push to Sixth Screen
        </AppText>
      </Link>
      <Link href="/third" className="mt-4" push asChild>
        <Button
          className="mt-4 bg-purple-500"
          title={"Go to Third Screen from Button inside Link"}
        ></Button>
      </Link>
    </View>
  );
}
