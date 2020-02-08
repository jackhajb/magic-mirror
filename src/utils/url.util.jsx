export class UrlUtils {
  mapParamsToUrl(url, params) {
    return Object.keys(params).reduce((mappedUrl, paramKey) => (
      mappedUrl.replace(`:${paramKey}`, params[paramKey])
    ), url);
  }
}