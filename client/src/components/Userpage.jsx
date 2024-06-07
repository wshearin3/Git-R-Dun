import react, { useContext, useState } from "react";
import { Heading, Stack, Card, CardHeader, CardBody, CardFooter  } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from "react-router-dom";



function Userpage (){
    return(
        

        <Link to={"/projectpage"}>
            <Stack spacing={4} direction='row' align='center'>
            <Button colorScheme='teal' size='sm'>
    Project 1
  </Button>
  </Stack>
  </Link>
    )
}

export default Userpage;