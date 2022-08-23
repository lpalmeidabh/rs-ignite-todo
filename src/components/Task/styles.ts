
import styled from 'styled-components/native';
import { Text, View } from "react-native";
import { css } from 'styled-components';

export const TaskContainer = styled.View`
  
  width: 100%;
  height: 64px;
  flex-direction: row;
  border-radius: 8px;
  padding: 12px 20px;
  background-color: ${props => props.theme["gray-500"]};
  margin-bottom: 8px;
  align-items: center;
  justify-content:center ;
`

interface TaskDescriptionProps {
  isCompleted: boolean
}
export const TaskDescription = styled.Text<TaskDescriptionProps>`
  margin-left: 8px;
  color: ${props => props.theme["gray-100"]};
  flex: 1;
  text-decoration: ${props => props.isCompleted && `line-through`}
  
`
