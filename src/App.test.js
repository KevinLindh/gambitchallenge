import { real4Convert, longConvert, integerConvert, bitConvert } from './data/Converter';

test('real4conversion formula', () => {
  let data = {name:"Temperature #1/inlet", id:0, rawData:15568};
  const value = real4Convert(data, 0, [data, {name:"Temperature #1/inlet", id:1, rawData:16611}])
  expect(value).toBe("7.10117");
});

test('Current input at AI3 uneven index', () => {
  let data = {name:"Current input at AI3", id:0, rawData:65480};
  let data2 = {name:"Current input at AI3", id:1, rawData:65535};
  const value = real4Convert(data, 0, [data, data2])
  expect(value.toString()).toBe("");
});

test('IntegerConversion formula', () => {
  let data = {name:"Signal quality", id:0, rawData:806};
  const value = integerConvert(data)
  expect(value).toBe(38);
});

test('longConversion formula', () => {
  let data = {name:"Negative energy accumulator", id:0, rawData:65480};
  let data2 = {name:"Negative energy accumulator", id:1, rawData:65535};
  const value = longConvert(data, 0, [data, data2]);
  expect(value).toBe(-56);
});

test('Bitconversion formula', () => {
  let data = {name:"Error Code", id:0, rawData:4};
  const value = bitConvert(data);
  expect(value).toBe("poor received signal\n");
});