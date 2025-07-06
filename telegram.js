// <script>
//   const TOKEN = "8063489404:AAFVYA63icluhbYxwh57ZRKklMXGhkjaAJo";
//   const CHAT_ID = "858464369";
//   const API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

//   document.getElementById("tg").addEventListener("submit", function (e) {
//     e.preventDefault();

//     const form = e.target;
//     const name = form.name.value.trim();
//     const msg = form.message.value.trim();

//     if (!name || !msg) {
//       alert("Пожалуйста, заполните все поля");
//       return;
//     }

//     const text = `📝 Новое сообщение:\n👤 ${name}\n💬 ${msg}`;

//     fetch(API, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         chat_id: CHAT_ID,
//         text: text,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.ok) {
//           alert("Сообщение отправлено!");
//           form.reset();
//         } else {
//           alert("Ошибка отправки: " + data.description);
//         }
//       })
//       .catch((err) => alert("Ошибка соединения: " + err));
//   });
// </script>

const TOKEN = "8063489404:AAFVYA63icluhbYxwh57ZRKklMXGhkjaAJo"; // Замените на токен вашего бота
const CHAT_ID = "858464369"; // Замените на ваш chat_id
const API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("tg").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value.trim();
  const msg = form.message.value.trim();

  if (!name || !msg) {
    alert("Пожалуйста, заполните все поля");
    return;
  }

  const text = `📝 Новое сообщение:\n👤 ${name}\n💬 ${msg}`;

  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.ok) {
        document.getElementById("status").innerText =
          "✅ Сообщение отправлено!";
        form.reset();
      } else {
        document.getElementById("status").innerText =
          "❌ Ошибка: " + data.description;
      }
    })
    .catch((err) => {
      console.error(err);
      document.getElementById("status").innerText = "⚠️ Ошибка соединения.";
    });
});
