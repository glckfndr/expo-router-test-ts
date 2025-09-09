import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { AppText } from "../../components/AppText";

const proverbs = [
  {
    id: "1",
    proverb: "Fall seven times, stand up eight.",
    source: "Japanese Proverb",
  },
  {
    id: "2",
    proverb:
      "The best time to plant a tree was twenty years ago. The second best time is now.",
    source: "Chinese Proverb",
  },
  {
    id: "3",
    proverb: "Where there is no struggle, there is no strength.",
    source: "African Proverb",
  },
  {
    id: "4",
    proverb: "A journey of a thousand miles begins with a single step.",
    source: "Chinese Proverb",
  },
  {
    id: "5",
    proverb:
      "If you want to go fast, go alone. If you want to go far, go together.",
    source: "African Proverb",
  },
  {
    id: "6",
    proverb:
      "He who asks is a fool for five minutes, but he who does not ask remains a fool forever.",
    source: "Chinese Proverb",
  },
  {
    id: "7",
    proverb:
      "Do not be afraid of growing slowly, be afraid only of standing still.",
    source: "Chinese Proverb",
  },
  {
    id: "8",
    proverb:
      "The gem cannot be polished without friction, nor man perfected without trials.",
    source: "Chinese Proverb",
  },
  {
    id: "9",
    proverb: "Little by little, the bird builds its nest.",
    source: "French Proverb",
  },
  {
    id: "10",
    proverb: "Smooth seas do not make skillful sailors.",
    source: "African Proverb",
  },
];

export default function ProverbScreen() {
  const params = useLocalSearchParams<{ id: string }>();

  const proverb = proverbs.find((p) => p.id === params.id);
  if (!proverb) {
    return (
      <View className="items-center justify-center flex-1 p-4 bg-yellow-100">
        <AppText center size="heading" bold>
          Proverb is not found
        </AppText>
      </View>
    );
  }
  return (
    <View className="items-center justify-center flex-1 p-4 bg-yellow-100">
      <Stack.Screen options={{ title: `Source: ${proverb.source}` }} />
      <AppText center size="heading" bold>
        {proverb.proverb}
      </AppText>
    </View>
  );
}
