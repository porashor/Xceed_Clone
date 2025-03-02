
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
                        url: '/wdesign',
                    },
                    {
                        id: 2,
                        title: 'Website development',
                        url: '/wdevelop',
                    },
                    {
                        id: 3,
                        title: 'E-commerce development',
                        url: '/Edevelop',
                    },
                    {
                        id: 4,
                        title: 'Website Mentainance',
                        url: '/wmentain',
                    },
                    {
                        id: 5,
                        title: 'Website Hosting',
                        url: '/whosting',
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
                        url: '/sorganic',
                    },
                    {
                        id: 2,
                        title: 'eCommarce SEO',
                        url: '/secom',
                    },
                    {
                        id: 3,
                        title: 'Local SEO',
                        url: '/slocal',
                    },
                    {
                        id: 4,
                        title: 'Healthcare SEO Services',
                        url: '/shealth',
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
                        url: '/dppc',
                    },
                    {
                        id: 2,
                        title: 'eCommarce Ads',
                        url: '/decom',
                    },
                    {
                        id: 3,
                        title: 'Facebook Ads',
                        url: '/dfacebook',
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
        url: '/about',
        subMenu: [
            {
                id: 1,
                title: 'About Us',
                url: '/about',
            },
            {
                id: 2,
                title: 'Our Team',
                url: '/ourteam',
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