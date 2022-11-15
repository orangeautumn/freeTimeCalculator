var express = require("express");
const { massageResponseObject, massageRequestObject } = require("./mappingUtils");

var router = express.Router();

/* Post users listing. */
router.post("/", function (req, res, next) {
    const freeTimes = getFreeTime(req.body);
    res.setHeader("Content-Type", "application/json");
    res.send(freeTimes);
});

/**
 * calculates Free time based on the Available Times list and Meetings times list
 * @param {*} requestData
 */
const getFreeTime = (requestData) => {
    const availableTimes = requestData.availableTimes
        ? massageRequestObject(requestData.availableTimes)
        : [];
    const meetingTimes = requestData.meetingTimes
        ? massageRequestObject(requestData.meetingTimes)
        : [];

    meetingTimes.forEach((meetingItem) => {
        availableTimes.forEach((availableItem, index) => {
            if (meetingItem.endTime <= availableItem.endTime) {
                if (meetingItem.endTime > availableItem.startTime) {
                    if (
                        availableItem.startTime.getTime() ===
                        meetingItem.startTime.getTime() &&
                        availableItem.endTime.getTime() === meetingItem.endTime.getTime()
                    ) {
                        availableItem.startTime = "";
                        availableItem.endTime = "";
                    } else if (
                        availableItem.startTime.getTime() ===
                        meetingItem.startTime.getTime() &&
                        availableItem.endTime.getTime() !== meetingItem.endTime.getTime()
                    ) {
                        availableItem.startTime = meetingItem.endTime;
                    } else if (availableItem.startTime < meetingItem.startTime) {
                        let newEntry = {
                            startTime: meetingItem.endTime,
                            endTime: availableItem.endTime
                        };
                        availableItem.endTime = meetingItem.startTime;
                        availableTimes.splice(index + 1, 0, newEntry);
                    } else { // if (availableItem.startTime > meetingItem.startTime) {
                        availableItem.startTime = meetingItem.endTime;
                    }
                }
            } else { // if (meetingItem.endTime > availableItem.endTime) {
                if (
                    meetingItem.startTime > availableItem.startTime &&
                    meetingItem.startTime < availableItem.endTime
                ) {
                    availableItem.endTime = meetingItem.startTime;
                } else if (meetingItem.startTime < availableItem.startTime) {
                    availableItem.startTime = "";
                    availableItem.endTime = "";
                }
            }
        });
    });

    massageResponseObject(availableTimes);

    return JSON.stringify(availableTimes);
};


module.exports = router;
