import { Box, Icon } from "@chakra-ui/react"
import styles from './styles.module.css'


export const IconTitle = ({IconComponent, colorOne, colorTwo }:any) => {
    return (
      <Box className={styles.Icon} style={{background: `linear-gradient(45deg, ${colorOne} 0%, ${colorTwo} 100%)`}}>
        <Icon as={IconComponent} boxSize={6} />
      </Box>
    );
  };