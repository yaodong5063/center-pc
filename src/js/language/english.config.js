"use strict";
var en = {
    name: "en",
    title: "Coinmerit- Focus on digital currency industry analysis platform",
    common: {
        header: {
            lang:[{
                name:'中文',
                value:'cn'
            },{
                name:'EN',
                value:'en'
            }],
            menu: [{
                name: "首页",
                url: "/",
                sort: 0
            },{
                name: "新闻",
                url: "/#/news",
                sort: 1
            },{
                name: "课程",
                url: "/#/education",
                sort: 4
            },{
                name: "展览",
                url: "/#/exhibition",
                sort: 5
            },{
                name: "活动",
                url: "/#/events",
                sort: 2
            }, {
                name: "联合办公",
                url: "/#/work",
                sort: 3
            },
            {
                name: "关于我们",
                url: "/#/about",
                sort: 6
            }],
        },
        footer: {
            name: "CoinMerit",
            keep: "©Copyright Coinmerit.com 2019",
            title: "All data on CoinMerit is sourced externally through public API’s.",
            protect:'Privacy Statement',
            api:'Public Interface (API Service)',
            lang:'en',
            menu: [{
                name: "首页",
                url: "/",
            },{
                name: "新闻",
                url: "/#/news",
            },{
                name: "课程",
                url: "/#/education",
            },{
                name: "展览",
                url: "/#/exhibition",
            },{
                name: "活动",
                url: "/#/events",
            }, {
                name: "联合办公",
                url: "/#/work",
            },
            {
                name: "关于我们",
                url: "/#/about",
            }],
        },
    }
        
}
  , cn = {
    name: "cn",
    title: "Coinmerit-专注于数字货币行业分析平台",
    common: {
        header: {
            lang:[{
                name:'中文',
                value:'cn'
            },{
                name:'EN',
                value:'en'
            }],
            menu: [{
                    name: "首页",
                    url: "/",
                    sort: 0
                },{
                    name: "新闻",
                    url: "/#/news",
                    sort: 1
                },{
                    name: "课程",
                    url: "/#/education",
                    sort: 4
                },{
                    name: "展览",
                    url: "/#/exhibition",
                    sort: 5
                },{
                    name: "活动",
                    url: "/#/events",
                    sort: 2
                }, {
                    name: "联合办公",
                    url: "/#/work",
                    sort: 3
                },
                {
                    name: "关于我们",
                    url: "/#/about",
                    sort: 6
            }],

        },
        footer: {
            name: "CoinMerit",
            keep: "©Copyright Coinmerit.com 2019",
            title: "本站所有数据均来源于网络，我们旨在将最新的数字货币信息传递给用户，您也可以通过CoinMerit的社交群了解最新的信息.",
            protect:'隐私声明',
            api:'公共接口(API服务)',
            lang:'cn',
            menu: [{
                name: "首页",
                url: "/index.html",
            },{
                name: "新闻",
                url: "/#/news",
            },{
                name: "课程",
                url: "/#/education",
            },{
                name: "展览",
                url: "/#/exhibition",
            },{
                name: "活动",
                url: "/#/events",
            }, {
                name: "联合办公",
                url: "/#/work",
            },
            {
                name: "关于我们",
                url: "/#/about",
            }],
        },
    }
}


var lang={};
lang.en=en;
lang.cn=cn;
module.exports = lang;
