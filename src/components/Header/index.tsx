import { useEffect, useState } from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { stylesColor } from "../../styles/colors";
import Logo from "../../assets/images/light.png"
import Link from "next/link";
import Image from "next/image";
import { ButtonAuth } from "../Login/Button";
import { MenuMobile } from "../MenuMobile";
import { color } from "framer-motion";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(()=>{
    if(isExpanded) {
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'scroll';
    }

  },[isExpanded])

  const handleToggle = () => {
    setIsExpanded(!isExpanded);

  };

  return (
    <Flex
      bg={"black"}
      justify="center"
      position={"fixed"}
      boxShadow={"0 6px 4px -6px white"}
      left={0}
      top={0}
      w="100%"
      zIndex={9}
    >
      <Flex
        as="header"
        align="center"
        justify="space-between"
        padding={3}
        height={70}
        boxShadow="md"
        position="relative"
        bg={"black"}
        maxW={1350}
        w="100%"
      >
        {/* Logo */}
        <Link  href="/">
          <Image src={Logo} alt="logo" height="60"  />
        </Link>

        {/* Rotas no desktop */}
        <Flex display={{ base: "none", md: "flex" }} align="center" gap={2}>
          <Link
            href="/"
            style={{ color:`#e0e0e0`, fontSize:18, marginRight:4, fontWeight:300}}
            
          >
            <Text _hover={{
              color:"white"
              }}
              style={{
                borderBottom: "2px solid transparent",
                transition: "border-color 0.3s ease-in-out",
              }}
              >SORTEIOS</Text>
          </Link>
          <Link
            href="/Shop"
            style={{ color:`#e0e0e0`, marginRight:4, fontSize:18, fontWeight:300}}

          >
            <Text _hover={{
              color:"white"
              }}
              style={{
                borderBottom: "2px solid transparent",
                transition: "0.3s ease-in-out",
              }}>GANHADORES</Text>
          </Link>
          
        </Flex>

        {/* Botão de menu no mobile */}
        <Box display={{ base: "flex", md: "none" }} >
          <IconButton
            icon={isExpanded ? <ChevronDownIcon /> : <HamburgerIcon />}
            aria-label={isExpanded ? "Fechar menu" : "Abrir menu"}
            marginRight={2}
            onClick={handleToggle}
            bg="transparent"
            fontSize={30}
            _hover={{background:"transparent", filter:"brightness(2)"}}
            color="#d5d1d1"
          />
        </Box>


        {/* Rotas no mobile */}
        {isExpanded && <MenuMobile setIsExpanded={setIsExpanded} isExpanded={isExpanded}/>}

      <Box display={{ base: "none", md: "flex" }} >
          <ButtonAuth/>
       </Box>

      </Flex>
    </Flex>
  );
};

export default Header;
