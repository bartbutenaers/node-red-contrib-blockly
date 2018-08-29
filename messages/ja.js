// =========================================================================================
// Node-Red blocks
// =========================================================================================
Blockly.Msg.NODE_OBJECT_GET_JSON = "%1 のプロパティ %2 を取得";
Blockly.Msg.NODE_OBJECT_GET_JSON_TOOLTIP = "オブジェクトのプロパティを取得";
Blockly.Msg.NODE_OBJECT_SET_JSON = "%1 のプロパティ %2 を %3 にセット";
Blockly.Msg.NODE_OBJECT_SET_JSON_TOOLTIP = "オブジェクトのプロパティをセット";
Blockly.Msg.NODE_LOG = "%2 ログレベル指定で %1 をログ出力";
Blockly.Msg.NODE_LOG_TOOLTIP = "Node-RED function APIでログ出力";
Blockly.Msg.NODE_LOG_LOG = "ログ出力"; 
Blockly.Msg.NODE_LOG_WARNING = "警告";
Blockly.Msg.NODE_LOG_ERROR = "エラー";
Blockly.Msg.NODE_LOG_DEBUG = "デバッグ";
Blockly.Msg.NODE_LOG_TRACE = "トレース";
Blockly.Msg.NODE_MSG = "msg";
Blockly.Msg.NODE_MSG_TOOLTIP = "Node-REDからの入力メッセージを取得";
Blockly.Msg.NODE_REMOVE_STATUS = "ノードステータスを削除";
Blockly.Msg.NODE_REMOVE_STATUS_TOOLTIP = "Node-RED function APIでノードステータスを削除";
Blockly.Msg.NODE_CLONE = "%1 を複製";
Blockly.Msg.NODE_CLONE_TOOLTIP = "Node-RED function APIでメッセージを複製";
Blockly.Msg.NODE_STATUS = "文字列 %1 色 %2 シェイプ %3 でノードステータスをセット";
Blockly.Msg.NODE_STATUS_TOOLTIP = "Node-RED function APIでノードステータスをセット";
Blockly.Msg.NODE_STATUS_RING = "リング"; 
Blockly.Msg.NODE_STATUS_DOT = "ドット";
Blockly.Msg.NODE_PROPERTIES = "ノード %1 のプロパティを取得";
Blockly.Msg.NODE_PROPERTIES_TOOLTIP = "Node-RED function APIで指定したノードのプロパティを取得";
Blockly.Msg.NODE_PROPERTIES_ID = "ノード識別ID";
Blockly.Msg.NODE_PROPERTIES_NAME = "ノード名称";
Blockly.Msg.NODE_FLOW_MEMORY = "flowコンテキスト";
Blockly.Msg.NODE_FLOW_MEMORY_TOOLTIP = "Node-REDのFlowコンテキストデータにアクセス";
Blockly.Msg.NODE_CONTEXT_MEMORY = "(ノード)コンテキスト";
Blockly.Msg.NODE_CONTEXT_MEMORY_TOOLTIP = "Node-REDの(ノード)コンテキストデータにアクセス";
Blockly.Msg.NODE_GLOBAL_MEMORY = "globalコンテキスト";
Blockly.Msg.NODE_GLOBAL_MEMORY_TOOLTIP = "Node-REDのGlobalコンテキストデータにアクセス";
Blockly.Msg.NODE_SEND = "%1 を出力ポート %2 に送信";
Blockly.Msg.NODE_SEND_TOOLTIP = "Node-RED function APIで出力メッセージを送信";
Blockly.Msg.NODE_SEND_WARNING = "ループ中にメッセージを送信するとき、メッセージごとに改行コードが付加されます!";
Blockly.Msg.NODE_RETURN_MESSAGE = "%1 を出力ポート %2 に出力し終了";
Blockly.Msg.NODE_RETURN_MESSAGE_TOOLTIP = "出力メッセージを送信して、ノード処理を終了します";
Blockly.Msg.NODE_RETURN = "戻る";
Blockly.Msg.NODE_RETURN_TOOLTIP = "処理を終了し戻ります(メッセージは送信しません)";
Blockly.Msg.NODE_CLOSE = "ノードが終了する時";
Blockly.Msg.NODE_CLOSE_1 = "%1";
Blockly.Msg.NODE_CLOSE_TOOLTIP = "ノードが終了する時に実行されるステートメント";

