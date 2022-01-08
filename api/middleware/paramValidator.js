exports.undefined2null = (param) => {
    if (param == undefined) { return null; } else { return param; }
};

exports.undefined2zero = (param) => {
    if (param == undefined) { return 0; } else { return param; }
};

exports.undefined2empty = (param) => {
    if (param == undefined) { return ''; } else { return param; }
};

exports.undefined2value = (param, value) => {
    if (param == undefined) { return value; } else { return param; }
};