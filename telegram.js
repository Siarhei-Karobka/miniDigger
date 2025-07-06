const TOKEN = "8063489404:AAFVYA63icluhbYxwh57ZRKklMXGhkjaAJo";
const CHAT_ID = "858464369";
const API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("tg");
  const statusEl = document.getElementById("status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const msg = form.message.value.trim();

    if (!name || !msg) {
      statusEl.textContent = "Заполните все поля";
      statusEl.style.color = "red";
      statusEl.style.display = "block";
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
          statusEl.textContent = "✅ Сообщение отправлено!";
          statusEl.style.color = "green";
          statusEl.style.display = "block";
          form.reset();
        } else {
          statusEl.textContent = "❌ Ошибка: " + data.description;
          statusEl.style.color = "red";
          statusEl.style.display = "block";
        }
      })
      .catch((err) => {
        statusEl.textContent = "⚠️ Ошибка соединения";
        statusEl.style.color = "red";
        statusEl.style.display = "block";
      });
  });
});
