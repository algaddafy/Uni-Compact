import React from "react";
import { Card, Button } from "@rneui/themed";
import { Text } from "react-native";

const ProductCard = ({ product_name, product_ID }) => {
  return (
      <Card>
      <Text>Product Name: {product_name}</Text>
      <Text>Product ID: {product_ID}</Text>
      <Button title="ADD TO CART" />
    </Card>
  );
};

// const ProductCard = () => {
//   return (
//     <Card>
//       <Text>PRODUCT NAME</Text>
//       <Text>PRODUCT DESCRIPTION</Text>
//       <Button title="ADD TO CART" />
//     </Card>
//   );
// };

export default ProductCard;
