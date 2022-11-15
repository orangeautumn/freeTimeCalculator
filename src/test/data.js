const useCase1 = {
    req: {
        availableTimes: [
            {
                startTime: "13:00",
                endTime: "15:00"
            },
            {
                startTime: "9:00",
                endTime: "11:00"
            }
        ],
        meetingTimes: [
            {
                startTime: "12:30",
                endTime: "16:00"
            },
            {
                startTime: "9:00",
                endTime: "9:15"
            },
            {
                startTime: "10:00",
                endTime: "10:15"
            }
        ]
    },
    expectedRes: [
        {
            startTime: "09:15",
            endTime: "10:00"
        },
        {
            startTime: "10:15",
            endTime: "11:00"
        }
    ]
};

const useCase2 = {
    req: {
        "availableTimes": [
            {
                "startTime": "9:00",
                "endTime": "11:00"
            },
            {
                "startTime": "13:00",
                "endTime": "15:00"
            }
        ],
        "meetingTimes": [
            {
                "startTime": "9:00",
                "endTime": "9:15"
            },
            {
                "startTime": "10:00",
                "endTime": "10:15"
            },
            {
                "startTime": "12:30",
                "endTime": "16:00"
            }
        ]
    },
    expectedRes: [
        {
            "startTime": "09:15",
            "endTime": "10:00"
        },
        {
            "startTime": "10:15",
            "endTime": "11:00"
        }
    ]
} 

const useCase3 = {
    req: {
        "availableTimes": [
            {
                "startTime": "9:00",
                "endTime": "9:30"
            },
             {
                "startTime": "10:00",
                "endTime": "10:30"
            }
        ],
        "meetingTimes": [
            {
                "startTime": "9:15",
                "endTime": "10:15"
            }
        ]
    },
    expectedRes: [
        {
            "startTime": "09:00",
            "endTime": "09:15"
        },
        {
            "startTime": "10:15",
            "endTime": "10:30"
        }
    ]
} 

const useCase4 = {
    req: {
        "availableTimes": [
            {
                "startTime": "9:00",
                "endTime": "9:30"
            }
        ],
        "meetingTimes": [
            {
                "startTime": "9:30",
                "endTime": "15:00"
            }
        ]
    },
    expectedRes: [
        {
            "startTime": "09:00",
            "endTime": "09:30"
        }
    ]
} 

const useCase5 = {
    req: {
        "availableTimes": [
            {
                "startTime": "9:00",
                "endTime": "10:00"
            }
        ],
        "meetingTimes": [
            {
                "startTime": "9:00",
                "endTime": "10:00"
            }
        ]
    },
    expectedRes: []
} 



const useCase6 = {
    req: {
        "availableTimes": [
            {
                "startTime": "9:00",
                "endTime": "10:00"
            }
        ],
        "meetingTimes": [
            {
                "startTime": "9:00",
                "endTime": "9:30"
            }
        ]
    },
    expectedRes:[
        {
            "startTime": "09:30",
            "endTime": "10:00"
        }
    ]
} 

module.exports = { useCase1 , useCase2 , useCase3, useCase4 , useCase5, useCase6};