# React-Django Todo App

[todo.webm](https://github.com/user-attachments/assets/96e24a91-178f-43b6-8e84-fda938f5f57b)

Это простое "To Do List" веб-приложение, созданное с использованием React для фронтенда и Django REST Framework для бэкенда. Оно демонстрирует базовые концепции работы с API и взаимодействия между фронтендом и бэкендом.

## Особенности

-   **Создание задач:** Пользователи могут добавлять новые задачи в список.
-   **Просмотр задач:** Отображается список текущих задач.
-   **Редактирование задач** Задачи можно редактировать в модальном окне.
-   **Отметка о выполнении:** Задачи можно отмечать как выполненные.
-   **Удаление задач:** Задачи можно удалять из списка.
-   **Разделение на фронтенд и бэкенд:**
    -   Фронтенд написан на React.
    -   Бэкенд написан на Django REST Framework.
-   **Взаимодействие через API:** Фронтенд взаимодействует с бэкендом через REST API.
-   **Стилизация:** Фронтенд стилизован с использованием **Tailwind CSS** и **Catppuccin** цветовой схемы.

## Технологии

-   **Фронтенд:**
    -   [React](https://reactjs.org/)
    -   [Axios](https://axios-http.com/) (для HTTP-запросов)
    -   [Tailwind CSS](https://tailwindcss.com/) (для стилизации)
    -   [Catppuccin Tailwind CSS Theme](https://github.com/catppuccin/tailwindcss) (цветовая схема)
     -  [Vite](https://vitejs.dev/) (инструмент для быстрой сборки)
-   **Бэкенд:**
    -   [Django](https://www.djangoproject.com/)
    -   [Django REST Framework](https://www.django-rest-framework.org/)
    -   [SQLite](https://www.sqlite.org/) (используется по умолчанию для разработки)

## Как запустить проект

### Требования

-   [Python 3.12](https://www.python.org/)
-   [Node.js](https://nodejs.org/) (с npm или yarn)

### Шаги

1.  **Клонирование репозитория:**
    ```bash
    git clone https://github.com/bugweaver/react-django-todo-app.git
    cd react-django-todo-app
    ```

2.  **Настройка бэкенда (Django):**
    ```bash
    cd backend
    # Создание и активация виртуального окружения
    python -m venv venv
    source venv/bin/activate  # для Linux/macOS
    # venv\Scripts\activate  для Windows

    pip install -r requirements.txt
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    ```
    Бэкенд будет запущен по адресу `http://127.0.0.1:8000/`.

3.  **Настройка фронтенда (React):**
    ```bash
    cd ../frontend
    npm install  # или yarn install
    npm run dev  # или yarn dev для Vite
    ```
    Фронтенд будет запущен по адресу `http://localhost:5173/`.

4.  **Откройте приложение:**
    Откройте ваш браузер и перейдите по адресу `http://localhost:5173/`, чтобы использовать приложение.
