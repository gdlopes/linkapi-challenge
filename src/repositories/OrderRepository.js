const Order = require('../models/Order');

class OrderRepository {
  async findById(id) {
    const order = await Order.findOne({ lead_id: id });

    return order;
  }

  async findAll() {
    const orders = await Order.find();

    return orders;
  }

  async save(lead) {
    const order = await Order.create({
      lead_id: lead.id,
      total_value: lead.value
    });

    return order;
  }
}

module.exports = OrderRepository;
