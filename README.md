# form
Скрипт отправки данных из формы
## Установка
1. Ваш HTML-файл должен иметь схожую структуру (***ВНИМАНИЕ!!! Ваши поля должны иметь атрибут name***).
```HTML
      <form id="form">
        <input type="text" name="name" value="Вася">
        <input type="text" name="surname" value="Петров">
        <button type=submit>Отправить</button>
    </form>
```
2. Перед Вашим файлом скрипта подключите прилагаемый файл:
```HTML
  <script src="js/form.js"></script>
```
3. В Вашем файле скрипта вызовите функции и передайте в нее селектор формы и путь до Вашего php-файла:
```JS
  createForm('#form', 'server.php');
```
