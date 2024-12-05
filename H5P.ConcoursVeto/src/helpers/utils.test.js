import { getAbsoluteURL, decodeAndParseJson, removeEncodedSingleQuote } from './utils';
describe('getAbsoluteURL', () => {
  beforeAll(() => {
    // Mock the H5P object on the window
    global.window = Object.create({ H5P: {} });
  });
  it('should return the path if H5P.getPath is undefined', () => {
    const path = 'some/path';
    const contentId = 123;
    expect(getAbsoluteURL(path, contentId)).toBe(path);
  });

  it('should return the absolute URL using H5P.getPath', () => {
    window.H5P = {
      getPath: jest.fn((path, contentId) => `absolute/${path}/${contentId}`)
    };
    const path = 'some/path';
    const contentId = 123;
    expect(getAbsoluteURL(path, contentId)).toBe(`absolute/${path}/${contentId}`);
  });
});

describe('decodeAndParseJson', () => {
  beforeAll(() => {
    global.document = {
      createElement: jest.fn(() => ({
        innerHTML: '',
        value: ''
      }))
    };
  });
  it('should decode HTML entities and parse JSON', () => {
    const input = '{"key": "<p>value</p>"}';
    const expectedOutput = { key: "<p>value</p>" };
    expect(decodeAndParseJson(input)).toEqual(expectedOutput);
  });

  it('should return null for invalid JSON', () => {
    const input = 'invalid json';
    expect(decodeAndParseJson(input)).toBeNull();
  });
});

describe('removeEncodedSingleQuote', () => {
  it('should replace encoded single quotes with actual single quotes', () => {
    const input = 'It&#039;s a test';
    const expectedOutput = "It's a test";
    expect(removeEncodedSingleQuote(input)).toBe(expectedOutput);
  });
});
