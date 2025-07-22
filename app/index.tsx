import { images, offers } from "@/constants";
import { Fragment } from "react";
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={offers}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0
          return (
            <View>
              <Pressable
                className={`offer-card ${isEven ? "flex-row-reverse" : "flex-row"}`}
                key={index}
                style={{ backgroundColor: item.color }}
                android_ripple={{ color: "#fffff22" }}>
                {({ pressed }) => (
                  <Fragment>
                    <View className="h-full w-1/2">
                    <Image source={item.image} alt="image" className="size-full" resizeMode="contain"/>
                    </View>
                    <View className={`offer-card__info ${isEven ? "pl-6" : "pr-6"}`}>
                      <Text className="h1-bold text-white leading-right">
                        {item.title}
                      </Text>
                      <Image source={images.arrowRight}
                        alt="arrow right"
                        className="size-10"
                        resizeMode="contain"
                        tintColor="#ffffff"
                      />
                    </View>
                  </Fragment> 
                )}
              </Pressable>
            </View>
          )
        }}
        contentContainerClassName="pb-28 px-5"
        ListHeaderComponent={() => (
          <View className="flex-between flex-row w-full py-5">
            <View className="flex-start">
              <Text className="small-bold text-primary">Deliver To</Text>
              <TouchableOpacity className="flex-center flex-row gap-x-1 mt-0.5">
                <Image source={images.arrowDown} alt="arrow down" className="size-3" resizeMode="contain" />
                <Text className="paragraph-bold text-dark-100">kharagpur</Text>
              </TouchableOpacity>
            </View>
            <Text>Cart</Text>
          </View>
        )}
      /> 
    </SafeAreaView>
  );
}
