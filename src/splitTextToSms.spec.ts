import { splitTextToSms } from './splitTextToSms';

const shortTestString: string  = "Lorem ipsum dolor sit amet consectetur adipiscing elit";
const longTestString: string = "Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam eleifend odio at" +
	"magna pretium suscipit Nam commodo mauris felis ut suscipit velit efficitur eget" +
	"Sed sit amet posuere risus";

describe('Split Text To Sms', () => {
	it('Short String Test', async () => {
		expect(splitTextToSms(shortTestString).length).toEqual(1);
	});
	it('Long String Test', async () => {
		expect(splitTextToSms(longTestString).length).toEqual(2);
	});
});