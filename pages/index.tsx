import { Box, Input, InputGroup, Flex, Text, LightMode } from "@chakra-ui/core";
import Head from "next/head";
import { motion } from "framer-motion";
import { Component, useEffect, useState } from "react";
import data from "./data/synonym.json";
const MotionText = motion.custom(Text);
const MotionFlex = motion.custom(Flex);

const Home = () => {
  let [result, setResult] = useState([]);
  let [queryRes, setQueryRes] = useState([]);

  const handleInput = (e) => {
    let found = false;
    let query = e.target.value;

    data.forEach((list) => {
      list.forEach((word) => {
        if (!found && query == word) {
          setResult(list);
          found = true;
        }
      });
    });
    if (found == false) setResult([]);
  };

  useEffect(() => {
    let temp =
      result.length != 0
        ? result.map((word, i) => {
            return (
              <Text
                key={i}
                fontFamily="thai"
                bg="purple.400"
                p="5px"
                m="5px"
                borderRadius="5px"
              >
                {word}
              </Text>
            );
          })
        : [
            <Text
              key="0"
              fontFamily="thai"
              bg="purple.400"
              p="5px"
              borderRadius="5px"
            >
              ไม่พบข้อมูล
            </Text>,
          ];
    setQueryRes(temp);
    console.log(result);
    console.log(temp);
  }, [result]);

  return (
    <>
      <Head>
        <title>ค้นหาคำไวพจน์</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="google-site-verification"
          content="6oKjH0Kg-1zb6tNcwvRzoFf-DmrFOxotFyrXH-lCcPE"
        />
        <meta name="description" content="Thanasan Kumdee personal website" />
      </Head>
      <Box
        w="100vw"
        minH="100vh"
        bg="green.100"
        // align="center"
        // justify="center"
        fontFamily="thai"
        pt="30vh"
      >
        <MotionFlex
          ml="auto"
          mr="auto"
          align="center"
          justify="center"
          h="20vh"
          flexDir="column"
          mb="20px"
        >
          <MotionText
            fontSize="6xl"
            // initial="show"
            ml="5px"
            mr="5px"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            // transform={{ duration: 10 }}
            fontFamily="thai"
            color="black"
          >
            ไวพจน์
          </MotionText>
          <MotionText
            fontSize="lg"
            // initial="show"
            ml="5px"
            mr="5px"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            // transform={{ duration: 10 }}
            fontFamily="thai"
            color="black"
          >
            Synonym finder for Thai language
          </MotionText>
        </MotionFlex>

        <InputGroup w="80vw" maxW="500px" ml="auto" mr="auto" mb="20px">
          <LightMode>
            <Input
              autoFocus
              variant="outline"
              placeholder="ค้นหาคำไวพจน์..."
              size="md"
              fontFamily="thai"
              bg="gray.50"
              onChange={handleInput}
              color="black"
            ></Input>
          </LightMode>
        </InputGroup>
        <Flex align="center" justify="center" flexWrap="wrap">
          {queryRes}
        </Flex>
      </Box>
    </>
  );
};

export default Home;
