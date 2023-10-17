// =========================================================================================
// Node-RED blocks
// =========================================================================================
Blockly.Msg.NODE_OBJECT_GET_JSON = "%1 %2 свойство %3";
Blockly.Msg.NODE_OBJECT_GET_JSON_GET_TOOLTIP = "Получить свойство объекта.";
Blockly.Msg.NODE_OBJECT_GET_JSON_REMOVE_TOOLTIP = "Удалить свойство объекта.";
Blockly.Msg.NODE_OBJECT_GET_JSON_HAS_TOOLTIP = "Проверить, есть ли у объекта свойство.";
Blockly.Msg.NODE_OBJECT_GET_JSON_GET = "получить";
Blockly.Msg.NODE_OBJECT_GET_JSON_REMOVE = "удалить";
Blockly.Msg.NODE_OBJECT_GET_JSON_HAS = "имеет";
Blockly.Msg.NODE_OBJECT_GET_WARNING = "Убедитесь, что переменная свойства не возвращает вложенное значение, такое как foo.bar.";
Blockly.Msg.NODE_OBJECT_SET_JSON = "установить %1 свойство %2 на %3";
Blockly.Msg.NODE_OBJECT_SET_JSON_TOOLTIP = "Установить свойство объекта.";
Blockly.Msg.NODE_OBJECT_SET_WARNING = "Вложенные свойства могут быть установлены только с помощью строковых литералов.";
Blockly.Msg.NODE_LOG = "текст журнала %1 с %2 уровнем";
Blockly.Msg.NODE_LOG_TOOLTIP = "Войти через API функции Node-RED.";
Blockly.Msg.NODE_LOG_LOG = "журнал";
Blockly.Msg.NODE_LOG_WARNING = "предупреждение";
Blockly.Msg.NODE_LOG_ERROR = "ошибка";
Blockly.Msg.NODE_LOG_DEBUG = "отладка";
Blockly.Msg.NODE_LOG_TRACE = "отслеживать";
Blockly.Msg.NODE_MSG = "сообщение";
Blockly.Msg.NODE_MSG_TOOLTIP = "Получить входное сообщение Node-RED.";
Blockly.Msg.NODE_REMOVE_STATUS = "удалить статус узла";
Blockly.Msg.NODE_REMOVE_STATUS_TOOLTIP = "Удалите статус узла через API функции Node-RED.";
Blockly.Msg.NODE_CLONE = "клон %1";
Blockly.Msg.NODE_CLONE_TOOLTIP = "Клонировать сообщение через API функции Node-RED.";
Blockly.Msg.NODE_STATUS = "установить статус узла на текст %1 для цвета %2 и формы %3";
Blockly.Msg.NODE_STATUS_TOOLTIP = "Установить статус узла через API функции Node-RED.";
Blockly.Msg.NODE_STATUS_RING = "кольцо";
Blockly.Msg.NODE_STATUS_DOT = "точка";
Blockly.Msg.NODE_PROPERTIES = "получить узел %1";
Blockly.Msg.NODE_PROPERTIES_TOOLTIP = "Получить указанное свойство узла через API функции Node-RED.";
Blockly.Msg.NODE_PROPERTIES_ID = "идентификатор";
Blockly.Msg.NODE_PROPERTIES_NAME = "имя";
Blockly.Msg.NODE_PROPERTIES_OUTPUT_COUNT = "количество выходов";
Blockly.Msg.NODE_PROPERTIES_PATH = "path";
Blockly.Msg.NODE_FLOW_MEMORY = "поток";
Blockly.Msg.NODE_FLOW_MEMORY_TOOLTIP = "Доступ к данным в памяти потока Node-RED.";
Blockly.Msg.NODE_CONTEXT_MEMORY = "(узел) контекст";
Blockly.Msg.NODE_CONTEXT_MEMORY_TOOLTIP = "Доступ к данным в контекстной памяти Node-RED (узла).";
Blockly.Msg.NODE_GLOBAL_MEMORY = "глобальный";
Blockly.Msg.NODE_GLOBAL_MEMORY_TOOLTIP = "Доступ к данным в глобальной памяти Node-RED.";
Blockly.Msg.NODE_SEND = "отправить %1 на выход% %2";
Blockly.Msg.NODE_SEND_TOOLTIP = "Отправить выходное сообщение через API функции Node-RED.";
Blockly.Msg.NODE_SEND_WARNING = "При отправке сообщений в цикле,\nmake убедитесь, что сообщения уникальны!";
Blockly.Msg.NODE_RETURN_MESSAGE = "вернуть %1 к выходу %2";
Blockly.Msg.NODE_RETURN_MESSAGE_TOOLTIP = "Отправить выходное сообщение и вернуться для остановки обработки.";
Blockly.Msg.NODE_RETURN = "возврат";
Blockly.Msg.NODE_RETURN_TOOLTIP = "Вернуться, чтобы остановить обработку (без отправки сообщения).";
Blockly.Msg.NODE_CLOSE = "узел закрыт";
Blockly.Msg.NODE_CLOSE_1 = "%1";
Blockly.Msg.NODE_CLOSE_TOOLTIP = "Операторы, которые должны выполняться при закрытии узла.";
Blockly.Msg.NODE_DONE = "сообщение завершено";
Blockly.Msg.NODE_DONE_TOOLTIP = "Обработка сообщения завершена.";
Blockly.Msg.NODE_ENV = "получить переменную окружения %1";
Blockly.Msg.NODE_ENV_TOOLTIP = "Доступ к значению переменной среды.";

