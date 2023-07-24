import useSignIn from '@/hooks/api/signIn';
import { loginUser } from '@/redux/user/actions';
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
import React, {useState, useEffect} from 'react'
import { IoPersonSharp, IoLogoWhatsapp } from 'react-icons/io5'
import { useDispatch } from 'react-redux';


interface OpenModalProps {
    isOpen: boolean;
    onClose: () => void;
}



export const ModalLogin = ({isOpen, onClose}:OpenModalProps)=>{

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const { userError, user, userLoading, getUser } = useSignIn();
  const toast = useToast();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
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
          localStorage.setItem('user', JSON.stringify(user));
          dispatch(loginUser(user));
          toast({
            title:`Conta Acessada!`,
            status:'success',
          })
          onClose();
        } catch (error:any) {
          console.log(error);
          
          toast({
            title:`${error.response?.data.message? error.response?.data.message : "Error de Conexão"}`,
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
          <ModalHeader display={"Flex"} alignItems={'center'} gap={2}><IoPersonSharp size={20}/>Entrar</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Text marginBottom={4}>Informe o seu Whatsapp cadastrado para prosseguir.</Text>
            <FormControl mt={4}>
              <FormLabel display={"Flex"} alignItems={'center'} gap={2}><IoLogoWhatsapp size={20}/>Whatsapp*</FormLabel>
              <Input placeholder='Digite o seu whatsapp com DDD'  type='text' name="number" value={formatPhoneNumber(form.number)} onChange={handleForm}  />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit} isLoading={userLoading} isDisabled={userLoading}>
             Entrar
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}