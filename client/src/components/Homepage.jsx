import react, { useContext, useState } from "react";
import { Heading, Stack  } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from "react-router-dom";

function handleClick() {

}

function Homepage (){
    return(
        <Link to={"/projectpage"}>
            <Button onClick={handleClick()} colorScheme='blue'>User Page</Button>
  </Link>
    )
}

export default Homepage;