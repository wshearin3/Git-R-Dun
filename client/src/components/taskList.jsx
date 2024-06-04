import react, { useState } from 'react';
import { VStack, Box } from '@chakra-ui/react';



function TaskList (){

   const [tasks, setTasks] = useState(
    [
        {
            name: "Task One"

        },
        {
            name: "Task Two"
        },
        {
            name: "Task Three"
        }
    ]
   )  

    

    return (
    <VStack className="task-list">
              
        {tasks.map( task => 
            <Box>
                {task.name}
            </Box>
        ) }
    </VStack>
    )
}

export default TaskList;