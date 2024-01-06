// Mapping English keywords to Japanese
const japaneseKeywordMap = {
    await: '待機', //* 
    break: '中断', //* 
    case: 'ケース', //* 
    catch: 'キャッチ', //* 
    class: 'クラス', //* 
    constructor: 'コンストラクタ', //* 
    continue: '続ける', //* 
    debugger: 'デバッガー', //* 
    default: 'デフォルト', //* 
    delete: '削除', //* 
    let: 'レット', //* 
    do: '実行', 
    else: 'その他', //* 
    export: 'エクスポート', 
    extends: '継承', 
    false: '偽', //* 
    finally: '最終的に', 
    for: 'ため', //* 
    function: '関数', //* 
    if: 'もし', //* 
    import: 'インポート', 
    in: '中', //* 
    of: 'の', //* 
    instanceof: 'インスタンスである', 
    new: '新しい', 
    null: 'ヌル', //* 
    return: '戻り値', //* 
    super: 'スーパー', 
    switch: 'スイッチ', //* 
    this: 'これ', 
    throw: '投げる', 
    true: '真', //* 
    try: '試す', //* 
    typeof: '型', //* 
    var: '変数', //* 
    const: '定数', //* 
    void: '無', //* 
    while: 'ワイルド', //* 
    with: 'with', 
    yield: '生成する', 
    length: '長さ', //* 
    async: '非同期', //+ 
    memberExpressions: {
        length: '長さ', 
        push: 'プッシュ', 
        pop: 'ポップ', 
        shift: 'シフト', 
        unshift: 'アンシフト', 
        splice: 'スプライス', 
        slice: 'スライス', 
        map: 'マップ', 
        filter: 'フィルタ', 
        reduce: '縮小', 
        forEach: 'それぞれ', 
        indexOf: 'インデックス', 
        find: '見つける', 
        sort: 'ソート', 
        concat: '連結', 
        charAt: '文字位置', 
        toLowerCase: '小文字に変換', 
        toUpperCase: '大文字に変換', 
        substring: '部分文字列', 
        split: '分割', 
        trim: 'トリム', 
        replace: '置換', 
        includes: '含む', 
        startsWith: 'で始まる', 
        endsWith: 'で終わる', 
        random: 'ランダム', 
        floor: '切り捨て', 
        ceil: '切り上げ', 
        round: '四捨五入', 
        max: '最大', 
        minimum: '最小', 
        sqrt: '平方根', 
        pow: 'べき乗', 
        PI: 'π', 
        E: 'e', 
        getFullYear: 'フル年を取得', 
        getMonth: '月を取得', 
        getDate: '日を取得', 
        getHours: '時間を取得', 
        getMinutes: '分を取得', 
        getSeconds: '秒を取得', 
        getElementById: 'IDで要素を取得', 
        getElementByClassName: 'クラス名で要素を取得', 
        getElementByTagName: 'タグ名で要素を取得', 
        querySelector: 'クエリセレクタ', 
        querySelectorAll: 'すべてのクエリセレクタ', 
        innerHTML: 'インナーHTML', 
        style: 'スタイル', 
        appendChild: '子要素を追加', 
        removeChild: '子要素を削除', 
        addEventListener: 'イベントリスナーを追加', 
        log: 'ログ', 
        error: 'エラー', 
        warn: '警告', 
        info: '情報', 
        debug: 'デバッグ', 
        parse: '解析', 
        stringify: '文字列化'
    }
};

module.exports = { japaneseKeywordMap }
