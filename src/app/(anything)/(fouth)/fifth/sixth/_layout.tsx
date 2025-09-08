import { AppText } from "@/src/components/AppText";
import React from "react";
import { View } from "react-native";

const Layout = () => {
  //return <Slot />;
  return (
    <View className="items-center justify-center flex-1 p-4 bg-green-400">
      <AppText>Layout of Sixth</AppText>
    </View>
  );
};

export default Layout;