// =========================================================================================
// Buffer blocks
// =========================================================================================
Blockly.Msg.BUFFER_FROM_STRING = "エンコード %2 で文字列 %1 から Buffer生成";
Blockly.Msg.BUFFER_FROM_STRING_TOOLTIP = "文字列からBufferを生成";
Blockly.Msg.BUFFER_TO_STRING = "エンコード %2 で Buffer %1 から文字列を生成";
Blockly.Msg.BUFFER_TO_STRING_TOOLTIP = " Bufferを文字列に変換";
Blockly.Msg.BUFFER_LENGTH = "Buffer %1 の長さを取得";
Blockly.Msg.BUFFER_LENGTH_TOOLTIP = "Bufferの長さをバイトで取得";
Blockly.Msg.BUFFER_ALLOC = "長さ %1 のBufferを生成";
Blockly.Msg.BUFFER_ALLOC_TOOLTIP = "指定した長さでBufferを生成";
Blockly.Msg.BUFFER_FILL = "値 %2 でBuffer %1 を満たす";
Blockly.Msg.BUFFER_FILL_TOOLTIP = "指定した値でBufferを満たす";
Blockly.Msg.BUFFER_CHECK = "%1 がBufferかチェック";
Blockly.Msg.BUFFER_CHECK_TOOLTIP = "入力値がBufferかどうかチェック";
Blockly.Msg.BUFFER_COPY = "Buffer %1 から %2 にコピー";
Blockly.Msg.BUFFER_COPY_TOOLTIP = "最初のBufferを次のBufferにコピー";
Blockly.Msg.BUFFER_EMPTY = "空のBuffer";
Blockly.Msg.BUFFER_EMPTY_TOOLTIP = "空のBufferを作る(サイズゼロのBuffer)";
Blockly.Msg.BUFFER_BYTE = "バイト値 %1";
Blockly.Msg.BUFFER_BYTE_TOOLTIP = "バイト値";
Blockly.Msg.BUFFER_GET_INDEX = "Buffer %2 の %1 バイト目の文字を取得";
Blockly.Msg.BUFFER_GET_INDEX_TOOLTIP = "Bufferの指定された位置から1バイト取得";
Blockly.Msg.BUFFER_SET_INDEX = "Buffer %2 の %1 バイト目の文字を %3 にセット";
Blockly.Msg.BUFFER_SET_INDEX_TOOLTIP = "Bufferの指定された位置へ1バイトセット";

// =========================================================================================
// Objects (JSON) blocks
// =========================================================================================
Blockly.Msg.OBJECT_FROM_JSON = "JSON %1 からオブジェクトを取得";
Blockly.Msg.OBJECT_FROM_JSON_TOOLTIP = "JSON文字列からオブジェクトを生成";
Blockly.Msg.OBJECT_TO_JSON = "オブジェクト %1 からJSONを生成";
Blockly.Msg.OBJECT_TO_JSON_TOOLTIP = "オブジェクトをJSON文字列に保存";
Blockly.Msg.OBJECT_CREATE = "オブジェクト生成";
Blockly.Msg.OBJECT_CREATE_TOOLTIP = "いくつかのプロパティ値を含む新しいオブジェクトを生成";
Blockly.Msg.OBJECT_FIELD_NAME = "プロパティ名";
Blockly.Msg.OBJECT_KEYS = "%1 からキーを取得";
Blockly.Msg.OBJECT_KEYS_TOOLTIP = "オブジェクトからすべてのキーを取得";

// =========================================================================================
// Extra blocks
// =========================================================================================
Blockly.Msg.TIMER_CONDITIONAL = "%2 から %3 まで %1 秒ごとにくりかえす";
Blockly.Msg.TIMER_CONDITIONAL_TOOLTIP = "条件が満たされるまで定期的にくりかえす";
Blockly.Msg.TIMER_COUNTING = "%2 秒ごとに %3 %4 を %1 回 くりかえす";
Blockly.Msg.TIMER_COUNTING_TOOLTIP = "定期的に何回かくりかえす";
Blockly.Msg.SWITCH = "入力値 %1 が %2 の時 %3 を実行";
Blockly.Msg.SWITCH_TOOLTIP = "入力値に応じた条件で実行";
Blockly.Msg.SWITCH_DEFAULT = "デフォルト";
Blockly.Msg.SWITCH_DEFAULT_TOOLTIP = "マッチする条件がない時";
Blockly.Msg.SWITCH_CASE = "が %1 の場合";
Blockly.Msg.SWITCH_CASE_TOOLTIP = "指定した値にマッチした場合";
Blockly.Msg.SWITCH_CASE_LIST = "の場合";
Blockly.Msg.SWITCH_CASE_LIST_TOOLTIP = "全ての有効な条件";
Blockly.Msg.SWITCH_DO = "do";
Blockly.Msg.LIST_PUSH = "%2 の最後に %1 を追加";
Blockly.Msg.LIST_PUSH_TOOLTIP = "指定された値をリストの最後に追加";
Blockly.Msg.LIST_POP = "リスト %1 の最後の要素を削除";
Blockly.Msg.LIST_POP_TOOLTIP = "リストの最後の要素を削除";
