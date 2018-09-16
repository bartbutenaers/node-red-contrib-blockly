// =========================================================================================
// Node-Red blocks
// =========================================================================================
Blockly.Msg.NODE_OBJECT_GET_JSON = "%1 %2 eigenschap %3";
Blockly.Msg.NODE_OBJECT_GET_JSON_GET_TOOLTIP = "Zoek een eigenschap van een object.";
Blockly.Msg.NODE_OBJECT_GET_JSON_REMOVE_TOOLTIP = "Verwijder een eigenschap van een object.";
Blockly.Msg.NODE_OBJECT_GET_JSON_HAS_TOOLTIP = "Controleer of een object een eigenschap heeft";
Blockly.Msg.NODE_OBJECT_GET_JSON_GET = "zoek";
Blockly.Msg.NODE_OBJECT_GET_JSON_REMOVE = "verwijder";
Blockly.Msg.NODE_OBJECT_GET_JSON_HAS = "heeft";
Blockly.Msg.NODE_OBJECT_GET_WARNING = "Zorg er voor dat de variabele geen dieperliggende waarde bevat zoals foo.bar";
Blockly.Msg.NODE_OBJECT_SET_JSON = "zet %1 eigenschap %2 op %3";
Blockly.Msg.NODE_OBJECT_SET_JSON_TOOLTIP = "Zet de eigenschap van een object.";
Blockly.Msg.NODE_OBJECT_SET_WARNING = "Dieperliggende eigenschappen kunnen enkel als waarde een vaste tekst hebben.";
Blockly.Msg.NODE_LOG = "log tekst %1 met niveau %2";
Blockly.Msg.NODE_LOG_TOOLTIP = "Log de tekst via de Node-Red functie API.";
Blockly.Msg.NODE_LOG_LOG = "log"; 
Blockly.Msg.NODE_LOG_WARNING = "waarschuwing";
Blockly.Msg.NODE_LOG_ERROR = "fout";
Blockly.Msg.NODE_LOG_DEBUG = "debug";
Blockly.Msg.NODE_LOG_TRACE = "trace";
Blockly.Msg.NODE_MSG = "msg";
Blockly.Msg.NODE_MSG_TOOLTIP = "De Node-Red input message.";
Blockly.Msg.NODE_REMOVE_STATUS = "node status verwijderen";
Blockly.Msg.NODE_REMOVE_STATUS_TOOLTIP = "Verwijder de node status via de Node-Red functie API.";
Blockly.Msg.NODE_CLONE = "kopiëer %1";
Blockly.Msg.NODE_CLONE_TOOLTIP = "Kopiëer het bericht via de Node-Red functie API.";
Blockly.Msg.NODE_STATUS = "zet node status text %1 met kleur %2 en vorm %3";
Blockly.Msg.NODE_STATUS_TOOLTIP = "Zet de node status via de Node-Red functie API.";
Blockly.Msg.NODE_STATUS_RING = "ring"; 
Blockly.Msg.NODE_STATUS_DOT = "bol";
Blockly.Msg.NODE_PROPERTIES = "zoek node %1";
Blockly.Msg.NODE_PROPERTIES_TOOLTIP = "Zoek de opgegeven eigenschap via de Node-Red functie API.";
Blockly.Msg.NODE_PROPERTIES_ID = "identificatie nummer";
Blockly.Msg.NODE_PROPERTIES_NAME = "naam";
Blockly.Msg.NODE_FLOW_MEMORY = "flow";
Blockly.Msg.NODE_FLOW_MEMORY_TOOLTIP = "Toegang krijgen tot de gegevens in het Node-Red flow geheugen.";
Blockly.Msg.NODE_CONTEXT_MEMORY = "(node)context";
Blockly.Msg.NODE_CONTEXT_MEMORY_TOOLTIP = "Toegang krijgen tot de gegevens in het Node-Red node(context) geheugen.";
Blockly.Msg.NODE_GLOBAL_MEMORY = "globaal";
Blockly.Msg.NODE_GLOBAL_MEMORY_TOOLTIP = "Toegang krijgen tot de gegevens in het Node-Red globale geheugen.";
Blockly.Msg.NODE_SEND = "verzend %1 naar uitgang %2";
Blockly.Msg.NODE_SEND_TOOLTIP = "Verzend het bericht via the Node-Red functie API.";
Blockly.Msg.NODE_SEND_WARNING = "Wanneer berichten in een lus verzonden worden,\ndan moeten de berichten uniek zijn!";
Blockly.Msg.NODE_RETURN_MESSAGE = "geef %1 terug naar uitgang %2";
Blockly.Msg.NODE_RETURN_MESSAGE_TOOLTIP = "Verstuur uitgangsbericht en keer terug om de verwerking te stoppen";
Blockly.Msg.NODE_RETURN = "terugkeren";
Blockly.Msg.NODE_RETURN_TOOLTIP = "Keer terug om de verwerking te stoppen (zonder een uitgangsbericht te versturen)";
Blockly.Msg.NODE_CLOSE = "Bij sluiten van de node";
Blockly.Msg.NODE_CLOSE_1 = "%1";
Blockly.Msg.NODE_CLOSE_TOOLTIP = "Acties die uitgevoerd moeten worden wanneer de node gesloten wordt.";

