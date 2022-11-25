
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Footer from "../components/Footer";

import { Nav } from "../components/Nav";
import Search from "../components/Search";


export default function Home() {
  return (
    <Flex fontFamily="body"
      w="100vw"
      maxW="100%"
      minH="100vh"
      align="center"
      justify="begin"
      flexDir="column"

    >
      <Nav />
      <Search value="" />
      <Footer />
    </Flex >
  )
}
