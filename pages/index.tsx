
import { Box, Center, Flex, Input, InputGroup, Square, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  let [query, setQuery] = useState("");
  let [result, setResult] = useState([]);
  let [queryRes, setQueryRes] = useState([]);

  const handleInput = (e) => {
    console.log(e)
    let found = false;
    let value = e.target.value;
    setQuery(value);

  };
  return (
    <Flex fontFamily="body"
      w="100vw"
      maxW="100%"
      minH="100vh"
      align="center"
      justify="begin"


      flexDir="column"
    >
      <Flex
        w="100vw"
        maxW="100%"
        minH="100vh"
        bg="purple.200"
        align="center"
        justify="begin"
        pt="30vh"
        flexDir="column"
      >
        <Flex
          ml="auto"
          mr="auto"
          align="center"
          justify="center"
          h="20vh"
          flexDir="column"
          mb="20px"
        >
          <Text
            fontSize="6xl"
            // initial="show"
            ml="5px"
            mr="5px"
            // transform={{ duration: 10 }}

            color="black"
          >
            ไวพจน์
          </Text>
          <Text
            fontSize="lg"
            color="black"
          >
            ค้นหาคำไวพจน์ภาษาไทย
          </Text>
        </Flex>

        <InputGroup w="80vw" maxW="500px" ml="auto" mr="auto" mb="20px">

          <Input
            autoFocus
            variant="outline"
            placeholder="พิมพ์ข้อความที่นี่..."
            size="md"
            bg="gray.50"
            onChange={handleInput}
            color="black"
          />

        </InputGroup>
        <Flex
          ml="auto"
          mr="auto"
          pb="50px"
          align="center"
          justify="center"
          flexWrap="wrap"
          w="80vw"
          maxW="500px"
        >
          {query}
        </Flex>


      </Flex>
      <Flex w="100vw"
        height="12"
        bg="purple.300"
        maxW="100%" align="center" justify="center">
        <Text fontFamily="body">
          <Link href="https://github.com/itzmeowww/thai-synonym#contributing">
            Contribute on Github
          </Link>
        </Text>
      </Flex>

    </Flex>
  )
}
