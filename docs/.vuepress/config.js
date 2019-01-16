module.exports = {
    title: '只是个文档',
    description: ' ',
    base: "/deployToGithub/",
    dest: "./docs/.vuepress/deployToGithub/",
    head: [
        ["link", { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" }],
    ],

    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: '实用模板', link: '/templates/' },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        ['', '介绍'],
                        ['start', '快速上手'],
                        ['structure', '工具结构'],
                        ['basic', '基础组件'],
                        ['advanced', '高级组件'],
                    ],
                },
            ],           

            '/templates/': [
                {
                    title: '模板',
                    collapsable: false,
                    children: [
                        ['', 'modules'],
                        ['tem1','tem1'],
                        ['tem2', 'tem2'],
                    ],
                },
            ],

            '/': [
                '',
            ],

        },

        lastUpdated: '上次更新',
    },
   
}