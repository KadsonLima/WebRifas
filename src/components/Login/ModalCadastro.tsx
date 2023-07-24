import useSignUp from '@/hooks/api/signUp';
import { formatPhoneNumber } from '@/utils/formatPhoneNumber';
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
    useToast, 
  } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { IoPersonSharp, IoPersonAddSharp, IoLogoWhatsapp } from 'react-icons/io5'


interface OpenModalProps {
    isOpen: boolean;
    onClose: () => void;
}



export const ModalCadastro = ({isOpen, onClose}:OpenModalProps)=>{

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const { userError, user, userLoading, getUser } = useSignUp();
  const toast = useToast();
  const [form, setForm] = useState({
    name: '',
    number: '',
  });
  
  useEffect(()=>{
    
  }, [userLoading])

  const handleForm = (event:any) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
    
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();

      const fetchData = async () => {
        try {
          const user = await getUser(form);
          toast({
            title:`Conta criada!`,
            status:'success',
          })
          onClose();
        } catch (error:any) {
          const { details, message} = error.response.data;
          toast({
            title:`${message}`,
            status:'error',
          })
        }
      }
      fetchData();
      
  };



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
              <Input ref={initialRef} placeholder='Digite o seu nome e sobrenome' type='text' name="name" value={form.name} onChange={handleForm} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel display={"Flex"} alignItems={'center'} gap={2}><IoLogoWhatsapp size={20}/>Whatsapp*</FormLabel>
              <Input placeholder='Digite o seu whatsapp com DDD'  type='text' name="number" value={formatPhoneNumber(form.number)} onChange={handleForm}  />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit} isLoading={userLoading} isDisabled={userLoading}>
             Cadastrar
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}