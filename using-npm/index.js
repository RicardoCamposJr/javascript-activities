const dayjs = require("dayjs")

const birthday = "28-05-2002"

calculateDate(birthday)

function calculateDate (birthday) {
    const date = new Date()
    dayjs(birthday).add(1, "y")
    console.log(birthday)

}