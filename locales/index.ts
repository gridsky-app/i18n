export default {
  en: {
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
      },
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
      other: 'Other',
    },
    timeline: {
      title: 'Timeline',
    },
    search: {
      title: 'Search',
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
      following: {
        title: 'Following',
        appBar: 'Following',
      },
      search: {
        title: 'Search',
        appBar: 'Search',
      },
    },
    tabs: {
      discover: 'Discover',
      following: 'Following',
      feeds: 'Feeds',
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
        logout: 'Logout',
      }
    },
    feed: {
      createdBy: `Feed created by {handle}`,
      suggestions: {
        title: 'Suggested feeds',
      },
      like: {
        person: 'Liked by 1',
        people: 'Liked by {count}'
      },
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
      like: {
        noOne: 'Be the first to like',
        person: '1 person likes this',
        people: '{count} people like this',
        personShort: '1 like',
        peopleShort: '{count} likes',
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
        badges: 'Stand out',
        help: 'Support',
        about: 'About',
        whatsnew: 'What\'s new',
      },
      account: {
        appBar: 'Account',
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
            name: "Avatar",
            label: "Avatar",
            placeholder: "Avatar",
          },
        }
      },
      appearance: {
        appBar: 'Appearance',
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
          animationEnabled: {
            label: "Show animation",
            title: "Enabled",
          },
          animationColors: {
            label: "Grid configurator",
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
    $vuetify: {
      datePicker: {
        title: 'Select date'
      }
    },
  },
}