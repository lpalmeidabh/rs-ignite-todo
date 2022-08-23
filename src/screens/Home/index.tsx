import React, { useState } from "react";
import { TextInput, Alert, Text, Image, FlatList } from "react-native";
import { Header } from "../../components/Header";
import { EmptyListText, HomeContainer, HomeContent, NewTaskButton, NewTaskContainer, NewTaskInput, TaskList } from "./styles";
import { v4 as uuid } from 'uuid';
import 'react-native-get-random-values'
import plusSign from '../../assets/plus.png'
import { Task } from "../../components/Task";

interface TaskItem {
  id: string
  description: string;
  isCompleted: boolean;
}


export function Home(){
  const [tasks, setTasks] = useState<TaskItem[]>([])
  const [newTaskInput, setNewTaskInput] = useState('')

  function handleAddTask() {
    const tempNewTask: TaskItem = {
      id: uuid(),
      description: newTaskInput,
      isCompleted: false
    }
    
    const filteredItemsNotCompleted = tasks.filter(item => item.isCompleted === false)
    const filteredItemsCompleted = tasks.filter(item => item.isCompleted === true)
    setTasks([...filteredItemsNotCompleted, tempNewTask, ...filteredItemsCompleted])
    setNewTaskInput('')
  }

  function handleRemoveTask(id: string) {
    Alert.alert('Remover', `Tem certeza que quer remover a tarefa?`, 
    [
      {
        text: 'Sim',
        onPress: () => {
          const items = tasks.filter(item => item.id !== id)
          setTasks(items)
        }
      }, 
      {
        text: "Não",
        style: 'cancel'
      }
    ]
    )
    console.log(`Remover ${id}`)
  }

  function handleTaskCompletion(id: string){
    const selectedItem = tasks.find(item => item.id === id)
    if(selectedItem && !selectedItem.isCompleted){
      const filteredItemsNotCompleted = tasks.filter(item => item.id !== id && item.isCompleted === false)
      const filteredItemsCompleted = tasks.filter(item => item.id !== id && item.isCompleted === true)
      setTasks([...filteredItemsNotCompleted, ...filteredItemsCompleted, {
        id,
        description: selectedItem.description,
        isCompleted: true,
      }])

    }
  }
  
  return(
    <HomeContainer>
      <Header />
      <HomeContent>
      <NewTaskContainer>
      <NewTaskInput 
            value={newTaskInput}
            onChangeText={setNewTaskInput}
            placeholder="Escreva uma nova tarefa"
            placeholderTextColor="#808080"
            
          />
         
          <NewTaskButton  onPress={handleAddTask}>
            <Image source={plusSign} />
          </NewTaskButton>
      </NewTaskContainer>

      <TaskList 
            ListEmptyComponent={() => <EmptyListText >Ninguem chegou ao evento até o momento</EmptyListText>}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            data={tasks}
            renderItem={({item}) => (
              <Task id={item.id} description={item.description} isCompleted={item.isCompleted} onRemove={handleRemoveTask} onToggleCompletion={handleTaskCompletion} />
            )}
          />
      </HomeContent>
    </HomeContainer>
    
    
  )
}