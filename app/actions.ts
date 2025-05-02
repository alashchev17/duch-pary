"use server";

export async function sendToTelegram(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const acceptedPolicy =
    formData.get("accepted-policy") === "on" ? "Yes" : "No";

  if (!name || !email || !message || !acceptedPolicy) return;
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
  const TELEGRAM_GROUP_ID = process.env.TELEGRAM_GROUP_ID!;

  const text = `Новая отправка формы:\n\nИмя: ${name}\nПочта: ${email}\nСообщение: ${message}\n\nПринятие условий использования: ${acceptedPolicy}`;

  const sendMessageUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const res = await fetch(sendMessageUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chat_id: TELEGRAM_GROUP_ID, text }),
    });

    const data = await res.json();

    if (!data.ok) {
      throw new Error("Failed to send message to Telegram");
    }
  } catch (error) {
    console.error(error);
  }
}