// =========================================================================================
// Buffer blocks
// =========================================================================================
Blockly.Msg.BUFFER_FROM_STRING = "создать буфер из строки %1 с кодировкой %2";
Blockly.Msg.BUFFER_FROM_STRING_TOOLTIP = "Создать буфер из строки.";
Blockly.Msg.BUFFER_TO_STRING = "сгенерировать строку из буфера %1 с кодировкой %2";
Blockly.Msg.BUFFER_TO_STRING_TOOLTIP = "Преобразовать буфер в строку.";
Blockly.Msg.BUFFER_LENGTH = "получить длину буфера %1";
Blockly.Msg.BUFFER_LENGTH_TOOLTIP = "Получить длину буфера в байтах.";
Blockly.Msg.BUFFER_ALLOC = "создать буфер длиной %1";
Blockly.Msg.BUFFER_ALLOC_TOOLTIP = "Создать буфер указанной длины.";
Blockly.Msg.BUFFER_FILL = "заполнить буфер %1 значением %2";
Blockly.Msg.BUFFER_FILL_TOOLTIP = "Заполните буфер указанным значением.";
Blockly.Msg.BUFFER_CHECK = "проверить наличие буфера %1";
Blockly.Msg.BUFFER_CHECK_TOOLTIP = "Проверить, является ли входное значение буфером.";
Blockly.Msg.BUFFER_COPY = "копировать из буфераr %1 в буфер %2";
Blockly.Msg.BUFFER_COPY_TOOLTIP = "CКопировать из первого буфера во второй буфер.";
Blockly.Msg.BUFFER_CONCATENATE = "Объединить буфер %1 и %2";
Blockly.Msg.BUFFER_CONCATENATE_TOOLTIP = "Объедините два буфера, чтобы создать новый буфер";
Blockly.Msg.BUFFER_EMPTY = "пустой буфер";
Blockly.Msg.BUFFER_EMPTY_TOOLTIP = "Создать пустой буфер, то есть буфер размером 0.";
Blockly.Msg.BUFFER_BYTE = "байт %1";
Blockly.Msg.BUFFER_BYTE_TOOLTIP = "Байтовое значение.";
Blockly.Msg.BUFFER_GET_INDEX = "получить байт по индексу %1 буфера %2";
Blockly.Msg.BUFFER_GET_INDEX_TOOLTIP = "Получить байтовое значение указанного индекса буфера.";
Blockly.Msg.BUFFER_SET_INDEX = "установить байт в индексе %1 буфера %2 в значение %3";
Blockly.Msg.BUFFER_SET_INDEX_TOOLTIP = "Установить байтовое значение указанного индекса буфера.";

// =========================================================================================
// Objects (JSON) blocks
// =========================================================================================
Blockly.Msg.OBJECT_FROM_JSON = "получить объект из текста JSON %1";
Blockly.Msg.OBJECT_FROM_JSON_TOOLTIP = "Создать объект из текстовой строки в формате JSON.";
Blockly.Msg.OBJECT_TO_JSON = "получить текст JSON из объекта %1";
Blockly.Msg.OBJECT_TO_JSON_TOOLTIP = "Создать текстовую строку в формате JSON из объекта.";
Blockly.Msg.OBJECT_CREATE = "создать объект";
Blockly.Msg.OBJECT_CREATE_TOOLTIP = "Создайте новый объект, необязательно с некоторыми значениями свойств.";
Blockly.Msg.OBJECT_FIELD_NAME = "название свойства";
Blockly.Msg.OBJECT_KEYS = "получить ключи от %1";
Blockly.Msg.OBJECT_KEYS_TOOLTIP = "Получить все ключи от объекта.";

