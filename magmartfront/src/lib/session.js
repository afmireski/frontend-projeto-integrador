import { IronSessionOptions } from "iron-session";

export const sessionOptions: IronSessionOptions = {
  password: process.env.SESSION_SECRET || "complex_password_at_least_32_characters_long",
  cookieName: "your_app_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
