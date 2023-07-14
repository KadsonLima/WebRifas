import { Box, Flex, IconButton, Link, Tooltip, Text, keyframes } from "@chakra-ui/react";
import { stylesColor } from "../../styles/colors";
import { FaYoutube, FaWhatsapp, FaTelegram } from "react-icons/fa";

// Definir a animação de brilho/piscar
export const blinkAnimation = keyframes`
    0% {
    filter: brightness(100%);
  }
  50% {
    filter: brightness(150%);
  }
  100% {
    filter: brightness(100%);
  }
`;

const Footer = () => {
  return (
    <Box position="absolute" left="0" bottom="0" as="footer" py={4} w={"100%"} bg={stylesColor.backgroundColor} textAlign="center">
      <Flex justify="space-between" align="center" px={4}>
        <Text fontSize="smaller" color="gray.500" textAlign="left">
          Todos Direitos Reservados.
        </Text>
        <Flex>
          <Tooltip label="YouTube">
            <IconButton
              as={Link}
              href="https://www.youtube.com/channel/UCzYepeJXM-5J4QGVE_MISnA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              mx={2}
              icon={<FaYoutube />}
              variant="ghost"
              style={{
                background: "linear-gradient(to right, #FF0000, #FF8800)",
                animation: `${blinkAnimation} 1s linear infinite`,
              }}
            />
          </Tooltip>
          <Tooltip label="WhatsApp" >
            <IconButton 
              as={Link}
              href="https://api.whatsapp.com/send?text=Interfaces%20Ui&phone=+5584996443438"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              mx={2}
              icon={<FaWhatsapp />}
              variant="ghost"
              style={{
                background: "linear-gradient(to right, #25D366, #128C7E)",
                animation: `${blinkAnimation} 4s linear infinite`,
              }}
            />
          </Tooltip>
          <Tooltip label="Telegram">
            <IconButton
              as={Link}
              href="https://telegram.me/kadsonlima"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              mx={2}
              icon={<FaTelegram />}
              variant="ghost"
              style={{
                background: "linear-gradient(to right, #0088CC, #00BFFF)",
                animation: `${blinkAnimation} 1s linear infinite`,
              }}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
