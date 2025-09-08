import { Redirect } from "expo-router";

export default function Layout() {
  //return <Slot />;
  // return (
  //   <View className="items-center justify-center flex-1 p-4 bg-green-700">
  //     <AppText>Stop by intermediate layout</AppText>
  //   </View>
  // );
  return <Redirect href="/second" />;
}
