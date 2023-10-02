'use client'
import { SimpleGrid,} from '@chakra-ui/react'
import { api } from '@/services/api';
import { useEffect, useState } from 'react';
import { Pokemon } from '../Pokemon';


interface PokeProps{
  name: string;
}

export function Main() {
  const [list, setList] = useState<PokeProps[]>([]);

  useEffect(() => {
    api.get('')
    .then((response) => {
      const sortedArray = [...response.data.results];
      sortedArray.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      return setList(sortedArray);
    });
  }, []);

  return (
    <>
  
      <SimpleGrid 
        w="100%" 
        mx="auto"
        mt="4"
        padding={4}
        maxWidth={1480}
        spacing={4}
        templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
      >
        {list.map((item) => (
          <Pokemon key={item.name} data={item} />
        ))}
      </SimpleGrid>
      
    </>
  )
}

