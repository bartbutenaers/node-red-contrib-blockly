// =========================================================================================
// Node-RED blocks
// =========================================================================================
Blockly.Msg.NODE_OBJECT_GET_JSON = "%1 %2 eigenschap %3";
Blockly.Msg.NODE_OBJECT_GET_JSON_GET_TOOLTIP = "Zoek een eigenschap van een object.";
Blockly.Msg.NODE_OBJECT_GET_JSON_REMOVE_TOOLTIP = "Verwijder een eigenschap van een object.";
Blockly.Msg.NODE_OBJECT_GET_JSON_HAS_TOOLTIP = "Controleer of een object een eigenschap heeft.";
Blockly.Msg.NODE_OBJECT_GET_JSON_GET = "zoek";
Blockly.Msg.NODE_OBJECT_GET_JSON_REMOVE = "verwijder";
Blockly.Msg.NODE_OBJECT_GET_JSON_HAS = "heeft";
Blockly.Msg.NODE_OBJECT_GET_WARNING = "Zorg er voor dat de variabele geen dieperliggende waarde bevat zoals foo.bar.";
Blockly.Msg.NODE_OBJECT_SET_JSON = "zet %1 eigenschap %2 op %3";
Blockly.Msg.NODE_OBJECT_SET_JSON_TOOLTIP = "Zet de eigenschap van een object.";
Blockly.Msg.NODE_OBJECT_SET_WARNING = "Dieperliggende eigenschappen kunnen enkel als waarde een vaste tekst hebben.";
Blockly.Msg.NODE_LOG = "log tekst %1 met niveau %2";
Blockly.Msg.NODE_LOG_TOOLTIP = "Log de tekst via de Node-RED functie API.";
Blockly.Msg.NODE_LOG_LOG = "log";
Blockly.Msg.NODE_LOG_WARNING = "waarschuwing";
Blockly.Msg.NODE_LOG_ERROR = "fout";
Blockly.Msg.NODE_LOG_DEBUG = "debug";
Blockly.Msg.NODE_LOG_TRACE = "trace";
Blockly.Msg.NODE_MSG = "msg";
Blockly.Msg.NODE_MSG_TOOLTIP = "De Node-RED input message.";
Blockly.Msg.NODE_REMOVE_STATUS = "node status verwijderen";
Blockly.Msg.NODE_REMOVE_STATUS_TOOLTIP = "Verwijder de node status via de Node-RED functie API.";
Blockly.Msg.NODE_CLONE = "kopiëer %1";
Blockly.Msg.NODE_CLONE_TOOLTIP = "Kopiëer het bericht via de Node-RED functie API.";
Blockly.Msg.NODE_STATUS = "zet node status text %1 met kleur %2 en vorm %3";
Blockly.Msg.NODE_STATUS_TOOLTIP = "Zet de node status via de Node-RED functie API.";
Blockly.Msg.NODE_STATUS_RING = "ring";
Blockly.Msg.NODE_STATUS_DOT = "bol";
Blockly.Msg.NODE_PROPERTIES = "zoek node %1";
Blockly.Msg.NODE_PROPERTIES_TOOLTIP = "Zoek de opgegeven eigenschap via de Node-RED functie API.";
Blockly.Msg.NODE_PROPERTIES_ID = "identificatie nummer";
Blockly.Msg.NODE_PROPERTIES_NAME = "naam";
Blockly.Msg.NODE_PROPERTIES_OUTPUT_COUNT = "aantal uitgangen";
Blockly.Msg.NODE_PROPERTIES_PATH = "pad";
Blockly.Msg.NODE_FLOW_MEMORY = "flow";
Blockly.Msg.NODE_FLOW_MEMORY_TOOLTIP = "Toegang krijgen tot de gegevens in het Node-RED flow geheugen.";
Blockly.Msg.NODE_CONTEXT_MEMORY = "(node) context";
Blockly.Msg.NODE_CONTEXT_MEMORY_TOOLTIP = "Toegang krijgen tot de gegevens in het Node-RED node (context) geheugen.";
Blockly.Msg.NODE_GLOBAL_MEMORY = "globaal";
Blockly.Msg.NODE_GLOBAL_MEMORY_TOOLTIP = "Toegang krijgen tot de gegevens in het Node-RED globale geheugen.";
Blockly.Msg.NODE_SEND = "verzend %1 naar uitgang %2";
Blockly.Msg.NODE_SEND_TOOLTIP = "Verzend het bericht via the Node-RED functie API.";
Blockly.Msg.NODE_SEND_WARNING = "Wanneer berichten in een lus verzonden worden,\ndan moeten de berichten uniek zijn!";
Blockly.Msg.NODE_RETURN_MESSAGE = "geef %1 terug naar uitgang %2";
Blockly.Msg.NODE_RETURN_MESSAGE_TOOLTIP = "Verstuur uitgangsbericht en keer terug om de verwerking te stoppen.";
Blockly.Msg.NODE_RETURN = "terugkeren";
Blockly.Msg.NODE_RETURN_TOOLTIP = "Keer terug om de verwerking te stoppen (zonder een uitgangsbericht te versturen).";
Blockly.Msg.NODE_CLOSE = "bij sluiten van de node";
Blockly.Msg.NODE_CLOSE_1 = "%1";
Blockly.Msg.NODE_CLOSE_TOOLTIP = "Acties die uitgevoerd moeten worden wanneer de node gesloten wordt.";
Blockly.Msg.NODE_DONE = "bericht afgehandeld";
Blockly.Msg.NODE_DONE_TOOLTIP = "Verwerking van het bericht is afgehandeld.";
Blockly.Msg.NODE_ENV = "zoek omgevings veranderlijke %1";
Blockly.Msg.NODE_ENV_TOOLTIP = "Haal de waarde van de omgevings veranderlijke op.";

