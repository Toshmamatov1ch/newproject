let products = [
  { id: 1, name: "Iphone 13", price: 900, stock: 5 },
  { id: 2, name: "Samsung S22", price: 850, stock: 3 },
  { id: 3, name: "Redmi Note 12", price: 300, stock: 10 },
];

// function addProduct(name, price, stock) {
//   let lastId;

//   if (products.length > 0) {
//     lastId = products[products.length - 1].id;
//   } else {
//     lastId = 0;
//   }

//   let newProduct = {
//     id: lastId + 1,
//     name: name,
//     price: price,
//     stock: stock,
//   };

//   products.push(newProduct);
// }

// addProduct("MacBook Air", 1200, 4);
// addProduct("Lenovo Slim3", 500, 10);

// console.log(products);

// function updateProduct(producId, updates) {
//   products = products.map((product) => {
//     if (product.id === producId) {
//       return { ...product, ...updates };
//     }
//     return product;
//   });
// }

// updateProduct(2, { price: 1200, stock: 10 });

// console.log(products);

// function updateProduct(id, updates) {
//   let prod = products.find((item) => item.id == id);
//   prod.price = updates.price;
//   prod.stock = updates.stock;
// }

// updateProduct(2, { price: 1200, stock: 10 });

// console.log(products);

// function deleteProduct(id) {
//   products = products.filter((item) => item.id !== id);
// }

// deleteProduct(1);

// console.log(products);

// .===========================================================================

// Uyga vazifa

// CRUD Task 1: User Management System
// Where is it used?
// Admin panel → Users page (for managing users in web apps)
// Initial Data
// let users = [
//  { id: 1, name: "Ali", age: 22, active: true },
//  { id: 2, name: "Vali", age: 25, active: false },
//  { id: 3, name: "Sami", age: 30, active: true }
// ];
// 1. CREATE
// Add a new user with unique id.
// addUser("John", 28)
// 2. READ
// Get only active users.
// getActiveUsers()
// 3. UPDATE
// Update user by id.
// updateUser(2, { active: true })
// 4. DELETE
// Delete user by id.
// deleteUser(1)
// Extra
// Search users by name, filter by age > 25, sort by age

// let users = [
//   { id: 1, name: "Ali", age: 22, active: true },
//   { id: 2, name: "Vali", age: 25, active: false },
//   { id: 3, name: "Sami", age: 30, active: true },
// ];

// class UserSystem {
//   constructor() {
//     this.users = [
//       { id: 1, name: "Ali", age: 22, active: true },
//       { id: 2, name: "Vali", age: 25, active: false },
//       { id: 3, name: "Sami", age: 30, active: true },
//     ];
//   }

//   addUser(name, age) {
//     const newId =
//       this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
//     const newUser = { id: newId, name, age, active: true };
//     this.users.push(newUser);
//     return newUser;
//   }

//   getActiveUsers() {
//     return this.users.filter((user) => user.active);
//   }

//   updateUser(id, newData) {
//     this.users = this.users.map((user) =>
//       user.id === id ? { ...user, ...newData } : user,
//     );
//   }

//   deleteUser(id) {
//     this.users = this.users.filter((user) => user.id !== id);
//   }

//   searchAndSort(minAge = 0, nameQuery = "") {
//     return this.users
//       .filter(
//         (user) =>
//           user.age > minAge &&
//           user.name.toLowerCase().includes(nameQuery.toLowerCase()),
//       )
//       .sort((a, b) => a.age - b.age);
//   }

//   showAll() {
//     console.table(this.users);
//   }
// }

// const mySystem = new UserSystem();

// mySystem.addUser("John", 28);
// mySystem.updateUser(2, { active: true });
// mySystem.deleteUser(1);

// // Natijani ko'rish
// mySystem.showAll();
// console.log("25 yoshdan kattalar:", mySystem.searchAndSort(25));

// >==================================================================================

// CRUD Task 2: Todo List System
// Where is it used?
// Todo app / productivity apps (like task manager)
// Initial Data
// let todos = [
//  { id: 1, title: "Learn JS", completed: false },
//  { id: 2, title: "Build Project", completed: true }
// ];
// 1. CREATE
// Add new todo.
// addTodo("Practice React")
// 2. READ
// Get only completed todos.
// getCompletedTodos()
// 3. UPDATE
// Mark todo as completed.
// updateTodo(1, { completed: true })
// 4. DELETE
// Delete todo by id.
// // deleteTodo(2)
// Extra
// Search todos, filter completed/uncompleted, sort by title.

// const todoSystem = {
//   todos: [
//     { id: 1, title: "Learn JS", completed: false },
//     { id: 2, title: "Build Project", completed: true },
//   ],

//   // 1. CREATE - Yangi vazifa qo'shish
//   add(title) {
//     const newTodo = {
//       id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
//       title: title,
//       completed: false,
//     };
//     this.todos.push(newTodo);
//     return `✅ Qo'shildi: "${title}"`;
//   },

//   // 2. READ - Faqat bajarilganlarni ko'rish
//   getCompleted() {
//     return this.todos.filter((todo) => todo.completed);
//   },

//   // 3. UPDATE - Holatni o'zgartirish
//   update(id, status) {
//     this.todos = this.todos.map((todo) =>
//       todo.id === id ? { ...todo, completed: status } : todo,
//     );
//     return ` ID: ${id} holati ${status} ga o'zgardi.`;
//   },

//   // 4. DELETE - O'chirish
//   remove(id) {
//     this.todos = this.todos.filter((todo) => todo.id !== id);
//     return `🗑️ ID: ${id} o'chirildi.`;
//   },

//   // EXTRA - Qidirish va Filtrlash
//   search(query) {
//     return this.todos.filter((todo) =>
//       todo.title.toLowerCase().includes(query.toLowerCase()),
//     );
//   },

//   // Hammasini oddiy ro'yxat ko'rinishida chiqarish
//   listAll() {
//     console.log("--- BARCHA VAZIFALAR ---");
//     this.todos.forEach((todo) => {
//       const status = todo.completed ? "[X] Bajarildi" : "[ ] Bajarilmadi";
//       console.log(`${todo.id}. ${todo.title} - ${status}`);
//     });
//   },
// };

// --- ISHLATISH ---

// console.log(todoSystem.add("Practice React")); // Qo'shish
// console.log(todoSystem.update(1, true)); // ID 1 ni bajarildi qilish
// console.log(todoSystem.remove(2)); // ID 2 ni o'chirish

// // Natijani ko'rish
// todoSystem.listAll();

// // Qidiruv natijasi
// console.log("Qidiruv (React):", todoSystem.search("React"));
