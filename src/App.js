import React, { useEffect, useState } from 'react';
import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from 'react-icons/fa';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <VStack p={4} w="100%" minH="100vh">
      <IconButton 
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />} 
        isRound="true" 
        size="lg" 
        alignSelf="flex-end" 
        aria-label="Alterar tema" 
        onClick={toggleColorMode}
      />
      <Heading 
        p={4} 
        fontWeight="extrabold" 
        size="2xl"
        bgGradient="linear(to-r,blue.500,green.400,blue.200)"
        bgClip="text"
      >
        Todo List
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
