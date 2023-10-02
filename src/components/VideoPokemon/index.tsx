import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react"


export const VidePokemon = () => {
    return(
        <>
          <Flex 
            flexDirection="column"
            borderRadius="12" 
            align="center"
            color="gray.100"
            bg="gray.900"
            w="100%" 
            mx="auto"
            mt="4"
            padding={4}
            maxWidth={1450} 
            boxSizing="border-box"
          >
            <AspectRatio 
                    maxW='560px' 
                    ratio={2} w="100%"
                    mt="4"
                    p="5"
                    minW="250px"
                    >
             <Box  as="iframe"
                   border="1px"
                   bg="gray.800"
                   borderRadius="12px" 
                   src="https://player.vimeo.com/video/315429535?h=282061589d&color=5cd7d4&byline=0&portrait=0" 
                   width="280px" 
                   p="4" 
            >
            </Box>
            </AspectRatio>
            
            <Text 
                color="yellow.400" 
                bg="gray.800"
                fontWeight="500"
                fontSize="21"
                w="100%"
                m="6"
                p="6"
                borderRadius="12px"  
            >
             Quando jovem, o criador dos monstrinhos,
             Satoshi Tajiri, gostava bastante de observar
             e estudar os insetos. Assim, baseado
             no conceito da metamorfose, o japonês
             idealizou um mundo no qual os jogadores
             batalhavam uns com os outros
             usando monstros que, com o 
             passar do tempo e com os ganhos de experiência, evoluíam e ficavam mais poderosos. Foi a partir dessa ideia que nasceu Pokémon, em 1994.
            </Text>
          </Flex>
         
        </>
    )
}