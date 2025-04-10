export default defineI18nLocale(async locale => {
    return {
        common: {
            action: {
                createProfile: 'Crea profilo',
                change: 'Modifica',
                remove: 'Rimuovi',
                reset: 'Reimposta',
                close: 'Chiudi',
                create: 'Crea',
                share: 'Condividi',
                submit: 'Invia',
                post: 'Pubblica',
                done: 'Conferma',
                saveChanges: 'Conferma',
                cancel: 'Annulla',
            },
            list: {
                empty: "Non c'è nulla qui",
            },
            soon: 'Presto'
        },
        navigation: {
            home: 'Home',
            search: 'Cerca',
            explore: 'Esplora',
            support: 'Supporto',
            notifications: 'Notifiche',
            messages: 'Messaggi',
            profile: 'Profilo',
            settings: 'Impostazioni',
            create: 'Crea',
            other: 'Altro',
        },
        following: {
            title: 'Timeline',
        },
        search: {
            title: 'Cerca',
            placeholder: 'Cerca',
            trendingTopics: {
                title: 'Tendenze'
            },
            suggestedTopics: {
                title: 'Suggeriti'
            },
            topicsTopics: {
                title: 'Tendenze'
            },
            categories: {
                manager: {
                    title: 'Ricerche salvate',
                },
            },
        },
        explore: {
            title: 'Esplora',
            forYou: {
                title: 'Scopri',
                appBar: 'Per te',
            },
            discover: {
                title: 'Scopri',
                appBar: 'Scopri',
            },
            latest: {
                title: 'Ultimi',
                appBar: 'Ultimi',
            },
            following: {
                title: 'Seguiti',
                appBar: 'Seguiti',
            },
            search: {
                title: 'Cerca',
                appBar: 'Cerca',
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
                    explore: 'Esplora feed',
                    changeLayout: 'Cambia layout',
                    reorderFeeds: 'Riordina feed',
                    shareFeed: 'Condividi feed',
                }
            },
            list: {
                title: 'Feed',
                appBar: 'Feed',
            },
            static: {
                following: {
                    title: 'Seguiti',
                    description: 'Feed personale',
                },
            },
            createdBy: `Feed di {handle}`,
            categories: {
                manager: {
                    title: 'Categorie feed',
                },
            },
            suggestions: {
                title: 'Feed suggeriti',
            },
            like: {
                person: 'Piace a 1 persona',
                people: 'Piace a {count} persone'
            },
        },
        account: {
            login: {
                form: {
                    identifier: {
                        label: 'Identificativo',
                        placeholder: 'Nome utente o email',
                    },
                    password: {
                        label: 'Password',
                        placeholder: '',
                    },
                    authFactorToken: {
                        label: 'Conferma 2FA',
                        placeholder: 'Codice di conferma',
                    },
                    action: 'Accedi',
                }
            },
            switch: {
                appBar: 'Account collegati',
            },
            suggestions: {
                title: 'Account suggeriti',
            },
            action: {
                or: 'o',
                login: 'Accedi',
                lostPassword: 'Password dimenticata?',
                addAccount: 'Aggiungi account',
                switchAccount: 'Cambia account',
                logout: 'Esci',
            }
        },
        profile: {
            stats: {
                posts: 'Post',
                followers: 'Follower',
                follows: 'Seguiti',
            },
            action: {
                followProfile: 'Segui',
                unfollowProfile: 'Smetti di seguire',
                editProfile: 'Modifica profilo',
                shareProfile: 'Condividi profilo',
            },
            collection: {
                default: {
                    label: 'Post'
                }
            },
            media: {
                add: {
                    title: "Crea un nuovo post",
                    subtitle: "Trascina qui foto e video",
                    action: "Seleziona file"
                },
                menu: {
                    addCover: "Aggiungi copertina",
                    addToAlbum: "Aggiungi media",
                    cloneToReel: "Clona in reel",
                    convertToAlbum: "Converti in album",
                    convertToIframe: "Converti in iframe",
                    remove: "Rimuovi",
                    removeCover: "Rimuovi copertina",
                    removeFromAlbum: "Rimuovi media",
                    replaceCover: "Sostituisci copertina",
                    replaceMedia: "Sostituisci media",
                }
            },
        },
        thread: {
            reply: {
                bottomSheet: {
                    title: 'Commenti'
                },
                list: {
                    empty: "Commenta per primo"
                },
                form: {
                    textField: {
                        placeholder: 'Aggiungi un commento...'
                    },
                },
                delete: {
                    label: 'Elimina',
                    confirm: 'Sei sicuro di voler eliminare questa risposta?'
                },
                common: {
                    showReplies: 'Visualizza tutti i {count} commenti',
                },
                action: {
                    reply: 'Rispondi',
                    backToComments: 'Torna ai commenti'
                },
            },
            likes: {
                person: 'persona',
                people: 'persone',
                beTheFirst: 'Metti mi piace per primo',
                personLikesThis: {
                    beforeCount: '',
                    afterCount: 'piace questo'
                },
                peopleLikeThis: {
                    beforeCount: '',
                    afterCount: 'piace questo'
                },
                personWithHighlight: {
                    beforeCount: 'Piace a {names}',
                    afterCount: '',
                },
                peopleWithHighlight: {
                    beforeCount: 'Piace a {names} e',
                    afterCount: '',
                },
                personShort: {
                    beforeCount: '',
                    afterCount: 'mi piace',
                },
                peopleShort: {
                    beforeCount: '',
                    afterCount: 'mi piace',
                },
                bottomSheet: {
                    title: 'Piace a'
                },
            },
        },
        notifications: {
            title: 'Notifiche',
            appBar: 'Notifiche',
            like: "ha messo mi piace al tuo post",
            repost: "ha ripubblicato il tuo post",
            follow: "ha iniziato a seguirti",
            mention: "ti ha menzionato",
            reply: "ha risposto al tuo post",
            default: "ha interagito con il tuo post",
            unknownUser: "Qualcuno"
        },
        settings: {
            appBar: 'Impostazioni',
            navigation: {
                account: 'Account',
                profile: 'Profilo',
                appearance: 'Aspetto',
                privacy: 'Privacy',
                security: 'Sicurezza',
                management: 'Gestione',
                language: 'Lingua',
                grid: 'Griglie',
                badges: 'Distinguiti',
                development: 'Development',
                support: 'Supporto',
                about: 'Informazioni',
                help: 'Aiuto',
                community: 'Community',
                whatsnew: 'Novità',
            },
            main: {
                appBar: 'Dashboard',
                section: {
                    password: {
                        title: 'Password e autenticazione',
                    },
                }
            },
            account: {
                appBar: 'Account',
                resetPassword: {
                    form: {
                        email: {
                            label: 'E-mail',
                            placeholder: 'Inserisci il tuo indirizzo email',
                        },
                        action: 'Reimposta password',
                    }
                },
                changePassword: {
                    "action": {
                        "changePassword": "Cambia password"
                    }
                },
                factoryAuth: {
                    "title": "Autenticazione a due fattori (2FA)",
                    "description": "Richiedi un codice email per accedere al tuo account.",
                    "action": {
                        "enable2FA": "Abilita Email 2FA"
                    }
                },
                exportData: {
                    "title": "Esporta i miei dati",
                    "description": "L'archivio del tuo account, contenente tutti i dati pubblici. Questo file non include media incorporati o dati privati, che devono essere recuperati separatamente.",
                    "action": {
                        "exportMyData": "Esporta i miei dati"
                    }
                },
                deleteAccount: {
                    "title": "Eliminazione account",
                    "description": "Disabilitare il tuo account significa che il tuo profilo, i post, i feed e le liste non saranno più visibili agli altri utenti di Bluesky. Puoi riattivare il tuo account effettuando nuovamente l'accesso.",
                    "action": {
                        "disableAccount": "Disabilita account",
                        "deleteAccount": "Elimina account"
                    }
                },
                wip: {
                    title: "Altre impostazioni in arrivo",
                    description: "Al momento ci stiamo concentrando sul miglioramento delle funzionalità di Gridsky per offrire un'esperienza utente migliore. Trovi altre impostazioni su Bluesky."
                }
            },
            profile: {
                appBar: 'Profilo',
                fields: {
                    handle: {
                        label: "Nome utente",
                        placeholder: "nomeutente",
                        description: "Aiuta le persone a trovare il tuo account utilizzando il nome con cui sei conosciuto: il tuo nome completo, un soprannome o il nome della tua attività.",
                    },
                    displayName: {
                        label: "Nome",
                        placeholder: "Nome",
                        description: "Aiuta le persone a trovare il tuo account utilizzando il nome con cui sei conosciuto: il tuo nome completo, un soprannome o il nome della tua attività.",
                    },
                    description: {
                        label: "Bio",
                        placeholder: "Bio",
                        description: "La tua bio è visibile a tutti su Gridsky e fuori da esso."
                    },
                    avatar: {
                        title: "Avatar",
                        action: {
                            change: 'Cambia avatar',
                            remove: 'Rimuovi avatar',
                        }
                    },
                    banner: {
                        title: "Banner",
                        action: {
                            change: 'Cambia banner',
                            remove: 'Rimuovi banner',
                        }
                    },
                }
            },
            appearance: {
                appBar: 'Aspetto',
                category: {
                    animation: 'Animazione',
                },
                fields: {
                    themeName: {
                        label: "Tema",
                        placeholder: "tema",
                    },
                    themeVariant: {
                        label: "Variante",
                        placeholder: "variante",
                    },
                    themeColorPrimary: {
                        label: "Colore primario",
                        placeholder: "#0095f6",
                    },
                    animation: 'Animazione',
                    animationEnabled: {
                        title: "Cubi animati",
                    },
                    animationSpeed: {
                        title: "Velocità",
                    },
                    animationShowBannerInstead: {
                        title: "Mostra banner",
                    },
                    animationColors: {
                        label: "Configuratore griglia",
                    },
                },
                unlock: {
                    title: "Il tuo profilo, il tuo stile",
                    description: "Lasciati ispirare mentre supporti Gridsky e sblocca l'estetica per il tuo profilo"
                }
            },
            language: {
                appBar: 'Lingua',
                fields: {
                    language: {
                        label: "Lingua",
                    },
                },
                contribute: {
                    line1: "Vogliamo supportare il maggior numero di lingue, ma al momento ne sono disponibili solo alcune.",
                    line2: "Ti piacerebbe aiutarci? Possiamo offrirti mesi gratis di Gridsky {ae} se ci aiuti con le traduzioni nella tua lingua. Maggiori informazioni su Discord",
                }
            },
            grid: {
                appBar: 'Griglie profilo',
                showcase: {
                    icons: {
                        showAll: ''
                    }
                },
                category: {
                    filter: 'Filtri',
                    layout: 'Layout',
                    media: 'Media',
                },
                fields: {
                    name: {
                        label: "Nome griglia",
                        placeholder: "nome griglia",
                    },
                    icon: {
                        label: "Icona griglia",
                        placeholder: "lucide:grid",
                    },
                    filterInclude: {
                        label: "Filtra per hashtag",
                        placeholder: "#hashtag",
                    },
                    filterExclude: {
                        label: "Escludi per hashtags",
                        placeholder: "#hashtag",
                    },
                    layout: {
                        label: "Layout griglia",
                    },
                    videoOnly: {
                        label: "Ottimizzato per video",
                    },
                },
            },
            menu: {
                appBar: 'Account e Impostazioni',
            },
            about: {
                appBar: 'Informazioni',
            }
        },
        timeAgo: {
            "just-now": "proprio ora",
            "ago": "{0} fa",
            "in": "tra {0}",
            "last-month": "il mese scorso",
            "next-month": "il prossimo mese",
            "month": "mese | mesi",
            "last-year": "l'anno scorso",
            "next-year": "il prossimo anno",
            "year": "anno | anni",
            "yesterday": "ieri",
            "tomorrow": "domani",
            "day": "giorno | giorni",
            "last-week": "la settimana scorsa",
            "next-week": "la prossima settimana",
            "week": "settimana | settimane",
            "hour": "ora | ore",
            "minute": "minuto | minuti",
            "second": "secondo | secondi"
        },
        $vuetify: {
            badge: '',
            loading: '',
            datePicker: {
                title: 'Seleziona data'
            }
        },
    }
})
