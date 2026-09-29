/**
 * H5P ConcoursVeto project.
 *
 * @author Laurent David <laurent@call-learning.fr>
 * @license GNU General Public License v3.0
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * Get absolute URL for a given resource
 *
 * Use the fact we know the context to try and get the absolute path.
 * @param path
 * @param contentId H5P Content ID
 * @return {T[]}
 */
export function getAbsoluteURL (path, contentId) {
  const H5P = window.H5P || {};
  const normalizedPath = path.replace(/^\/+/, '');
  if (typeof H5P.getPath === 'function') {
    return H5P.getPath(normalizedPath, contentId);
  }
  if (typeof H5P.getContentPath === 'function') {
    return `${H5P.getContentPath(contentId)}/${normalizedPath}`;
  }
  return normalizedPath;
}

/**
 * Load an image from a URL and convert it to a base64 string.
 *
 * @param input
 * @returns {any|null}
 */
export function decodeAndParseJson(input) {
  // Detect if the string is HTML-encoded
  const isEncoded = isHtmlEncoded(input);

  // Decode if necessary
  const decodedString = isEncoded ? decodeHtmlEntities(input) : input;

  // Parse the JSON
  try {
    return JSON.parse(removeEncodedSingleQuote(decodedString));
  } catch (error) {
    return null;
  }
}

/**
 * Remove encoded single quotes from a string
 *
 * @param input
 * @returns {*}
 */
export function removeEncodedSingleQuote(input) {
  return input.replace(/&#039;/g, "'");
}

/**
 * Decode HTML entities in a string
 *
 * @param str
 * @returns {string}
 */
function decodeHtmlEntities(str) {
  const decoder = document.createElement('textarea');
  decoder.innerHTML = str;
  return decoder.value;
}

/**
 * Check if a string is HTML-encoded
 * @param str
 * @returns {boolean}
 */
function isHtmlEncoded(str) {
  // Regular expression to match common HTML entities
  const htmlEntityPattern = /&(?:[a-z]+|#\d+|#x[\da-f]+);/i;
  return htmlEntityPattern.test(str);
}