// =========================================================================================
// Buffer blocks
// =========================================================================================
Blockly.Msg.BUFFER_FROM_STRING = "maak buffer vanuit tekst %1 met codering %2";
Blockly.Msg.BUFFER_FROM_STRING_TOOLTIP = "Genereer een buffer vanuit een tekst.";
Blockly.Msg.BUFFER_TO_STRING = "maak tekst van buffer %1 met codering %2";
Blockly.Msg.BUFFER_TO_STRING_TOOLTIP = "Zet de buffer om naar een tekst.";
Blockly.Msg.BUFFER_LENGTH = "zoek lengte van buffer %1";
Blockly.Msg.BUFFER_LENGTH_TOOLTIP = "Zoek de buffer lengte in bytes.";
Blockly.Msg.BUFFER_ALLOC = "maak buffer met lengte %1";
Blockly.Msg.BUFFER_ALLOC_TOOLTIP = "Maak een buffer met de opgegeven lengte.";
Blockly.Msg.BUFFER_FILL = "vul buffer %1 met waarde %2";
Blockly.Msg.BUFFER_FILL_TOOLTIP = "Vul de buffer met de opgegeven waarde.";
Blockly.Msg.BUFFER_CHECK = "controleer of %1 buffer is";
Blockly.Msg.BUFFER_CHECK_TOOLTIP = "Controleer of de ingangswaarde een buffer is.";
Blockly.Msg.BUFFER_COPY = "kopiëer van buffer %1 naar buffer %2";
Blockly.Msg.BUFFER_COPY_TOOLTIP = "Kopiëer van de eerste buffer naar de tweede buffer";
Blockly.Msg.BUFFER_EMPTY = "lege buffer";
Blockly.Msg.BUFFER_EMPTY_TOOLTIP = "Maak een lege buffer, d.w.z; een buffer met lengte 0.";
Blockly.Msg.BUFFER_BYTE = "byte %1";
Blockly.Msg.BUFFER_BYTE_TOOLTIP = "Een byte waarde.";
Blockly.Msg.BUFFER_GET_INDEX = "zoek byte op positie %1 van buffer %2";
Blockly.Msg.BUFFER_GET_INDEX_TOOLTIP = "Zoek de byte waarde van de opgegeven buffer positie";
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
Blockly.Msg.OBJECT_KEYS_TOOLTIP = "Zoek alle eigenschappen van het object";

// =========================================================================================
// Extra blocks
// =========================================================================================
Blockly.Msg.TIMER_CONDITIONAL = "Herhaal elke %1 seconden, totdat %2 %3";
Blockly.Msg.TIMER_CONDITIONAL_TOOLTIP = "Herhaal met vaste intervallen tot een bepaalde voorwaarde voldaan is.";
Blockly.Msg.TIMER_COUNTING = "Herhaal %1 keer elke %2 seconden %3 %4";
Blockly.Msg.TIMER_COUNTING_TOOLTIP = "Herhaal een aantal keren op vaste intervallen.";
Blockly.Msg.SWITCH = "ingangswaarde %1 in het geval van %2 doe %3";
Blockly.Msg.SWITCH_TOOLTIP = "Voer bepaalde acties uit afhankelijk van de ingangswaarden.";
Blockly.Msg.SWITCH_DEFAULT = "standaard";
Blockly.Msg.SWITCH_DEFAULT_TOOLTIP = "Wanneer er geen gevallen overeenkomen.";
Blockly.Msg.SWITCH_CASE = "in geval van %1";
Blockly.Msg.SWITCH_CASE_TOOLTIP = "Wanneer een specifieke waarde overeenkomt.";
Blockly.Msg.SWITCH_CASE_LIST = "in geval van";
Blockly.Msg.SWITCH_CASE_LIST_TOOLTIP = "Lijst van alle mogelijke gevallen";
Blockly.Msg.SWITCH_DO = "doe";
Blockly.Msg.MISC_JAVASCRIPT= "Javascript statement %1;";
Blockly.Msg.MISC_JAVASCRIPT_TOOLTIP = "Voer Javascript code in, wanneer de andere blokken bepaalde functionaliteit niet aanbieden.";
Blockly.Msg.MISC_COMMENT = "Commentaar %1";
Blockly.Msg.MISC_COMMENT_TOOLTIP = "Voeg commentaar toe om uit te leggen hoe de logica werkt.";

// =========================================================================================
// Datetime blocks
// =========================================================================================
Blockly.Msg.DATETIME_INPUT = "datum %1";
Blockly.Msg.DATETIME_INPUT_TOOLTIP = "Een datum.";
Blockly.Msg.DATETIME_TIMESTAMP = "tijdstip";
Blockly.Msg.DATETIME_TIMESTAMP_TOOLTIP = "Zoek het huidige tijdstip (d.w.z. datum en tijd van nu).";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE = "zoek %1 van tijdstip %2";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_TOOLTIP = "Zoek de opgegeven infromatie van een tijdstip";
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
