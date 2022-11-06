import moment from "moment"

const dateFormat = (date: string, format: string) : string => {
    return moment(date).format(format)
}

export {
    dateFormat
}