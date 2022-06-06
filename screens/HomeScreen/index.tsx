import {
  AspectRatio,
  Box,
  Center,
  Heading,
  Stack,
  Text,
  Image,
  HStack,
} from "native-base";
import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";

const Example = () => {
  return (
    <Box
      width={Dimensions.get("window").width / 3}
      height={200}
      marginRight={5}
      borderRadius={3}
      overflow={"hidden"}
    >
      <AspectRatio w="100%" h="100%" ratio={1 / 2}>
        <Image src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/277427160_1246423889216551_630745644049469322_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=dgXtMhxJGsMAX-K2-Z4&_nc_ht=scontent.ftbs5-2.fna&oh=00_AT9a1ku9rYZHjSPYyxeJK9QyYML-BWRZI-U150fc5YAyKw&oe=6260FCEA"></Image>
      </AspectRatio>
      <Box position="absolute" bottom={0}>
        <Text fontSize={12}>dasdada</Text>
        <Text fontSize={20} color={"white"}>
          dasdada
        </Text>
      </Box>
    </Box>
  );
};

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.collections}>
        <Text style={styles.collections_text} marginBottom={2}>
          Collections
        </Text>
        <View>
          <ScrollView horizontal disableIntervalMomentum={true}>
            <Example />
            <Example />
            <Example />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  collections: {
    width: Dimensions.get("window").width,
    flex: 1,
    backgroundColor: "red",
    padding: 20,
  },
  collections_text: {
    fontFamily: "FiraGO",
  },
});

export default HomeScreen;
