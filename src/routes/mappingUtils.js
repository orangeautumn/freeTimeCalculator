/**
 * Based on the hh:mm format string, it will returns a Date Object
 * @param {*} input
 */
 const getDate = (input) => {
    const time = input.split(":");

    const output = new Date();
    output.setHours(time[0]);
    output.setMinutes(time[1]);
    output.setSeconds("00");
    return output;
};

/**
 * formates Data obect into hh:mm format
 * @param {*} date
 */
const formatDateHHMM = (date) => {
    return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
};

/**
 * massages response object
 * @param {*} list
 */
const massageResponseObject = (list) => {
    list.forEach((item, index) => {
        if (item.startTime === "") {
            list.splice(index, 1);
        }
    });

    list.forEach((item) => {
        item.startTime = formatDateHHMM(item.startTime);
        item.endTime = formatDateHHMM(item.endTime);
    });
    return list;
};

/**
 * messages request object
 * @param {*} list
 */
const massageRequestObject = (list) => {
    list.forEach((item) => {
        item.startTime = getDate(item.startTime);
        item.endTime = getDate(item.endTime);
    });
    return list;
};


module.exports = { massageRequestObject , massageResponseObject};