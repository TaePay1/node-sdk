import axios from 'axios';

export default class Service {
  private AxiosInstance http;
  
  constructor(string apiKey, string apiSecret, 'live'|'sandbox' environment = 'live') {
    this.http = axios.create();
    
  }

  public function authorize(token = null) {
    return this;
  }

  async collect(string provider, string operator, Customer customer) {
    const response = await this.http.post('collections', {
      provider,
      operator,
      customer
    })
    
  }
}
