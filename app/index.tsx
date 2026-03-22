import { Text, View, StyleSheet } from "react-native";
import {Button} from "@/components/Button";
import {Link} from "expo-router";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.heading}>Test App screen 1</Text>
      <Text>Hello World</Text>
      <Button text="Click Me" background = "green"/>
      <Button text="Dont click me" background = "red"/>
      <Button text="I told u not to click" background = "pink"/>
      <Link href="/test">
      <Text>go to next screen</Text>
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
heading: {
  fontSize: 20,
  color: "green"
}

})
