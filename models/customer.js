class Customer {
  static async create ({ firstName, lastName, email, tel }) {
    
    try {
      
      const insertQuery = `
        INSERT INTO customers (first_name, last_name, email, tel)
        VALUES ($1, $2, $3, $4)
        RETURNING *
      `;
      const createdCustomer = await Customer.pool.query(insertQuery, [firstName, lastName, email, tel]); // виконати його
      console.log(createdCustomer);
      return createdCustomer.rows[0]; // повернути результат
    } catch (err) {
      throw new Error(err);
    }
  }
  static async getAll ({ limit, offset }) {
    try {
      const selectAllQuery = `
        SELECT *
        FROM customers
        ORDER BY id
        LIMIT ${limit} OFFSET ${offset}
      `;
      const foundCustomers = await Customer.pool.query(selectAllQuery);
      return foundCustomers.rows;
    } catch (err) {
      throw new Error(err.detail);
    }
  }

  //1 UNION SELECT * FROM customers;
  static async getById (id) {

    try {
      const selectQuery = `
        SELECT *
        FROM customers
        WHERE id = $1;
      `;
      const foundCustomer = await Customer.pool.query(selectQuery,[id]);
      return foundCustomer.rows[0];
    } catch (err) {
      throw new Error(err);
    }
  }
  static async updateById (id, { firstName, lastName, email, tel }) {
    
    try {
      const updateQuery = `
        UPDATE customers
        SET first_name = $1, 
            last_name = $2, 
            email = $3, 
            tel = $4
        WHERE id = $5
        RETURNING *
      `;
      const updatedCustomer = await Customer.pool.query(updateQuery,[firstName, lastName,email,tel,id]);
      return updatedCustomer.rows[0];
    } catch (err) {
      throw new Error(err);
    }
  }
  static async deleteById (id) {
    try {
      const deleteQuery = `
        DELETE
        FROM customers
        WHERE id = $1
        RETURNING *
      `;
      const deletedCustomer = await Customer.pool.query(deleteQuery, [id]);
      return deletedCustomer.rows[0];
    } catch (err) {
      throw new Error(err.detail);
    }
  }
}

module.exports = Customer;
