import { reactive } from "vue";

export const store = reactive(
    {
        marketingArray: [
            {
                title: "Online Marketing",
                text: "It is a long established fact that a reader will be distracted.",
                list: [
                    "SEO",
                    "SEM",
                    "Website Strategy",
                    "Social management"
                ]
            }
        ]

    }
)