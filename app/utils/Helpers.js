import ajax from 'superagent';
var baseUrl = "https://congress.api.sunlightfoundation.com"

class Helpers {
  static getRepresentatives(zipCode){
      return ajax.get(`${baseUrl}/legislators/locate?zip=${zipCode}`)
  }
}

export default Helpers
