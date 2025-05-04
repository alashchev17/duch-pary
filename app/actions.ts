"use server";

export type FormState = {
  fieldErrors?: {
    name?: string;
    email?: string;
    message?: string;
    acceptedPolicy?: string;
  };
  globalError?: string;
  success?: boolean;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendToTelegram(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const acceptedPolicy = formData.get("accepted-policy") === "on";

  const fieldErrors: FormState["fieldErrors"] = {};

  if (!name) fieldErrors.name = "Укажите Ваше имя!";
  if (!email) {
    fieldErrors.email = "Укажите Вашу электронную почту!";
  } else if (typeof email !== "string" || !EMAIL_REGEX.test(email)) {
    fieldErrors.email = "Введите корректную электронную почту!";
  }
  if (!message) fieldErrors.message = "Введите Ваше сообщение!";
  if (!acceptedPolicy)
    fieldErrors.acceptedPolicy = "Примите условия пользования!";

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors };
  }

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
  const TELEGRAM_GROUP_ID = process.env.TELEGRAM_GROUP_ID!;

  const now = new Date().toLocaleString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const text = `Новая отправка формы:\n\nИмя: ${name}\nПочта: ${email}\nСообщение: ${message}\n\nВремя отправки сообщения: ${now}`;

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
      return { globalError: "Ошибка отправки сообщения. Попробуйте позже." };
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { globalError: "Ошибка отправки сообщения. Попробуйте позже." };
  }
}
