export default defineI18nLocale(async locale => {
  return {
    common: {
      action: {
        createProfile: "Criar perfil",
        change: "Troca",
        remove: "Excluir",
        reset: 'Reset',
        close: "FECHAR",
        create: "Crio",
        share: "Compartilhar",
        submit: "submeter",
        saveChanges: "Salvar as alterações",
        post: "Publicar",
        done: "Concluído",
        cancel: "cancelar"
      },
      list: {
        empty: "Está vazio aqui"
      },
      soon: "Em breve"
    },
    navigation: {
      home: "Residencial",
      search: "Pesquisa",
      explore: "EXPLORAR",
      support: "SUPORTE",
      notifications: "notificações",
      messages: "mensagens",
      profile: "Perfil",
      settings: "Confirgurações",
      create: "Crio",
      other: "Outros"
    },
    following: {
      title: "Cronograma"
    },
    search: {
      title: "Pesquisa",
      placeholder: "Pesquisa",
      suggestedTopics: {
        title: "Sugerido"
      },
      trendingTopics: {
        title: "Tendências"
      },
      categories: {
        manager: {
          title: "Pesquisas salvas",
          empty: "Não há feeds salvos"
        }
      }
    },
    explore: {
      title: "EXPLORAR",
      forYou: {
        title: "Pendentes",
        appBar: "Para você"
      },
      discover: {
        title: "Pendentes",
        appBar: "Pendentes"
      },
      latest: {
        title: "Últimos",
        appBar: "Últimos"
      },
      following: {
        title: "Seguinte",
        appBar: "Seguinte"
      },
      search: {
        title: "Pesquisa",
        appBar: "Pesquisa"
      }
    },
    timeline: {
      list: {
        name: "Postagens"
      }
    },
    feed: {
      header: {
        menu: {
          explore: "Explorar feeds",
          changeLayout: "Alterar layout",
          reorderFeeds: "Reordenar feeds",
          shareFeed: "Compartilhar feed"
        }
      },
      list: {
        title: "Conteúdos",
        appBar: "Conteúdos"
      },
      static: {
        following: {
          title: "Seguinte",
          description: "Feed pessoal"
        }
      },
      createdBy: `Feed por {handle}`,
      categories: {
        manager: {
          title: "Categorias de alimentação",
          empty: "Não há feeds salvos"
        }
      },
      suggestions: {
        title: "Feeds sugeridos"
      },
      like: {
        person: "Curtido por 1",
        people: "Curtido por {count}"
      }
    },
    account: {
      login: {
        form: {
          identifier: {
            label: 'Identifier',
            placeholder: "Usuário ou e-mail"
          },
          password: {
            label: "Palavra-passe",
            placeholder: ''
          },
          authFactorToken: {
            label: "Confirmar 2FA",
            placeholder: "Código de confirmação"
          },
          resolver: {
            prompt: "Use um resolvedor de identificador diferente:"
          },
          action: "Conectar-se"
        }
      },
      switch: {
        appBar: "Contas conectadas"
      },
      suggestions: {
        title: "Contas sugeridas"
      },
      action: {
        or: "ou",
        login: "Conectar-se",
        lostPassword: "Perdeu a senha?",
        addAccount: "Adicionar conta",
        switchAccount: "Mudar conta",
        logout: "Desconectar"
      }
    },
    profile: {
      stats: {
        posts: "Postagens",
        followers: "Seguidores",
        follows: "Seguinte"
      },
      action: {
        followProfile: "Seguir",
        unfollowProfile: "Estrela",
        editProfile: "Editar perfil",
        shareProfile: "Compartilhar perfil",
        changeBanner: "Alterar banner"
      },
      collection: {
        default: {
          label: "Postagens"
        }
      },
      media: {
        add: {
          title: "Criar nova postagem",
          subtitle: "Arraste fotos e vídeos aqui",
          action: "Selecionar arquivos"
        },
        menu: {
          addCover: "Adicionar capa",
          addToAlbum: "Adicionar mídia",
          cloneToReel: "Clonar para a fileira",
          convertToAlbum: "Converter para álbum",
          convertToIframe: "Converter para iframe",
          remove: "Excluir",
          removeCover: "Remover capa",
          removeFromAlbum: "Remover mídia",
          replaceCover: "Substituir capa",
          replaceMedia: "Substituir mídia"
        }
      }
    },
    thread: {
      reply: {
        bottomSheet: {
          title: "comentários"
        },
        list: {
          empty: "Seja o primeiro a comentar"
        },
        form: {
          textField: {
            placeholder: "Adicionar um comentário..."
          }
        },
        delete: {
          label: "excluir",
          confirm: "Tem certeza que deseja excluir essa resposta?"
        },
        common: {
          showReplies: "Ver todas as respostas {count}"
        },
        action: {
          reply: "Responder",
          replyTo: "Respondendo a",
          backToComments: "Voltar aos comentários"
        }
      },
      likes: {
        person: "pessoa",
        people: "Pessoas",
        beTheFirst: "Seja o primeiro a curtir",
        personLikesThis: {
          beforeCount: '',
          afterCount: "curte isso"
        },
        peopleLikeThis: {
          beforeCount: '',
          afterCount: "curtir isso"
        },
        personWithHighlight: {
          beforeCount: "Curtido por {names}",
          afterCount: ''
        },
        peopleWithHighlight: {
          beforeCount: "Curtido por {names} e",
          afterCount: ''
        },
        personShort: {
          beforeCount: '',
          afterCount: "Curtir"
        },
        peopleShort: {
          beforeCount: '',
          afterCount: "Curtidas"
        },
        bottomSheet: {
          title: "Gostos"
        }
      }
    },
    notifications: {
      title: "notificações",
      appBar: "notificações",
      like: "curtiu sua publicação",
      repost: "repostou a sua publicação",
      follow: "seguiu você",
      mention: "mencionou você",
      reply: "respondeu à sua publicação",
      default: "interagiu com a publicação",
      unknownUser: "Alguém"
    },
    settings: {
      appBar: "Confirgurações",
      navigation: {
        account: "conta",
        profile: "Perfil",
        appearance: "Aparência",
        privacy: "Privacidade",
        security: "Segurança",
        management: "Gestão",
        language: "IDIOMA",
        grid: "Grades de Perfil",
        badges: "Levante-se para fora",
        development: "Desenvolvimento",
        support: "SUPORTE",
        about: "SOBRE",
        help: "Socorro",
        community: "Comunidade",
        whatsnew: "Novidades"
      },
      main: {
        appBar: "Painel",
        section: {
          password: {
            title: "Senha e autenticação"
          }
        }
      },
      account: {
        appBar: "conta",
        resetPassword: {
          form: {
            email: {
              label: "e-mail",
              placeholder: "Insira seu endereço de e-mail"
            },
            action: "Redefinir senha"
          }
        },
        changePassword: {
          action: {
            changePassword: "Mudar Senha"
          }
        },
        factoryAuth: {
          title: "Autenticação de dois fatores (2FA)",
          description: "Exigir um código de e-mail para entrar em sua conta.",
          action: {
            enable2FA: "Ativar Email 2FA"
          }
        },
        exportData: {
          title: "Exportar meus dados",
          description: "O repositório da sua conta, contendo todos os registros de dados públicos. Este arquivo não inclui as embeds de mídia ou seus dados privados, que devem ser obtidos separadamente.",
          action: {
            exportMyData: "Exportar meus dados"
          }
        },
        deleteAccount: {
          title: "Remoção de conta",
          description: "Desabilitar sua conta significa que seu perfil, postagens, feeds e listas não estarão mais visíveis para outros usuários do Bluesky. Você pode reativar sua conta acessando.",
          action: {
            disableAccount: "Desativar conta",
            deleteAccount: "Apagar conta"
          }
        },
        wip: {
          title: "Mais configurações a caminho",
          description: "Todas as configurações são acessíveis do Bluesky. No momento, estamos focando em aprimorar as características do Gridsky para oferecer uma melhor experiência de usuário."
        }
      },
      profile: {
        appBar: "Perfil",
        fields: {
          handle: {
            label: "Usuário:",
            placeholder: "usuário",
            description: "Ajude as pessoas a descobrir a sua conta usando o nome que você conhece por: ou seu nome completo, apelido ou nome da empresa"
          },
          displayName: {
            label: "Nome:",
            placeholder: "Nome:",
            description: "Ajude as pessoas a descobrir a sua conta usando o nome que você conhece por: ou seu nome completo, apelido ou nome da empresa"
          },
          description: {
            label: "Biografia",
            placeholder: "Biografia",
            description: "Sua biografia está visível para todos na Gridsky"
          },
          avatar: {
            title: "Avatar",
            action: {
              change: "Mudar avatar",
              remove: "Remover avatar"
            }
          },
          banner: {
            title: "Estandarte",
            action: {
              change: "Alterar banner",
              remove: "Remover banner"
            }
          }
        }
      },
      appearance: {
        appBar: "Aparência",
        category: {
          animation: "Animação"
        },
        fields: {
          themeName: {
            label: "Tema",
            placeholder: "Tema"
          },
          themeVariant: {
            label: "Variante",
            placeholder: "variante"
          },
          themeColorPrimary: {
            label: "Cor principal",
            placeholder: "#0095f6"
          },
          animation: "Animação",
          animationEnabled: {
            title: "Cubos animados"
          },
          animationSpeed: {
            title: "Velocidade animada"
          },
          animationShowBannerInstead: {
            title: "Mostrar banner"
          },
          animationColors: {
            label: "Configuração de grade"
          }
        },
        unlock: {
          title: "Seu perfil, seu estilo",
          description: "Inspire-se ao apoiar Gridsky, e desbloqueie estética para o seu perfil"
        }
      },
      language: {
        appBar: "IDIOMA",
        fields: {
          language: {
            label: "IDIOMA"
          }
        },
        contribute: {
          line1: "Estamos buscando oferecer suporte ao maior número de idiomas possível, mas apenas alguns estão disponíveis por enquanto.",
          line2: "Você gostaria de ajudar? Podemos oferecer dois meses de Gridsky {ae} gratuitamente se você oferecer traduzir o Gridsky em seu idioma. Mais informações no Discord"
        }
      },
      grid: {
        appBar: "Grades de Perfil",
        showcase: {
          icons: {
            showAll: ''
          }
        },
        category: {
          filter: "filtro",
          layout: "Disposição",
          media: "Multimídia"
        },
        fields: {
          name: {
            label: "Nome da grade",
            placeholder: "nome da grade"
          },
          icon: {
            label: "Ícone da grade",
            placeholder: "ilusão:grid"
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
            label: "Layout em grade"
          },
          videoOnly: {
            label: "Vídeo otimizado"
          }
        }
      },
      menu: {
        appBar: "Configurações da conta"
      },
      about: {
        appBar: "SOBRE"
      }
    },
    timeAgo: {
      "just-now": "neste momento",
      "ago": "{0} ago",
      "in": "em {0}",
      "last-month": "último mês",
      "next-month": "próximo mês",
      "month": "mês + meses",
      "last-year": "ano passado",
      "next-year": "próximo ano",
      "year": "ano + anos",
      "yesterday": "Ontem",
      "tomorrow": "Amanhã",
      "day": "dia I (dia)",
      "last-week": "a semana passada",
      "next-week": "próxima semana",
      "week": "semanas semanais",
      "hour": "hora em horas",
      "minute": "minutos de minuto",
      "second": "segundos em segundo"
    },
    $vuetify: {
      badge: '',
      loading: '',
      datePicker: {
        title: "Selecione a data"
      }
    }
  };
});