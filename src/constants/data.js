export const data = {
    name: "ROOT NODE",
    type: "root",
    children: [
        {
            name: "SAGA NODE",
            type: "saga",
            children: [
                {
                    name: "EPIC NODE",
                    type: "epic",
                    children: [
                        {
                            name: "STORRY NODE",
                            value: 90,
                            type: "story",
                            children: [
                                { name: "TEST NODE", type: "test", value: 45 },
                                { name: "TEST NODE", type: "test", value: 30 },
                            ],
                        },
                        {
                            name: "STORRY NODE",
                            value: 70,
                            type: "story",
                            children: [
                                { name: "TEST NODE", type: "test", value: 20 },
                            ],
                        },
                    ],
                },
                {
                    name: "EPIC NODE",
                    type: "epic",
                    value: 80,
                    children: [
                        { name: "TEST NODE", type: "test", value: 40 },
                    ],
                },
            ],
        },
        {
            name: "SAGA NODE",
            type: "saga",
            children: [
                {
                    name: "EPIC NODE",
                    type: "epic",
                    children: [
                        {
                            name: "STORY NODE",
                            value: 60,
                            type: "story",
                            children: [
                                { name: "TEST NODE", type: "test", value: 25 },
                            ],
                        },
                        {
                            name: "STORY NODE",
                            value: 50,
                            type: "story",
                            children: [
                                { name: "TEST NODE", type: "test", value: 15 },
                                { name: "TEST NODE", type: "test", value: 10 },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
