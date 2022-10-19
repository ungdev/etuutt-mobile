import React from 'react'
import { Text, View } from 'react-native'
const CELL_SIZE = 30;

const HOURS = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00'
]
const ScheduleHours = () => (
    <View>
        {HOURS.map(hour => (
            <View key={hour} style={{ height: CELL_SIZE * 2, paddingRight: 10 }}>
                <Text>{hour}</Text>
            </View>
        ))}
    </View>
)

export default ScheduleHours