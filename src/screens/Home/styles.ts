import styled from "styled-components/native";

export const HomeContainer = styled.View`
  flex: 1;  
  background-color: ${props => props.theme["gray-600"]};
`

export const HomeContent = styled.View`
  padding: 24px;
`

export const NewTaskContainer = styled.View`
  height: 54px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`

export const NewTaskInput = styled.TextInput`
  height: 52px;
  border-radius: 8px;
  background-color: ${props => props.theme["gray-500"]};
  padding: 16px;
  flex: 1;
  color: ${props => props.theme["gray-300"]};
  font-size: 16px;
  margin-right: 4px;
`

export const NewTaskButton = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  background-color: ${props => props.theme["blue-dark"]};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`

export const TaskList = styled.FlatList`
  margin-top: 20px;
  
`

export const EmptyListText = styled.Text`
  color: ${props => props.theme["gray-100"]}
`