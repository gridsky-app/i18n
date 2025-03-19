export default defineI18nLocale(async locale => {
    return {
        name: 'Gridsky',
        common: {
            action: {
                createProfile: 'Crea profilo',
                change: 'Modifica',
                remove: 'Rimuovi',
                reset: 'Reimposta',
                close: 'Chiudi',
                create: 'Crea',
                submit: 'Invia',
                post: 'Pubblica',
                done: 'Fatto',
                cancel: 'Annulla',
            },
            list: {
                nothingToShow: "Non c'è nulla qui",
            }
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
            trendingTopics: {
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
            resetPassword: {
                form: {
                    email: {
                        label: 'E-mail',
                        placeholder: 'Inserisci il tuo indirizzo email',
                    },
                    action: 'Reimposta password',
                }
            },
            suggestions: {
                title: 'Account suggeriti',
            },
            action: {
                or: 'o',
                lostPassword: 'Password dimenticata?',
                addAccount: 'Aggiungi account',
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
                showReplies: 'Visualizza tutti i {count} commenti',
                form: {
                    textField: {
                        placeholder: 'Aggiungi un commento...'
                    },
                },
                delete: {
                    label: 'Elimina',
                    confirm: 'Sei sicuro di voler eliminare questa risposta?'
                }
            },
            replies: {
                empty: "Qui è tutto vuoto"
            },
            likes: {
                noOne: 'Sii il primo a mettere mi piace',
                person: '<span class="gsky-thread-likes-count">1 persona</span> ha messo mi piace',
                personWithHighlight: 'Piace a {names}',
                people: '<span class="gsky-thread-likes-count">{count} persone</span> hanno messo mi piace',
                peopleWithHighlight: 'Piace a {names} e <span class="gsky-thread-likes-count">{count} persone</span>',
                personShort: '1 mi piace',
                peopleShort: '{count} mi piace',
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
                appearance: 'Aspetto',
                privacy: 'Privacy',
                security: 'Sicurezza',
                language: 'Lingua',
                grid: 'Griglie profilo',
                badges: 'Distinguiti',
                development: 'Sviluppo',
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
            },
            profile: {
                appBar: 'Profilo',
                fields: {
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
                    animationEnabled: {
                        title: "Animazione cubi",
                    },
                    animationShowBannerInstead: {
                        title: "Mostra banner al posto",
                    },
                    animationColors: {
                        label: "Configuratore griglia",
                    },
                },
            },
            language: {
                appBar: 'Lingua',
                fields: {
                    language: {
                        label: "Lingua",
                    },
                },
            },
            grid: {
                appBar: 'Griglie profilo',
                showcase: {
                    icons: {
                        showAll: ''
                    }
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
                    filter: {
                        label: "Filtra per hashtag",
                        placeholder: "#hashtag",
                    },
                    layout: {
                        label: "Layout griglia",
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
