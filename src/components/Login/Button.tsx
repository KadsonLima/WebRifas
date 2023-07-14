import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react"
import { IoPersonSharp, IoPersonAddSharp } from 'react-icons/io5'
import styles from './styles.module.css';
import { ModalLogin } from "./ModalLogin";
import { ModalCadastro } from "./ModalCadastro";

export const ButtonAuth = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen:isOpenSignUp, onOpen:onOpenisOpenSignUp, onClose:onCloseSignUp } = useDisclosure()





    return (
    <Flex className={styles.buttonBox} gap={2} p={"0 10px"} alignItems="center">
        <Flex className={styles.button} alignItems="center" gap={1} onClick={onOpen}>
            <IoPersonSharp size="20px" color="#a19999" />
             <Text>Entrar</Text>
        </Flex>
        <ModalLogin isOpen={isOpen} onClose={onClose}/>
        <ModalCadastro isOpen={isOpenSignUp} onClose={onCloseSignUp}/>
        /
        <Flex className={styles.button} alignItems="center" gap={1} onClick={onOpenisOpenSignUp}>
            <IoPersonAddSharp size="20px" color="#a19999" />
            <Text>Cadastro</Text>
        </Flex>
    </Flex>
    )
}