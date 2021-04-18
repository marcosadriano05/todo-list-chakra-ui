import React from 'react';
import { Heading, VStack, IconButton } from "@chakra-ui/react";
import { FaSun } from 'react-icons/fa';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <VStack p={4} w="100%" minH="100vh">
      <IconButton 
        icon={<FaSun />} 
        isRound="true" 
        size="lg" 
        alignSelf="flex-end" 
        aria-label="Alterar tema" />
      <Heading 
        mb={8} 
        fontWeight="extrabold" 
        size="2xl"
        bgGradient="linear(to-r,blue.500,green.400,blue.200)"
        bgClip="text"
      >
        Todo List
      </Heading>
      <TodoList />
      <AddTodo />
    </VStack>
  );
}

export default App;
