export const DATA = {
    navbarData: [
        {
            title: "Alert Dialog",
            href: "/docs/primitives/alert-dialog",
            description:
                "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
            title: "Hover Card",
            href: "/docs/primitives/hover-card",
            description:
                "For sighted users to preview content available behind a link.",
        },
        {
            title: "Progress",
            href: "/docs/primitives/progress",
            description:
                "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
        {
            title: "Scroll-area",
            href: "/docs/primitives/scroll-area",
            description: "Visually or semantically separates content.",
        },
        {
            title: "Tabs",
            href: "/docs/primitives/tabs",
            description:
                "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        },
        {
            title: "Tooltip",
            href: "/docs/primitives/tooltip",
            description:
                "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        },
    ],

    layoutMetadata: {
        url: "https://neon-oss-starter-kit.vercel.app/",
        metadataTitle: "Starfall",
        metadataDescription: "Starfall is a comprehensive full-stack web application starter kit for developers, built with Next.js and leveraging modern technologies and best practices.",
    },

    general: {
        productName: "Starfall",
        adminUsername: "arjuncodess",
    },

    pricingTiers: [
        {
            name: "Free Plan",
            price: "$0",
            buttonText: "Start for free",
            description: "Always available free tier, no credit card required.",
            features: [
                { name: "0.5 GiB storage", included: true },
                { name: "24/7 for your main database", included: true },
                { name: "Community support", included: true },
                { name: "Fixed capacity at 0.25 vCPU", included: true },
                { name: "Point-in-time restore (24 h)", included: true },
                { name: "Organization accounts", included: false },
                { name: "IP Allow rules", included: false },
            ],
        },
        {
            name: "Launch",
            price: "$19",
            buttonText: "Get started",
            description: "All the resources, features and support you need to launch.",
            features: [
                { name: "10 GiB storage included", included: true },
                { name: "300 compute hours included", included: true },
                { name: "Standard support", included: true },
                { name: "Autoscaling up to 4 CU", included: true },
                { name: "Point-in-time restore (7 days)", included: true },
                { name: "Organization accounts", included: true },
                { name: "IP Allow rules", included: false },
            ],
            highlighted: true,
        },
        {
            name: "Scale",
            price: "$69",
            buttonText: "Get started",
            description: "Full platform access for scaling production workloads.",
            features: [
                { name: "50 GiB storage included", included: true },
                { name: "750 compute hours included", included: true },
                { name: "Priority support", included: true },
                { name: "Autoscaling up to 10 CU", included: true },
                { name: "Point-in-time restore (30 days)", included: true },
                { name: "Organization accounts", included: true },
                { name: "IP Allow rules", included: true },
            ],
        },
    ],

    footerLinks: [
        {
            title: "Starfall",
            items: [
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Press", href: "/press" },
            ],
        },
        {
            title: "Support",
            items: [
                { label: "Contact Us", href: "/contact" },
                { label: "Help Center", href: "/help-center" },
                { label: "Privacy Policy", href: "/privacy-policy" },
            ],
        },
        {
            title: "Social Media",
            items: [
                { label: "Twitter", href: "https://twitter.com/arjuncodess" },
                { label: "LinkedIn", href: "https://linkedin.com/in/arjuncodess" },
                { label: "Instagram", href: "https://instagram.com/arjuncodess" },
            ],
        },
    ],
};