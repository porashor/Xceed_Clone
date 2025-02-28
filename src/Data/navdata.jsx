
const navdata = [
    {
        id: 0.1,
        title: 'Home',
        url: '/',
    },
    {
        id: 0.2,
        title: 'Services',
        url: '/services',
        subMenu: [
            {
                id: 1,
                title: 'Website',
                url: '/website',
                subMenu: [
                    {
                        id: 1,
                        title: 'Website design',
                        url: '/website-1',
                    },
                    {
                        id: 2,
                        title: 'Website development',
                        url: '/website-2',
                    },
                    {
                        id: 3,
                        title: 'E-commerce development',
                        url: '/website-3',
                    },
                    {
                        id: 4,
                        title: 'Website Mentainance',
                        url: '/website-4',
                    },
                    {
                        id: 5,
                        title: 'Website Hosting',
                        url: '/website-5',
                    },
                ]
            },
            {
                id: 2,
                title: 'SEO',
                url: '/seo',
                subMenu: [
                    {
                        id: 1,
                        title: 'Organic SEO',
                        url: '/organic',
                    },
                    {
                        id: 2,
                        title: 'eCommarce SEO',
                        url: '/ecom',
                    },
                    {
                        id: 3,
                        title: 'Local SEO',
                        url: '/local',
                    },
                    {
                        id: 4,
                        title: 'Healthcare SEO Services',
                        url: '/health',
                    },
                ]
            },
            {
                id: 3,
                title: 'Degital Marketing',
                url: '/digital',
                subMenu: [
                    {
                        id: 1,
                        title: 'PPC Marketing',
                        url: '/ppc',
                    },
                    {
                        id: 2,
                        title: 'eCommarce Ads',
                        url: '/ecomad',
                    },
                    {
                        id: 3,
                        title: 'Facebook Ads',
                        url: '/fbads',
                    }
                ]
            },
        ]
    },
    {
        id: 0.3,
        title: 'Portfolio',
        url: '/portfolio',
    },
    {
        id: 0.4,
        title: 'About',
        url: '/',
        subMenu: [
            {
                id: 1,
                title: 'About Us',
                url: '/about',
            },
            {
                id: 2,
                title: 'Our Team',
                url: '/team',
            }
        ]
    },
    {
        id: 0.5,
        title: 'Blog',
        url: '/blog',
    },
    {
        id: 0.6,
        title: 'Contact Us',
        url: '/contact'
    }
]

export default navdata