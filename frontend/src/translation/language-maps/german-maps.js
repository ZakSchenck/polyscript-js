// Mapping English keywords to German
const germanKeywordMap = {
    await: 'erwarten', //*
    break: 'brechen', //*
    case: 'fall', //*
    catch: 'fangen', //*
    class: 'klasse', //*
    constructor: 'konstruktor', //*
    continue: 'fortfahren', //*
    debugger: 'debugger', //*
    default: 'standard', //*
    delete: 'löschen', //*
    let: 'lass', //*
    do: 'tun',
    else: 'sonst', //*
    export: 'exportieren',
    extends: 'erweitern',
    false: 'falsch', //*
    finally: 'schließlich',
    for: 'für', //*
    function: 'funktion', //*
    if: 'wenn', //*
    import: 'importieren',
    in: 'in', //*
    of: 'von', //*
    instanceof: 'instanzvon',
    new: 'neu',
    null: 'null', //*
    return: 'zurückkehren', //*
    super: 'super',
    switch: 'wechseln', //*
    this: 'dies',
    throw: 'werfen',
    true: 'wahr', //*
    try: 'versuchen', //*
    typeof: 'typeof', //*
    var: 'var', //*
    const: 'const', //*
    void: 'leer', //*
    while: 'während', //*
    with: 'mit',
    yield: 'ausbeute',
    length: 'länge', //*
    async: 'asynchron', //+
    memberExpressions: {
        length: 'länge',
        push: 'schieben',
        pop: 'entfernen',
        shift: 'verschieben',
        unshift: 'hinzufügen',
        splice: 'ausschneiden',
        slice: 'scheibe',
        map: 'karte',
        filter: 'filtern',
        reduce: 'reduzieren',
        forEach: 'fürJedes',
        indexOf: 'indexVon',
        find: 'finden',
        sort: 'sortieren',
        concat: 'verknüpfen',
        charAt: 'zeichenBei',
        toLowerCase: 'zuKleinbuchstaben',
        toUpperCase: 'zuGroßbuchstaben',
        substring: 'teilstring',
        split: 'teilen',
        trim: 'trimmen',
        replace: 'ersetzen',
        includes: 'beinhaltet',
        startsWith: 'beginntMit',
        endsWith: 'endetMit',
        random: 'zufällig',
        floor: 'boden',
        ceil: 'decke',
        round: 'runden',
        max: 'maximum',
        minimum: 'minimum',
        sqrt: 'wurzel',
        pow: 'potenz',
        PI: 'PI',
        E: 'E',
        getFullYear: 'ganzesJahrErhalten',
        getMonth: 'monatErhalten',
        getDate: 'datumErhalten',
        getHours: 'stundenErhalten',
        getMinutes: 'minutenErhalten',
        getSeconds: 'sekundenErhalten',
        getElementById: 'elementNachIdHolen',
        getElementByClassName: 'elementNachKlassennameHolen',
        getElementByTagName: 'elementNachTagnameHolen',
        querySelector: 'abfrageauswahl',
        querySelectorAll: 'abfrageauswahlAlle',
        innerHTML: 'innerHTML',
        style: 'stil',
        appendChild: 'kindHinzufügen',
        removeChild: 'kindEntfernen',
        addEventListener: 'ereignislistenerHinzufügen',
        log: 'protokoll',
        error: 'fehler',
        warn: 'warnen',
        info: 'info',
        debug: 'debuggen',
        parse: 'parsen',
        stringify: 'zeichenkette'
    }
};

module.exports = { germanKeywordMap }
