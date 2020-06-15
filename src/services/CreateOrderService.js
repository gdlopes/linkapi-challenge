const OrderProvider = require('../providers/OrderProvider');
const OrderRepository = require('../repositories/OrderRepository');

class CreateOrderService {
  async execute(lead) {
    const orderRepository = new OrderRepository();

    const orderAlreadyExists = await orderRepository.findById(lead.id);

    if (orderAlreadyExists) return;

    const response = await OrderProvider.create(lead);

    const successfulCreated = [200, 201].includes(response.status);

    if (!successfulCreated) {
      return {
        error: {
          statusCode: response.status,
          message: `Lead with id ${lead.id} failed to create.`
        }
      };
    }

    const order = await orderRepository.save(lead);

    return order;
  }
}

module.exports = CreateOrderService;
