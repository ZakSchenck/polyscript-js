// Mapping English keywords to Spanish
const spanishKeywordMap = {
    await: 'esperar', //* 
    break: 'romper', //* 
    case: 'caso', //* 
    catch: 'capturar', //* 
    class: 'clase', //* 
    constructor: 'constructor', //* 
    continue: 'continuar', //* 
    debugger: 'depurador', //* 
    default: 'porDefecto', //* 
    delete: 'eliminar', //* 
    let: 'dejar', //* 
    do: 'hacer',
    else: 'sino', //* 
    export: 'exportar',
    extends: 'extender',
    false: 'falso', //* 
    finally: 'finalmente',
    for: 'para', //* 
    function: 'funcion', //* 
    if: 'si', //* 
    import: 'importar',
    in: 'en', //* 
    of: 'de', //* 
    instanceof: 'instanciaDe',
    new: 'nuevo',
    null: 'nulo', //* 
    return: 'devolver', //* 
    super: 'super',
    switch: 'cambiar', //* 
    this: 'esto',
    throw: 'lanzar',
    true: 'verdadero', //* 
    try: 'intentar', //* 
    typeof: 'tipoDe', //* 
    var: 'var', //* 
    const: 'const', //* 
    void: 'vacío', //* 
    while: 'mientras', //* 
    with: 'con',
    yield: 'rendimiento',
    length: 'longitud', //* 
    async: 'asíncrono', //+
    memberExpressions: {
        length: 'longitud',
        push: 'empujar',
        pop: 'sacar',
        shift: 'desplazar',
        unshift: 'desplazarInicio',
        splice: 'empalmar',
        slice: 'cortar',
        map: 'mapa',
        filter: 'filtrar',
        reduce: 'reducir',
        forEach: 'porCada',
        indexOf: 'índiceDe',
        find: 'encontrar',
        sort: 'ordenar',
        concat: 'concatenar',
        charAt: 'caracterEn',
        toLowerCase: 'aMinúsculas',
        toUpperCase: 'aMayúsculas',
        substring: 'subcadena',
        split: 'dividir',
        trim: 'recortar',
        replace: 'reemplazar',
        includes: 'incluye',
        startsWith: 'empiezaCon',
        endsWith: 'terminaCon',
        random: 'aleatorio',
        floor: 'suelo',
        ceil: 'techo',
        round: 'redondear',
        max: 'máximo',
        minimum: 'mínimo',
        sqrt: 'raízCuadrada',
        pow: 'potencia',
        PI: 'PI',
        E: 'E',
        getFullYear: 'obtenerAñoCompleto',
        getMonth: 'obtenerMes',
        getDate: 'obtenerFecha',
        getHours: 'obtenerHoras',
        getMinutes: 'obtenerMinutos',
        getSeconds: 'obtenerSegundos',
        getElementById: 'obtenerElementoPorId',
        getElementByClassName: 'obtenerElementoPorClase',
        getElementByTagName: 'obtenerElementoPorEtiqueta',
        querySelector: 'selectorConsulta',
        querySelectorAll: 'selectorConsultaTodos',
        innerHTML: 'htmlInterno',
        style: 'estilo',
        appendChild: 'añadirHijo',
        removeChild: 'eliminarHijo',
        addEventListener: 'añadirEscuchadorDeEventos',
        log: 'registro',
        error: 'error',
        warn: 'advertir',
        info: 'información',
        debug: 'depurar',
        parse: 'analizar',
        stringify: 'convertirAString'
    }
};

module.exports = { spanishKeywordMap }
