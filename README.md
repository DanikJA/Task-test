# Movies App

Веб-додаток для зберігання інформації про фільми на React з Redux Toolkit, підключений до API через Docker.

---

## Опис

Цей додаток дозволяє:
- Додавати нові фільми
- Видаляти фільми
- Переглядати список фільмів, відсортований за назвою
- Шукати фільми за назвою та за актором
- Імпортувати фільми з текстового файлу

API працює через Docker-образ [webbylabhub/movies](https://hub.docker.com/r/webbylabhub/movies).

---

## Встановлення та запуск локально

1. Клонувати репозиторій

```bash
git clone https://github.com/yourusername/movies-app.git
cd movies-app

2.Встановити залежності
npm install

3.Створити файл .env у корені проекту з таким вмістом:

REACT_APP_API_URL=http://localhost:8000/api/v1

4.Запустити додаток
npm start

5.Запуск API через Docker
docker run --name movies-api -p 8000:8000 webbylabhub/movies


