import { Box, Flex, Text } from "@chakra-ui/react";
import { GiTrophyCup} from 'react-icons/gi'
import styles from './styles.module.css'


export const AvailabilitySorteio = ({ status = false }) => {
  const SorteioFinalizado = (
    <Box>
    <Box w="100%" className={styles.win} marginBottom={1} position="relative">
      <GiTrophyCup size={70} />
      <Text>GANHADOR: Kadson Lima</Text>
      <Text>Numero da Ficha: 40</Text>
    </Box>
    <Flex w="100%" gap={2}>
      <Box w="50%" className={styles.disponivel}>
        <Text className={styles.title}> POR APENAS</Text>
        <Text>R$ 0,02</Text>
        </Box>
      <Box w="50%" className={styles.date} bg={"#c30808"}>
      <Text className={styles.title}>SORTEIO FECHADO</Text>
      <Text fontSize={"medium"}>14/07/2023 - 21:59h</Text>
      </Box>
    </Flex>
    </Box>
  );

  const SorteioDisponivel = (
    <Flex w="100%" gap={2}>
      <Box w="50%" className={styles.disponivel}>
        <Text className={styles.title}> POR APENAS</Text>
        <Text>R$ 0,02</Text>
        </Box>
      <Box w="50%" className={styles.date}>
      <Text className={styles.title}>SORTEIO</Text>
      <Text fontSize={"medium"}>14/07/2023 - 21:59h</Text>
      </Box>
    </Flex>
  );

  return status ? SorteioDisponivel : SorteioFinalizado;
};
