import moment from "moment"

const formats = {
   "Month_Day_Year" : "MMM DD, YYYY"
}

const dateFormat = (date: string, format: string) : string => {
    return moment(date).format(format)
}

export {
    dateFormat,
    formats
}