import {
  useColorMode,
  Button,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  InputRightAddon,
  Flex,
  Text,
  Icon,
  IconButton,
} from "@chakra-ui/core";
import Head from "next/head";
import { motion } from "framer-motion";
import { Component } from "react";
import data from "./data/synonym.json";
const MotionBox = motion.custom(Box);
const MotionText = motion.custom(Text);
const MotionFlex = motion.custom(Flex);

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { result: [] };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    let found = false;
    let query = e.target.value;

    data.forEach((list) => {
      list.forEach((word) => {
        if (!found && query == word) {
          this.setState({ result: list });
          found = true;
        }
      });
    });

    if (query === "") {
      this.setState({ result: [] });
    } else if (!found) {
      this.setState({ result: ["ไม่พบข้อมูล"] });
    }
  }
  componentDidMount() {
    // const { colorMode, toggleColorMode } = useColorMode();
    console.log(data);
  }
  render() {
    const queryRes = this.state.result ? (
      this.state.result.map((word) => {
        return (
          <Text
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
    ) : (
      <Text fontFamily="thai" bg="purple.400" p="5px" borderRadius="5px">
        ไม่พบข้อมูล
      </Text>
    );
    return (
      <>
        <Head>
          <title>ค้นหาคำไวพจน์</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
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
          align="center"
          justify="center"
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
              initial="show"
              ml="5px"
              mr="5px"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transform={{ duration: 10 }}
              fontFamily="thai"
              color="black"
            >
              ไวพจน์
            </MotionText>
            <MotionText
              fontSize="lg"
              initial="show"
              ml="5px"
              mr="5px"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transform={{ duration: 10 }}
              fontFamily="thai"
              color="black"
            >
              Synonym finder for Thai language
            </MotionText>
          </MotionFlex>

          <InputGroup w="80vw" maxW="500px" ml="auto" mr="auto" mb="20px">
            <Input
              autoFocus
              variant="outline"
              placeholder="ค้นหาคำไวพจน์..."
              size="md"
              fontFamily="thai"
              bg="gray.50"
              onChange={this.handleInput}
              color="black"
            ></Input>
          </InputGroup>
          <Flex align="center" justify="center" flexWrap="wrap">
            {queryRes}
          </Flex>
        </Box>
      </>
    );
  }
}
