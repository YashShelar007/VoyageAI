import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { Colors } from "./../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);

  return (
    <ScrollView
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "poppins-bold",
            fontSize: 35,
          }}
        >
          My Trips
        </Text>
        <TouchableOpacity>
          <Ionicons name="add-circle" size={50} color="black" />
        </TouchableOpacity>
      </View>

      {userTrips?.length == 0 ? <StartNewTripCard /> : null}
      <View
        style={{
          height: 100,
        }}
      ></View>
    </ScrollView>
  );
}