// =========================================================================================
// Extra blocks
// =========================================================================================
Blockly.Msg.TEXT_SPECIAL_CHARACTER = "специальный символ %1";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_TOOLTIP = "Специальный символ, который нельзя экранировать (префиксом '\\').";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_LF = "перевод строки (LF) (\\n)";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_CR = "возврат каретки (CR) (\\r)";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_CRLF = "перевод строки возврата каретки (CRLF) (\\r\\n)";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_TAB = "вкладка (TAB) (\\t)";
Blockly.Msg.TIMER_CONDITIONAL = "повторять каждые %1 секунды, до %2 %3";
Blockly.Msg.TIMER_CONDITIONAL_TOOLTIP = "Повторять через равные промежутки времени, пока условие не будет выполнено.";
Blockly.Msg.TIMER_COUNTING = "повторять %1 раз каждые %2 секунды %3 %4";
Blockly.Msg.TIMER_COUNTING_TOOLTIP = "Повторять через равные промежутки времени несколько раз.";
Blockly.Msg.SWITCH = "входное значение %1 в случае %2 до %3";
Blockly.Msg.SWITCH_TOOLTIP = "Выполните некоторые действия в зависимости от входных значений.";
Blockly.Msg.SWITCH_DEFAULT = "по умолчанию";
Blockly.Msg.SWITCH_DEFAULT_TOOLTIP = "Когда нет подходящих случаев.";
Blockly.Msg.SWITCH_CASE = "случай %1";
Blockly.Msg.SWITCH_CASE_TOOLTIP = "Когда определенное значение совпадает.";
Blockly.Msg.SWITCH_CASE_LIST = "в случае";
Blockly.Msg.SWITCH_CASE_LIST_TOOLTIP = "Список всех доступных случаев";
Blockly.Msg.SWITCH_DO = "делать";
Blockly.Msg.MISC_JAVASCRIPT = "Оператор JavaScript %1;";
Blockly.Msg.MISC_JAVASCRIPT_TOOLTIP = "Введите код JavaScript, если нет блоков, предлагающих определенные функции.";
Blockly.Msg.MISC_JSEXPRESS = "Выражение JavaScript %1";
Blockly.Msg.MISC_JSEXPRESS_TOOLTIP = "Используйте с осторожностью. Введите код JavaScript, если нет блоков, предлагающих определенные функции.";
Blockly.Msg.MISC_COMMENT = "Комментарий %1";
Blockly.Msg.MISC_COMMENT_TOOLTIP = "Добавьте комментарии, чтобы объяснить, как работает логика.";
Blockly.Msg.MISC_JSMULTILINE = "Многострочный код JS %1";
Blockly.Msg.MISC_JSMULTILINE_TOOLTIP = "Введите многострочный код Javascript, если нет блоков, предлагающих определенные функции.";

// =========================================================================================
// Datetime blocks
// =========================================================================================
Blockly.Msg.DATETIME_INPUT = "дата %1";
Blockly.Msg.DATETIME_INPUT_TOOLTIP = "Свидание.";
Blockly.Msg.DATETIME_TIMESTAMP = "отметка времени";
Blockly.Msg.DATETIME_TIMESTAMP_TOOLTIP = "Получить текущую отметку времени (т.е. дату и время).";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE = "получить %1 из отметки времени %2";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_TOOLTIP = "Получить указанную информацию из отметки времени.";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_NR = "формат временной метки";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MSEC = "миллисекунды";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_SEC = "секунды";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MIN = "минут";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_HOUR = "час";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_DAY = "день";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_DAY_OF_WEEK = "день недели";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MONTH = "месяц";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_YEAR = "год";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_TEXT = "дата";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_FULL = "олная дата";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_DAY_NAME = "название дня";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MONTH_NAME = "название месяца";
Blockly.Msg.DATETIME_CONVERT_TO_DATE = "дата создания с %1";
Blockly.Msg.DATETIME_CONVERT_TO_DATE_TOOLTIP = "Создать дату из указанного значения.";
Blockly.Msg.DATETIME_FORMAT = "преобразовать отметку времени %1 в формат %2";
Blockly.Msg.DATETIME_FORMAT_TOOLTIP = "Преобразовать метку времени в указанный форматt.";
Blockly.Msg.DATETIME_UTC = "UTC";
//Blockly.Msg.DATETIME_LOCAL = "local";

// =========================================================================================
// Timer blocks
// =========================================================================================
//Blockly.Msg.TIMER_SET_TIMEOUT = "Execute timeout %1 in %2 %3";
Blockly.Msg.TIMER_SET_TIMEOUT_1 = "%1";
//Blockly.Msg.TIMER_SET_TIMEOUT_NAME = "timeout";
//Blockly.Msg.TIMER_SET_TIMEOUT_TOOLTIP = "Execute the included blocks after a specified time delay.";
//Blockly.Msg.TIMER_CLEAR_TIMEOUT = "Stop timeout %1";
//Blockly.Msg.TIMER_CLEAR_TIMEOUT_TOOLTIP = "Cancel the execution after the timeout";
//Blockly.Msg.TIMER_SET_INTERVAL = "Execute interval %1 every %2 %3";
Blockly.Msg.TIMER_SET_INTERVAL_1 = "%1";
Blockly.Msg.TIMER_SET_INTERVAL_NAME = "интервал";
//Blockly.Msg.TIMER_SET_INTERVAL_TOOLTIP = "Execute the included blocks periodically at the specified time interval.";
Blockly.Msg.TIMER_CLEAR_INTERVAL = "Остановить интервал %1";
Blockly.Msg.TIMER_CLEAR_INTERVAL_TOOLTIP = "Отменяйте выполнение блока через определенные промежутки времени.";
Blockly.Msg.TIMER_TIMER_MS = "мсек";
Blockly.Msg.TIMER_TIMER_SEC = "сек";
Blockly.Msg.TIMER_TIMER_MIN = "мин";
Blockly.Msg.TIMER_NONE_SELECTED = "нет";
