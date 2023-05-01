import React from "react";
import { Button, Text, View, FlatList } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Card } from "@rneui/base";
import ProductCard from "../Components/ProductCard";

const DATA = [
  {
    product_name: "Alu",
    product_ID: 1,
  },
  {
    product_name: "PIYAJ",
    product_ID: 2,
  },
  {
    product_name: "ROSHUN",
    product_ID: 3,
  },
];

const ListScreen = () => {
  const renderItem = ({item}) => <ProductCard product_ID={item.product_ID} product_name={item.product_name}/>;
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        // renderItem={(elem) => <ProductCard />}
        renderItem={renderItem}
        // keyExtractor={(elem) => elem.item.product_ID}
        keyExtractor={item => item.product_ID}
      />
    </SafeAreaView>
  );
};

export default ListScreen;
