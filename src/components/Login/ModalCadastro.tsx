import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormLabel,
    FormControl,
    Input,
    Text,
  } from '@chakra-ui/react'
import React from 'react'
import { IoPersonSharp, IoPersonAddSharp, IoLogoWhatsapp } from 'react-icons/io5'


interface OpenModalProps {
    isOpen: boolean;
    onClose: () => void;
}


export const ModalCadastro = ({isOpen, onClose}:OpenModalProps)=>{

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display={"Flex"} alignItems={'center'} gap={2}><IoPersonAddSharp size={20}/>Cadastro</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Text marginBottom={4}>Informe o seu nome e sobrenome e o whatsapp.</Text>

            <FormControl>
              <FormLabel display={"Flex"} alignItems={'center'} gap={2}><IoPersonSharp size={20}/>Nome e Sobrenome*</FormLabel>
              <Input ref={initialRef} placeholder='Digite o seu nome e sobrenome' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel display={"Flex"} alignItems={'center'} gap={2}><IoLogoWhatsapp size={20}/>Whatsapp*</FormLabel>
              <Input placeholder='Digite o seu whatsapp com DDD' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Cadastrar
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}