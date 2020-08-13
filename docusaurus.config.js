
module.exports = {
  title: '',
  tagline: '• Bills • Shopping • Offers •',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'counttrees', // Usually your GitHub org/user name.
  projectName: 'pupape', // Usually your repo name.
 
  themeConfig: {
    navbar: {
      title: 'Pupape',
      logo: {
        alt: '',
        src: 'img/pupapelogo.png',
      },
      links: [
        {
          to: 'docs/pupapefaq',
          label: 'FAQ',
          position: 'right',
        },
        {
          to: 'docs/install',
          activeBasePath: 'install',
          label: 'Help',
          position: 'right',
        }, 
        {
          to: 'blog',
          label: 'Blog',
          position: 'right'},
        {
          to: 'docs/getting',
          label: 'API',
          position: 'right',
        },  
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Help',
          items: [
            {
              label: 'Install & Login',
              to: 'docs/install',
            },
            {
              label: 'About Pupape',
              to: 'docs/about_pupape/',
            },
            {
              label: 'Billwallet',
              to: '/docs/billwallet',
            },
            {
              label: 'Stores',
              to: '/docs/category',
            },
            {
              label: 'Catalogue',
              to: '/docs/catalogue',
            },
            {
              label: 'Offers',
              to: 'docs/offers',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/appbiller/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCB2gLn9F0eRBzcWzzjLfP7g',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/biller_pos',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'www.counttrees.com',
              to: 'https://counttrees.com/home',
            },
            {
              label: '+918861797773',
              href: 'tel: +918861797773',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pupape, Counttrees Technologies Private Limited.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
