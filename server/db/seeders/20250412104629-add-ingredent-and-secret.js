"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Secrets", [
        {
          riddle:
            "Чтобы привлечь удачу и защититься от неприятностей, добавь в зелье эти компоненты. Первый — от черного кота, второй — из волшебного порошка, третий — с дерева зеленого, а последний — с небес, когда луна полна. Что это за зелье?",
          danger_level: "низкий",
          author: "Грета Лунная",
          image: "Potion of Luck.webp"
        },
        {
          riddle:
            "Чтобы обрести мир и покой, добавь в зелье эти элементы. Сначала цветок белой магнолии, потом цветок с ночной лилии, третье — листья сирени ночной, а последний — сок плода с небесной звездой. Что это за зелье?",
          danger_level: "низкий",
          author: "Сиренна Вечерняя",
          image: "Potion of Tranquility.webp"
        },
        {
          riddle:
            "Если хочешь скрыться от глаз, тебе нужно это зелье. Добавь в него пару капель, чтобы скрыться в темном облаке, а также сало — туманное, и молоко с крыла летучей мыши. Что это за зелье?",
          danger_level: "средний",
          author: "Никола Черный",
          image: "Potion of Invisibility.webp"
        },
        {
          riddle:
            "Чтобы защититься от опасности, это зелье тебе поможет. Для его создания возьми рог волшебного единорога, листья дикого цветка, защитные колючки, и перо орел. Что это за зелье?",
          danger_level: "средний",
          author: "Эленора Строгая",
          image: "Potion of Warding.webp"
        },
        {
          riddle:
            "Чтобы любовь завоевать, добавь в зелье эти ингредиенты. Первое — сок яблока Сириуса, второе — цветы магнолии белой, третье — мох из паучьего дерева, и волос единорога. Что это за зелье?",
          danger_level: "низкий",
          author: "Мелания Цветочная",
          image: "Potion of Love.webp"
        },
        {
          riddle:
            "Это зелье усилит силу магии огня. Для его приготовления нужно: чешуйки огненного создания, кровь тролля, листья дикого наперстянника, кусочек света звезд, корень асфоделя, пучок мандрагоры и дождь ночной. Что это за зелье?",
          danger_level: "высокий",
          author: "Мирослава Огненная",
          image: "Potion of Flame.webp"
        },
        {
          riddle:
            "Это зелье защитит тебя от магических атак. Для его приготовления возьми зуб волшебного базилиска, лист устричного дерева, слёзы феникса, кровь жабы, пыльцу фей, листья дуба и перо орла. Что это за зелье?",
          danger_level: "высокий",
          author: "Арден Грозный",
          image: "Potion of Shielding.webp"
        },
        {
          riddle:
            "Чтобы лечить раны и болезни, это зелье тебе поможет. В его составе: мох паучьего дерева, слёзы феникса, мандрагора, молоко медовой ночи, корень водяной феи, болотный мох и кровь огненного тролля. Что это за зелье?",
          danger_level: "средний",
          author: "Лирена Солнечная",
          image: "Potion of Healing.webp"
        },
        {
          riddle:
            "Это зелье дарует бессмертие, но оно опасно. Чтобы его создать, используй проклятую кровь вампира, зуб базилиска, кровь огненного тролля, клыки змеи, паутинку акромантулы, экстракт кракена, эссенцию очного яблока, слёзы феникса, перо горного орла и сироп с паучьей нити. Что это за зелье?",
          danger_level: "высокий",
          author: "Алькрис Тень",
          image: "Potion of Immortality.webp"
        },
        {
          riddle:
            "Чтобы увидеть будущее, это зелье нужно сварить. Оно требует плодов омелы, эссенции ночного дождя, капли дождя, собранного в полнолуние, зуба базилиска, туманного сала, корня асфодели, мха паучьего дерева, сока хищного дерева и пучка мандрагоры. Что это за зелье?",
          danger_level: "высокий",
          author: "Фелисия Пророчица",
          image: "Potion of Prophecy.webp"
        }
    ]);
    await queryInterface.bulkInsert("Ingredients", [
      {
        name: "Порошок лунного камня",
        description: "Придаёт зелью блеск и мягкую энергию",
        danger_level: "низкий"
      },
      {
        name: "Слезы феникса",
        description: "Усиливают лечебные свойства",
        danger_level: "низкий"
      },
      {
        name: "Рог единорога",
        description: "Создаёт сильные защитные зелья",
        danger_level: "средний"
      },
      {
        name: "Колючки дикобраза",
        description: "Добавляют защитные свойства",
        danger_level: "низкий"
      },
      {
        name: "Драконья кровь",
        description: "Универсальный мощный магический эффект",
        danger_level: "высокий"
      },
      {
        name: "Чешуйки саламандры",
        description: "Усиливают свойства зелий, связанных с огненной магией",
        danger_level: "средний"
      },
      {
        name: "Клыки змеи",
        description: "Используются в ядовитых или антидотных зельях",
        danger_level: "высокий"
      },
      {
        name: "Пучок мандрагоры",
        description: "Ключевой компонент для оживления или исцеления",
        danger_level: "средний"
      },
      {
        name: "Зуб базилиска",
        description: "Мощный, но опасный компонент",
        danger_level: "высокий"
      },
      {
        name: "Лепестки ночного цветка",
        description: "Усиливают магию луны",
        danger_level: "средний"
      },
      {
        name: "Туманное сало",
        description: "Используется для зелий невидимости и туманности",
        danger_level: "средний"
      },
      {
        name: "Шерсть чёрного кота",
        description: "Используется для зелий удачи и оберегов",
        danger_level: "низкий"
      },
      {
        name: "Песок с берегов Грета",
        description: "Влияет на сновидения и магическую память",
        danger_level: "средний"
      },
      {
        name: "Корень асфоделя",
        description: "Используется в оборотных и успокаивающих зельях",
        danger_level: "средний"
      },
      {
        name: "Листья дикого наперстянника",
        description: "Добавляют зелью волшебную стойкость",
        danger_level: "высокий"
      },
      {
        name: "Болотный мох",
        description: "Усиливает свойства зелий невидимости",
        danger_level: "низкий"
      },
      {
        name: "Плоды омелы",
        description: "Используются для зелий предсказания",
        danger_level: "средний"
      },
      {
        name: "Цветы лунной лилии",
        description: "Используются для зелий сна и спокойствия",
        danger_level: "низкий"
      },
      {
        name: "Порошок слизи ночного шершня",
        description: "Силит зелья и замедляет действие",
        danger_level: "средний"
      },
      {
        name: "Листья ночной сирени",
        description: "Используются для зельев, связанных с умиротворением",
        danger_level: "низкий"
      },
      {
        name: "Сок из яблок Сириуса",
        description: "Применяется для зелий любви",
        danger_level: "средний"
      },
      {
        name: "Мох паучьего дерева",
        description: "Применяется в зелях для излечения боли",
        danger_level: "средний"
      },
      {
        name: "Корень водяной феи",
        description: "Ускоряет действие зелий",
        danger_level: "низкий"
      },
      {
        name: "Листья зеленого дуба",
        description: "Используются в защитных зельях",
        danger_level: "низкий"
      },
      {
        name: "Цветы белой магнолии",
        description: "Для зелий спокойствия и восстановления",
        danger_level: "низкий"
      },
      {
        name: "Эссенция очного яблока",
        description: "Используется в тёмных и сложных зельях",
        danger_level: "средний"
      },
      {
        name: "Сок хищного дерева",
        description: "Для зелий ловкости и силы",
        danger_level: "средний"
      },
      {
        name: "Пыльца фей",
        description: "Добавляет легкость и ускорение",
        danger_level: "низкий"
      },
      {
        name: "Зола флоббер-червя",
        description: "Стабилизирует зелье",
        danger_level: "низкий"
      },
      {
        name: "Жидкость из глаз жабы",
        description: "Используется для антидотов и защиты от магии",
        danger_level: "средний"
      },
      {
        name: "Эссенция ночного дождя",
        description: "Усиливает магию луны",
        danger_level: "средний"
      },
      {
        name: "Кровь огненного тролля",
        description: "Для зелий огненной магии",
        danger_level: "высокий"
      },
      {
        name: "Экстракт из кракена",
        description: "Добавляет мощные свойства воде",
        danger_level: "высокий"
      },
      {
        name: "Сироп с паучьей нити",
        description: "Используется в зелиях ловкости и силы",
        danger_level: "средний"
      },
      {
        name: "Проклятая кровь вампира",
        description: "Для зелий бессмертия или проклятий",
        danger_level: "высокий"
      },
      {
        name: "Молоко медовой ночи",
        description: "Используется для зелий вечного сна",
        danger_level: "средний"
      },
      {
        name: "Волос единорога",
        description: "Символ чистоты, используется в зелиях добра",
        danger_level: "низкий"
      },
      {
        name: "Паутинка акромантула",
        description: "Для вязких зелий или ловушек",
        danger_level: "высокий"
      },
      {
        name: "Капля дождя, собранного в полнолуние",
        description: "Добавляет магическую энергию",
        danger_level: "низкий"
      },
      {
        name: "Кусочек звёздного света",
        description: "Для самых таинственных зелий",
        danger_level: "средний"
      },
      {
        name: "Коготь гриффона",
        description: "Добавляет силы и ярости зелью",
        danger_level: "средний"
      },
      {
        name: "Листок устричного дерева",
        description: "Для зелий защиты от магических воздействий",
        danger_level: "средний"
      },
      {
        name: "Шерстяное перо горного орла",
        description: "Применяется для зелий скорости и ловкости",
        danger_level: "низкий"
      },
      {
        name: "Молоко летучей мыши",
        description: "Используется в зельях невидимости",
        danger_level: "средний"
      },
      {
        name: "Глаз ночной совы",
        description: "Для усиления магии зрения",
        danger_level: "средний"
      },
      {
        name: "Слизь подземных червей",
        description: "Для зелий подземных путешествий",
        danger_level: "средний"
      },
      {
        name: "Клыки диких псов",
        description: "Добавляют силу и бешенство",
        danger_level: "высокий"
      }
    ]);
    await queryInterface.bulkInsert("Secret_Ingredients", [
      /* Potion of Luck */
      { secret_id: 1, ingredient_id: 12 }, // шерсть чёрного кота
      { secret_id: 1, ingredient_id: 23 }, // пыльца фей
      { secret_id: 1, ingredient_id: 21 }, // листья зеленого дуба
      { secret_id: 1, ingredient_id: 33 }, // капля дождя в полнолуние

      /* Potion of Tranquility */
      { secret_id: 2, ingredient_id: 22 }, // цветы белой магнолии
      { secret_id: 2, ingredient_id: 17 }, // листья ночной сирени
      { secret_id: 2, ingredient_id: 15 }, // цветы лунной лилии
      { secret_id: 2, ingredient_id: 18 }, // сок из яблок Сириуса

      /* Potion of Invisibility */
      { secret_id: 3, ingredient_id: 11 }, // туманное сало
      { secret_id: 3, ingredient_id: 28 }, // молоко летучей мыши
      { secret_id: 3, ingredient_id: 13 }, // болотный мох
      { secret_id: 3, ingredient_id: 8 }, // пучок мандрагоры

      /* Potion of Warding */
      { secret_id: 4, ingredient_id: 3 }, // рог единорога
      { secret_id: 4, ingredient_id: 14 }, // листья дикого наперстянника
      { secret_id: 4, ingredient_id: 4 }, // колючки дикобраза
      { secret_id: 4, ingredient_id: 27 }, // шерстяное перо горного орла

      /* Potion of Love */
      { secret_id: 5, ingredient_id: 18 }, // сок из яблок Сириуса
      { secret_id: 5, ingredient_id: 22 }, // цветы белой магнолии
      { secret_id: 5, ingredient_id: 19 }, // мох паучьего дерева
      { secret_id: 5, ingredient_id: 31 }, // волос единорога

      /* Potion of Flame */
      { secret_id: 6, ingredient_id: 6 }, // чешуйки саламандры
      { secret_id: 6, ingredient_id: 7 }, // кровь огненного тролля
      { secret_id: 6, ingredient_id: 14 }, // листья дикого наперстянника
      { secret_id: 6, ingredient_id: 34 }, // кусочек звёздного света
      { secret_id: 6, ingredient_id: 1 }, // корень асфоделя
      { secret_id: 6, ingredient_id: 8 }, // пучок мандрагоры
      { secret_id: 6, ingredient_id: 26 }, // эссенция ночного дождя

      /* Potion of Shielding */
      { secret_id: 7, ingredient_id: 9 }, // зуб базилиска
      { secret_id: 7, ingredient_id: 36 }, // лист устричного дерева
      { secret_id: 7, ingredient_id: 2 }, // слёзы феникса
      { secret_id: 7, ingredient_id: 25 }, // кровь жабы
      { secret_id: 7, ingredient_id: 23 }, // пыльца фей
      { secret_id: 7, ingredient_id: 21 }, // листья зеленого дуба
      { secret_id: 7, ingredient_id: 27 }, // перо горного орла

      /* Potion of Healing */
      { secret_id: 8, ingredient_id: 19 }, // мох паучьего дерева
      { secret_id: 8, ingredient_id: 2 }, // слёзы феникса
      { secret_id: 8, ingredient_id: 8 }, // пучок мандрагоры
      { secret_id: 8, ingredient_id: 30 }, // молоко медовой ночи
      { secret_id: 8, ingredient_id: 20 }, // корень водяной феи
      { secret_id: 8, ingredient_id: 13 }, // мох болотный
      { secret_id: 8, ingredient_id: 7 }, // кровь огненного тролля

      /* Potion of Immortality */
      { secret_id: 9, ingredient_id: 29 }, // проклятая кровь вампира
      { secret_id: 9, ingredient_id: 9 }, // зуб базилиска
      { secret_id: 9, ingredient_id: 7 }, // кровь огненного тролля
      { secret_id: 9, ingredient_id: 10 }, // клыки змеи
      { secret_id: 9, ingredient_id: 32 }, // паутинка акромантулы
      { secret_id: 9, ingredient_id: 37 }, // экстракт из кракена
      { secret_id: 9, ingredient_id: 24 }, // эссенция очного яблока
      { secret_id: 9, ingredient_id: 2 }, // слёзы феникса
      { secret_id: 9, ingredient_id: 27 }, // перо горного орла
      { secret_id: 9, ingredient_id: 38 }, // сироп с паучьей нити

      /* Potion of Prophecy */
      { secret_id: 10, ingredient_id: 16 }, // плоды омелы
      { secret_id: 10, ingredient_id: 26 }, // эссенция ночного дождя
      { secret_id: 10, ingredient_id: 33 }, // капля дождя в полнолуние
      { secret_id: 10, ingredient_id: 9 }, // зуб базилиска
      { secret_id: 10, ingredient_id: 11 }, // туманное сало
      { secret_id: 10, ingredient_id: 1 }, // корень асфоделя
      { secret_id: 10, ingredient_id: 19 }, // мох паучьего дерева
      { secret_id: 10, ingredient_id: 35 }, // сок хищного дерева
      { secret_id: 10, ingredient_id: 8 } // пучок мандрагоры
    ]);
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

