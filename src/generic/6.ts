/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(userData: Partial<User>): User {
  // Оновлення користувача
  const baseUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...baseUser, ...userData };
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });

export {};