// =========================================================================================
// Buffer blocks
// =========================================================================================
Blockly.Msg.BUFFER_FROM_STRING = "maak buffer vanuit tekst %1 met codering %2";
Blockly.Msg.BUFFER_FROM_STRING_TOOLTIP = "Genereer een buffer vanuit een tekst.";
Blockly.Msg.BUFFER_TO_STRING = "maak tekst van buffer %1 met codering %2";
Blockly.Msg.BUFFER_TO_STRING_TOOLTIP = "Zet de buffer om naar een tekst.";
Blockly.Msg.BUFFER_FROM_LIST = "maak buffer vanuit lijst %1";
Blockly.Msg.BUFFER_FROM_LIST_TOOLTIP = "maak buffer vanuit lijst.";
Blockly.Msg.BUFFER_TO_LIST = "maak lijst van buffer %1";
Blockly.Msg.BUFFER_TO_LIST_TOOLTIP = "maak lijst van buffer.";
Blockly.Msg.BUFFER_LENGTH = "zoek lengte van buffer %1";
Blockly.Msg.BUFFER_LENGTH_TOOLTIP = "Zoek de buffer lengte in bytes.";
Blockly.Msg.BUFFER_ALLOC = "maak buffer met lengte %1";
Blockly.Msg.BUFFER_ALLOC_TOOLTIP = "Maak een buffer met de opgegeven lengte.";
Blockly.Msg.BUFFER_FILL = "vul buffer %1 met waarde %2";
Blockly.Msg.BUFFER_FILL_TOOLTIP = "Vul de buffer met de opgegeven waarde.";
Blockly.Msg.BUFFER_CHECK = "controleer of %1 buffer is";
Blockly.Msg.BUFFER_CHECK_TOOLTIP = "Controleer of de ingangswaarde een buffer is.";
Blockly.Msg.BUFFER_COPY = "kopiëer van buffer %1 naar buffer %2";
Blockly.Msg.BUFFER_COPY_TOOLTIP = "Kopiëer van de eerste buffer naar de tweede buffer.";
Blockly.Msg.BUFFER_CONCATENATE = "voeg buffer %1 en %2 samen";
Blockly.Msg.BUFFER_CONCATENATE_TOOLTIP = "Voeg de 2 buffers samen om 1 grote nieuwe buffer te maken.";
Blockly.Msg.BUFFER_EMPTY = "lege buffer";
Blockly.Msg.BUFFER_EMPTY_TOOLTIP = "Maak een lege buffer, d.w.z; een buffer met lengte 0.";
Blockly.Msg.BUFFER_BYTE = "byte %1";
Blockly.Msg.BUFFER_BYTE_TOOLTIP = "Een byte waarde.";
Blockly.Msg.BUFFER_GET_INDEX = "zoek waarde op positie %1 van buffer %2";
Blockly.Msg.BUFFER_GET_INDEX_TOOLTIP = "Zoek de waarde van de opgegeven buffer positie.";
Blockly.Msg.BUFFER_SET_INDEX = "zet de byte op positie %1 van buffer %2 op waarde %3";
Blockly.Msg.BUFFER_SET_INDEX_TOOLTIP = "Zet de waarde van de byte op de opgegeven buffer positie.";

