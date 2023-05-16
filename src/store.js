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

        tipsCards: [
            {
                img: "/img/510.png",
                title: "Reporting Analysis",
                text: "It is a long established fact that a reader will be distracted by the redable content of a page when looking at this layout."
            },
            {
                img: "/img/511.png",
                title: "Technical SEO Audit",
                text: "It is a long established fact that a reader will be distracted by the redable content of a page when looking at this layout."
            },
            {
                img: "/img/510.png",
                title: "Data-Driven Decision Making",
                text: "Learn how to effectively analyze and interpret data to make informed marketing decisions that drive measurable results."
            },
            {
                img: "/img/511.png",
                title: "Targeted Advertising",
                text: "Gain insights into audience segmentation and targeting strategies to ensure your marketing messages reach relevant audience."
            },
            {
                img: "/img/510.png",
                title: "Social Media Engagement",
                text: "Discover effective strategies to engage and connect with your social media audience authentically."
            },
            {
                img: "/img/511.png",
                title: "Strategies for Consistent Branding",
                text: "Discover the importance of consistent branding across all channels and learn techniques to build a strong brand identity."
            },
        ],

        featuresCards: [
            {
                title: "Customized Invoices",
                img: "/img/graphic-icon.png"
            },
            {
                title: "Stock Management",
                img: "/img/plane-icon.png"
            },
            {
                title: "Receivable Payables",
                img: "/img/user-icon.png"
            },
            {
                title: "Manage Buying",
                img: "/img/user2-icon.png"
            },
            {
                title: "Powerful and Secure",
                img: "/img/circles-icon.png"
            },
            {
                title: "Fastest Return Filing",
                img: "/img/user-icon.png"
            },
            {
                title: "Monthly Detailed",
                img: "/img/document-icon.png"
            },
            {
                title: "Product Management",
                img: "/img/thumb-icon.png"
            },
        ],

        moreFeaturesCards: [
            {
                title: "Customized Invoices",
                img: "/img/graphic-icon.png"
            },
            {
                title: "Stock Management",
                img: "/img/plane-icon.png"
            },
            {
                title: "Receivable Payables",
                img: "/img/user-icon.png"
            },
            {
                title: "Manage Buying",
                img: "/img/circles-icon.png"
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