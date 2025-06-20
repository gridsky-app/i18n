export default defineI18nLocale(async locale => {
  return {
    common: {
      action: {
        createProfile: "Créer un profil",
        change: "Changement",
        remove: "Retirer",
        reset: 'Reset',
        close: "Fermer",
        create: "Créer",
        share: "Partager",
        submit: "Soumettre",
        saveChanges: "Enregistrer les modifications",
        post: "Poster",
        done: "Fait",
        cancel: "Abandonner"
      },
      list: {
        empty: "Il est vide ici"
      },
      soon: "Bientôt"
    },
    navigation: {
      home: "Domicile",
      search: "Chercher",
      explore: "Explorer",
      support: "Soutien",
      notifications: 'Notifications',
      messages: 'Messages',
      profile: "Profil",
      settings: "Réglages",
      create: "Créer",
      other: "Autres"
    },
    following: {
      title: "Échéancier"
    },
    search: {
      title: "Chercher",
      placeholder: "Chercher",
      suggestedTopics: {
        title: "Suggéré"
      },
      trendingTopics: {
        title: "Tendance"
      },
      categories: {
        manager: {
          title: "Recherches sauvegardées",
          empty: "Il n'y a aucun flux enregistré"
        }
      }
    },
    explore: {
      title: "Explorer",
      forYou: {
        title: "Découvrir",
        appBar: "Pour vous"
      },
      discover: {
        title: "Découvrir",
        appBar: "Découvrir"
      },
      latest: {
        title: "Dernier",
        appBar: "Dernier"
      },
      following: {
        title: "Abonnements",
        appBar: "Abonnements"
      },
      search: {
        title: "Chercher",
        appBar: "Chercher"
      }
    },
    timeline: {
      list: {
        name: "Publications"
      }
    },
    feed: {
      header: {
        menu: {
          explore: "Explorer les flux",
          changeLayout: "Modifier la mise en page",
          reorderFeeds: "Réordonner les flux",
          shareFeed: "Partager le flux"
        }
      },
      list: {
        title: "Flux",
        appBar: "Flux"
      },
      static: {
        following: {
          title: "Abonnements",
          description: "Flux personnel"
        }
      },
      createdBy: `Flux par {handle}`,
      categories: {
        manager: {
          title: "Catégories de flux",
          empty: "Il n'y a aucun flux enregistré"
        }
      },
      suggestions: {
        title: "Flux suggérés"
      },
      like: {
        person: "Aimé par 1",
        people: "Aimé par {count}"
      }
    },
    account: {
      login: {
        form: {
          identifier: {
            label: 'Identifier',
            placeholder: "Nom d'utilisateur ou adresse e-mail"
          },
          password: {
            label: "Mot de passe",
            placeholder: ''
          },
          authFactorToken: {
            label: "Confirmer l'A2F",
            placeholder: "Code de confirmation"
          },
          resolver: {
            prompt: "Utiliser un autre résolveur de gestion :"
          },
          action: "Se connecter"
        }
      },
      switch: {
        appBar: "Comptes connectés"
      },
      suggestions: {
        title: "Comptes suggérés"
      },
      action: {
        or: "ou",
        login: "Se connecter",
        lostPassword: "Mot de passe perdu ?",
        addAccount: "Ajouter un compte",
        switchAccount: "Changer de compte",
        logout: "Déconnexion"
      }
    },
    profile: {
      stats: {
        posts: "Publications",
        followers: "Abonnés",
        follows: "Abonnements"
      },
      action: {
        followProfile: "Suivre",
        unfollowProfile: "Ne plus suivre",
        editProfile: "Modifier le profil",
        shareProfile: "Partager le profil",
        changeBanner: "Changer de bannière"
      },
      collection: {
        default: {
          label: "Publications"
        }
      },
      media: {
        add: {
          title: "Créer un nouveau message",
          subtitle: "Glissez ici les photos et les vidéos",
          action: "Sélectionner les fichiers"
        },
        menu: {
          addCover: "Ajouter une couverture",
          addToAlbum: "Ajouter un média",
          cloneToReel: "Cloner vers la bobine",
          convertToAlbum: "Convertir en album",
          convertToIframe: "Convertir en iframe",
          remove: "Retirer",
          removeCover: "Retirer la couverture",
          removeFromAlbum: "Supprimer le média",
          replaceCover: "Remplacer la couverture",
          replaceMedia: "Remplacer le média"
        }
      }
    },
    thread: {
      reply: {
        bottomSheet: {
          title: "Commentaires"
        },
        list: {
          empty: "Soyez le premier à commenter"
        },
        form: {
          textField: {
            placeholder: "Ajouter un commentaire..."
          }
        },
        delete: {
          label: "Supprimez",
          confirm: "Êtes-vous sûr de vouloir supprimer cette réponse ?"
        },
        common: {
          showReplies: "Voir toutes les réponses {count}"
        },
        action: {
          reply: "Répondre",
          replyTo: "Répondre à",
          backToComments: "Retour aux commentaires"
        }
      },
      likes: {
        person: "personne",
        people: "personnes",
        beTheFirst: "Soyez le premier à aimer",
        personLikesThis: {
          beforeCount: '',
          afterCount: "aime ceci"
        },
        peopleLikeThis: {
          beforeCount: '',
          afterCount: "aimer ceci"
        },
        personWithHighlight: {
          beforeCount: "Aimé par {names}",
          afterCount: ''
        },
        peopleWithHighlight: {
          beforeCount: "Aimé par {names} et",
          afterCount: ''
        },
        personShort: {
          beforeCount: '',
          afterCount: "j'aime"
        },
        peopleShort: {
          beforeCount: '',
          afterCount: "J'aime"
        },
        bottomSheet: {
          title: "J'aime"
        }
      }
    },
    notifications: {
      title: 'Notifications',
      appBar: 'Notifications',
      like: "a aimé votre message",
      repost: "a reposté votre message",
      follow: "vous a suivi",
      mention: "vous a mentionné",
      reply: "a répondu à votre message",
      default: "a interagi avec votre message",
      unknownUser: "Quelqu'un"
    },
    settings: {
      appBar: "Réglages",
      navigation: {
        account: "Compte client",
        profile: "Profil",
        appearance: "Apparence",
        privacy: "Confidentialité",
        security: "Sécurité",
        management: "Gestion",
        language: "Langue",
        grid: "Grilles de profil",
        badges: "Se tenir debout",
        development: "Développement",
        support: "Soutien",
        about: "À propos de",
        help: "Aide",
        community: "Communauté",
        whatsnew: "Quoi de neuf"
      },
      main: {
        appBar: "Tableau de bord",
        section: {
          password: {
            title: "Mot de passe et authentification"
          }
        }
      },
      account: {
        appBar: "Compte client",
        resetPassword: {
          form: {
            email: {
              label: "Courriel",
              placeholder: "Insérez votre adresse e-mail"
            },
            action: "Réinitialiser le mot de passe"
          }
        },
        changePassword: {
          action: {
            changePassword: "Changer le mot de passe"
          }
        },
        factoryAuth: {
          title: "Authentification à deux facteurs (2FA)",
          description: "Nécessite un code e-mail pour se connecter à votre compte.",
          action: {
            enable2FA: "Activer l'authentification par courriel"
          }
        },
        exportData: {
          title: "Exporter mes données",
          description: "Le dépôt de votre compte, contenant tous les enregistrements de données publiques. Ce fichier n'inclut pas les supports embarqués ou vos données privées, qui doivent être récupérées séparément.",
          action: {
            exportMyData: "Exporter mes données"
          }
        },
        deleteAccount: {
          title: "Suppression du compte",
          description: "La désactivation de votre compte signifie que votre profil, vos messages, vos flux et vos listes ne seront plus visibles par les autres utilisateurs Bluesky. Vous pouvez réactiver votre compte en vous connectant.",
          action: {
            disableAccount: "Désactiver le compte",
            deleteAccount: "Supprimer le compte"
          }
        },
        wip: {
          title: "Plus de paramètres sur le chemin",
          description: "Tous les paramètres sont accessibles à partir de Bluesky. Nous nous concentrons actuellement sur l'amélioration des fonctionnalités de Gridsky pour offrir une meilleure expérience utilisateur."
        }
      },
      profile: {
        appBar: "Profil",
        fields: {
          handle: {
            label: "Nom d'utilisateur",
            placeholder: "nom d'utilisateur",
            description: "Aidez les gens à découvrir votre compte en utilisant le nom que vous connaissez : soit votre nom complet, votre pseudo ou votre nom professionnel"
          },
          displayName: {
            label: "Nom",
            placeholder: "Nom",
            description: "Aidez les gens à découvrir votre compte en utilisant le nom que vous connaissez : soit votre nom complet, votre pseudo ou votre nom professionnel"
          },
          description: {
            label: "Bio",
            placeholder: "Bio",
            description: "Votre biographie est visible pour tout le monde sur et au large de Gridsky"
          },
          avatar: {
            title: "Avatars",
            action: {
              change: "Changer d'avatar",
              remove: "Supprimer l'avatar"
            }
          },
          banner: {
            title: "Bannière",
            action: {
              change: "Changer de bannière",
              remove: "Supprimer la bannière"
            }
          }
        }
      },
      appearance: {
        appBar: "Apparence",
        category: {
          animation: 'Animation'
        },
        fields: {
          themeName: {
            label: "Thème",
            placeholder: "Thème"
          },
          themeVariant: {
            label: "Variante",
            placeholder: "variante"
          },
          themeColorPrimary: {
            label: "Couleur principale",
            placeholder: "#0095f6"
          },
          animation: 'Animation',
          animationEnabled: {
            title: "Cubes animés"
          },
          animationSpeed: {
            title: "Vitesse animée"
          },
          animationColors: {
            label: "Configuration de la grille"
          }
        },
        unlock: {
          title: "Votre profil, votre style",
          description: "Inspirez-vous tout en soutenant Gridsky, et débloquez l'esthétique de votre profil"
        }
      },
      language: {
        appBar: "Langue",
        fields: {
          language: {
            label: "Langue"
          }
        },
        contribute: {
          line1: "Nous essayons de prendre en charge autant de langues que possible, mais seuls quelques langues sont disponibles pour le moment.",
          line2: "Vous souhaitez nous aider ? Nous pouvons vous offrir deux mois de Gridsky {ae} gratuitement si vous proposez de traduire Gridsky dans votre langue. Plus d'infos sur Discord"
        }
      },
      grid: {
        appBar: "Grilles de profil",
        showcase: {
          icons: {
            showAll: ''
          }
        },
        category: {
          filter: "Filtre",
          layout: "Mise en page",
          media: "Médias"
        },
        fields: {
          name: {
            label: "Nom de la grille",
            placeholder: "nom de la grille"
          },
          icon: {
            label: "Icône de la grille",
            placeholder: "lucide:grille",
            details: 'Discover icons for your grid at'
          },
          filterInclude: {
            label: "Filtrer par hashtags",
            placeholder: "#hashtag"
          },
          filterExclude: {
            label: "Exclure par hashtags",
            placeholder: "#hashtag"
          },
          layout: {
            label: "Disposition de la grille"
          },
          videoOnly: {
            label: "Vidéo optimisée"
          }
        }
      },
      menu: {
        appBar: "Compte & Paramètres"
      },
      about: {
        appBar: "À propos de"
      }
    },
    timeAgo: {
      "just-now": "à l'instant",
      "ago": "{0} ago",
      "in": "dans {0}",
      "last-month": "le mois dernier",
      "next-month": "mois prochain",
      "month": "mois | mois",
      "last-year": "l'année dernière",
      "next-year": "l'année prochaine",
      "year": "année | années",
      "yesterday": "Hier",
      "tomorrow": "demain",
      "day": "jour | jours",
      "last-week": "semaine dernière",
      "next-week": "la semaine prochaine",
      "week": "semaine | semaines",
      "hour": "heure | heures",
      "minute": "minute | minutes",
      "second": "seconde | secondes"
    },
    $vuetify: {
      badge: '',
      loading: '',
      datePicker: {
        title: "Sélectionnez la date"
      }
    }
  };
});