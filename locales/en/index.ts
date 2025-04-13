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
                confirm: 'Confirm',
                save: 'Save',
                restore: 'Restore',
                saveChanges: 'Save changes',
                restoreChanges: 'Restore changes',
                post: 'Post',
                done: 'Done',
                cancel: 'Cancel',
            },
            list: {
                empty: "It's empty here",
            },
            youSureBro: {
                "notice1": "Be careful, one false step and the world will collapse",
                "notice2": "Hey, you sure about this? No regrets later",
                "notice3": "Changing things? Hope you have a backup plan",
                "notice4": "Oops, you touched it! Now you gotta commit",
                "notice5": "Small change, big consequences. Choose wisely",
                "notice6": "A single click could change history... or just your settings",
                "notice7": "This could be the best or worst decision of your life",
                "notice8": "Careful, the fate of the universe depends on this action",
                "notice9": "Click wisely, young padawan",
                "notice10": "Just a friendly reminder: there's no undo button in real life",
                "notice11": "Some say fortune favors the bold. Others say don't touch it",
                "notice12": "This might be your villain origin story... or just a small edit",
                "notice13": "You're about to make a change. Make it count",
                "notice14": "One click away from greatness… or disaster",
                "notice15": "This could go very well or very, very wrong",
                "notice16": "Think before you click. Or don’t. Up to you",
                "notice17": "Are you absolutely, completely, 100% sure?",
                "notice18": "Imagine explaining this mistake in a job interview",
                "notice19": "What’s the worst that could happen? Actually, don’t answer",
                "notice20": "No pressure, but this could be irreversible",
                "notice21": "There’s a chance this works. A chance",
                "notice22": "A simple change, a simple consequence... or not",
                "notice23": "Click now, regret later. Sounds fair?",
                "notice24": "Are you sure? Like, really, REALLY sure?",
                "notice25": "Every great mistake starts with a simple click",
                "notice26": "This change will be remembered in the history books… or not",
                "notice27": "What if this button had feelings? Would it want to be clicked?",
                "notice28": "Some changes are reversible. Others haunt you forever.",
                "notice29": "Are you updating a setting or rewriting destiny?",
                "notice30": "Let’s hope this doesn’t trigger a chain reaction.",
                "notice31": "Clicking this is like flipping a coin. Heads or tails?",
                "notice32": "Legend says the bravest souls dare to click this.",
                "notice33": "If this were a movie, now would be the dramatic pause.",
                "notice34": "What could possibly go wrong? Famous last words.",
                "notice35": "Clicking this may cause unforeseen consequences.",
                "notice36": "A wise person once said: 'Think before you click'.",
                "notice37": "Are you about to make history, or just a minor edit?",
                "notice38": "If this goes wrong, let's pretend it never happened.",
                "notice39": "Fun fact: clicking this might be a turning point in your life.",
                "notice40": "If in doubt, flip a coin. If still in doubt, don’t click.",
                "notice41": "This is a moment of great responsibility. Or maybe not.",
                "notice42": "Legend has it that once clicked, there’s no going back.",
                "notice43": "If this were a game, this would be the ‘Are you sure?’ screen.",
                "notice44": "Tiny change, massive consequences. No pressure.",
                "notice45": "Double-check, triple-check, then maybe click.",
                "notice46": "This is your ‘before and after’ moment.",
                "notice47": "There’s no safety net here. Just confidence.",
                "notice48": "Clicking this is like stepping into the unknown.",
                "notice49": "Careful, this button has trust issues.",
                "notice50": "Some decisions define us. Others just update settings.",
                "notice51": "The universe is watching. Make it count.",
                "notice52": "Hope you don’t regret this in five minutes.",
                "notice53": "You’re one click away from greatness… or confusion."
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
            service: {
                modal: {
                    title: "Select your provider",
                },
                usingBluesky: "I'm using Bluesky",
                customPds: "I'm on another PDS",
                action: {
                    add: "Add a custom PDS"
                }
            },
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
                    line2: "Would you like to help? More info on Discord",
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