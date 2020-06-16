const axios = require('axios').default;

const { pipeDrive } = require('../config/providers');

class LeadProvider {
  async getLeads(status = 'won') {
    const url = `${pipeDrive.host}/v1/deals?api_token=${pipeDrive.apiKey}&status=${status}`;

    const response = await axios.get(url);

    const leads =
      response.data.data &&
      response.data.data.map(lead => {
        const { id, org_name, title, value, add_time } = lead;

        return {
          id,
          organization: org_name,
          title,
          value,
          addTime: add_time
        };
      });

    return leads;
  }
}

module.exports = new LeadProvider();
