"use server";

import { Language } from "@/components/design-system/LanguageSwitcher/language";

const statusesTranslations = {
  nameError: {
    ru: "Укажите Ваше имя!",
    en: "Enter your name!",
    pl: "Podaj swój imię!",
  },
  emailError: {
    ru: "Укажите Вашу электронную почту!",
    en: "Enter your email!",
    pl: "Podaj swój adres e-mail!",
  },
  emailValidationError: {
    ru: "Введите корректную электронную почту!",
    en: "Enter a valid email!",
    pl: "Podaj poprawny adres e-mail!",
  },
  messageError: {
    ru: "Введите Ваше сообщение!",
    en: "Enter your message!",
    pl: "Podaj swój komunikat!",
  },
  acceptedPolicy: {
    ru: "Примите условия пользования!",
    en: "Accept the terms of use!",
    pl: "Zatwierdź warunki korzystania!",
  },
  globalError: {
    ru: "Ошибка отправки сообщения. Попробуйте позже.",
    en: "Error sending the message. Try again later.",
    pl: "Błąd wysyłania wiadomości. Spróbuj później.",
  },
};

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
  language: Language,
): Promise<FormState> {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const acceptedPolicy = formData.get("accepted-policy") === "on";

  const fieldErrors: FormState["fieldErrors"] = {};

  if (!name) fieldErrors.name = statusesTranslations.nameError[language.code];
  if (!email) {
    fieldErrors.email = statusesTranslations.emailError[language.code];
  } else if (typeof email !== "string" || !EMAIL_REGEX.test(email)) {
    fieldErrors.email =
      statusesTranslations.emailValidationError[language.code];
  }
  if (!message)
    fieldErrors.message = statusesTranslations.messageError[language.code];
  if (!acceptedPolicy)
    fieldErrors.acceptedPolicy =
      statusesTranslations.acceptedPolicy[language.code];

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

  const text = `Новая отправка формы:\n\nИмя: ${name}\nПочта: ${email}\nСообщение: ${message}\n\nВремя отправки сообщения: ${now}\nЯзык пользователя: ${language.code.toUpperCase()}`;

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
      console.error(data);
      return { globalError: statusesTranslations.globalError[language.code] };
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { globalError: statusesTranslations.globalError[language.code] };
  }
}
