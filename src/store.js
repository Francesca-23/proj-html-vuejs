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
        ],

        featuresCards: [
            {
                title: "Customized Invoices",
                img: "/img/graphic.svg"
            },
            {
                title: "Stock Management",
                img: "/img/paper-plane.svg"
            },
            {
                title: "Receivable & Payables",
                img: "/img/user.svg"
            },
            {
                title: "Manage Buying",
                img: "/img/user.svg"
            },
            {
                title: "Powerful and Secure",
                img: "/img/lock.svg"
            },
            {
                title: "Fastest Return Filing",
                img: "/img/user.svg"
            },
            {
                title: "Monthly Detailed",
                img: "/img/document.svg"
            },
            {
                title: "Product Management",
                img: "/img/thumb.svg"
            },
        ]

    }
)