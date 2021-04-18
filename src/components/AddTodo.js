import React from 'react';
import { HStack, Input, Button } from '@chakra-ui/react';

function AddTodo() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e)
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input variant="filled" placeholder="Add Todo..." />
        <Button colorScheme="teal" px="8" type="submit">Add Todo</Button>
      </HStack>
    </form>
  );
}

export default AddTodo;