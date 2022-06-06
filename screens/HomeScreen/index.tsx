import { AspectRatio, Box, Text, Image } from "native-base";
import { useEffect } from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { selectCollections } from "../../store/home/selectors";
import { getCollections } from "../../store/home/thunks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const SliderItem = ({ title }: any) => {
  return (
    <Box style={ScrollItem.Box}>
      <AspectRatio w="100%" h="100%" ratio={1 / 2}>
        <Image src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/277427160_1246423889216551_630745644049469322_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=dgXtMhxJGsMAX-K2-Z4&_nc_ht=scontent.ftbs5-2.fna&oh=00_AT9a1ku9rYZHjSPYyxeJK9QyYML-BWRZI-U150fc5YAyKw&oe=6260FCEA"></Image>
      </AspectRatio>
      <Box position="absolute" style={ScrollItem.BoxDescription}>
        <Text style={ScrollItem.BoxTitle}>{title}</Text>
      </Box>
    </Box>
  );
};

const ScrollItem = StyleSheet.create({
  Box: {
    width: Dimensions.get("window").width / 3,
    height: 180,
    marginRight: 5,
    borderRadius: 3,
    backgroundColor: "red",
    overflow: "hidden",
  },
  BoxDescription: {
    bottom: 20,
    left: 20,
  },
  BoxTitle: {
    fontSize: 12,
    lineHeight: 0,
  },
  BoxText: {
    fontSize: 16,
    color: "#FFF",
    lineHeight: 0,
  },
});

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const collections = useAppSelector(selectCollections);

  useEffect(() => {
    dispatch(getCollections());
  }, []);

  useEffect(() => {
    console.log(collections);
  }, [collections]);

  return (
    <View style={styles.home}>
      <View style={styles.collections}>
        <Text style={styles.collections_text}>Collections</Text>
        <View>
          <ScrollView
            horizontal
            disableIntervalMomentum={true}
            showsHorizontalScrollIndicator={false}
          >
            {collections.length > 0 &&
              collections.map((item: { title: string }) => {
                return <SliderItem title={item.title} />;
              })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  collections: {
    width: Dimensions.get("window").width,
  },
  collections_text: {
    fontFamily: "FiraGO",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 18,
    marginBottom: 25,
  },
});

export default HomeScreen;
