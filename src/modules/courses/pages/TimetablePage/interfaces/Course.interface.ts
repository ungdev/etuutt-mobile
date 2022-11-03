
type CourseTime = {
    hour: number
    minute: number
}


interface Course {
    day: string
    start: CourseTime,
    end: CourseTime,
    week: string,
    uv: string,
    type: string,
    room: string
}
