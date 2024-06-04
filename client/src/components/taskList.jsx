import react, { useState } from 'react';
import { VStack, Flex, Box } from '@chakra-ui/react';



function TaskList (){

   const [tasks, setTasks] = useState(
    [
        {
            name: "Task One",
            owner: "Trey",
            status: "Done"
        },
        {
            name: "Task Two",
            owner: "Adam",
            status: "In Progress"
        },
        {
            name: "Task Three",
            owner: "Tabi",
            status: "Not Started"
        }
    ]
   )  

    

    return (
    <VStack spacing={8} w="100%" bgColor="gray.100" px="6" py="6" className="task-list">
              
        {tasks.map( task => 
            <Flex w="100%" bgColor="gray.50" h="100px" borderRadius="10px" shadow="md" align="center" px="5" justify="space-evenly">
                <Box>{task.name}</Box>
                <Box>{task.owner}</Box>
                <Box>{task.status}</Box>
            </Flex>
        ) }
    </VStack>
    )
}

export default TaskList;