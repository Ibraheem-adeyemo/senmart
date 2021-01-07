export class UtilitySevice {
    
    static buildQueryUrlParams = (params: Object) => {
        const query = Object.keys(params)
          .map(k => k + '=' + (params[k]))
          .join('&');
        return '?' + query;
      }
}