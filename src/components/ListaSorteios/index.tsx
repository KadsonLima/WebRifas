import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { BsTrophy } from 'react-icons/bs'
import styles from './styles.module.css';
import { IconTitle } from "../IconTitle";
import { Sorteio } from "./Sorteio";
import "react-multi-carousel/lib/styles.css";


export const ListaSorteios = ( ) => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };


      const carouselSettings = {
        responsive: responsive,
      };


      return <Box w="100%">
      <Flex gap={2} marginBottom={2} marginTop={30}>
          <IconTitle  IconComponent={BsTrophy} colorOne="rgba(255,162,0,1)" colorTwo="rgba(255,213,0,1)"/>
          <Text fontSize="x-large">SORTEIOS</Text>
      </Flex>
      <Flex w="100%" flexWrap={"wrap"} gap={3} justifyContent="center">
        {[1,2,3,8,6].map((item) => (
          <Sorteio key={item}/>
        ))}
      </Flex>
  </Box>

}