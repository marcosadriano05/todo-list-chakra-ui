import React from 'react';
import { VStack, HStack, StackDivider, Text, IconButton, Spacer, Badge } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

function TodoList({ todos, deleteTodo }) {
  if (!todos.length) {
    return (
      <Badge variant="subtle" colorScheme="green" p="4" borderRadius="lg">
        You have no Todos!
      </Badge>
    );
  }

  return (
    <VStack 
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      borderRadius="lg"
      p={4}
      w="100%"
      maxW={{base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw"}}
      alignItems="stretch"
    >
      {todos.map(todo => (
        <HStack key={todo.id} justify="space-between">
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton 
            icon={<FaTrash />} 
            isRound="true"
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;