// =========================================================================================
// Node-RED blocks
// =========================================================================================
Blockly.Msg.NODE_OBJECT_GET_JSON = "%1 %2 la propriété %3";
Blockly.Msg.NODE_OBJECT_GET_JSON_GET_TOOLTIP = "Obtenir la propriété d’un objet.";
Blockly.Msg.NODE_OBJECT_GET_JSON_REMOVE_TOOLTIP = "Supprimer la propriété d’un objet.";
Blockly.Msg.NODE_OBJECT_GET_JSON_HAS_TOOLTIP = "S’assurer qu’un objet possède une certaine propriété.";
Blockly.Msg.NODE_OBJECT_GET_JSON_GET = "obtenir de";
Blockly.Msg.NODE_OBJECT_GET_JSON_REMOVE = "supprimer de";
Blockly.Msg.NODE_OBJECT_GET_JSON_HAS = "il y a dans";
Blockly.Msg.NODE_OBJECT_GET_WARNING = "Assurez-vous que la propriété ne renvoie pas une valeur imbriquée comme foo.bar.";
Blockly.Msg.NODE_OBJECT_SET_JSON = "fixer dans %1 la propriété %2 à %3";
Blockly.Msg.NODE_OBJECT_SET_JSON_TOOLTIP = "Fixer la propriété d’un objet.";
Blockly.Msg.NODE_OBJECT_SET_WARNING = "Les valeurs imbriquées ne peuvent être définies qu’avec une chaîne littérale.";
Blockly.Msg.NODE_LOG = "consigner le texte %1 avec le niveau %2";
Blockly.Msg.NODE_LOG_TOOLTIP = "Consignation (log) via l’API de Node-RED.";
Blockly.Msg.NODE_LOG_LOG = "info";
Blockly.Msg.NODE_LOG_WARNING = "avertissement";
Blockly.Msg.NODE_LOG_ERROR = "erreur";
Blockly.Msg.NODE_LOG_DEBUG = "débogage";
Blockly.Msg.NODE_LOG_TRACE = "trace";
Blockly.Msg.NODE_MSG = "msg";
Blockly.Msg.NODE_MSG_TOOLTIP = "Obtenir le message d’entrée de Node-RED.";
Blockly.Msg.NODE_REMOVE_STATUS = "retirer le statut du nœud";
Blockly.Msg.NODE_REMOVE_STATUS_TOOLTIP = "Nettoyer le statut du nœud via l’API de Node-RED.";
Blockly.Msg.NODE_CLONE = "cloner %1";
Blockly.Msg.NODE_CLONE_TOOLTIP = "Cloner le message via l’API de Node-RED.";
Blockly.Msg.NODE_STATUS = "fixer le statut du nœud avec le texte %1 la couleur %2 et la forme %3";
Blockly.Msg.NODE_STATUS_TOOLTIP = "Fixer le statut du nœud via l’API de Node-RED.";
Blockly.Msg.NODE_STATUS_RING = "anneau";
Blockly.Msg.NODE_STATUS_DOT = "point";
Blockly.Msg.NODE_PROPERTIES = "obtenir %1 du nœud";
Blockly.Msg.NODE_PROPERTIES_TOOLTIP = "Obtenir la propriété spécifiée du nœud via l’API de Node-RED.";
Blockly.Msg.NODE_PROPERTIES_ID = "l’identifiant";
Blockly.Msg.NODE_PROPERTIES_NAME = "le nom";
Blockly.Msg.NODE_PROPERTIES_OUTPUT_COUNT = "nombre de sorties";
Blockly.Msg.NODE_FLOW_MEMORY = "contexte du flux";
Blockly.Msg.NODE_FLOW_MEMORY_TOOLTIP = "Accéder aux données dans la mémoire du flux (flow).";
Blockly.Msg.NODE_CONTEXT_MEMORY = "contexte du nœud";
Blockly.Msg.NODE_CONTEXT_MEMORY_TOOLTIP = "Accéder aux données dans la mémoire du nœud (contexte).";
Blockly.Msg.NODE_GLOBAL_MEMORY = "contexte global";
Blockly.Msg.NODE_GLOBAL_MEMORY_TOOLTIP = "Accéder aux données dans la mémoire globale (contexte).";
Blockly.Msg.NODE_SEND = "envoyer %1 sur la sortie %2";
Blockly.Msg.NODE_SEND_TOOLTIP = "Envoyer un message de sortie via l’API de Node-RED.";
Blockly.Msg.NODE_SEND_WARNING = "Lors de l’envoi de messages dans une boucle,\nassurez-vous que les messages soient uniques !";
Blockly.Msg.NODE_RETURN_MESSAGE = "envoyer %1 sur la sortie %2 et terminer";
Blockly.Msg.NODE_RETURN_MESSAGE_TOOLTIP = "Envoyer un message de sortie et sortir du nœud.";
Blockly.Msg.NODE_RETURN = "terminer";
Blockly.Msg.NODE_RETURN_TOOLTIP = "Sortir du nœud (sans envoyer de message de sortie).";
Blockly.Msg.NODE_CLOSE = "à la fermeture du nœud";
Blockly.Msg.NODE_CLOSE_1 = "%1";
Blockly.Msg.NODE_CLOSE_TOOLTIP = "Blocs à exécuter à la fermeture du nœud.";
Blockly.Msg.NODE_DONE = "message terminé";
Blockly.Msg.NODE_DONE_TOOLTIP = "Le traitement du message est terminé.";
Blockly.Msg.NODE_ENV = "obtenir la variable d’environnement %1";
Blockly.Msg.NODE_ENV_TOOLTIP = "Accéder à la valeur d’une variable d’environnement.";
// =========================================================================================
// Buffer blocks
// =========================================================================================
Blockly.Msg.BUFFER_FROM_STRING = "créer un tampon avec la chaîne %1 et l’encodage %2";
Blockly.Msg.BUFFER_FROM_STRING_TOOLTIP = "Crée un tampon (buffer) à partir d’une chaîne de caractères.";
Blockly.Msg.BUFFER_TO_STRING = "créer une chaîne depuis le tampon %1 avec l’encodage %2";
Blockly.Msg.BUFFER_TO_STRING_TOOLTIP = "Conversion d’un tampon (buffer) en chaîne de caractères.";
Blockly.Msg.BUFFER_LENGTH = "longueur du tampon %1";
Blockly.Msg.BUFFER_LENGTH_TOOLTIP = "Obtenir la longueur du tampon (buffer) en octets.";
Blockly.Msg.BUFFER_ALLOC = "créer un tampon de longueur %1";
Blockly.Msg.BUFFER_ALLOC_TOOLTIP = "Crée un tampon (buffer) de la longueur spécifiée en octets.";
Blockly.Msg.BUFFER_FILL = "remplir le tampon %1 avec la valeur %2";
Blockly.Msg.BUFFER_FILL_TOOLTIP = "Remplit le tampon (buffer) avec la valeur spécifiée.";
Blockly.Msg.BUFFER_CHECK = "si %1 est un tampon";
Blockly.Msg.BUFFER_CHECK_TOOLTIP = "Vérifie si l’entrée est un tampon (buffer).";
Blockly.Msg.BUFFER_COPY = "copier depuis le tampon %1 vers le tampon %2";
Blockly.Msg.BUFFER_COPY_TOOLTIP = "Copier depuis le premier tampon (buffer) vers le deuxième.";
Blockly.Msg.BUFFER_CONCATENATE = "concaténer le tampon %1 et %2";
Blockly.Msg.BUFFER_CONCATENATE_TOOLTIP = "Concaténer les deux tampons pour créer un nouveau tampon.";
Blockly.Msg.BUFFER_EMPTY = "tampon vide";
Blockly.Msg.BUFFER_EMPTY_TOOLTIP = "Créer un tampon (buffer) vide, donc avec une longueur de zéro.";
Blockly.Msg.BUFFER_BYTE = "%1 (octet)";
Blockly.Msg.BUFFER_BYTE_TOOLTIP = "Un octet.";
Blockly.Msg.BUFFER_GET_INDEX = "obtenir l’octet à l’index %1 du tampon %2";
Blockly.Msg.BUFFER_GET_INDEX_TOOLTIP = "Obtenir la valeur de l’octet à l’index spécifié du tampon (buffer).";
Blockly.Msg.BUFFER_SET_INDEX = "fixer l’octet l’index %1 du tampon %2 à %3";
Blockly.Msg.BUFFER_SET_INDEX_TOOLTIP = "Mettre l’octet à l’index spécifié du tampon (buffer) à une certaine valeur.";
// =========================================================================================
// Objects (JSON) blocks
// =========================================================================================
Blockly.Msg.OBJECT_FROM_JSON = "créer un objet à partir du JSON %1";
Blockly.Msg.OBJECT_FROM_JSON_TOOLTIP = "Crée un objet à partir d’une chaîne de caractères JSON.";
Blockly.Msg.OBJECT_TO_JSON = "créer un JSON avec %1";
Blockly.Msg.OBJECT_TO_JSON_TOOLTIP = "Crée une chaîne de caractères JSON depuis l’objet spécifié.";
Blockly.Msg.OBJECT_CREATE = "créer un objet";
Blockly.Msg.OBJECT_CREATE_TOOLTIP = "Crée un nouvel objet, éventuellement avec quelques propriétés.";
Blockly.Msg.OBJECT_FIELD_NAME = "nom de la propriété";
Blockly.Msg.OBJECT_KEYS = "obtenir les clés de %1";
Blockly.Msg.OBJECT_KEYS_TOOLTIP = "Obtenir toutes les clés de l’objet.";
// =========================================================================================
// Extra blocks
// =========================================================================================
Blockly.Msg.TEXT_SPECIAL_CHARACTER = "caractère spécial %1";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_TOOLTIP = "Un caractère spécial qui ne devrait pas être échappé (par un préfixe '\\').";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_LF = "saut de ligne (LF) (\\n)";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_CR = "retour de chariot (CR) (\\r)";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_CRLF = "retour de chariot et saut de ligne (CRLF) (\\r\\n)";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_TAB = "tabulation (TAB) (\\t)";
Blockly.Msg.TIMER_CONDITIONAL = "répéter toutes les %1 secondes, jusqu’à %2 %3";
Blockly.Msg.TIMER_CONDITIONAL_TOOLTIP = "Répéter à intervalles réguliers jusqu’à ce qu’une condition soit remplie.";
Blockly.Msg.TIMER_COUNTING = "répéter  %1 fois toutes les %2 secondes %3 %4";
Blockly.Msg.TIMER_COUNTING_TOOLTIP = "Répéter à intervalles réguliers un certain nombre de fois.";
Blockly.Msg.SWITCH = "tester %1, si = %2 exécuter %3";
Blockly.Msg.SWITCH_TOOLTIP = "Exécuter des blocs sur la base de valeurs d’entrée.";
Blockly.Msg.SWITCH_DEFAULT = "sinon";
Blockly.Msg.SWITCH_DEFAULT_TOOLTIP = "Exécuter si aucune des valeurs n’a été rencontrée.";
Blockly.Msg.SWITCH_CASE = "tester %1";
Blockly.Msg.SWITCH_CASE_TOOLTIP = "Exécuter si la valeur correspond.";
Blockly.Msg.SWITCH_CASE_LIST = "si =";
Blockly.Msg.SWITCH_CASE_LIST_TOOLTIP = "Liste tous les cas possibles.";
Blockly.Msg.SWITCH_DO = "exécuter";
Blockly.Msg.MISC_JAVASCRIPT = "code JavaScript %1;";
Blockly.Msg.MISC_JAVASCRIPT_TOOLTIP = "Tapez du code JavaScript directement si aucun bloc ne peut vous aider.";
Blockly.Msg.MISC_JSEXPRESS = "expression JavaScript %1";
Blockly.Msg.MISC_JSEXPRESS_TOOLTIP = "À utiliser avec prudence. Entrez le code JavaScript si aucun bloc ne peut vous aider.";
Blockly.Msg.MISC_COMMENT = "commentaire %1";
Blockly.Msg.MISC_COMMENT_TOOLTIP = "Ajouter un commentaire pour expliquer comment ça fonctionne.";
Blockly.Msg.MISC_JSMULTILINE = "code JS multiligne %1";
Blockly.Msg.MISC_JSMULTILINE_TOOLTIP = "Tapez du code JavaScript multiligne directement si aucun bloc ne peut vous aider.";
// =========================================================================================
// Datetime blocks
// =========================================================================================
Blockly.Msg.DATETIME_INPUT = "date %1";
Blockly.Msg.DATETIME_INPUT_TOOLTIP = "Une date.";
Blockly.Msg.DATETIME_TIMESTAMP = "timestamp %1";
Blockly.Msg.DATETIME_TIMESTAMP_TOOLTIP = "Obtenir le timestamp de l’instant présent.";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE = "obtenir %1 depuis le timestamp %2";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_TOOLTIP = "Obtenir une donnée temporelle depuis un timestamp.";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_NR = "le timestamp";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MSEC = "les millisecondes";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_SEC = "les secondes";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MIN = "les minutes";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_HOUR = "l’heure";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_DAY = "le jour";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_DAY_OF_WEEK = "le jour de la semaine";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MONTH = "le mois";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_YEAR = "l’année";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_TEXT = "la date";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_FULL = "la date complète";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_DAY_NAME = "le nom du jour";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MONTH_NAME = "le nom du mois";
Blockly.Msg.DATETIME_CONVERT_TO_DATE = "créer une date à partir de %1";
Blockly.Msg.DATETIME_CONVERT_TO_DATE_TOOLTIP = "Créer une date en utilisant la valeur spécifiée.";
Blockly.Msg.DATETIME_FORMAT = "convertir le timestamp %1 au format %2";
Blockly.Msg.DATETIME_FORMAT_TOOLTIP = "Convertir un timestamp au format spécifié.";
Blockly.Msg.DATETIME_UTC = "UTC";
Blockly.Msg.DATETIME_LOCAL = "local";
// =========================================================================================
// Timer blocks
// =========================================================================================
Blockly.Msg.TIMER_SET_TIMEOUT = "exécuter le délai %1 dans %2 %3";
Blockly.Msg.TIMER_SET_TIMEOUT_1 = "%1";
Blockly.Msg.TIMER_SET_TIMEOUT_NAME = "délai";
Blockly.Msg.TIMER_SET_TIMEOUT_TOOLTIP = "Exécute les blocs inclus après un délai spécifié.";
Blockly.Msg.TIMER_CLEAR_TIMEOUT = "arrêter le délai %1";
Blockly.Msg.TIMER_CLEAR_TIMEOUT_TOOLTIP = "Annule l’exécution après le délai.";
Blockly.Msg.TIMER_SET_INTERVAL = "exécuter l’intervalle %1 à chaque %2 %3";
Blockly.Msg.TIMER_SET_INTERVAL_1 = "%1";
Blockly.Msg.TIMER_SET_INTERVAL_NAME = "intervalle";
Blockly.Msg.TIMER_SET_INTERVAL_TOOLTIP = "Exécute périodiquement les blocs inclus à l’intervalle de temps spécifié.";
Blockly.Msg.TIMER_CLEAR_INTERVAL = "arrêter l’intervalle %1";
Blockly.Msg.TIMER_CLEAR_INTERVAL_TOOLTIP = "Annule l’exécution du bloc à intervalles réguliers.";
Blockly.Msg.TIMER_TIMER_MS = "msec";
Blockly.Msg.TIMER_TIMER_SEC = "sec";
Blockly.Msg.TIMER_TIMER_MIN = "min";
Blockly.Msg.TIMER_NONE_SELECTED = "aucun";

// Overriding 7 strings that have a translation problem in French in the upstream Blockly project
// for versions 5.20210325.0 (Q1 2021), 5.20210325.1 (Q1 2021 Patch 1) and 6.20210701.0 (Q2 2021).
// See https://github.com/google/blockly/issues/5399
// TODO: When there will be a new Blockly release, check that the `msg/js/fr.js` does not
//  contain `<!-- -->`, then bump the minimal Blockly dependency version to that release,
//  and remove the following 7 lines.
Blockly.Msg["LISTS_GET_INDEX_TAIL"] = "";
Blockly.Msg["LISTS_GET_SUBLIST_TAIL"] = "";
Blockly.Msg["MATH_ONLIST_HELPURL"] = "";
Blockly.Msg["ORDINAL_NUMBER_SUFFIX"] = "";
Blockly.Msg["PROCEDURES_DEFNORETURN_DO"] = "";
Blockly.Msg["TEXT_CHARAT_TAIL"] = "";
Blockly.Msg["TEXT_GET_SUBSTRING_TAIL"] = "";
