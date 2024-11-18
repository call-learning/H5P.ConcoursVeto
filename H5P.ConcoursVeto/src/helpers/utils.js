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
