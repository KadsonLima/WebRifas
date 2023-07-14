import { Box, Button, Flex, Text,Image} from "@chakra-ui/react"
import styles from './styles.module.css'


export const Sorteio = () => {


  return <Box border="2px solid #838383" padding={1} borderRadius={5} w="400px"  bg={"rgba(65,65,65,1)"} cursor="pointer" _hover={{boxShadow: "rgba(255, 255, 255, 0.3) 0px 3px 4px 0px, rgba(255, 255, 255, 0.15) 0px 3px 6px 4px"}}>
  <Flex  w="100%" alignItems="center">
    <Image src="https://vinyrifas.com/wp-content/uploads/bfi_thumb/IMG_0172-q8bckqaw3ge75hlasby6erl7wgxt81yfxkee6ekfxc.jpeg" w={40} height={40} alt="Imagem" className="carousel-image" />
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent="space-evenly" width="100%"  color={"white"} p={2}>
        <Text  fontSize={"Larger"}>2º Fazendinha 12hrs</Text>
        <Text  fontSize={"smaller"}>Sorteio: 12/07/2023 - 12:15h</Text>
        <Button w="100%" color="white" bg="green.600" _hover={{bg:"green.300"}}>Comprar</Button>
    </Box>
  </Flex>
</Box>

}