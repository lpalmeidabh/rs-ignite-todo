import {View, Text, TouchableOpacity, Image} from  'react-native';
import { TaskContainer, TaskDescription } from './styles';
import trash from '../../assets/trash.png';
import completed from '../../assets/completed.png';
import notcompleted from '../../assets/notcompleted.png';

interface TaskProps {
  id: string,
  description: string
  isCompleted: boolean,
  onRemove: (id: string) => void,
  onToggleCompletion: (id: string) => void
}
export function Task({id, description, isCompleted, onRemove, onToggleCompletion}: TaskProps) {

  function handleRemoveTask(){
    onRemove(id)
  }

  function handleTaskCompletion(){
    onToggleCompletion(id)
  }

  return(
    <TaskContainer >
      <TouchableOpacity onPress={handleTaskCompletion}>
        <Image source={isCompleted ? completed : notcompleted} />
      </TouchableOpacity>
      <TaskDescription isCompleted={isCompleted}>{description}</TaskDescription>
      <TouchableOpacity onPress={handleRemoveTask}>
           <Image source={trash} />
      </TouchableOpacity>
    </TaskContainer>
  )
}