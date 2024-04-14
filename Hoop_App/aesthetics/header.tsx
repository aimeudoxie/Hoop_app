import Colors from "./Colors";
import Sizes from "./Sizes";
import { Pressable, StyleSheet, View } from "react-native";
import { Icon } from "./icons";
import { Text } from "./design";

type LayoutHeaderProps = {
  title: string;
  onBackPress?: () => void;
};

export default function LayoutHeader(props: LayoutHeaderProps) {
  return (
    <View style={styles.header}>
      <Pressable style={styles.icon} onTouchEnd={props.onBackPress}>
        <Icon name="arrow-left" style={{ justifyContent: "center" }} />
      </Pressable>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "relative",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Sizes.xl,
    
  },
  icon: {
    position: "absolute",
    left: 8,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Sizes.sm2x,
    backgroundColor: Colors.light.light,
  },
  text: {
    fontWeight: "600",
    fontSize: Sizes.lg,
    
  },
});