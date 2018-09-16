/*
// To be able to use field_date, we will need to build the blockly application ourselves ...
Blockly.Blocks['datetime_input'] = {
    init: function () {
        this.jsonInit({
            "type": "datetime_get",
            "message0": Blockly.Msg.DATETIME_INPUT,
            "args0": [
                {
                    "type": "field_date",
                    "name": "DATE"
                }
            ],
            "output": "Date",
            "colour": "#D6316B",
            "tooltip": Blockly.Msg.DATETIME_INPUT_TOOLTIP,
            "helpUrl": ""
        });
    }
};*/

Blockly.Blocks['datetime_timestamp'] = {
    init: function () {
        this.jsonInit({
            "type": "datetime_timestamp",
            "message0": Blockly.Msg.DATETIME_TIMESTAMP,
            "output": "Number",
            "colour": "#D6316B",
            "tooltip": Blockly.Msg.DATETIME_TIMESTAMP_TOOLTIP,
            "helpUrl": ""
        });
    }
};

Blockly.Blocks['datetime_convert_from_date'] = {
    init: function () {
        this.jsonInit({
            "type": "datetime_convert_from_date",
            "message0": Blockly.Msg.DATETIME_CONVERT_FROM_DATE,
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "FORMAT",
                    "options": [[Blockly.Msg.DATETIME_CONVERT_FROM_DATE_YEAR        , 'year'      ],
                                [Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MONTH       , 'month'     ],
                                [Blockly.Msg.DATETIME_CONVERT_FROM_DATE_DAY         , 'day'       ],
                                [Blockly.Msg.DATETIME_CONVERT_FROM_DATE_HOUR        , 'hour'      ],
                                [Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MIN         , 'min'       ],
                                [Blockly.Msg.DATETIME_CONVERT_FROM_DATE_SEC         , 'sec'       ],
                                [Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MSEC        , 'msec'      ],
                                [Blockly.Msg.DATETIME_CONVERT_FROM_DATE_TEXT        , 'text'      ],
                                [Blockly.Msg.DATETIME_CONVERT_FROM_DATE_FULL        , 'full_date' ],
                                [Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MONTH_NAME  , 'month_name'],
                                [Blockly.Msg.DATETIME_CONVERT_FROM_DATE_DAY_NAME    , 'day_name'  ],
                                [Blockly.Msg.DATETIME_CONVERT_FROM_DATE_DAY_OF_WEEK , 'dayofweek' ],
                                [Blockly.Msg.DATETIME_CONVERT_FROM_DATE_NR          , 'number'    ]]
                },
                {
                    "type": "input_value",
                    "name": "INPUT"
                }
            ],
            "output": null,
            "colour": '#D6316B',
            "tooltip": Blockly.Msg.DATETIME_CONVERT_FROM_DATE_TOOLTIP,
            "helpUrl": ""
        });
    },
};

/* The generated function in this block is not ready yet
Blockly.Blocks['datetime_format'] = {
    init: function () {
        this.jsonInit({
            "type": "datetime_format",
            "message0": Blockly.Msg.DATETIME_FORMAT,
            "args0": [
                {
                    "type": "input_value",
                    "name": "INPUT"
                },
                {
                    "type": "input_value",
                    "name": "FORMAT",
                    "check": "String"
                },
            ],
            "inputsInline": true,
            "output": null,
            "colour": '#D6316B',
            "tooltip": Blockly.Msg.DATETIME_FORMAT_TOOLTIP,
            "helpUrl": ""
        });
    }
};
*/
