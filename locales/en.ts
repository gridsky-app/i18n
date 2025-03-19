export default defineI18nLocale(async locale => {
    return {
        name: 'Gridsky',
        common: {
            action: {
                createProfile: 'Create profile',
                change: 'Change',
                remove: 'Remove',
                reset: 'Reset',
                close: 'Close',
                create: 'Create',
                submit: 'Submit',
                post: 'Post',
                done: 'Done',
                cancel: 'Cancel',
            },
            list: {
                nothingToShow: "It's empty here",
            }
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
            trendingTopics: {
                title: 'Trending'
            },
            categories: {
                manager: {
                    title: 'Saved searches',
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
                    action: 'Login',
                }
            },
            resetPassword: {
                form: {
                    email: {
                        label: 'E-mail',
                        placeholder: 'Insert your e-mail address',
                    },
                    action: 'Reset password',
                }
            },
            suggestions: {
                title: 'Suggested accounts',
            },
            action: {
                or: 'or',
                lostPassword: 'Lost password?',
                addAccount: 'Add account',
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
                showReplies: 'View all {count} replies',
                form: {
                    textField: {
                        placeholder: 'Add a comment...'
                    },
                },
                delete: {
                    label: 'Delete',
                    confirm: 'Are you sure to delete this reply?'
                }
            },
            replies: {
                empty: "It's empty here"
            },
            likes: {
                noOne: 'Be the first to like',
                person: '<span class="gsky-thread-likes-count">1 person</span> likes this',
                personWithHighlight: 'Liked by {names}',
                people: '<span class="gsky-thread-likes-count">{count} people</span> like this',
                peopleWithHighlight: 'Liked by {names} and <span class="gsky-thread-likes-count">{count} people</span>',
                personShort: '1 like',
                peopleShort: '{count} likes',
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
                appearance: 'Appearance',
                privacy: 'Privacy',
                security: 'Security',
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
            },
            profile: {
                appBar: 'Profile',
                fields: {
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
                }
            },
            appearance: {
                appBar: 'Appearance',
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
                    animationEnabled: {
                        title: "Cubes animation",
                    },
                    animationShowBannerInstead: {
                        title: "Show banner instead",
                    },
                    animationColors: {
                        label: "Grid configurator",
                    },
                },
            },
            language: {
                appBar: 'Language',
                fields: {
                    language: {
                        label: "Language",
                    },
                },
            },
            grid: {
                appBar: 'Profile Grids',
                showcase: {
                    icons: {
                        showAll: ''
                    }
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
                    filter: {
                        label: "Filter by hashtags",
                        placeholder: "#hashtag",
                    },
                    layout: {
                        label: "Grid layout",
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