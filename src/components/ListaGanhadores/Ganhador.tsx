import { Box, Button, Flex, Text,Image} from "@chakra-ui/react"
import styles from './styles.module.css'


export const Ganhador = () => {


    return <Box  padding={2} borderRadius={5} w="400px"  style={{background:"linear-gradient(45deg, rgba(48,48,48,1) 0%, rgba(65,65,65,1) 100%)"}} cursor="pointer">
          <Flex  w="100%">
            <Image src="https://vinyrifas.com/wp-content/themes/criesuarifa/img/no-photo-ganhador.png" w={20} height={20} alt="Imagem" borderRadius={50} />
            <Box display={"flex"} marginLeft={4} flexDirection={"column"} justifyContent={"center"} w="100%"  color={"white"}>
                <Text  fontSize={"medium"}>2º Fazendinha 12hrs</Text>
                <Text  fontSize={"smaller"}>Sorteio: 12/07/2023 - 12:15h</Text>
                <Text  fontSize={"smaller"}>Sorteio: 12/07/2023 - 12:15h</Text>
                <Text  fontSize={"smaller"}>Sorteio: 12/07/2023 - 12:15h</Text>

            </Box>
          </Flex>
        </Box>

}