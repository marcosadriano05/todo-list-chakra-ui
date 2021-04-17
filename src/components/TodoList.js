import React from 'react';
import { VStack, HStack, StackDivider, Text, IconButton, Spacer } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

function TodoList() {
  const todos = [
    {
      id: 1,
      body: "get bread"
    },
    {
      id: 2,
      body: "get butter"
    }
  ];
  return (
    <VStack 
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      borderRadius="lg"
      p="4"
      w="100%"
      maxW={{base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw"}}
      alignItems="stretch"
    >
      {todos.map(todo => (
        <HStack key={todo.id} justify="space-between">
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton icon={<FaTrash />} isRound="true" />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;