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
import { IoPersonSharp, IoLogoWhatsapp } from 'react-icons/io5'


interface OpenModalProps {
    isOpen: boolean;
    onClose: () => void;
}


export const ModalLogin = ({isOpen, onClose}:OpenModalProps)=>{

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
          <ModalHeader display={"Flex"} alignItems={'center'} gap={2}><IoPersonSharp size={20}/>Entrar</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Text marginBottom={4}>Informe o seu Whatsapp cadastrado para prosseguir.</Text>
            <FormControl mt={4}>
              <FormLabel display={"Flex"} alignItems={'center'} gap={2}><IoLogoWhatsapp size={20}/>Whatsapp*</FormLabel>
              <Input placeholder='Digite o seu whatsapp com DDD' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Entrar
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}