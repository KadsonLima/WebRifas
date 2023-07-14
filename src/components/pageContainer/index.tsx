import { Box, Flex } from "@chakra-ui/react";
import Footer  from "../../components/Footer";
import Header from "../../components/Header";
import Head from "next/head";
import { stylesColor } from "../../styles/colors";

export const PageContainer = ({ children }: { children: any }) => {
  return (
    <>
    <Head>
        <title>DanRifas</title>
      </Head>
      <Header />
      <Flex
        bg={stylesColor.backgroundColor}
        justify="center"
        borderBottom={"2px"}
        borderColor={"GrayText"}
        paddingBottom={70}
      >
        <Box
          marginTop={70}
          maxW={1350}
          bg={stylesColor.backgroundColor}
          textColor={stylesColor.textColor}
          width={"100%"}
          minHeight={"100vh"}
          padding={3}
        >
          {children}

        </Box>

      </Flex>
      <Footer/>

    </>
  );
};
