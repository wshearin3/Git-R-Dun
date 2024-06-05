import React, { createContext, useState, useEffect } from 'react';
import { ApolloProvider, useQuery, gql } from '@apollo/client';
import {Query} from '../../../server/schemas/resolvers.js';

// Create the context
export const TaskContext = createContext();

// Create the provider component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', owner: 'John', status: 'Done' },
    { id: 2, name: 'Task 2', owner: 'Jane', status: 'In Progress' },
    { id: 3, name: 'Task 3', owner: 'Bob', status: 'Not Started' },
  ]);

  const { loading, error, data } = useQuery(tasks, {
    client,
    onCompleted: (data) => setTasks(data.tasks),
  });

  const getTasksFromDatabase = async () => {
    try{
   const {data} = await client.query({Query: tasks});
   setTasks(data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTaskToDatabase = (newTask) => {
    /**
     * This function is intended to add a new task to the database.
     * It should receive a 'newTask' object as a parameter, which includes
     * the task's name, owner, and status.
     * It should make an API call or interact with a database library
     * to store the new task in the database.
     * After successfully adding the task, it should update the 'tasks' state
     * to include the new task.
     */
  };

  useEffect(() => {
    if (!loading && !error && data) {
      setTasks(data.tasks);
    }
  }, [loading, error, data]);


  return (
    <TaskContext.Provider value={{ tasks, getTasksFromDatabase, addTaskToDatabase }}>
      {children}
    </TaskContext.Provider>
  );
};
