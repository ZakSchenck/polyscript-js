// Mapping English keywords to Dutch
const dutchKeywordMap = {
    await: 'wachten', //*
    break: 'breken', //*
    case: 'geval', //*
    catch: 'vangen', //*
    class: 'klasse', //*
    constructor: 'bouwer', //*
    continue: 'doorgaan',
    debugger: 'debugger',
    default: 'standaard',
    delete: 'verwijderen',
    let: 'laat', //*
    do: 'doe',
    else: 'anders', //*
    export: 'exporteren',
    extends: 'uitbreiden',
    false: 'onwaar', //*
    finally: 'eindelijk',
    for: 'voor', //*
    function: 'functie', //*
    if: 'als', //*
    import: 'importeren',
    in: 'in',
    of: 'van',
    instanceof: 'instantievan',
    new: 'nieuw',
    null: 'null', //*
    return: 'terugkeer', //*
    super: 'super',
    switch: 'schakelen', //*
    this: 'dit',
    throw: 'gooien',
    true: 'waar', //*
    try: 'proberen', //*
    typeof: 'typeof',
    var: 'var', //*
    const: 'const', //*
    void: 'leegte',
    while: 'terwijl',
    with: 'met',
    yield: 'opbrengst',
    length: 'lengte', //*
    async: 'asynchroon', //+
    memberExpressions: {
        length: 'lengte',
        push: 'duw',
        pop: 'knal',
        shift: 'verschuiving',
        unshift: 'ontschakelen',
        splice: 'splitsen',
        slice: 'plak',
        map: 'kaart',
        filter: 'filter',
        reduce: 'verminderen',
        forEach: 'voorElk',
        indexOf: 'indexVan',
        find: 'vinden',
        sort: 'soort',
        concat: 'concat',
        charAt: 'karakterOp',
        toLowerCase: 'naarKleineLetters',
        toUpperCase: 'naarHoofdletters',
        substring: 'deelstring',
        split: 'gesplitst',
        trim: 'trimmen',
        replace: 'vervangen',
        includes: 'omvat',
        startsWith: 'begintMet',
        endsWith: 'eindigtMet',
        random: 'willekeurig',
        floor: 'vloer',
        ceil: 'plafond',
        round: 'rond',
        max: 'maximaal',
        minimum: 'minimum',
        sqrt: 'vierkantswortel',
        pow: 'macht',
        PI: 'PI',
        E: 'E',
        getFullYear: 'krijgEenVolledigJaar',
        getMonth: 'maandKrijgen',
        getDate: 'krijgDatum',
        getHours: 'urenKrijgen',
        getMinutes: 'minutenKrijgen',
        getSeconds: 'secondenKrijgen',
        getElementById: 'krijgElementOpId',
        getElementByClassName: 'haalElementOpKlassenaamOp',
        getElementByTagName: 'haalElementOpTagnaamOp',
        querySelector: 'vraagkiezer',
        querySelectorAll: 'vraagkiezerAlle',
        innerHTML: 'binnenHTML',
        style: 'stijl',
        appendChild: 'kindToevoegen',
        removeChild: 'kindVerwijderen',
        addEventListener: 'gebeurtenislistenerToevoegen',
        log: 'log',
        error: 'fout',
        warn: 'waarschuwen',
        info: 'informatie',
        debug: 'debuggen',
        parse: 'ontleden',
        stringify: 'stringeren'
    }
};

module.exports = { dutchKeywordMap }