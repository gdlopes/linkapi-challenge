const axios = require('axios').default;

const { blingUrl } = require('../config/providers');

class OrderProvider {
  async create(lead) {
    const { organization, title, value } = lead;

    const requestOrderXml = encodeURIComponent(`
    <?xml version="1.0" encoding="UTF-8"?>
    <pedido>
      <cliente>
        <nome>${organization}</nome>
      </cliente>
      <itens>
        <item>
          <codigo>01</codigo>
          <descricao>${title}</descricao>
          <qtde>01</qtde>
          <vlr_unit>${value}</vlr_unit>
        </item>
      </itens>
      <parcelas>
        <parcela>
          <vlr>${value}</vlr>
        </parcela>
      </parcelas>
    </pedido>
    `);

    const url = `${blingUrl}&xml=${requestOrderXml}`;

    const response = await axios.post(url);

    return response;
  }
}

module.exports = new OrderProvider();
