const { Pool } = require('pg');

const connectionOptions = {
  user: 'postgres',
  host: 'localhost',
  database: 'phones_sales',
  password: 'admin',
  port: 5432,
};

const pool = new Pool(connectionOptions);

// Завершити з'єднання з БД при завершенні роботи застосунку
process.on('beforeExit', () => pool.end());

// promise then/catch
// pool
//   .query('SELECT CURRENT_DATE')
//   .then(res => console.log('1res :>> ', res.rows[0]))
//   .catch(err => console.log('err :>> ', err));

// cb
// pool.query('SELECT CURRENT_DATE', (err, res) => {
//   if (!err) {
//     console.log('2res.rows[0] :>> ', res.rows[0]);
//   }
// });

// promise async/await
// (async function () {
//   try {
//     const res = await pool.query('SELECT CURRENT_DATE');
//     console.log('3res.rows[0] :>> ', res.rows[0]);
//   } catch (err) {
//     console.log('err :>> ', err);
//   }
// })();

// Отримати список кастомерів
// pool
//   .query(
//     `
//     SELECT *
//     FROM customers
//     `
//   )
//   .then(res => console.log('res', res.rows))
//   .catch(err => console.log('err', err));

// Отримати кастомера з id=1
// const id = 1;

// (async () => {
//   try {
//     const customer = await pool.query(`
//       SELECT *
//       FROM customers
//       WHERE id = ${id}
//     `);
//     console.log('customer.rows[0] :>> ', customer.rows[0]);
//   } catch (err) {
//     console.log('err :>> ', err);
//   }
// })();

// (async () => {
//   try {
//     const customer = await pool.query(
//       `
//       SELECT *
//       FROM customers
//       WHERE id = $1
//     `,
//       [id]
//     );
//     console.log('customer.rows[0] :>> ', customer.rows[0]);
//   } catch (err) {
//     console.log('err :>> ', err);
//   }
// })();

// Знайти користувача
// const fn = 'Petro1';
// const ln = 'Petrenko1';

// (async () => {
//   try {
//     const customer = await pool.query(
//       `
//       SELECT *
//       FROM customers
//       WHERE first_name = $1 AND last_name = $2
//     `,
//       [fn, ln]
//     );
//     console.log('customer.rows[0] :>> ', customer.rows[0]);
//   } catch (err) {
//     console.log('err :>> ', err);
//   }
// })();

// Створити замовлення користувачу с id=1
// const customer_id = 1;
// const created_at = '2023-10-10';

// (async () => {
//   try {
//     const order = await pool.query(
//       `
//       INSERT INTO orders (customer_id, created_at)
//       VALUES ($1, $2)
//       RETURNING *
//     `,
//       [customer_id, created_at]
//     );
//     console.log('customer.rows[0] :>> ', order.rows[0]);
//   } catch (err) {
//     console.log('err :>> ', err);
//   }
// })();

//////////////////////////////////////////////////////////

// POST /customers {}
// GET /customers?page=1&results=5
// GET /customers/1
// PATCH /customers/1 {}
// DELETE /customers/1

class Customer {
  static async create ({ firstName, lastName, email, tel }) {
    try {
      // сформувати запит
      const insertQuery = `
        INSERT INTO customers (first_name, last_name, email, tel)
        VALUES ('${firstName}', '${lastName}', '${email}', '${tel}')
        RETURNING *
      `;
      const createdCustomer = await pool.query(insertQuery); // виконати його
      return createdCustomer.rows[0]; // повернути результат
    } catch (err) {
      console.log('err :>> ', err); // або помилку
    }
  }
  static getAll ({ limit, offset }) {}
  static getById (id) {}
  static updateById (id, { firstName, lastName, email, tel }) {}
  static deleteById (id) {}
}

const newCustomer = {
  firstName: 'Test',
  lastName: 'testovych',
  email: 'mail100@gmail.com',
  tel: '+380123456780',
};

User.create(newCustomer).then(data => console.log('data :>> ', data));
