import React from 'react'
import { View } from 'react-native'
import ScheduleItem from './ScheduleItem'
import ScheduleHalfItem from './ScheduleHalfItem'
import { palette } from '../../../../../theme/theme';
const ScheduleItems = props => {
  const hours = [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00'
  ]
  let courses = {}
  for (let i = 0; i < hours.length; i++) {
    courses[hours[i]] = { type: 'void', size: 1 }
  }
  props.courses.forEach(course => {
    const course_start = getHourFormatted(course.start.hour, course.start.minute);
    
    if (course.week === 'T') {
      courses[course_start] = {
        type: 'course',
        size: getBlockSize(course),
        course,
        backgroundColor: palette.blue,
        textColor: palette.white
      }
    } else {
      if (!courses[course_start].courses) {
        courses[course_start] = {
          type: 'course_half',
          courses: { a: { ...course, size: getBlockSize(course) } },
          backgroundColor: palette.blue,
          textColor: palette.white
        }
      } else {
        courses[course_start].courses.b = {
          ...course,
          size: getBlockSize(course)
        }
      }
    }
  })
  let deleteCount = 0
  for (let [key, course] of Object.entries(courses)) {
    if (course.type === 'course' || course.type == 'course_half') {
      deleteCount = course.size - 1
    } else if (deleteCount > 0) {
      --deleteCount
      delete courses[key]
    }
  }
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 10
      }}
    >
      {Object.values(courses).map((item, index) =>
        item.type === 'course' ? (
          <ScheduleItem key={index} {...item} />
        ) : item.type === 'course_half' ? (
          <ScheduleHalfItem key={index} {...item} />
        ) : (
          <ScheduleItem key={index} {...item} />
        )
      )}
    </View>
  )
}

const getBlockSize = course => {
  const hours = course.end.hour - course.start.hour
  const minutes = course.end.minute - course.start.minute
  let size = hours * 2
  if (minutes == 30) {
    size++
  }
  if (minutes == -30) {
    size--
  }
  return size
}

const getHourFormatted = (hour, minute) => {
  const hours = (hour < 10 ? '0' : '') + hour;
  const minutes = (minute < 10 ? '0' : '') + minute;

  return hours + ":" + minutes;
}

export default ScheduleItems
