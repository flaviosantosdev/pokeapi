import { Spinner } from "@chakra-ui/react"

export const SpinnerPoke = () => {
    return(
        <Spinner
            thickness='4px'
            speed='0.95s'
            emptyColor='gray.800'
            color='yellow.300'
            size='xl'
        />
    )
}