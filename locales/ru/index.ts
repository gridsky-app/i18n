export default defineI18nLocale(async locale => {
  return {
    common: {
      action: {
        createProfile: "Создать профиль",
        change: "Изменить",
        remove: "Удалить",
        reset: 'Reset',
        close: "Закрыть",
        create: "Создать",
        share: "Поделиться",
        submit: "Отправить",
        saveChanges: "Сохранить изменения",
        post: "Пост",
        done: "Готово",
        cancel: "Отмена"
      },
      list: {
        empty: "Здесь пусто"
      },
      soon: "Скоро"
    },
    navigation: {
      home: "Домашний",
      search: "Искать",
      explore: "Исследовать",
      support: "Поддержка",
      notifications: "Уведомления",
      messages: "Сообщения",
      profile: "Профиль",
      settings: "Настройки",
      create: "Создать",
      other: "Прочие вопросы"
    },
    following: {
      title: "Хронология"
    },
    search: {
      title: "Искать",
      placeholder: "Искать",
      suggestedTopics: {
        title: "Рекомендуется"
      },
      trendingTopics: {
        title: "Популярные"
      },
      categories: {
        manager: {
          title: "Сохраненные поиски",
          empty: "Нет сохраненных каналов"
        }
      }
    },
    explore: {
      title: "Исследовать",
      forYou: {
        title: "Узнайте",
        appBar: "Для вас"
      },
      discover: {
        title: "Узнайте",
        appBar: "Узнайте"
      },
      latest: {
        title: "Последние",
        appBar: "Последние"
      },
      following: {
        title: "Подписка",
        appBar: "Подписка"
      },
      search: {
        title: "Искать",
        appBar: "Искать"
      }
    },
    timeline: {
      list: {
        name: "Должности"
      }
    },
    feed: {
      header: {
        menu: {
          explore: "Исследовать каналы",
          changeLayout: "Изменить макет",
          reorderFeeds: "Заказать ленту новостей",
          shareFeed: "Поделиться лентой"
        }
      },
      list: {
        title: "Ленты",
        appBar: "Ленты"
      },
      static: {
        following: {
          title: "Подписка",
          description: "Личный канал"
        }
      },
      createdBy: `Лента от {handle}`,
      categories: {
        manager: {
          title: "Категории ленты",
          empty: "Нет сохраненных каналов"
        }
      },
      suggestions: {
        title: "Предлагаемые каналы"
      },
      like: {
        person: "Понравилось 1",
        people: "Понравилось {count}"
      }
    },
    account: {
      login: {
        form: {
          identifier: {
            label: 'Identifier',
            placeholder: "Имя пользователя или адрес электронной почты"
          },
          password: {
            label: "Пароль",
            placeholder: ''
          },
          authFactorToken: {
            label: "Подтвердить 2FA",
            placeholder: "Код подтверждения"
          },
          resolver: {
            prompt: "Использовать другой резолтор дескриптора:"
          },
          action: "Логин"
        }
      },
      switch: {
        appBar: "Подключенные учетные записи"
      },
      suggestions: {
        title: "Рекомендуемые учетные записи"
      },
      action: {
        or: "или",
        login: "Логин",
        lostPassword: "Забыли пароль?",
        addAccount: "Добавить аккаунт",
        switchAccount: "Сменить аккаунт",
        logout: "Выйти"
      }
    },
    profile: {
      stats: {
        posts: "Должности",
        followers: "Подписчики",
        follows: "Подписка"
      },
      action: {
        followProfile: "Подписаться",
        unfollowProfile: "Отписаться",
        editProfile: "Изменить профиль",
        shareProfile: "Поделиться профилем",
        changeBanner: "Сменить баннер"
      },
      collection: {
        default: {
          label: "Должности"
        }
      },
      media: {
        add: {
          title: "Создать новый пост",
          subtitle: "Перетащите фото и видео здесь",
          action: "Выберите файлы"
        },
        menu: {
          addCover: "Добавить обложку",
          addToAlbum: "Добавить медиа",
          cloneToReel: "Клонировать для катушки",
          convertToAlbum: "Преобразовать в альбом",
          convertToIframe: "Преобразовать в iframe",
          remove: "Удалить",
          removeCover: "Удалить обложку",
          removeFromAlbum: "Удалить медиа",
          replaceCover: "Заменить крышку",
          replaceMedia: "Заменить медиа"
        }
      }
    },
    thread: {
      reply: {
        bottomSheet: {
          title: "Комментарии"
        },
        list: {
          empty: "Будьте первым, кто прокомментирует"
        },
        form: {
          textField: {
            placeholder: "Добавить комментарий..."
          }
        },
        delete: {
          label: "Удалить",
          confirm: "Вы уверены, что хотите удалить этот ответ?"
        },
        common: {
          showReplies: "Просмотреть все ответы {count}"
        },
        action: {
          reply: "Ответ",
          replyTo: "Ответ на",
          backToComments: "Вернуться к комментариям"
        }
      },
      likes: {
        person: "человек",
        people: "люди",
        beTheFirst: "Будьте первым, кто любит",
        personLikesThis: {
          beforeCount: '',
          afterCount: "нравится это"
        },
        peopleLikeThis: {
          beforeCount: '',
          afterCount: "нравится это"
        },
        personWithHighlight: {
          beforeCount: "Понравилось {names}",
          afterCount: ''
        },
        peopleWithHighlight: {
          beforeCount: "Понравилось {names} и",
          afterCount: ''
        },
        personShort: {
          beforeCount: '',
          afterCount: "лайк"
        },
        peopleShort: {
          beforeCount: '',
          afterCount: "лайки"
        },
        bottomSheet: {
          title: "Лайки"
        }
      }
    },
    notifications: {
      title: "Уведомления",
      appBar: "Уведомления",
      like: "понравилось ваше сообщение",
      repost: "отредактировал ваше сообщение",
      follow: "подписался на вас",
      mention: "упомянул вас",
      reply: "ответил на ваше сообщение",
      default: "общался с вашим сообщением",
      unknownUser: "Кто-то"
    },
    settings: {
      appBar: "Настройки",
      navigation: {
        account: "Аккаунт",
        profile: "Профиль",
        appearance: "Внешний вид",
        privacy: "Приватность",
        security: "Безопасность",
        management: "Управление",
        language: "Язык",
        grid: "Профиль сетки",
        badges: "Стоять",
        development: "Развитие",
        support: "Поддержка",
        about: "О программе",
        help: "Справка",
        community: "Сообщество",
        whatsnew: "Что нового"
      },
      main: {
        appBar: "Панель",
        section: {
          password: {
            title: "Пароль и аутентификация"
          }
        }
      },
      account: {
        appBar: "Аккаунт",
        resetPassword: {
          form: {
            email: {
              label: "Эл. почта",
              placeholder: "Введите ваш адрес электронной почты"
            },
            action: "Сброс пароля"
          }
        },
        changePassword: {
          action: {
            changePassword: "Изменить пароль"
          }
        },
        factoryAuth: {
          title: "Двухфакторная аутентификация (2FA)",
          description: "Требовать код электронной почты для входа в свою учетную запись.",
          action: {
            enable2FA: "Включить 2FA эл. почты"
          }
        },
        exportData: {
          title: "Экспорт моих данных",
          description: "Хранилище учетной записи, содержащее все записи публичных данных. Этот файл не включает в себя мультимедийные вставки или ваши личные данные, которые должны быть загружены отдельно.",
          action: {
            exportMyData: "Экспорт моих данных"
          }
        },
        deleteAccount: {
          title: "Удаление учетной записи",
          description: "Отключение вашего аккаунта означает, что ваш профиль, сообщения, ленты новостей и списки больше не будут видны другим пользователям Blueski. Вы можете реактивировать свою учетную запись, войдя в систему.",
          action: {
            disableAccount: "Отключить аккаунт",
            deleteAccount: "Удалить аккаунт"
          }
        },
        wip: {
          title: "Другие настройки на пути",
          description: "Все настройки доступны из Bluesky. В настоящее время мы фокусируемся на улучшении особенностей Gridsky для лучшего использования."
        }
      },
      profile: {
        appBar: "Профиль",
        fields: {
          handle: {
            label: "Имя пользователя",
            placeholder: "имя пользователя",
            description: "Помогите людям найти вашу учетную запись, используя имя, которое вы знаете: либо ваше полное имя, никнейм, либо корпоративное имя"
          },
          displayName: {
            label: "Наименование",
            placeholder: "Наименование",
            description: "Помогите людям найти вашу учетную запись, используя имя, которое вы знаете: либо ваше полное имя, никнейм, либо корпоративное имя"
          },
          description: {
            label: "Био",
            placeholder: "Био",
            description: "Ваша биография видна всем на и вне Серидского"
          },
          avatar: {
            title: "Аватар",
            action: {
              change: "Изменить аватар",
              remove: "Удалить аватар"
            }
          },
          banner: {
            title: "Баннер",
            action: {
              change: "Сменить баннер",
              remove: "Удалить баннер"
            }
          }
        }
      },
      appearance: {
        appBar: "Внешний вид",
        category: {
          animation: "Анимация"
        },
        fields: {
          themeName: {
            label: "Тема",
            placeholder: "тема"
          },
          themeVariant: {
            label: "Вариант",
            placeholder: "вариант"
          },
          themeColorPrimary: {
            label: "Основной цвет",
            placeholder: "#0095f6"
          },
          animation: "Анимация",
          animationEnabled: {
            title: "Анимированные кубы"
          },
          animationSpeed: {
            title: "Анимированная скорость"
          },
          animationColors: {
            label: "Конфигуратор сетки"
          }
        },
        unlock: {
          title: "Ваш профиль, ваш стиль",
          description: "Воодушевляйтесь поддержкой Сетки и откройте эстетику для вашего профиля"
        }
      },
      language: {
        appBar: "Язык",
        fields: {
          language: {
            label: "Язык"
          }
        },
        contribute: {
          line1: "Мы стремимся поддерживать как можно больше языков, но только некоторые из них уже доступны.",
          line2: "Вы хотели бы помочь? Мы можем предложить два месяца Gridsky {ae} бесплатно, если вы предложите перевести Gridsky на ваш язык. Больше информации о Discord"
        }
      },
      grid: {
        appBar: "Профиль сетки",
        showcase: {
          icons: {
            showAll: ''
          }
        },
        category: {
          filter: "Фильтр",
          layout: "Макет",
          media: "Медиа"
        },
        fields: {
          name: {
            label: "Название сетки",
            placeholder: "имя сетки"
          },
          icon: {
            label: "Значок сетки",
            placeholder: "lucide:grid",
            details: 'Discover icons for your grid at'
          },
          filterInclude: {
            label: "Фильтр по хэштегам",
            placeholder: "#hashtag"
          },
          filterExclude: {
            label: "Исключить из хэштегов",
            placeholder: "#hashtag"
          },
          layout: {
            label: "Разметка сетки"
          },
          videoOnly: {
            label: "Видео оптимизировано"
          }
        }
      },
      menu: {
        appBar: "Учетная запись и настройки"
      },
      about: {
        appBar: "О программе"
      }
    },
    timeAgo: {
      "just-now": "только что",
      "ago": "{0} ago",
      "in": "в {0}",
      "last-month": "прошлый месяц",
      "next-month": "следующий месяц",
      "month": "месяц | месяцы",
      "last-year": "прошлый год",
      "next-year": "следующий год",
      "year": "год | лет",
      "yesterday": "вчера",
      "tomorrow": "завтра",
      "day": "день | дней",
      "last-week": "прошлой неделе",
      "next-week": "следующая неделя",
      "week": "неделя | недели",
      "hour": "час | часов",
      "minute": "минута | минуты",
      "second": "секунды | секунды"
    },
    $vuetify: {
      badge: '',
      loading: '',
      datePicker: {
        title: "Выберите дату"
      }
    }
  };
});