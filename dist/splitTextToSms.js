"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitTextToSms = void 0;
const splitTextToSms = (text, smsLen = 140) => {
    if (text.length <= smsLen)
        return [text];
    const result = [];
    result.push(text
        .split(' ')
        .reduce((str, word) => {
        if ((str.length + word.length + 5) <= smsLen)
            return `${str} ${word}`;
        result.push(str);
        return word;
    }));
    const smsCount = result.length;
    return result.map((item, index) => `${item} ${index + 1}/${smsCount}`);
};
exports.splitTextToSms = splitTextToSms;
//# sourceMappingURL=splitTextToSms.js.map