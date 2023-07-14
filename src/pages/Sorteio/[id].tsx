import {  Box, Flex, Heading, Text , Image} from "@chakra-ui/react";
import { PageContainer } from "../../components/pageContainer";
import { useRouter } from "next/router";
import { useState } from "react";
import { AvailabilitySorteio } from "@/components/AvailabilitySorteio";

const SorteioPage: React.FC = () => {
  const router = useRouter();
  const id  = (router.query.id);
  const [status, setStatus] = useState(true);


  return (
    <PageContainer>
        <Heading p={2} textAlign="center" fontSize={28} color="white">{id}</Heading>

        <Flex justifyContent="center" gap={"20px 20px"} flexWrap={"wrap"}>
            <Image maxW="400px" width="100%" borderRadius={20} src="https://vinyrifas.com/wp-content/uploads/bfi_thumb/30E5C775-824C-4023-B06C-358DC2BA33C8-q7pkk5atk8nanroxcxcj0ascu0qq0cquifqq7se92o.jpeg" alt="sorteio"/>
            <Box w="100%" maxW="400px">
                <AvailabilitySorteio status={false}/>
            </Box>
        </Flex>

        <Flex alignItems="center" justifyContent="space-evenly" marginBottom={10}>
          <Box p={4}>
            <Text>Pagamento</Text>
            <Text fontSize={"sm"}>Ao fazer o pagamento entrar em contato via Whatsapp informando o server.</Text>
            <Text> Valor: </Text>
          </Box>
        </Flex>

    </PageContainer>
  );
};

export default SorteioPage;
