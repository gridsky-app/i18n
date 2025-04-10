export default defineI18nLocale(async locale => {
    return {
        common: {
            action: {
                createProfile: 'Create profile',
                change: 'Change',
                remove: 'Remove',
                reset: 'Reset',
                close: 'Close',
                create: 'Create',
                share: 'Share',
                submit: 'Submit',
                saveChanges: 'Save changes',
                post: 'Post',
                done: 'Done',
                cancel: 'Cancel',
            },
            list: {
                empty: "It's empty here",
            },
            soon: 'Soon'
        },
        navigation: {
            home: 'Home',
            search: 'Search',
            explore: 'Explore',
            support: 'Support',
            notifications: 'Notifications',
            messages: 'Messages',
            profile: 'Profile',
            settings: 'Settings',
            create: 'Create',
            other: 'Other',
        },
        following: {
            title: 'Timeline',
        },
        search: {
            title: 'Search',
            placeholder: 'Search',
            suggestedTopics: {
                title: 'Suggested'
            },
            trendingTopics: {
                title: 'Trending'
            },
            categories: {
                manager: {
                    title: 'Saved searches',
                    empty: 'There are no saved feeds',
                },
            },
        },
        explore: {
            title: 'Explore',
            forYou: {
                title: 'Discover',
                appBar: 'For you',
            },
            discover: {
                title: 'Discover',
                appBar: 'Discover',
            },
            latest: {
                title: 'Latest',
                appBar: 'Latest',
            },
            following: {
                title: 'Following',
                appBar: 'Following',
            },
            search: {
                title: 'Search',
                appBar: 'Search',
            },
        },
        timeline: {
            list: {
                name: 'Posts'
            }
        },
        feed: {
            header: {
                menu: {
                    explore: 'Explore feeds',
                    changeLayout: 'Change layout',
                    reorderFeeds: 'Reorder feeds',
                    shareFeed: 'Share feed',
                }
            },
            list: {
                title: 'Feeds',
                appBar: 'Feeds',
            },
            static: {
                following: {
                    title: 'Following',
                    description: 'Personal feed',
                },
            },
            createdBy: `Feed by {handle}`,
            categories: {
                manager: {
                    title: 'Feed categories',
                    empty: 'There are no saved feeds',
                },
            },
            suggestions: {
                title: 'Suggested feeds',
            },
            like: {
                person: 'Liked by 1',
                people: 'Liked by {count}'
            },
        },
        account: {
            login: {
                form: {
                    identifier: {
                        label: 'Identifier',
                        placeholder: 'Username or e-mail address',
                    },
                    password: {
                        label: 'Password',
                        placeholder: '',
                    },
                    authFactorToken: {
                        label: 'Confirm 2FA',
                        placeholder: 'Confirmation code',
                    },
                    resolver: {
                        prompt: 'Use a different handle resolver:'
                    },
                    action: 'Login',
                }
            },
            switch: {
                appBar: 'Connected accounts',
            },
            suggestions: {
                title: 'Suggested accounts',
            },
            action: {
                or: 'or',
                login: 'Login',
                lostPassword: 'Lost password?',
                addAccount: 'Add account',
                switchAccount: 'Switch account',
                logout: 'Logout',
            }
        },
        profile: {
            stats: {
                posts: 'Posts',
                followers: 'Followers',
                follows: 'Following',
            },
            action: {
                followProfile: 'Follow',
                unfollowProfile: 'Unfollow',
                editProfile: 'Edit profile',
                shareProfile: 'Share profile',
                changeBanner: 'Change banner',
            },
            collection: {
                default: {
                    label: 'Posts'
                }
            },
            media: {
                add: {
                    title: "Create new post",
                    subtitle: "Drag photos and videos here",
                    action: "Select files"
                },
                menu: {
                    addCover: "Add cover",
                    addToAlbum: "Add media",
                    cloneToReel: "Clone to reel",
                    convertToAlbum: "Convert to album",
                    convertToIframe: "Convert to iframe",
                    remove: "Remove",
                    removeCover: "Remove cover",
                    removeFromAlbum: "Remove media",
                    replaceCover: "Replace cover",
                    replaceMedia: "Replace media",
                }
            },
        },
        thread: {
            reply: {
                bottomSheet: {
                    title: 'Comments'
                },
                list: {
                    empty: "Be the first to comment"
                },
                form: {
                    textField: {
                        placeholder: 'Add a comment...'
                    },
                },
                delete: {
                    label: 'Delete',
                    confirm: 'Are you sure to delete this reply?'
                },
                common: {
                    showReplies: 'View all {count} replies',
                },
                action: {
                    reply: 'Reply',
                    replyTo: 'Replying to',
                    backToComments: 'Back to comments'
                }
            },
            likes: {
                person: 'person',
                people: 'people',
                beTheFirst: 'Be the first to like',
                personLikesThis: {
                    beforeCount: '',
                    afterCount: 'likes this'
                },
                peopleLikeThis: {
                    beforeCount: '',
                    afterCount: 'like this'
                },
                personWithHighlight: {
                    beforeCount: 'Liked by {names}',
                    afterCount: '',
                },
                peopleWithHighlight: {
                    beforeCount: 'Liked by {names} and',
                    afterCount: '',
                },
                personShort: {
                    beforeCount: '',
                    afterCount: 'like',
                },
                peopleShort: {
                    beforeCount: '',
                    afterCount: 'likes',
                },
                bottomSheet: {
                    title: 'Likes'
                },
            },
        },
        notifications: {
            title: 'Notifications',
            appBar: 'Notifications',
            like: "liked your post",
            repost: "reposted your post",
            follow: "followed you",
            mention: "mentioned you",
            reply: "replied to your post",
            default: "interacted with your post",
            unknownUser: "Someone"
        },
        settings: {
            appBar: 'Settings',
            navigation: {
                account: 'Account',
                profile: 'Profile',
                appearance: 'Appearance',
                privacy: 'Privacy',
                security: 'Security',
                management: 'Management',
                language: 'Language',
                grid: 'Profile Grids',
                badges: 'Stand out',
                development: 'Development',
                support: 'Support',
                about: 'About',
                help: 'Help',
                community: 'Community',
                whatsnew: 'What\'s new',
            },
            main: {
                appBar: 'Dashboard',
                section: {
                    password: {
                        title: 'Password and authentication',
                    },
                }
            },
            account: {
                appBar: 'Account',
                resetPassword: {
                    form: {
                        email: {
                            label: 'E-mail',
                            placeholder: 'Insert your e-mail address',
                        },
                        action: 'Reset password',
                    }
                },
                changePassword: {
                    action: {
                        changePassword: 'Change password',
                    }
                },
                factoryAuth: {
                    title: 'Two-factor authentication (2FA)',
                    description: 'Require an email code to log in to your account.',
                    action: {
                        enable2FA: 'Enable Email 2FA',
                    }
                },
                exportData: {
                    title: 'Export my data',
                    description: 'Your account repository, containing all public data records. This file does not include media embeds or your private data, which must be fetched separately.',
                    action: {
                        exportMyData: 'Export my data',
                    }
                },
                deleteAccount: {
                    title: 'Account removal',
                    description: 'Disabling your account means your profile, posts, feeds, and lists will no longer be visible to other Bluesky users. You can reactivate your account by logging in.',
                    action: {
                        disableAccount: 'Disable account',
                        deleteAccount: 'Delete account',
                    }
                },
                wip: {
                    title: "More settings on the way",
                    description: "All the settings are accessible from Bluesky. We are currently focusing on enhancing the features of Gridsky to provide a better user experience."
                }
            },
            profile: {
                appBar: 'Profile',
                fields: {
                    handle: {
                        label: "Username",
                        placeholder: "username",
                        description: "Help people discover your account by using the name that you're known by: either your full name, nickname or business name",
                    },
                    displayName: {
                        label: "Name",
                        placeholder: "Name",
                        description: "Help people discover your account by using the name that you're known by: either your full name, nickname or business name",
                    },
                    description: {
                        label: "Bio",
                        placeholder: "Bio",
                        description: "Your bio is visible to everyone on and off Gridsky"
                    },
                    avatar: {
                        title: "Avatar",
                        action: {
                            change: 'Change avatar',
                            remove: 'Remove avatar',
                        }
                    },
                    banner: {
                        title: "Banner",
                        action: {
                            change: 'Change banner',
                            remove: 'Remove banner',
                        }
                    },
                },
            },
            appearance: {
                appBar: 'Appearance',
                category: {
                    animation: 'Animation',
                },
                fields: {
                    themeName: {
                        label: "Theme",
                        placeholder: "theme",
                    },
                    themeVariant: {
                        label: "Variant",
                        placeholder: "variant",
                    },
                    themeColorPrimary: {
                        label: "Primary color",
                        placeholder: "#0095f6",
                    },
                    animation: 'Animation',
                    animationEnabled: {
                        title: "Animated cubes",
                    },
                    animationSpeed: {
                        title: "Animated speed",
                    },
                    animationShowBannerInstead: {
                        title: "Show banner",
                    },
                    animationColors: {
                        label: "Grid configurator",
                    },
                },
                unlock: {
                    title: "Your profile, your style",
                    description: "Get inspired while supporting Gridsky, and unlock aesthetics for your profile"
                }
            },
            language: {
                appBar: 'Language',
                fields: {
                    language: {
                        label: "Language",
                    },
                },
                contribute: {
                    line1: "We're aiming to support as many languages as possible, but only a few are available for now.",
                    line2: "Would you like to help? We can offer two months of Gridsky {ae} for free if you offer to translate Gridsky in your language. More info on Discord",
                }
            },
            grid: {
                appBar: 'Profile Grids',
                showcase: {
                    icons: {
                        showAll: ''
                    }
                },
                category: {
                    filter: "Filter",
                    layout: 'Layout',
                    media: 'Media',
                },
                fields: {
                    name: {
                        label: "Grid name",
                        placeholder: "grid name",
                    },
                    icon: {
                        label: "Grid icon",
                        placeholder: "lucide:grid",
                    },
                    filterInclude: {
                        label: "Filter by hashtags",
                        placeholder: "#hashtag",
                    },
                    filterExclude: {
                        label: "Exclude by hashtags",
                        placeholder: "#hashtag",
                    },
                    layout: {
                        label: "Grid layout",
                    },
                    videoOnly: {
                        label: "Video optimized",
                    },
                },
            },
            menu: {
                appBar: 'Account & Settings',
            },
            about: {
                appBar: 'About',
            }
        },
        timeAgo: {
            "just-now": "just now",
            "ago": "{0} ago",
            "in": "in {0}",
            "last-month": "last month",
            "next-month": "next month",
            "month": "month | months",
            "last-year": "last year",
            "next-year": "next year",
            "year": "year | years",
            "yesterday": "yesterday",
            "tomorrow": "tomorrow",
            "day": "day | days",
            "last-week": "last week",
            "next-week": "next week",
            "week": "week | weeks",
            "hour": "hour | hours",
            "minute": "minute | minutes",
            "second": "second | seconds"
        },
        $vuetify: {
            badge: '',
            loading: '',
            datePicker: {
                title: 'Select date'
            }
        },
    }
})