// =========================================================================================
// Objects (JSON) blocks
// =========================================================================================
Blockly.Msg.OBJECT_FROM_JSON = "maak object van JSON tekst %1";
Blockly.Msg.OBJECT_FROM_JSON_TOOLTIP = "Maak een object van een JSON tekst.";
Blockly.Msg.OBJECT_TO_JSON = "genereer JSON tekst van objekt %1";
Blockly.Msg.OBJECT_TO_JSON_TOOLTIP = "Bewaar het object als een JSON tekst.";
Blockly.Msg.OBJECT_CREATE = "maak een object";
Blockly.Msg.OBJECT_CREATE_TOOLTIP = "Maak een nieuw object, optioneel met eigenschap waarden.";
Blockly.Msg.OBJECT_FIELD_NAME = "eigenschap";
Blockly.Msg.OBJECT_KEYS = "zoek eigenschappen van %1";
Blockly.Msg.OBJECT_KEYS_TOOLTIP = "Zoek alle eigenschappen van het object.";

// =========================================================================================
// Extra blocks
// =========================================================================================
Blockly.Msg.TEXT_SPECIAL_CHARACTER = "speciaal leesteken %1";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_TOOLTIP = "Een speciaal leesteken dat niet vermeden moet worden (door een '\\' ontsnappingsteken).";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_LF = "regel opschuiving (LF) (\\n)";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_CR = "sprong naar links (CR) (\\r)";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_CRLF = "sprong naar links, nieuwe regel (CRLF) (\\r\\n)";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_TAB = "inspringing (TAB) (\\t)";
Blockly.Msg.TIMER_CONDITIONAL = "herhaal elke %1 seconden, totdat %2 %3";
Blockly.Msg.TIMER_CONDITIONAL_TOOLTIP = "Herhaal met vaste intervallen tot een bepaalde voorwaarde voldaan is.";
Blockly.Msg.TIMER_COUNTING = "herhaal %1 keer elke %2 seconden %3 %4";
Blockly.Msg.TIMER_COUNTING_TOOLTIP = "Herhaal een aantal keren op vaste intervallen.";
Blockly.Msg.SWITCH = "ingangswaarde %1 in het geval van %2 doe %3";
Blockly.Msg.SWITCH_TOOLTIP = "Voer bepaalde acties uit afhankelijk van de ingangswaarden.";
Blockly.Msg.SWITCH_DEFAULT = "standaard";
Blockly.Msg.SWITCH_DEFAULT_TOOLTIP = "Wanneer er geen gevallen overeenkomen.";
Blockly.Msg.SWITCH_CASE = "in geval van %1";
Blockly.Msg.SWITCH_CASE_TOOLTIP = "Wanneer een specifieke waarde overeenkomt.";
Blockly.Msg.SWITCH_CASE_LIST = "in geval van";
Blockly.Msg.SWITCH_CASE_LIST_TOOLTIP = "Lijst van alle mogelijke gevallen.";
Blockly.Msg.SWITCH_DO = "doe";
Blockly.Msg.MISC_JAVASCRIPT = "JavaScript statement %1;";
Blockly.Msg.MISC_JAVASCRIPT_TOOLTIP = "Voer JavaScript code in, wanneer de andere blokken bepaalde functionaliteit niet aanbieden.";
Blockly.Msg.MISC_JSEXPRESS = "JavaScript uitdrukking %1";
Blockly.Msg.MISC_JSEXPRESS_TOOLTIP = "Gebruik dit voorzichtig. Geef enkel JavaScript code in wanneer geen bloks deze functionaliteit aanbieden.";
Blockly.Msg.MISC_COMMENT = "commentaar %1";
Blockly.Msg.MISC_COMMENT_TOOLTIP = "Voeg commentaar toe om uit te leggen hoe de logica werkt.";
Blockly.Msg.MISC_JSMULTILINE = "meerder lijnen JS code %1";
Blockly.Msg.MISC_JSMULTILINE_TOOLTIP = "Geef enkel meerdere lijnen JavaScript code in, wanneer geen andere blokken deze functionaliteit aanbieden.";

