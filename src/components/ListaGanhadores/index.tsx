import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { BsStar } from 'react-icons/bs'
import styles from './styles.module.css';
import { IconTitle } from "../IconTitle";
import { Ganhador } from "./Ganhador";
import "react-multi-carousel/lib/styles.css";


export const ListaGanhadores = ( ) => {

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
            <IconTitle  IconComponent={BsStar} colorOne="rgba(77,0,255,1)" colorTwo="rgba(203,58,255,1)"/>
            <Text fontSize="x-large">GANHADORES</Text>
        </Flex>
        <Flex w="100%" flexWrap={"wrap"} gap={4} p={4}>
          {[1,2,3,8,7,8,6].map((item) => (
            <Ganhador key={item}/>
          ))}
        </Flex>
    </Box>

}