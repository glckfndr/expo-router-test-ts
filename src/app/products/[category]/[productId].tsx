import { AppText } from "@/src/components/AppText";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function ProductScreen() {
  const params = useLocalSearchParams<{
    category: string;
    productId: string;
  }>();

  return (
    <View className="justify-center flex-1 p-4 bg-blue-300">
      <AppText center size="heading" bold>
        Product {params.productId} in {params.category} category
      </AppText>
      <AppText center size="large" bold>
        This is the product description.
      </AppText>
    </View>
  );
}
