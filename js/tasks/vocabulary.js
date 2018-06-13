
const vocabulary = {
  "table": ["стол", "столик", "таблица"],
  "hand": ["рука"],
  "think": ["думать", "считать", "полагать"],
  "well": ["хорошо", "отлично", "прекрасно"],
  "people": ["люди", "нация", "народ"],
  "also": ["тоже", "также"],
  "behind": ["за", "сзади", "позади"],
  "water": ["вода"],
  "hear": ["слышать", "слушать"],
  "kid": ["ребенок", "ребёнок", "малыш"],
  "kind": ["вид", "сорт", "класс", "разряд"],
  "half": ["половина"],
  "young": ["молодой", "юный", "маленький"],
  "answer": ["ответ", "отвечать", "откликаться"],
  "suddenly": ["вдруг", "неожиданно", "внезапно", "скоропостижно"],
  "smile": ["улыбка", "улыбаться", "смеяться"],
  "change": ["менять", "изменять", "изменение", "замена"],
  "feeling": ["чувство", "ощущение", "эмоция", "впечатление"],
  "fear": ["страх", "опасение", "боязнь", "ужас", "бояться"],
  "follow": ["следовать", "следить", "соответствовать"],
  "hope": ["надеяться", "рассчитывать", "надежда", "ожидание"],
  "wall": ["стена", "стенка", "перегородка", "ограда"],
  "held": ["удерживаемый", "задержанный", "проведенный", "проводить", "провести", "держать", "удерживать"],
  "inside": ["внутри", "внутренность", "внутрь", "внутренний"],
  "case": ["случай", "дело", "обстоятельство", "пример"],
  "power": ["сила", "энергия", "мощь", "мощность"],
  "dream": ["мечта", "сон", "мечтание", "мечтать"],
  "guess": ["гадать", "догадаться", "угадать", "додуматься", "догадка", "предположение"],
  "fell": ["валить", "свалить", "рубить", "повалить", "шкура", "мех"],
  "probably": ["наверное", "возможно", "наверно", "похоже", "вероятно"],
  "glass": ["стекло", "зеркало", "стакан", "стеклянный"],
  "trouble": ["тревога", "проблема", "трудность", "беспокойство", "смущать"],
  "lost": ["растеряться", "потерянный", "терять", "утерянный"],
  "scream": ["кричать", "вопить", "визжать", "крикнуть", "крик", "визг", "орать"],
  "touch": ["касаться", "трогать", "касание", "дотрагиваться"],
  "large": ["большой", "крупный", "значительный"],
  "huge": ["огромный", "громадный", "гигантский", "большой"],
  "wood": ["древесина", "дерево"],
  "wrong": ["неправильный", "ошибочный", "ошибка", "неправильно"],
  "sense": ["чувство", "ощущение", "чувствовать", "ощущать", "смысл"],
  "land": ["земля", "суша", "почва"],
  "hot": ["горячий", "жаркий", "жарко"],
  "become": ["стать", "становиться", "оказаться"],
  "outside": ["внешний", "наружный", "за пределами", "снаружи"],
  "listen": ["слушать", "выслушивать", "прислушиваться"],
  "wind": ["ветер"],
  "smell": ["запах", "аромат", "обоняние", "чуять", "чувствовать"],
  "chair": ["стул", "кресло"],
  "hill": ["холм", "гора", "возвышенность", "возвышение"],
  "reason": ["причина", "повод", "разум", "рассуждать", "размышлять"],
  "ground": ["земля", "почва", "основание"],
  "chance": ["вероятность", "шанс", "рискнуть", "случайный"],
  "story": ["история", "рассказ", "сюжет", "повесть"],
  "star": ["звезда", "звездочка", "звездный"],
  "except": ["исключать", "кроме", "за исключением", "возражать"],
  "roll": ["катить", "катиться", "вертеть", "рулон"],
  "often": ["часто", "зачастую", "много раз"],
  "strange": ["странный", "чужой", "незнакомый", "удивительный"],
  "bring": ["приносить", "приводить", "привозить", "доставлять"],
  "pain": ["боль", "страдание", "горе", "огорчение"],
  "nod": ["кивнуть", "кивать", "кивок"],
  "afraid": ["испуганный", "бояться", "напуганный"],
  "notice": ["уведомление", "заметка", "извещение", "внимание", "замечать", "отмечать"],
  "shut": ["закрыть", "закрытый", "закрывать", "запирать", "запертый"],
  "shadow": ["тень", "призрак", "затенять", "мрак"],
  "instead": ["вместо", "взамен"],
  "store": ["магазин", "склад", "запас", "хранить"],
  "doubt": ["сомнение", "сомневаться", "подозревать"],
  "force": ["сила", "войска", "мощь", "заставлять"],
  "dress": ["платье", "одежда", "одеваться", "одевать"],
  "different": ["различный", "разный", "другой", "необычный", "непохожий"],
  "fill": ["заполнение", "заполнять", "наполнять", "заполнить"],
  "drink": ["пить", "питье", "напиток", "выпивать"],
  "fat": ["жир", "жирный", "толстый", "пухлый"],
  "silence": ["молчание", "тишина", "замолчать"],
  "middle": ["средний", "середина"],
  "crazy": ["сумасшедший", "безумный", "псих", "фанатик"],
  "smoke": ["курить", "дымить", "дым"],
  "promise": ["обещать", "обещание", "уверять", "сулить"],
  "nice": ["красивый", "приятный", "хороший", "славный", "милый", "добрый"],
  "quiet": ["тихий", "спокойный", "тихо", "успокаивать", "спокойствие"],
  "terrible": ["ужасный", "страшный", "кошмарный", "жуткий"],
  "party": ["вечеринка", "команда", "группа", "партия"],
  "key": ["ключ", "ключевой"],
  "quick": ["быстрый", "скорый", "быстро", "скоро"],
  "silent": ["тихий", "молчаливый", "немой", "умалчивающий"],
  "direction": ["направление", "руководство", "область", "линия"],
  "beautiful": ["красивый", "прекрасный", "превосходный", "красивое", "прекрасное", "красиво"],
  "wild": ["дикий", "одичалый", "бешеный", "безумный"],
  "experience": ["опыт", "стаж", "впечатление", "переживание"],
  "forget": ["забывать", "не помнить", "забыть", "упустить"],
  "agree": ["соглашаться", "договариваться", "согласовывать", "утверждать"],
  "fresh": ["свежий", "новый", "свежесть", "натуральный", "освежать"],
  "join": ["присоединить", "соединить", "соединение", "вступать", "соединяться", "соединиться", "соединять"],
  "offer": ["предложение", "предлагать", "попытка", "продажа"],
  "discover": ["открывать", "обнаруживать", "находить", "раскрывать", "делать открытие", "узнавать"],
  "hat": ["шляпа", "шапка", "надевать шляпу", "надевать шапку"],
}


export default vocabulary;
