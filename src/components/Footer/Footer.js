/*eslint-disable*/
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
     
      justifyContent='space-between'
      px='25%'
      pb='5px'>
      <Text
        color='gray.400'
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "0px", xl: "0px" }}>
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as='span' >
          {document.documentElement.dir === "rtl"
            ? " "
            : "Efforts by D21DCS158, D21DCS159 ,D21DCS167 "}
        </Text></Text>
    </Flex>
  );
}
