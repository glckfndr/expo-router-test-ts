import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "../../global.css";

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "teal",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="numeric-1-box-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="second"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="numeric-2-box-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="third"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="numeric-3-box-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="fourth"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="numeric-4-box-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </React.Fragment>
  );
}
