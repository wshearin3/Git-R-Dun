import react, { useContext, useState } from "react";
import { VStack, Flex, Box } from "@chakra-ui/react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks, getTasksFromDatabase, addTaskToDatabase } =
    useContext(TaskContext);

  return (
    <VStack
      spacing={8}
      w="100%"
      h="100vh"
      bgColor="gray.100"
      px="6"
      py="6"
      className="task-list"
    >
      {tasks.map((task) => (
          <Flex key={task.id}
            w="100%"
            bgColor="gray.50"
            h="80px"
            borderRadius="10px"
            shadow="md"
            align="center"
            px="5"
            justify="space-between"
          >
            <Box>{task.name}</Box>
            <Box>{task.owner}</Box>
            <Box
              fontSize={11}
              color={"gray.400"}
              width={"8%"}
              borderRadius={"7px"}
              textAlign="center"
              fontWeight="bold"
              bgColor={
                task.status == "Done"
                  ? "green.700"
                  : task.status == "In Progress"
                  ? "blue.800"
                  : task.status == "Not Started"
                  ? "red.600"
                  : ""
              }
            >
              {task.status}
            </Box>
          </Flex>
      ))}
    </VStack>
  );
}

export default TaskList;
