export const splitTextToSms = (text: string, smsLen: number = 140): string[] => {
	if (text.length <= smsLen) return [text];
	const result: string[] = [];
	result.push(
		text
			.split(' ')
			.reduce((str: string, word: string): string => {
				if ((str.length + word.length + 5) <= smsLen) return `${str} ${word}`;
				result.push(str);
				return word;
			})
	);
	const smsCount = result.length;
	return result.map((item: string, index: number) => `${item} ${index + 1}/${smsCount}`);
}
