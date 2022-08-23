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

export const SummaryContainer = styled.View`
  width: 100%;
  height: 54px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: ${props => props.theme.white} */
`
export const SummaryItem = styled.View`
flex-direction: row;
`

interface SummaryItemTextProps {
  variant: 'purple' | 'blue'
}

export const SummaryItemText = styled.Text<SummaryItemTextProps>`

  color: ${props => props.variant === 'purple' ? props.theme["purple-dark"] : props.theme["blue-dark"]};
  font-weight: bold;
  font-size: 14px;
`
export const SummaryItemValue = styled.View`
  margin-right: 8px;
  border-radius: 99px;
  width: 25px;
  background-color: ${props => props.theme["gray-400"]};
  font-size: 12px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`
export const SummaryItemValueText = styled.Text`
  color: ${props => props.theme["gray-200"]};
`

export const TaskList = styled.FlatList`
  margin-top: 20px;
  
`

export const EmptyListText = styled.Text`
  color: ${props => props.theme["gray-100"]}
`