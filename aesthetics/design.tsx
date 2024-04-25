import Colors from "./Colors";
import Sizes from "./Sizes";
import {
  TextProps as DefaultTextProps,
  Text as DefaultText,
  useColorScheme,
} from "react-native";

// Define a custom LinkProps type
type LinkProps = {
  lightColor?: string;
  darkColor?: string;
  href: string; // Adjust href type as needed
} & DefaultTextProps;

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];
  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: DefaultTextProps) {
  const { style, ...otherProps } = props;
  return (
    <DefaultText
      style={[
        {
          fontSize: Sizes.md,
          fontFamily: "Avenir",
          fontWeight: "500",
        },
        style,
      ]}
      {...otherProps}
    />
  );
}

export function Link(props: LinkProps) {
  const { style, lightColor, darkColor, href, ...otherProps } = props;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );
  return (
    <DefaultText
      onPress={() => {
        /* Handle link press */
      }}
      style={[
        {
          color,
          fontFamily: "Avenir",
          // Add other styles as needed
        },
        style,
      ]}
      {...otherProps}
    />
  );
}
