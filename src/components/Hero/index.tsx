import { Grid, GridItem, AspectRatio } from '@chakra-ui/react'

export function Hero(){
    return (
        
        <Grid
        padding={4}
        borderRadius="full"
        w="100%"
        maxWidth={1480}
        h="360px"
        mx="auto"
        mt="4"
        templateColumns='repeat(1, 1fr)'
        gap={4}
      >
        <GridItem 
        style={{backgroundImage:'url("https://images4.alphacoders.com/641/641968.jpg")', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'}} 
        rowSpan={2} 
        colSpan={1} 
        borderRadius="2xl"
        border="1px"
        >
  
        </GridItem>
      </Grid>
    )
}