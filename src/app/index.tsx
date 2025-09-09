import { Link, useRouter } from "expo-router";
import { View } from "react-native";
import { AppText } from "../components/AppText";
import { Button } from "../components/Button";

export default function FirstScreen() {
  const router = useRouter();
  return (
    <View className="justify-center flex-1 bg-amber-200">
      <AppText size="heading" center bold>
        Index Screen
      </AppText>
      <Link
        href="/second"
        className="p-3 m-4 text-center rounded-lg"
        push
        asChild
      >
        <Button
          className="mt-4 bg-blue-500"
          title="Push to Second Screen"
        ></Button>
      </Link>
      <Link
        href={{ pathname: "/second", params: { name: "Oleh" } }}
        className="p-3 m-4 text-center rounded-lg"
        push
        asChild
      >
        <Button
          className="mt-4 bg-blue-900"
          title="Push to Second Screen with params"
        ></Button>
      </Link>
      <Button
        title="Push to second with params"
        className="p-3 m-4 text-center bg-pink-200 rounded-lg"
        onPress={() =>
          router.push({ pathname: "/second", params: { name: "Halyna" } })
        }
      ></Button>
      <Link
        href={{ pathname: "/proverbs/[id]", params: { id: "2" } }}
        push
        asChild
      >
        <Button
          title="Push to proverbs/2"
          className="p-3 m-4 text-center bg-teal-800 rounded-lg"
        ></Button>
      </Link>
      <Button
        title="Push to proverbs/9"
        className="p-3 m-4 text-center rounded-lg bg-slate-700"
        onPress={() => {
          router.push("/proverbs/9");
        }}
      ></Button>
      <Button
        title="Push to products with category and id"
        className="p-3 m-4 text-center bg-slate-500"
        onPress={() => {
          router.push("/products/shoes/345");
        }}
      ></Button>
    </View>
  );
}
