import { stylesColor } from "@/styles/colors"
import Link from "next/link";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react"
import { IoClose , IoHomeOutline,IoPersonOutline,  IoStarOutline, IoTrophyOutline, IoPersonAddOutline} from 'react-icons/io5'
import { IconTitle } from "../IconTitle";
import { ModalLogin } from "../Login/ModalLogin";
import { ModalCadastro } from "../Login/ModalCadastro";



export const MenuMobile = ({setIsExpanded, isExpanded}:{setIsExpanded:Function, isExpanded:boolean}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen:isOpenSignUp, onOpen:onOpenisOpenSignUp, onClose:onCloseSignUp } = useDisclosure()

    return      <Flex 
    position="fixed"
    w="100%"
    height="100vh"
    top={0}
    right={0}
    zIndex={10}
    padding={"20px 27px"}
    bg={stylesColor.backgroundColor}
    boxShadow="md"
    borderRadius="md"
    overflow="hidden"
    flexDirection={"column"}
    transition={"linear 2s"}
  >
    <Box w="100%" display={"flex" } justifyContent={"end"} cursor="pointer" _hover={{}} onClick={()=>setIsExpanded(false)}>
        <IconTitle  IconComponent={IoClose} colorOne="rgba(222,0,0,1)" colorTwo="rgba(255,0,0,1)" />
    </Box>

    <ModalLogin isOpen={isOpen} onClose={onClose}/>
    <ModalCadastro isOpen={isOpenSignUp} onClose={onCloseSignUp}/>

    <Flex marginTop={50} flexDirection="column" gap={5}>
        <Link href="/"  style={{ display: 'flex', alignItems: 'center',  gap:"30px" }}>
            <IconTitle  IconComponent={IoHomeOutline} colorOne="rgba(33,126,255,1)" colorTwo="rgba(63,178,255,1)" />
            <Text color="white" fontSize={20}>Início</Text>
        </Link>
        <Link href="/sorteio"  style={{ display: 'flex', alignItems: 'center',  gap:"30px" }}>
            <IconTitle  IconComponent={IoStarOutline} colorOne="rgba(255,158,7,1)" colorTwo="rgba(255,202,77,1)" />
            <Text color="white" fontSize={20}>Sorteios</Text>
        </Link>
        <Link href="/ganhadores"  style={{ display: 'flex', alignItems: 'center',  gap:"30px" }}>
            <IconTitle  IconComponent={IoTrophyOutline} colorOne="rgba(146,49,182,1)" colorTwo="rgba(197,101,231,1)" />
            <Text color="white" fontSize={20}>Ganhadores</Text>
        </Link>
        <Box style={{ display: 'flex', alignItems: 'center',  gap:"30px", cursor:"pointer" }} onClick={onOpenisOpenSignUp}>
            <IconTitle  IconComponent={IoPersonAddOutline} colorOne="rgba(40,167,64,1)" colorTwo="rgba(138,240,55,1)" />
            <Text color="white" fontSize={20}>Cadastro</Text>
        </Box>
        <Button w="100%" display={"flex"} alignItems="center" gap={2} onClick={onOpen}>
                <IoPersonOutline size={25}/>
                Entrar
        </Button>
    </Flex>
  </Flex>
}