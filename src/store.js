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
        ],

        moreFeaturesCards: [
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
        ],

        postsArray: [
            {
                img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                title: "The Power of Personalization",
                text: "Discover the impact of personalized marketing essentials strategies.",
                date: "23 December, 2020"
            },
            {
                img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                title: "Content Marketing",
                text: "Uncover the secrets of creating compelling content that resonates with your target audience.",
                date: "18 October, 2021"
            },
            {
                img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                title: "Unleashing the Potential of Video Marketing",
                text: "Dive into the world of video marketing and explore effective strategies.",
                date: "12 April, 2021"
            },
            {
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                title: "Social Media Advertising",
                text: "Learn how to optimize your social media advertising campaigns by leveraging audience targeting.",
                date: "07 August, 2020"
            },
            {
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                title: "SEO Made Simple",
                text: "Demystify the world of search engine optimization (SEO) as we break down the essential elements.",
                date: "16 February, 2022"
            },
            {
                img: "https://images.unsplash.com/photo-1556764900-fa065610b0e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                title: "Harnessing the Power of Influencers",
                text: "Explore the world of influencer marketing and gain insights on how to establish collaborations.",
                date: "28 March, 2020"
            },
        ],

        footerLists: [
            {
                title: "Menu",
                list: [
                    "About Us",
                    "Theme",
                    "Feature",
                    "Pricing",
                    "Blog"
                ]
            },
            {
                title: "About Us",
                list: [
                    "About Sofbox",
                    "Readmap",
                    "How it works",
                    "Team",
                    "News"
                ]
            },
            {
                title: "Quick Links",
                list: [
                    "About Us",
                    "Theme",
                    "Feature",
                    "Pricing",
                    "Blog"
                ]
            },
        ]

    }
)