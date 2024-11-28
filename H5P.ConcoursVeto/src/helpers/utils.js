/**
 * Get absolute URL for a given resource
 *
 * Use the fact we know the context to try and get the absolute path.
 * @param path
 * @param contentId H5P Content ID
 * @return {T[]}
 */

export function getAbsoluteURL (path, contentId) {
  let H5P = window.H5P || {};
  if (H5P.getPath === undefined) {
    return path;
  }
  return H5P.getPath(path, contentId);
}


export function decodeAndParseJson(input) {
  // Detect if the string is HTML-encoded
  const isEncoded = isHtmlEncoded(input);

  // Decode if necessary
  const decodedString = isEncoded ? decodeHtmlEntities(input) : input;

  // Parse the JSON
  try {
    return JSON.parse(decodedString.replace(/&#039;/g, "'"));
  } catch (error) {
    console.error("Invalid JSON:", error);
    return null;
  }
}

function decodeHtmlEntities(str) {
  const decoder = document.createElement('textarea');
  decoder.innerHTML = str;
  return decoder.value;
}

function isHtmlEncoded(str) {
  // Regular expression to match common HTML entities
  const htmlEntityPattern = /&(?:[a-z]+|#\d+|#x[\da-f]+);/i;
  return htmlEntityPattern.test(str);
}
