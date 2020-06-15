const OrderRepository = require('../repositories/OrderRepository');

class ListOrderService {
  async execute(lead) {
    const orderRepository = new OrderRepository();

    const orders = await orderRepository.findAll();

    return orders;
  }
}

module.exports = ListOrderService;
