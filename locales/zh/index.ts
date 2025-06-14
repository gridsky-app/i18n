export default defineI18nLocale(async locale => {
  return {
    common: {
      action: {
        createProfile: "创建配置文件",
        change: "更改",
        remove: "删除",
        reset: 'Reset',
        close: "关闭",
        create: "创建",
        share: "分享",
        submit: "提交",
        saveChanges: "保存更改",
        post: "帖子",
        done: "完成",
        cancel: "取消"
      },
      list: {
        empty: "这里为空"
      },
      soon: "很快的"
    },
    navigation: {
      home: "首页",
      search: "搜索",
      explore: "浏览",
      support: "支持",
      notifications: "通知",
      messages: "留言",
      profile: "个人信息",
      settings: "设置",
      create: "创建",
      other: "其他"
    },
    following: {
      title: "时间表"
    },
    search: {
      title: "搜索",
      placeholder: "搜索",
      suggestedTopics: {
        title: "建议"
      },
      trendingTopics: {
        title: "热门主题"
      },
      categories: {
        manager: {
          title: "保存的搜索",
          empty: "没有保存的订阅"
        }
      }
    },
    explore: {
      title: "浏览",
      forYou: {
        title: "发现",
        appBar: "为你"
      },
      discover: {
        title: "发现",
        appBar: "发现"
      },
      latest: {
        title: "最新的",
        appBar: "最新的"
      },
      following: {
        title: "关注",
        appBar: "关注"
      },
      search: {
        title: "搜索",
        appBar: "搜索"
      }
    },
    timeline: {
      list: {
        name: "员额"
      }
    },
    feed: {
      header: {
        menu: {
          explore: "浏览订阅源",
          changeLayout: "更改布局",
          reorderFeeds: "重新排序订阅",
          shareFeed: "分享订阅源"
        }
      },
      list: {
        title: "订阅源",
        appBar: "订阅源"
      },
      static: {
        following: {
          title: "关注",
          description: "个人订阅"
        }
      },
      createdBy: `Feed by {handle}`,
      categories: {
        manager: {
          title: "新闻源类别",
          empty: "没有保存的订阅"
        }
      },
      suggestions: {
        title: "推荐订阅"
      },
      like: {
        person: "喜欢的 1",
        people: 'Liked by {count}'
      }
    },
    account: {
      login: {
        form: {
          identifier: {
            label: 'Identifier',
            placeholder: "用户名或电子邮件地址"
          },
          password: {
            label: "密码",
            placeholder: ''
          },
          authFactorToken: {
            label: "确认两步验证",
            placeholder: "确认代码"
          },
          resolver: {
            prompt: "使用不同的句柄解析器："
          },
          action: "登录"
        }
      },
      switch: {
        appBar: "已连接的帐户"
      },
      suggestions: {
        title: "建议的账户"
      },
      action: {
        or: "或",
        login: "登录",
        lostPassword: "丢失密码？",
        addAccount: "添加帐户",
        switchAccount: "切换账户",
        logout: "注销"
      }
    },
    profile: {
      stats: {
        posts: "员额",
        followers: "关注者",
        follows: "关注"
      },
      action: {
        followProfile: "关注",
        unfollowProfile: "取消关注",
        editProfile: "编辑配置文件",
        shareProfile: "分享资料",
        changeBanner: "更改素材"
      },
      collection: {
        default: {
          label: "员额"
        }
      },
      media: {
        add: {
          title: "创建新帖子",
          subtitle: "拖动照片和视频",
          action: "选择文件"
        },
        menu: {
          addCover: "添加封面",
          addToAlbum: "添加媒体",
          cloneToReel: "克隆reel",
          convertToAlbum: "转换为相册",
          convertToIframe: "转换为 iframe",
          remove: "删除",
          removeCover: "移除封面",
          removeFromAlbum: "删除媒体",
          replaceCover: "替换封面",
          replaceMedia: "替换媒体"
        }
      }
    },
    thread: {
      reply: {
        bottomSheet: {
          title: "评论"
        },
        list: {
          empty: "成为第一个评论者"
        },
        form: {
          textField: {
            placeholder: "添加评论..."
          }
        },
        delete: {
          label: "删除",
          confirm: "您确定要删除此回复吗？"
        },
        common: {
          showReplies: 'View all {count} replies'
        },
        action: {
          reply: "答复",
          replyTo: "回复到",
          backToComments: "回到评论"
        }
      },
      likes: {
        person: "人",
        people: "人",
        beTheFirst: "成为第一个喜欢的人",
        personLikesThis: {
          beforeCount: '',
          afterCount: "喜欢这个"
        },
        peopleLikeThis: {
          beforeCount: '',
          afterCount: "喜欢这个"
        },
        personWithHighlight: {
          beforeCount: 'Liked by {names}',
          afterCount: ''
        },
        peopleWithHighlight: {
          beforeCount: 'Liked by {names} and',
          afterCount: ''
        },
        personShort: {
          beforeCount: '',
          afterCount: "赞"
        },
        peopleShort: {
          beforeCount: '',
          afterCount: "赞"
        },
        bottomSheet: {
          title: "喜欢的"
        }
      }
    },
    notifications: {
      title: "通知",
      appBar: "通知",
      like: "赞了你的帖子",
      repost: "已重新发布您的帖子",
      follow: "关注你",
      mention: "提到你",
      reply: "回复了您的帖子",
      default: "与您的帖子进行了交互操作",
      unknownUser: "有人"
    },
    settings: {
      appBar: "设置",
      navigation: {
        account: "账户",
        profile: "个人信息",
        appearance: "外观",
        privacy: "隐私",
        security: "安全",
        management: "管理",
        language: "语言",
        grid: "配置文件网格",
        badges: "站点退出",
        development: "贸易和发展会议",
        support: "支持",
        about: "关于",
        help: "帮助",
        community: "社区",
        whatsnew: "新功能"
      },
      main: {
        appBar: "仪表板",
        section: {
          password: {
            title: "密码和身份验证"
          }
        }
      },
      account: {
        appBar: "账户",
        resetPassword: {
          form: {
            email: {
              label: "电子邮箱",
              placeholder: "插入您的电子邮件地址"
            },
            action: "重置密码"
          }
        },
        changePassword: {
          action: {
            changePassword: "更改密码"
          }
        },
        factoryAuth: {
          title: "双重身份验证 (2FA)",
          description: "需要电子邮件代码来登录您的帐户。",
          action: {
            enable2FA: "启用电子邮件 2FA"
          }
        },
        exportData: {
          title: "导出我的数据",
          description: "您的帐户存储库，包含所有公开的数据记录。此文件不包括媒体嵌入或您的私人数据，必须单独获取。",
          action: {
            exportMyData: "导出我的数据"
          }
        },
        deleteAccount: {
          title: "帐户移除",
          description: "禁用您的帐户意味着您的个人资料、 帖子、 订阅源和列表将不再对其他蓝斯基用户可见。 您可以通过登录重新激活您的帐户。",
          action: {
            disableAccount: "禁用帐户",
            deleteAccount: "删除帐户"
          }
        },
        wip: {
          title: "更多设置在路上",
          description: "所有设置都可以从蓝色访问。我们目前的重点是增强Gridsky的功能，以提供更好的用户体验。"
        }
      },
      profile: {
        appBar: "个人信息",
        fields: {
          handle: {
            label: "用户名",
            placeholder: "用户名",
            description: "通过使用您已知的名字：您的全名、昵称或企业名来帮助人们发现您的帐户"
          },
          displayName: {
            label: "名称",
            placeholder: "名称",
            description: "通过使用您已知的名字：您的全名、昵称或企业名来帮助人们发现您的帐户"
          },
          description: {
            label: "个人信息",
            placeholder: "个人信息",
            description: "Gridsky内外的所有人都可以看到你的生物。"
          },
          avatar: {
            title: "头像",
            action: {
              change: "更改头像",
              remove: "删除头像"
            }
          },
          banner: {
            title: "横幅",
            action: {
              change: "更改素材",
              remove: "删除素材"
            }
          }
        }
      },
      appearance: {
        appBar: "外观",
        category: {
          animation: "动画"
        },
        fields: {
          themeName: {
            label: "主题",
            placeholder: "主题"
          },
          themeVariant: {
            label: "变体",
            placeholder: "变体"
          },
          themeColorPrimary: {
            label: "主颜色",
            placeholder: "#0095f6"
          },
          animation: "动画",
          animationEnabled: {
            title: "动画立方体"
          },
          animationSpeed: {
            title: "动画速度"
          },
          animationColors: {
            label: "网格配置器"
          }
        },
        unlock: {
          title: "您的个人资料，您的样式",
          description: "在支持Gridsky时获得灵感，解锁您个人资料的美术。"
        }
      },
      language: {
        appBar: "语言",
        fields: {
          language: {
            label: "语言"
          }
        },
        contribute: {
          line1: "我们的目标是支持尽可能多的语言，但现在只有少数语言可以使用。",
          line2: "Would you like to help? We can offer two months of Gridsky {ae} for free if you offer to translate Gridsky in your language. More info on Discord"
        }
      },
      grid: {
        appBar: "配置文件网格",
        showcase: {
          icons: {
            showAll: ''
          }
        },
        category: {
          filter: "筛选器",
          layout: "布局",
          media: "媒体"
        },
        fields: {
          name: {
            label: "网格名称",
            placeholder: "网格名称"
          },
          icon: {
            label: "网格图标",
            placeholder: "luctie:grid",
            details: 'Discover icons for your grid at'
          },
          filterInclude: {
            label: "按哈希标签过滤",
            placeholder: "#hashtag"
          },
          filterExclude: {
            label: "按哈希标签排除",
            placeholder: "#hashtag"
          },
          layout: {
            label: "网格布局"
          },
          videoOnly: {
            label: "视频优化"
          }
        }
      },
      menu: {
        appBar: "帐户和设置"
      },
      about: {
        appBar: "关于"
      }
    },
    timeAgo: {
      "just-now": "就在这里",
      "ago": "{0} 前",
      "in": "在 {0}",
      "last-month": "上个月",
      "next-month": "下个月",
      "month": "月 | 月",
      "last-year": "去年",
      "next-year": "下年",
      "year": "年 | 年",
      "yesterday": "昨天：",
      "tomorrow": "明天",
      "day": "天 | 天",
      "last-week": "上周",
      "next-week": "下周",
      "week": "周 |周",
      "hour": "小时 | 小时",
      "minute": "分钟 | 分钟",
      "second": "秒 | 秒"
    },
    $vuetify: {
      badge: '',
      loading: '',
      datePicker: {
        title: "选择日期"
      }
    }
  };
});