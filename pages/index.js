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
import { motion } from "framer-motion";
import { Component } from "react";
import data from "./data/synonym.json";
const MotionBox = motion.custom(Box);
const MotionText = motion.custom(Text);
const MotionFlex = motion.custom(Flex);

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", result: [] };

    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    let found = false;
    let query = e.target.value;
    this.setState({ value: e.target.value });
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
        <Box
          w="100vw"
          h="100vh"
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
            >
              Synonym finder for Thai language
            </MotionText>
          </MotionFlex>

          <InputGroup w="80vw" maxW="500px" ml="auto" mr="auto" mb="20px">
            <Input
              variant="outline"
              placeholder="ค้นหาคำไวพจน์..."
              size="md"
              fontFamily="thai"
              bg="gray.50"
              onChange={this.handleInput}
              value={this.state.value}
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
