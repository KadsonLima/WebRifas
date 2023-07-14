import {
  Box,
  Flex,
  Image,
  Text,
  IconButton,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { FaYoutube, FaWhatsapp, FaTelegram, FaDiscord } from "react-icons/fa";
import { blinkAnimation } from "../Footer";

interface Banner {
  width: number | string;
  height: number | string;
  image: string;
  fitMode: any;
  title: string;
}

const DynamicBanner = ({ width, height, fitMode, image, title }: Banner) => {
  return (
    <Box
      width={width}
      height={height}
      position="relative"
      borderBottom={"2px"}
      borderBottomColor={"#860505"}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
          zIndex: 1,
        }}
      />
      
      <Image
        src={image}
        alt="Banner"
        width="100%"
        height="100%"
        objectFit={fitMode}
        zIndex={2}
      />
      <Flex justifyContent={"center"} flexDirection={"column"} alignItems={"center"} position="absolute" zIndex={3} style={{top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  }}>
      <Text
        fontWeight="bold"
        fontSize={["md", "gl", "xl", "3xl"]}
        textTransform="uppercase"
        color="#fff"
        textShadow="1px 1px 0px rgba(255, 3, 3, 0.7)"
        textAlign="center"
        pb={2}
    
      >
        {title}
      </Text>
      <Text fontSize={"16px"} marginBottom="10px">
        Entre em Contato
      </Text>
      <Flex>
        <Tooltip label="YouTube">
          <IconButton
            as={Link}
            href="https://www.youtube.com/channel/UCzYepeJXM-5J4QGVE_MISnA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            width={50}
            mx={2}
            icon={<FaYoutube size={25} />}
            variant="ghost"
            style={{
              color: "white",
              background: "linear-gradient(to right, #FF0000, #FF8800)",
              animation: `${blinkAnimation} 5s linear infinite`,
            }}
          />
        </Tooltip>
        <Tooltip label="WhatsApp">
          <IconButton
            as={Link}
            href="https://api.whatsapp.com/send?text=Interfaces%20Ui&phone=+5584996443438"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            width={50}
            mx={2}
            icon={<FaWhatsapp size={25} />}
            variant="ghost"
            style={{
              color: "white",
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
            width={50}
            aria-label="Telegram"
            mx={2}
            icon={<FaTelegram size={25} />}
            variant="ghost"
            style={{
              color: "white",
              background: "linear-gradient(to right, #0088CC, #00BFFF)",
              animation: `${blinkAnimation} 1s linear infinite`,
            }}
          />
        </Tooltip>
        <Tooltip label="Discord">
          <IconButton
            as={Link}
            href="https://discord.gg/JMyHcE73B5"
            target="_blank"
            rel="noopener noreferrer"
            width={50}
            aria-label="Discord"
            mx={2}
            icon={<FaDiscord size={25} />}
            variant="ghost"
            style={{
              color: "white",
              background: "linear-gradient(to right, #4b00cc, #ff00f2)",
              animation: `${blinkAnimation} 1s linear infinite`,
            }}
          />
        </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
};

interface ButtonProps {
  icon: string;
  label: string;
  link: string;
}

const CustomButton: React.FC<ButtonProps> = ({ icon, label, link }) => {
  const handleButtonClick = () => {
    window.open(link, "_blank");
  };

  return (
    <button onClick={handleButtonClick}>
      <img src={icon} alt={label} />
      {label}
    </button>
  );
};

export default DynamicBanner;
