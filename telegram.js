const TOKEN = "8063489404:AAFVYA63icluhbYxwh57ZRKklMXGhkjaAJo";
const CHAT_ID = "-4988140259";
const API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("tg");
  const statusEl = document.getElementById("status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const msg = form.message.value.trim();

    if (!name || !phone || !msg) {
      alert("❗ Пожалуйста, заполните все поля.");
      return;
    }

    const text = `📝 Новое сообщение:\n👤 ${name}\n📱 ${phone}\n💬 ${msg}`;

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
          alert("✅ Сообщение отправлено!");
          form.reset();
        } else {
          alert("❌ Ошибка: " + data.description);
        }
      })
      .catch((err) => {
        alert("⚠️ Ошибка соединения");
      });
  });
});
