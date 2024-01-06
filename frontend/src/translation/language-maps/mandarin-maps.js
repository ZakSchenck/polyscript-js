// Mapping English keywords to Mandarin
const mandarinKeywordMap = {
    await: '等待', //* 
    break: '中断', //* 
    case: '情况', //* 
    catch: '捕获', //* 
    class: '类', //* 
    constructor: '构造函数', //* 
    continue: '继续', //* 
    debugger: '调试器', //* 
    default: '默认', //* 
    delete: '删除', //* 
    let: '让', //* 
    do: '做', 
    else: '否则', //* 
    export: '导出', 
    extends: '扩展', 
    false: '假', //* 
    finally: '最终', 
    for: '为', //* 
    function: '函数', //* 
    if: '如果', //* 
    import: '导入', 
    in: '在', //* 
    of: '的', //* 
    instanceof: '实例是', 
    new: '新', 
    null: '空', //* 
    return: '返回', //* 
    super: '超', 
    switch: '开关', //* 
    this: '这个', 
    throw: '抛出', 
    true: '真', //* 
    try: '尝试', //* 
    typeof: '类型是', //* 
    var: '变量', //* 
    const: '常量', //* 
    void: '无', //* 
    while: '当', //* 
    with: '与', 
    yield: '产出', 
    length: '长度', //* 
    async: '异步', //+ 
    memberExpressions: {
        length: '长度', 
        push: '推', 
        pop: '弹出', 
        shift: '移位', 
        unshift: '取消移位', 
        splice: '切片', 
        slice: '切割', 
        map: '映射', 
        filter: '过滤', 
        reduce: '减少', 
        forEach: '每个', 
        indexOf: '索引', 
        find: '查找', 
        sort: '排序', 
        concat: '连接', 
        charAt: '字符位置', 
        toLowerCase: '转换为小写', 
        toUpperCase: '转换为大写', 
        substring: '子字符串', 
        split: '分割', 
        trim: '修剪', 
        replace: '替换', 
        includes: '包含', 
        startsWith: '以...开始', 
        endsWith: '以...结束', 
        random: '随机', 
        floor: '向下取整', 
        ceil: '向上取整', 
        round: '四舍五入', 
        max: '最大', 
        minimum: '最小', 
        sqrt: '平方根', 
        pow: '指数', 
        PI: 'π', 
        E: 'e', 
        getFullYear: '获取完整年份', 
        getMonth: '获取月份', 
        getDate: '获取日期', 
        getHours: '获取小时', 
        getMinutes: '获取分钟', 
        getSeconds: '获取秒数', 
        getElementById: '通过ID获取元素', 
        getElementByClassName: '通过类名获取元素', 
        getElementByTagName: '通过标签名获取元素', 
        querySelector: '查询选择器', 
        querySelectorAll: '查询所有选择器', 
        innerHTML: '内部HTML', 
        style: '样式', 
        appendChild: '添加子元素', 
        removeChild: '移除子元素', 
        addEventListener: '添加事件监听器', 
        log: '日志', 
        error: '错误', 
        warn: '警告', 
        info: '信息', 
        debug: '调试', 
        parse: '解析', 
        stringify: '字符串化'
    }
};

module.exports = { mandarinKeywordMap }
