'use client'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useParams } from 'next/navigation'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Card, CardBody, Stack, Heading,Text,Image,Divider, Box} from '@chakra-ui/react'
import { SpinnerPoke } from '@/components/Spinner'
import Link from 'next/link'

export default function Pokemon() {
  const [pokemon, setPokemon] = useState<any>()
  
  const {id} = useParams()
  
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => (
      setPokemon(response.data)
    ))
  },[id])
  
  
    return (
      <>
        <Header />
          <Card 
          bg="gray.500"
          boxShadow="dark-lg"
          w="60%" 
          mx="auto"
          mt="4"
          alignItems="center"
          maxWidth={450}>
          <CardBody> 
          {pokemon == null ? 
          <SpinnerPoke /> :
          <Box>
            <Box>
                  <Text as="strong" height="56px">Padrão</Text>
                    <Image
                          src={pokemon?.sprites.front_default}
                          alt={pokemon?.name}
                    />
                    <Text as="strong">Brilhante</Text>
                    <Image
                          src={pokemon?.sprites.front_shiny}
                          alt={pokemon?.name}
                    />  
                <Divider />       
            </Box>
            <Stack mt='6' spacing='3'>
                <Heading size='md' color="blue.100">#{pokemon?.name.toUpperCase()}</Heading>
                <Text as="strong">Tamanho:{pokemon?.weight}</Text>
                <Text as="strong">Typo:{pokemon?.types[0].type.name}</Text>
            </Stack>
          </Box>
          }
          </CardBody>
          </Card>
          <Box 
            w="100%" 
            mx="auto"
            mt="4"
            maxW={1480}
            >
            <Link href="/">
              Voltar a Home
            </Link>
          </Box>
        <Footer />
      </>
    )
  
  
}
