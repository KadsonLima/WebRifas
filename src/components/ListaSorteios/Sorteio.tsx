import { Box, Button, Flex, Text,Image} from "@chakra-ui/react"
import styles from './styles.module.css'


export const Sorteio = () => {


  return <Box border="2px solid white" padding={2} borderRadius={5} w="400px"  bg={"red"} cursor="pointer">
  <Flex  w="100%">
    <Image src="https://vinyrifas.com/wp-content/uploads/bfi_thumb/IMG_0172-q8bckqaw3ge75hlasby6erl7wgxt81yfxkee6ekfxc.jpeg" w={40} height={40} alt="Imagem" className="carousel-image" />
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} width="100px"  color={"white"}>
        <Text  fontSize={"smaller"}>2º Fazendinha 12hrs</Text>
        <Text  fontSize={"smaller"}>Sorteio: 12/07/2023 - 12:15h</Text>

    </Box>
  </Flex>
</Box>

}