import { Card,Image,Spinner, CardHeader,Heading,Text,Button, CardBody,CardFooter, SimpleGrid} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from '@chakra-ui/react'
import { SpinnerPoke } from '../Spinner';


export const Pokemon = ({ data }:any) => {
    const [details, setDetails] = useState<any>(null);
  
    useEffect(() => {
      axios.get(data.url).then((response) => setDetails(response.data));
    }, [data.url]);
  
    if (details === null) {
      return (
        <SpinnerPoke />
      )
    }
  
    return (
      
       <Card background="gray.800" color="yellow.100">
        <CardHeader>
            <Heading size='md'>{details.name}</Heading>
        </CardHeader>
        <CardBody>
            <Text>{details.base_experience}</Text>
            <Image
            borderRadius='full'
            bg="yellow.400"
            boxSize='80px'
            src={details.sprites.front_default}
            alt={details.name}
            />
        </CardBody>
        <CardFooter>
            <Link href={`Pokemon/${details.id}`}>
               <Button>Veja mais</Button>
            </Link>
        </CardFooter>
     </Card>
    );
  };