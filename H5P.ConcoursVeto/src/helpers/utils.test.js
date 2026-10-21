import { getAbsoluteURL, getLibraryAssetURL, decodeAndParseJson, removeEncodedSingleQuote } from './utils';
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

describe('getLibraryAssetURL', () => {
  it('should return the library asset URL using H5P.getLibraryPath', () => {
    window.H5P = {
      getLibraryPath: jest.fn(library => `libraries/${library}`)
    };
    expect(getLibraryAssetURL('dist/images/logo.png', 'H5P.ConcoursVeto 2.0'))
      .toBe('libraries/H5P.ConcoursVeto-2.0/dist/images/logo.png');
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
