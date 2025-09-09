import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "../../global.css";

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{ animation: "slide_from_bottom", title: "Main Screen" }}
        />
      </Stack>
    </React.Fragment>
  );
}