// =========================================================================================
// Datetime blocks
// =========================================================================================
Blockly.Msg.DATETIME_INPUT = "datum %1";
Blockly.Msg.DATETIME_INPUT_TOOLTIP = "Een datum.";
Blockly.Msg.DATETIME_TIMESTAMP = "%1 tijdstip";
Blockly.Msg.DATETIME_TIMESTAMP_TOOLTIP = "Zoek het huidige tijdstip (d.w.z. datum en tijd van nu).";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE = "zoek %1 van tijdstip %2";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_TOOLTIP = "Zoek de opgegeven infromatie van een tijdstip.";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_NR = "tijdstip formaat";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MSEC = "milliseconden";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_SEC = "seconden";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MIN = "minuten";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_HOUR = "uur";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_DAY = "dag";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_DAY_OF_WEEK = "dag van de week";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MONTH = "maand";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_YEAR = "jaar";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_TEXT = "datum";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_FULL = "volledige datum";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_DAY_NAME = "naam van de dag";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MONTH_NAME = "naam van de maand";
Blockly.Msg.DATETIME_CONVERT_TO_DATE = "maak datum van %1";
Blockly.Msg.DATETIME_CONVERT_TO_DATE_TOOLTIP = "Maak een datum o.b.v. de opgegeven waarde.";
Blockly.Msg.DATETIME_FORMAT = "zet tijdstip %1 om naar formaat %2";
Blockly.Msg.DATETIME_FORMAT_TOOLTIP = "Zet een tijdstip om naar een bepaald formaat.";
Blockly.Msg.DATETIME_UTC = "UTC";
Blockly.Msg.DATETIME_LOCAL = "lokaal";

// =========================================================================================
// Timer blocks
// =========================================================================================
Blockly.Msg.TIMER_SET_TIMEOUT = "voer %1 vertraagd uit na %2 %3";
Blockly.Msg.TIMER_SET_TIMEOUT_1 = "%1";
Blockly.Msg.TIMER_SET_TIMEOUT_NAME = "vertraging";
Blockly.Msg.TIMER_SET_TIMEOUT_TOOLTIP = "Voer de ingesloten blokken uit na een opgegeven vertraging.";
Blockly.Msg.TIMER_CLEAR_TIMEOUT = "stop vertraging %1";
Blockly.Msg.TIMER_CLEAR_TIMEOUT_TOOLTIP = "Annuleer de vertraagde uitvoering.";
Blockly.Msg.TIMER_SET_INTERVAL = "voer het interval %1 elke %2 %3 uit";
Blockly.Msg.TIMER_SET_INTERVAL_1 = "%1";
Blockly.Msg.TIMER_SET_INTERVAL_NAME = "interval";
Blockly.Msg.TIMER_SET_INTERVAL_TOOLTIP = "Voer de ingesloten blokken periodiek uit met het opgegeven interval.";
Blockly.Msg.TIMER_CLEAR_INTERVAL = "stop interval %1";
Blockly.Msg.TIMER_CLEAR_INTERVAL_TOOLTIP = "Annuleer de periodieke uitvoering van de blokken.";
Blockly.Msg.TIMER_TIMER_MS = "msec";
Blockly.Msg.TIMER_TIMER_SEC = "sec";
Blockly.Msg.TIMER_TIMER_MIN = "min";
Blockly.Msg.TIMER_NONE_SELECTED = "geen";
