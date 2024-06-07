import react, { useContext, useState } from "react";
import { Heading, Stack, Card, CardHeader, CardBody, CardFooter, Container } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from "react-router-dom";



function Userpage() {
    return (
        <>

            <Container centerContent>
                <Stack spacing={4} direction='row' align='center'>
                    <Link to={"/projectpage"}>

                        <Button colorScheme='teal' size='sm'>
                            Project 1
                        </Button>

                    </Link>
                </Stack>
            </Container>
        </>
    )
}

export default Userpage;