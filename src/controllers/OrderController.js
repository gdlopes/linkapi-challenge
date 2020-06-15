const LeadProvider = require('../providers/LeadProvider');
const CreateOrderService = require('../services/CreateOrderService');
const ListOrderService = require('../services/ListOrderService');

class OrderController {
  async store(request, response) {
    const createOrder = new CreateOrderService();

    const leads = await LeadProvider.getLeads();

    const orders = leads.map(async lead => {
      const order = await createOrder.execute(lead);

      return order;
    });

    const resultOrders = await Promise.all(orders);

    const anyOrderToCreate = !resultOrders.filter(Boolean).length;

    if (anyOrderToCreate) {
      return response.status(400).json({ message: 'There is no order to create.' });
    }

    return response.json({ orders: resultOrders.filter(Boolean) });
  }

  async index(request, response) {
    const listOrders = new ListOrderService();

    const orders = await listOrders.execute();

    return response.json({ orders });
  }
}

module.exports = new OrderController();
