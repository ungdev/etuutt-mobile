import React from 'react'
import { Text, View } from 'react-native'
const CELL_SIZE = 30
const ScheduleHalfItem = props => {
  const courseA = props.courses.a
  const courseB = props.courses.b
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View
        style={{
          flex: 2,
          height: CELL_SIZE * courseA.size,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : 'white',
          borderTopWidth: 1,
          borderTopColor: 'white',
          marginRight: 1
        }}
      >
        <Text
          style={{
            color: props.textColor ? props.textColor : null
          }}
        >
          {courseA.uv} ({courseA.week})
        </Text>
        <Text
          style={{
            color: props.textColor ? props.textColor : null
          }}
        >
          {courseA.room} - {courseA.type}
        </Text>
      </View>
      {courseB !== null && courseB !== undefined && (
        <View
          style={{
            flex: 2,
            height: CELL_SIZE * courseB.size,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: props.backgroundColor
              ? props.backgroundColor
              : 'white',
            borderTopWidth: 1,
            borderTopColor: 'white',
            marginRight: 1
          }}
        >
          <Text
            style={{
              color: props.textColor ? props.textColor : null
            }}
          >
            {courseB.uv} ({courseB.week})
          </Text>
          <Text
            style={{
              color: props.textColor ? props.textColor : null
            }}
          >
            {courseB.room} - {courseB.type}
          </Text>
        </View>
      )}
    </View>
  )
}

export default ScheduleHalfItem
