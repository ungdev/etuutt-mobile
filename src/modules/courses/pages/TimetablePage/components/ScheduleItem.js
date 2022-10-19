import React from 'react'
import { Text, View } from 'react-native'
import { palette } from '../../../../../theme/theme';
const CELL_SIZE = 30
const ScheduleItem = props => {
  return (
    <View
      style={{
        height: CELL_SIZE * props.size,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : 'white',
        borderTopWidth: 1,
        borderTopColor: props.type !== 'void' ? palette.white : palette.grey
      }}
    >
      {props.type !== 'void' && (
        <Text
          style={{
            color: props.textColor ? props.textColor : null
          }}
        >
          {props.course.uv} - {props.course.type}
        </Text>
      )}
      {props.type !== 'void' && (
        <Text
          style={{
            color: props.textColor ? props.textColor : null
          }}
        >
          {props.course.room}
        </Text>
      )}
    </View>
  )
}

export default ScheduleItem
