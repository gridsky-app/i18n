export default defineI18nLocale(async locale => {
  return {
    common: {
      action: {
        createProfile: "Crear perfil",
        change: "Cambiar",
        remove: "Eliminar",
        reset: 'Reset',
        close: "Cerrar",
        create: "Crear",
        share: "Compartir",
        submit: "Enviar",
        saveChanges: "Guardar cambios",
        post: "Publicar",
        done: "Hecho",
        cancel: "Cancelar"
      },
      list: {
        empty: "Está vacío aquí"
      },
      soon: "Pronto"
    },
    navigation: {
      home: "Inicio",
      search: "Buscar",
      explore: "Explorar",
      support: "Soporte",
      notifications: "Notificaciones",
      messages: "Mensajes",
      profile: "Perfil",
      settings: "Ajustes",
      create: "Crear",
      other: "Otro"
    },
    following: {
      title: "Línea de tiempo"
    },
    search: {
      title: "Buscar",
      placeholder: "Buscar",
      suggestedTopics: {
        title: "Sugerido"
      },
      trendingTopics: {
        title: "Tendencias"
      },
      categories: {
        manager: {
          title: "Búsqueda guardada",
          empty: "No hay canales guardados"
        }
      }
    },
    explore: {
      title: "Explorar",
      forYou: {
        title: "Descubre",
        appBar: "Para ti"
      },
      discover: {
        title: "Descubre",
        appBar: "Descubre"
      },
      latest: {
        title: "Última",
        appBar: "Última"
      },
      following: {
        title: "Siguiendo",
        appBar: "Siguiendo"
      },
      search: {
        title: "Buscar",
        appBar: "Buscar"
      }
    },
    timeline: {
      list: {
        name: "Mensajes"
      }
    },
    feed: {
      header: {
        menu: {
          explore: "Explorar feeds",
          changeLayout: "Cambiar diseño",
          reorderFeeds: "Reordenar fuentes",
          shareFeed: "Compartir feed"
        }
      },
      list: {
        title: "Alimentos",
        appBar: "Alimentos"
      },
      static: {
        following: {
          title: "Siguiendo",
          description: "Fuente personal"
        }
      },
      createdBy: `Alimentado por {handle}`,
      categories: {
        manager: {
          title: "Categorías de la fuente",
          empty: "No hay canales guardados"
        }
      },
      suggestions: {
        title: "Feeds sugeridos"
      },
      like: {
        person: "Gusto por 1",
        people: "Gusto por {count}"
      }
    },
    account: {
      login: {
        form: {
          identifier: {
            label: 'Identifier',
            placeholder: "Nombre de usuario o dirección de e-mail"
          },
          password: {
            label: "Contraseña",
            placeholder: ''
          },
          authFactorToken: {
            label: "Confirmar 2FA",
            placeholder: "Código de confirmación"
          },
          resolver: {
            prompt: "Usar un resolutor de asa diferente:"
          },
          action: "Ingresar"
        }
      },
      switch: {
        appBar: "Cuentas conectadas"
      },
      suggestions: {
        title: "Cuentas sugeridas"
      },
      action: {
        or: "o",
        login: "Ingresar",
        lostPassword: "¿Contraseña perdida?",
        addAccount: "Añadir cuenta",
        switchAccount: "Cambiar cuenta",
        logout: "Cerrar sesión"
      }
    },
    profile: {
      stats: {
        posts: "Mensajes",
        followers: "Seguidores",
        follows: "Siguiendo"
      },
      action: {
        followProfile: "Seguir",
        unfollowProfile: "Dejar de seguir",
        editProfile: "Editar perfil",
        shareProfile: "Compartir perfil",
        changeBanner: "Cambiar banner"
      },
      collection: {
        default: {
          label: "Mensajes"
        }
      },
      media: {
        add: {
          title: "Crear nuevo post",
          subtitle: "Arrastra fotos y vídeos aquí",
          action: "Seleccionar archivos"
        },
        menu: {
          addCover: "Añadir portada",
          addToAlbum: "Añadir medios",
          cloneToReel: "Clonar para rodillo",
          convertToAlbum: "Convertir a álbum",
          convertToIframe: "Convertir a iframe",
          remove: "Eliminar",
          removeCover: "Eliminar portada",
          removeFromAlbum: "Eliminar medios",
          replaceCover: "Reemplazar portada",
          replaceMedia: "Reemplazar medios"
        }
      }
    },
    thread: {
      reply: {
        bottomSheet: {
          title: "Comentarios"
        },
        list: {
          empty: "Sé el primero en comentar"
        },
        form: {
          textField: {
            placeholder: "Añadir un comentario..."
          }
        },
        delete: {
          label: "Eliminar",
          confirm: "¿Estás seguro de eliminar esta respuesta?"
        },
        common: {
          showReplies: 'View all {count} replies'
        },
        action: {
          reply: "Responder",
          replyTo: "Respondiendo a",
          backToComments: "Volver a los comentarios"
        }
      },
      likes: {
        person: "persona",
        people: "personas",
        beTheFirst: "Sé el primero en \"Me gusta\"",
        personLikesThis: {
          beforeCount: '',
          afterCount: "le gusta esto"
        },
        peopleLikeThis: {
          beforeCount: '',
          afterCount: "les gusta esto"
        },
        personWithHighlight: {
          beforeCount: "Gusto por {names}",
          afterCount: ''
        },
        peopleWithHighlight: {
          beforeCount: "Gusto por {names} y",
          afterCount: ''
        },
        personShort: {
          beforeCount: '',
          afterCount: "me gusta"
        },
        peopleShort: {
          beforeCount: '',
          afterCount: "me gusta"
        },
        bottomSheet: {
          title: "Me gusta"
        }
      }
    },
    notifications: {
      title: "Notificaciones",
      appBar: "Notificaciones",
      like: "le gustó tu publicación",
      repost: "reenvió tu post",
      follow: "te siguió",
      mention: "te mencionó",
      reply: "respondió a su mensaje",
      default: "interactuó con tu publicación",
      unknownUser: "Alguien"
    },
    settings: {
      appBar: "Ajustes",
      navigation: {
        account: "Cuenta",
        profile: "Perfil",
        appearance: "Apariencia",
        privacy: "Privacidad",
        security: "Seguridad",
        management: "Gestión",
        language: "Idioma",
        grid: "Rejillas de perfil",
        badges: "Salir",
        development: "Desarrollo",
        support: "Soporte",
        about: "Acerca de",
        help: "Ayuda",
        community: "Comunidad",
        whatsnew: "Novedades"
      },
      main: {
        appBar: "Tablero",
        section: {
          password: {
            title: "Contraseña y autenticación"
          }
        }
      },
      account: {
        appBar: "Cuenta",
        resetPassword: {
          form: {
            email: {
              label: 'E-mail',
              placeholder: "Introduzca su dirección de correo electrónico"
            },
            action: "Restablecer contraseña"
          }
        },
        changePassword: {
          action: {
            changePassword: "Cambiar contraseña"
          }
        },
        factoryAuth: {
          title: "Autenticación en dos pasos (2FA)",
          description: "Requiere un código de correo electrónico para iniciar sesión en su cuenta.",
          action: {
            enable2FA: "Activar Email 2FA"
          }
        },
        exportData: {
          title: "Exportar mis datos",
          description: "El repositorio de su cuenta, que contiene todos los registros de datos públicos. Este archivo no incluye incrustaciones de medios o sus datos privados, que deben ser obtenidos por separado.",
          action: {
            exportMyData: "Exportar mis datos"
          }
        },
        deleteAccount: {
          title: "Eliminar cuenta",
          description: "Deshabilitar su cuenta significa que su perfil, publicaciones, canales y listas ya no serán visibles para otros usuarios de Bluesky. Puedes reactivar tu cuenta iniciando sesión.",
          action: {
            disableAccount: "Desactivar cuenta",
            deleteAccount: "Eliminar cuenta"
          }
        },
        wip: {
          title: "Más ajustes en el camino",
          description: "Todos los ajustes son accesibles desde Bluesky. Actualmente nos estamos centrando en mejorar las características de Gridsky para proporcionar una mejor experiencia de usuario."
        }
      },
      profile: {
        appBar: "Perfil",
        fields: {
          handle: {
            label: "Usuario",
            placeholder: "nombre de usuario",
            description: "Ayuda a la gente a descubrir tu cuenta usando el nombre que conoces: tu nombre completo, apodo o nombre de negocio"
          },
          displayName: {
            label: "Nombre",
            placeholder: "Nombre",
            description: "Ayuda a la gente a descubrir tu cuenta usando el nombre que conoces: tu nombre completo, apodo o nombre de negocio"
          },
          description: {
            label: "Bio",
            placeholder: "Bio",
            description: "Tu biografía es visible para todo el mundo en Gridsky y fuera"
          },
          avatar: {
            title: "Avatar",
            action: {
              change: "Cambiar avatar",
              remove: "Eliminar avatar"
            }
          },
          banner: {
            title: "Estandarte",
            action: {
              change: "Cambiar banner",
              remove: "Eliminar banner"
            }
          }
        }
      },
      appearance: {
        appBar: "Apariencia",
        category: {
          animation: "Animación"
        },
        fields: {
          themeName: {
            label: "Tema",
            placeholder: "tema"
          },
          themeVariant: {
            label: "Variante",
            placeholder: "variante"
          },
          themeColorPrimary: {
            label: "Color principal",
            placeholder: "#0095f6"
          },
          animation: "Animación",
          animationEnabled: {
            title: "Cubos animados"
          },
          animationSpeed: {
            title: "Velocidad Animada"
          },
          animationColors: {
            label: "Configurador de cuadrícula"
          }
        },
        unlock: {
          title: "Tu perfil, tu estilo",
          description: "Inspirate mientras soportas Gridsky y desbloquea la estética para tu perfil"
        }
      },
      language: {
        appBar: "Idioma",
        fields: {
          language: {
            label: "Idioma"
          }
        },
        contribute: {
          line1: "Estamos tratando de soportar tantos idiomas como sea posible, pero sólo unos pocos están disponibles por ahora.",
          line2: "¿Te gustaría ayudar? Podemos ofrecer dos meses de Gridsky {ae} gratis si te ofreces traducir Gridsky a tu idioma. Más información en Discord"
        }
      },
      grid: {
        appBar: "Rejillas de perfil",
        showcase: {
          icons: {
            showAll: ''
          }
        },
        category: {
          filter: "Filtro",
          layout: "Diseño",
          media: "Medios"
        },
        fields: {
          name: {
            label: "Nombre de cuadrícula",
            placeholder: "nombre de cuadrícula"
          },
          icon: {
            label: "Icono de cuadrícula",
            placeholder: "lucide:cuadrícula",
            details: 'Discover icons for your grid at'
          },
          filterInclude: {
            label: "Filtrar por hashtags",
            placeholder: "#hashtag"
          },
          filterExclude: {
            label: "Excluir por hashtags",
            placeholder: "#hashtag"
          },
          layout: {
            label: "Diseño de cuadrícula"
          },
          videoOnly: {
            label: "Vídeo optimizado"
          }
        }
      },
      menu: {
        appBar: "Cuenta y ajustes"
      },
      about: {
        appBar: "Acerca de"
      }
    },
    timeAgo: {
      "just-now": "justo ahora",
      "ago": "{0} ago",
      "in": "en {0}",
      "last-month": "último mes",
      "next-month": "próximo mes",
      "month": "mes | meses",
      "last-year": "último año",
      "next-year": "próximo año",
      "year": "año | años",
      "yesterday": "ayer",
      "tomorrow": "mañana",
      "day": "día | días",
      "last-week": "última semana",
      "next-week": "próxima semana",
      "week": "semana | semanas",
      "hour": "hora | horas",
      "minute": "minuto | minutos",
      "second": "segundo | segundos"
    },
    $vuetify: {
      badge: '',
      loading: '',
      datePicker: {
        title: "Seleccionar fecha"
      }
    }
  };
});