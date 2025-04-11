export default defineI18nLocale(async locale => {
  return {
    common: {
      action: {
        createProfile: "إنشاء ملف شخصي",
        change: "تغيير",
        remove: "إزالة",
        reset: 'Reset',
        close: "أغلق",
        create: "إنشاء",
        share: "مشاركة",
        submit: "إرسال",
        saveChanges: "حفظ التغييرات",
        post: "نشر",
        done: "تم",
        cancel: "إلغاء"
      },
      list: {
        empty: "إنها فارغة هنا"
      },
      soon: "قريباً"
    },
    navigation: {
      home: "المنزل",
      search: "البحث",
      explore: "استكشف",
      support: "الدعم",
      notifications: "الإشعارات",
      messages: "الرسائل",
      profile: "الملف الشخصي",
      settings: "الإعدادات",
      create: "إنشاء",
      other: "اخرى"
    },
    following: {
      title: "الخط"
    },
    search: {
      title: "البحث",
      placeholder: "البحث",
      suggestedTopics: {
        title: "مقترح"
      },
      trendingTopics: {
        title: "متداولة"
      },
      categories: {
        manager: {
          title: "عمليات البحث المحفوظة",
          empty: "لا توجد أية تغذية محفوظة"
        }
      }
    },
    explore: {
      title: "استكشف",
      forYou: {
        title: "اكتشف",
        appBar: "من أجلك"
      },
      discover: {
        title: "اكتشف",
        appBar: "اكتشف"
      },
      latest: {
        title: "الأحدث",
        appBar: "الأحدث"
      },
      following: {
        title: "تابع",
        appBar: "تابع"
      },
      search: {
        title: "البحث",
        appBar: "البحث"
      }
    },
    timeline: {
      list: {
        name: "المشاركات"
      }
    },
    feed: {
      header: {
        menu: {
          explore: "استكشاف التغذية",
          changeLayout: "تغيير التخطيط",
          reorderFeeds: "إعادة ترتيب التغذية",
          shareFeed: "مشاركة الخلاصة"
        }
      },
      list: {
        title: "التحديثات",
        appBar: "التحديثات"
      },
      static: {
        following: {
          title: "تابع",
          description: "تغذية شخصية"
        }
      },
      createdBy: `تغذية من قبل {handle}`,
      categories: {
        manager: {
          title: "فئات التغذية",
          empty: "لا توجد أية تغذية محفوظة"
        }
      },
      suggestions: {
        title: "الخلاصات المقترحة"
      },
      like: {
        person: "إعجاب من قبل 1",
        people: "أعجبني من قبل {count}"
      }
    },
    account: {
      login: {
        form: {
          identifier: {
            label: 'Identifier',
            placeholder: "اسم المستخدم أو عنوان البريد الإلكتروني"
          },
          password: {
            label: "كلمة المرور",
            placeholder: ''
          },
          authFactorToken: {
            label: "تأكيد 2FA",
            placeholder: "رمز التأكيد"
          },
          resolver: {
            prompt: "استخدام معالج مختلف:"
          },
          action: "تسجيل الدخول"
        }
      },
      switch: {
        appBar: "حسابات متصلة"
      },
      suggestions: {
        title: "الحسابات المقترحة"
      },
      action: {
        or: "أو",
        login: "تسجيل الدخول",
        lostPassword: "كلمة المرور المفقودة؟",
        addAccount: "إضافة حساب",
        switchAccount: "تبديل الحساب",
        logout: "تسجيل الخروج"
      }
    },
    profile: {
      stats: {
        posts: "المشاركات",
        followers: "المتابِعون",
        follows: "تابع"
      },
      action: {
        followProfile: "اتبع",
        unfollowProfile: "إلغاء المتابعة",
        editProfile: "تعديل الملف الشخصي",
        shareProfile: "مشاركة الملف الشخصي",
        changeBanner: "تغيير البانر"
      },
      collection: {
        default: {
          label: "المشاركات"
        }
      },
      media: {
        add: {
          title: "إنشاء مشاركة جديدة",
          subtitle: "اسحب الصور والفيديوهات هنا",
          action: "حدد الملفات"
        },
        menu: {
          addCover: "إضافة غلاف",
          addToAlbum: "إضافة وسائط",
          cloneToReel: "استنساخ للريال",
          convertToAlbum: "تحويل إلى ألبوم",
          convertToIframe: "تحويل إلى iframe",
          remove: "إزالة",
          removeCover: "إزالة الغطاء",
          removeFromAlbum: "إزالة الوسائط",
          replaceCover: "استبدال الغلاف",
          replaceMedia: "استبدال الوسائط"
        }
      }
    },
    thread: {
      reply: {
        bottomSheet: {
          title: "تعليقات"
        },
        list: {
          empty: "كن أول من يعلق"
        },
        form: {
          textField: {
            placeholder: "إضافة تعليق..."
          }
        },
        delete: {
          label: "حذف",
          confirm: "هل أنت متأكد من حذف هذا الرد؟"
        },
        common: {
          showReplies: "عرض جميع الردود {count}"
        },
        action: {
          reply: "الرد",
          replyTo: "الرد على",
          backToComments: "العودة إلى التعليقات"
        }
      },
      likes: {
        person: "شخص",
        people: "الناس",
        beTheFirst: "كن أول من يعجبه",
        personLikesThis: {
          beforeCount: '',
          afterCount: "أعجب بهذا"
        },
        peopleLikeThis: {
          beforeCount: '',
          afterCount: "مثل هذا"
        },
        personWithHighlight: {
          beforeCount: "أعجبني من قبل {names}",
          afterCount: ''
        },
        peopleWithHighlight: {
          beforeCount: "أعجبها {names} و",
          afterCount: ''
        },
        personShort: {
          beforeCount: '',
          afterCount: "مثل"
        },
        peopleShort: {
          beforeCount: '',
          afterCount: "أعجبني"
        },
        bottomSheet: {
          title: "إعجاب"
        }
      }
    },
    notifications: {
      title: "الإشعارات",
      appBar: "الإشعارات",
      like: "أعجبت مشاركتك",
      repost: "إعادة نشر مشاركتك",
      follow: "تابعك",
      mention: "ذكرك",
      reply: "رد على مشاركتك",
      default: "تفاعل مع مشاركتك",
      unknownUser: "شخص ما"
    },
    settings: {
      appBar: "الإعدادات",
      navigation: {
        account: "حساب",
        profile: "الملف الشخصي",
        appearance: "المظهر",
        privacy: "الخصوصية",
        security: "أمان",
        management: "الإدارة",
        language: "اللغة",
        grid: "الملفّات الشخصية",
        badges: "توقف عن العمل",
        development: "التطوير",
        support: "الدعم",
        about: "حول",
        help: "مساعدة",
        community: "المجتمع",
        whatsnew: "ما الجديد"
      },
      main: {
        appBar: "لوحة التحكم",
        section: {
          password: {
            title: "كلمة المرور والمصادقة"
          }
        }
      },
      account: {
        appBar: "حساب",
        resetPassword: {
          form: {
            email: {
              label: "البريد الإلكتروني",
              placeholder: "أدخل عنوان بريدك الإلكتروني"
            },
            action: "إعادة تعيين كلمة المرور"
          }
        },
        changePassword: {
          action: {
            changePassword: "تغيير كلمة المرور"
          }
        },
        factoryAuth: {
          title: "المصادقة الثنائية (2FA)",
          description: "يتطلب رمز بريد إلكتروني لتسجيل الدخول إلى حسابك.",
          action: {
            enable2FA: "تمكين البريد الإلكتروني 2FA"
          }
        },
        exportData: {
          title: "تصدير بياناتي",
          description: "مستودع حسابك، الذي يحتوي على جميع سجلات البيانات العامة. هذا الملف لا يتضمن الوسائط أو بياناتك الخاصة، التي يجب أن تجلب بشكل منفصل.",
          action: {
            exportMyData: "تصدير بياناتي"
          }
        },
        deleteAccount: {
          title: "إزالة الحساب",
          description: "تعطيل حسابك يعني أن ملفك الشخصي، المشاركات، التغذية والقوائم لن تكون مرئية لمستخدمي Bluesky الآخرين. يمكنك إعادة تنشيط حسابك عن طريق تسجيل الدخول.",
          action: {
            disableAccount: "تعطيل الحساب",
            deleteAccount: "حذف الحساب"
          }
        },
        wip: {
          title: "المزيد من الإعدادات في الطريق",
          description: "جميع الإعدادات متاحة من Bluesky. نحن نركز حاليا على تعزيز ميزات Gridsky لتوفير تجربة أفضل للمستخدم."
        }
      },
      profile: {
        appBar: "الملف الشخصي",
        fields: {
          handle: {
            label: "اسم المستخدم",
            placeholder: "اسم المستخدم",
            description: "ساعد الناس على اكتشاف حسابك باستخدام الاسم الذي تعرفه من خلال: إما اسمك الكامل، الاسم المستعار أو اسم العمل"
          },
          displayName: {
            label: "الاسم",
            placeholder: "الاسم",
            description: "ساعد الناس على اكتشاف حسابك باستخدام الاسم الذي تعرفه من خلال: إما اسمك الكامل، الاسم المستعار أو اسم العمل"
          },
          description: {
            label: "بيو",
            placeholder: "بيو",
            description: "بياناتك الشخصية مرئية للجميع في جريدسكي وخارجها"
          },
          avatar: {
            title: "الرمزية",
            action: {
              change: "تغيير الصورة الرمزية",
              remove: "إزالة الصورة الرمزية"
            }
          },
          banner: {
            title: "لافتة",
            action: {
              change: "تغيير البانر",
              remove: "إزالة البانر"
            }
          }
        }
      },
      appearance: {
        appBar: "المظهر",
        category: {
          animation: "الحركة"
        },
        fields: {
          themeName: {
            label: "السمة",
            placeholder: "السمة"
          },
          themeVariant: {
            label: "المتغير",
            placeholder: "المتغير"
          },
          themeColorPrimary: {
            label: "اللون الأساسي",
            placeholder: "#0095f6"
          },
          animation: "الحركة",
          animationEnabled: {
            title: "مكعبات متحركة"
          },
          animationSpeed: {
            title: "السرعة المتحركة"
          },
          animationShowBannerInstead: {
            title: "إظهار البانر"
          },
          animationColors: {
            label: "تكوين الشبكة"
          }
        },
        unlock: {
          title: "ملفك الشخصي، النمط الخاص بك",
          description: "احصل على إلهام أثناء دعم Gridsky، وفتح الجمال لملفك الشخصي"
        }
      },
      language: {
        appBar: "اللغة",
        fields: {
          language: {
            label: "اللغة"
          }
        },
        contribute: {
          line1: "نحن نهدف إلى دعم أكبر عدد ممكن من اللغات، ولكن هناك القليل فقط من اللغات المتاحة الآن.",
          line2: "هل ترغب في المساعدة؟ يمكننا تقديم شهرين من Gridsky {ae} مجاناً إذا عرضت ترجمة Gridsky بلغتك. المزيد من المعلومات في ديسكورد"
        }
      },
      grid: {
        appBar: "الملفّات الشخصية",
        showcase: {
          icons: {
            showAll: ''
          }
        },
        category: {
          filter: "تصفية",
          layout: "تخطيط",
          media: "الوسائط"
        },
        fields: {
          name: {
            label: "اسم الشبكة",
            placeholder: "اسم الشبكة"
          },
          icon: {
            label: "أيقونة الشبكة",
            placeholder: "لوسيد:grid",
            details: 'Discover icons for your grid at'
          },
          filterInclude: {
            label: "تصفية حسب الوسوم",
            placeholder: "#hashtag"
          },
          filterExclude: {
            label: "استبعاد بواسطة علامات الهاش",
            placeholder: "#hashtag"
          },
          layout: {
            label: "تخطيط الشبكة"
          },
          videoOnly: {
            label: "تم تحسين الفيديو"
          }
        }
      },
      menu: {
        appBar: "الحساب و الإعدادات"
      },
      about: {
        appBar: "حول"
      }
    },
    timeAgo: {
      "just-now": "الآن فقط",
      "ago": "{0} ago",
      "in": "في {0}",
      "last-month": "الشهر الماضي",
      "next-month": "الشهر القادم",
      "month": "شهر <unk> أشهر",
      "last-year": "العام الماضي",
      "next-year": "العام القادم",
      "year": "سنة <unk> سنوات",
      "yesterday": "أمس",
      "tomorrow": "غدا",
      "day": "اليوم <unk> أيام",
      "last-week": "الأسبوع الماضي",
      "next-week": "الأسبوع القادم",
      "week": "الأسبوع <unk> أسابيع",
      "hour": "ساعة <unk> ساعات",
      "minute": "دقيقة <unk> دقائق",
      "second": "ثانية <unk> ثانية"
    },
    $vuetify: {
      badge: '',
      loading: '',
      datePicker: {
        title: "حدد التاريخ"
      }
    }
  };
});