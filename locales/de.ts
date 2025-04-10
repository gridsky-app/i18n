export default defineI18nLocale(async locale => {
  return {
    common: {
      action: {
        createProfile: "Profil erstellen",
        change: "Bearbeiten",
        remove: "Entfernen",
        reset: "Zurücksetzen",
        close: "Schließen",
        create: "Erstellen",
        share: "Teilen",
        submit: "Einreichen",
        saveChanges: "Änderungen speichern",
        post: "Posten",
        done: "Fertig",
        cancel: "Abbrechen"
      },
      list: {
        empty: "Es ist leer hier"
      },
      soon: "Bald"
    },
    navigation: {
      home: 'Home',
      search: "Suche",
      explore: "Entdecken",
      support: "Hilfe",
      notifications: "Benachrichtigungen",
      messages: "Nachrichten",
      profile: "Profil",
      settings: "Einstellungen",
      create: "Erstellen",
      other: "Andere"
    },
    following: {
      title: 'Timeline'
    },
    search: {
      title: "Suche",
      placeholder: "Suchen",
      suggestedTopics: {
        title: "Empfohlen"
      },
      trendingTopics: {
        title: "Trends"
      },
      categories: {
        manager: {
          title: "Gespeicherte suchen",
          empty: 'There are no saved feeds'
        }
      }
    },
    explore: {
      title: "Entdecken",
      forYou: {
        title: "Entdecken",
        appBar: "Für dich"
      },
      discover: {
        title: "Entdecken",
        appBar: "Entdecken"
      },
      latest: {
        title: "Neueste",
        appBar: "Neueste"
      },
      following: {
        title: 'Following',
        appBar: 'Following'
      },
      search: {
        title: "Suche",
        appBar: "Suche"
      }
    },
    timeline: {
      list: {
        name: 'Posts'
      }
    },
    feed: {
      header: {
        menu: {
          explore: "Feeds erkunden",
          changeLayout: "Layout ändern",
          reorderFeeds: "Feeds neu anordnen",
          shareFeed: "Feed teilen"
        }
      },
      list: {
        title: 'Feeds',
        appBar: 'Feeds'
      },
      static: {
        following: {
          title: 'Following',
          description: "Persönlicher Feed"
        }
      },
      createdBy: `Feed von {handle}`,
      categories: {
        manager: {
          title: "Feed Kategorien",
          empty: 'There are no saved feeds'
        }
      },
      suggestions: {
        title: "Vorgeschlagene Feeds"
      },
      like: {
        person: "Gefällt einen",
        people: "Gefällt {count}"
      }
    },
    account: {
      login: {
        form: {
          identifier: {
            label: "Kennung",
            placeholder: "Username oder E-Mail Adresse"
          },
          password: {
            label: "Passwort",
            placeholder: ''
          },
          authFactorToken: {
            label: "2FA bestätigen",
            placeholder: "Bestätigungscode"
          },
          resolver: {
            prompt: 'Use a different handle resolver:'
          },
          action: 'Login'
        }
      },
      switch: {
        appBar: "Verbundene Accounts"
      },
      suggestions: {
        title: "Forgeschlagene Accounts"
      },
      action: {
        or: "oder",
        login: "Anmelden",
        lostPassword: "Password vergessen?",
        addAccount: "Account hinzufügen",
        switchAccount: "Account wächseln",
        logout: "Abmelden"
      }
    },
    profile: {
      stats: {
        posts: 'Posts',
        followers: 'Followers',
        follows: 'Following'
      },
      action: {
        followProfile: "Folgen",
        unfollowProfile: "Entfolgen",
        editProfile: "Profil bearbeiten",
        shareProfile: "Profil teilen",
        changeBanner: "Banner ändern"
      },
      collection: {
        default: {
          label: 'Posts'
        }
      },
      media: {
        add: {
          title: "Neuen Post erstellen",
          subtitle: "Fotos und Videos hierher ziehen",
          action: "Dateien auswählen"
        },
        menu: {
          addCover: "Cover hinzufügen",
          addToAlbum: "Medien hinzufügen",
          cloneToReel: "Clone to reel",
          convertToAlbum: "Zu Album umwandeln",
          convertToIframe: "Zu Iframe umwandeln",
          remove: "Entfernen",
          removeCover: "Cover entfernen",
          removeFromAlbum: "Medien entfernen",
          replaceCover: "Cover austauschen",
          replaceMedia: "Medien austauschen"
        }
      }
    },
    thread: {
      reply: {
        bottomSheet: {
          title: "Kommentare"
        },
        list: {
          empty: "Seu der erste zum Kommentieren"
        },
        form: {
          textField: {
            placeholder: "Kommentar hinzufügen..."
          }
        },
        delete: {
          label: "Löschen",
          confirm: "Bist du dir sicher, dass du diesen Kommentar löschen willst?"
        },
        common: {
          showReplies: "Alle {count} Kommentare anzigen"
        },
        action: {
          reply: "Antworten",
          replyTo: 'Replying to',
          backToComments: "Zurück zu den Kommentaren"
        }
      },
      likes: {
        person: "Person",
        people: "Personen",
        beTheFirst: "Sei der erste zum liken",
        personLikesThis: {
          beforeCount: '',
          afterCount: "gefällt das"
        },
        peopleLikeThis: {
          beforeCount: '',
          afterCount: "gefällt das"
        },
        personWithHighlight: {
          beforeCount: "Gefällt {names}",
          afterCount: ''
        },
        peopleWithHighlight: {
          beforeCount: "Gefällt {names} und",
          afterCount: ''
        },
        personShort: {
          beforeCount: '',
          afterCount: "Gefällt"
        },
        peopleShort: {
          beforeCount: '',
          afterCount: "Gefällt"
        },
        bottomSheet: {
          title: "Gefällt"
        }
      }
    },
    notifications: {
      title: "Benachrichtigungen",
      appBar: "Benachrichtigungen",
      like: "gefällt dein post",
      repost: "hat dein post ge-reposted",
      follow: "folgt dir",
      mention: "hat dich erwähnt",
      reply: "hat zu deinen Post geantwortet",
      default: "hat mit deinen Post interagiert",
      unknownUser: "Jemand"
    },
    settings: {
      appBar: "Einstellungen",
      navigation: {
        account: 'Account',
        profile: "Profil",
        appearance: "Erscheinung",
        privacy: "Privatsphäre",
        security: "Sicherheit",
        management: 'Management',
        language: "Sprache",
        grid: "Profilraster",
        badges: "Herrausstechen",
        development: "Entwicklung",
        support: "Hilfe",
        about: "Über uns",
        help: "Hilfe",
        community: 'Community',
        whatsnew: "Was ist neu"
      },
      main: {
        appBar: 'Dashboard',
        section: {
          password: {
            title: "Passwort und Authentifizierung"
          }
        }
      },
      account: {
        appBar: 'Account',
        resetPassword: {
          form: {
            email: {
              label: 'E-mail',
              placeholder: "Geben deine E-Mail Addresse ein"
            },
            action: "Passwort zurücksetzen"
          }
        },
        changePassword: {
          action: {
            changePassword: "Passwort ändern"
          }
        },
        factoryAuth: {
          title: "Zwei-Faktor-Authentifizierung (2FA)",
          description: "Benötige einen Email code zum Anmelden.",
          action: {
            enable2FA: "E-Mail 2FA Aktivieren"
          }
        },
        exportData: {
          title: "Meine Daten exportieren",
          description: "Deine Kontorepository, die alle öffentlichen Datensätze enthält. Diese Datei enthält keine Medieneinbettungen oder deine privaten Daten, diese müssen separat abgerufen werden.",
          action: {
            exportMyData: "Meine Daten exportieren"
          }
        },
        deleteAccount: {
          title: "Account löschen",
          description: "Die Deaktivierung deines Kontos bedeutet, dass dein Profil, deine Beiträge, Feeds und Listen nicht mehr für andere Bluesky-Nutzer sichtbar sind. Du kannst dein Account wieder aktivieren, indem du dich wieder Anmeldest.",
          action: {
            disableAccount: "Account deaktivieren",
            deleteAccount: "Account löschen"
          }
        },
        wip: {
          title: "Weitere Einstellungen sind auf dem Weg",
          description: "Alle Einstellungen sind von Bluesky aus zugänglich. Wir konzentrieren uns derzeit darauf, die Funktionen von Gridsky zu verbessern, um eine bessere Benutzererfahrung zu bieten."
        }
      },
      profile: {
        appBar: "Profil",
        fields: {
          handle: {
            label: "Nutzername",
            placeholder: "nutzername",
            description: "Helfe anderen, deinen Account zu finden, indem du einen Namen verwenden, unter dem du bekannt bist: entweder deinen vollständigen Namen, deinen Spitznamen oder deinen Firmennamen."
          },
          displayName: {
            label: "Name",
            placeholder: "Name",
            description: "Helfe anderen, deinen Account zu finden, indem du einen Namen verwenden, unter dem du bekannt bist: entweder deinen vollständigen Namen, deinen Spitznamen oder deinen Firmennamen"
          },
          description: {
            label: "Bio",
            placeholder: "Bio",
            description: "Deine Bio ist für jeden auf und außerhalb von Gridsky sichtbar."
          },
          avatar: {
            title: "Avatar",
            action: {
              change: "Avatar ändern",
              remove: "Avatar entfernen"
            }
          },
          banner: {
            title: "Banner",
            action: {
              change: "Banner ändern",
              remove: "Banner entfernen"
            }
          }
        }
      },
      appearance: {
        appBar: "Erscheinung",
        category: {
          animation: 'Animation'
        },
        fields: {
          themeName: {
            label: "Theme",
            placeholder: "theme"
          },
          themeVariant: {
            label: "Variante",
            placeholder: "Variante"
          },
          themeColorPrimary: {
            label: "Primäre Farbe",
            placeholder: "#0095f6"
          },
          animation: 'Animation',
          animationEnabled: {
            title: "Animierte Würfel"
          },
          animationSpeed: {
            title: "Animations Geschwindigkeit"
          },
          animationShowBannerInstead: {
            title: "Banner zeigen"
          },
          animationColors: {
            label: "Raster-Konfigurator"
          }
        },
        unlock: {
          title: "Dein Profil, dein Stiel",
          description: "Lasse dich inspirieren, während du Gridsky unterstützen, und schalte Ästhetik für dein Profil frei"
        }
      },
      language: {
        appBar: "Sprache",
        fields: {
          language: {
            label: "Sprache"
          }
        },
        contribute: {
          line1: "Wir bemühen uns, so viele Sprachen wie möglich zu unterstützen, aber im Moment sind nur einige wenige verfügbar.",
          line2: "Möchtest du helfen? Wir können zwei Monate Gridsky {ae} kostenlos anbieten, wenn du Gridsky in deine Sprache zu übersetzt. Mehr Infos auf Discord"
        }
      },
      grid: {
        appBar: "Profilraster",
        showcase: {
          icons: {
            showAll: ''
          }
        },
        category: {
          filter: "Filter",
          layout: 'Layout',
          media: "Medien"
        },
        fields: {
          name: {
            label: "Raster Name",
            placeholder: "raster name"
          },
          icon: {
            label: "Raster icon",
            placeholder: "lucide:grid"
          },
          filterInclude: {
            label: "Nach Hashtags filtern",
            placeholder: "#hashtag"
          },
          filterExclude: {
            label: "Hashtags ausschließen",
            placeholder: "#hashtag"
          },
          layout: {
            label: "Raster layout"
          },
          videoOnly: {
            label: "Video optimiert"
          }
        }
      },
      menu: {
        appBar: "Account & Einstellungen"
      },
      about: {
        appBar: "Über"
      }
    },
    timeAgo: {
      "just-now": "gerade jetzt",
      "ago": "vor {0}",
      "in": "in {0}",
      "last-month": "letzes Monat",
      "next-month": "nächstes Monat",
      "month": "Monat | Monate",
      "last-year": "letzes Jahr",
      "next-year": "nächstes Jahr",
      "year": "Jahr | Jahre",
      "yesterday": "gestern",
      "tomorrow": "morgen",
      "day": "Tag | Tage",
      "last-week": "letze Woche",
      "next-week": "nächste Wochen",
      "week": "Woche | Wochen",
      "hour": "Stunde | Stunden",
      "minute": "Minute | Minuten",
      "second": "Sekunde | Sekunden"
    },
    $vuetify: {
      badge: '',
      loading: '',
      datePicker: {
        title: "Datum auswählen"
      }
    }
  };
});