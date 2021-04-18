import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { HStack, Input, Button, useToast } from '@chakra-ui/react';

function AddTodo({ addTodo }) {
  const [content, setContent] = useState('');
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();

    if (!content) {
      toast({
        title: "No Todo content.",
        description: "You must add no empty Todo.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const newTodo = {
      id: nanoid(),
      body: content
    };
    addTodo(newTodo);
    setContent('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack p={4}>
        <Input 
          variant="filled" 
          placeholder="Type here your Todo..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="teal" px="8" type="submit">Add Todo</Button>
      </HStack>
    </form>
  );
}

export default AddTodo;