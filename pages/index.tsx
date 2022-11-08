
import { Box, Center, Flex, Input, InputGroup, ScaleFade, Square, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import synonym from './data/synonym.json'

export default function Home() {
  let [query, setQuery] = useState<string>("");
  let [result, setResult] = useState<string[]>([]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let found = false;
    const value = e.target.value;
    setQuery(value);
    synonym.forEach((list) => {
      list.forEach((word) => {
        if (!found && value == word) {
          setResult(list);
          found = true;
        }
      });
    });

    if (found == false) {
      if (value != "") setResult(["ไม่พบข้อมูล"]);
      else setResult([])
    }

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
        <ScaleFade in={true}>
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
              ml="5px"
              mr="5px"
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
          <Input
            w="80vw" maxW="500px" ml="auto" mr="auto" mb="20px"
            autoFocus
            variant="outline"
            placeholder="พิมพ์ข้อความที่นี่..."
            size="md"
            bg="gray.50"
            onChange={handleInput}
            color="black"
          />
        </ScaleFade>
        <Flex
          ml="auto"
          mr="auto"
          pb="50px"
          align="center"
          justify="center"
          flexWrap="wrap"
          w="80vw"
          maxW="500px"
          gap={2}
        >
          {result.map((x) => {
            return <Text bg="white" px={3} py="0.5" rounded="md" cursor={"pointer"}>{x}</Text>
          })}
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

    </Flex >
  )
}
