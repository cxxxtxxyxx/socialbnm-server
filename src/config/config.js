import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

export const env = {
  PORT: process.env.SERVER_PORT,
  NODE_ENV: process.env.NODE_ENV,
};

export const db = {
  ID: process.env.DB_ID,
};

export const senderInfo = {
  user: process.env.MAIL_SENDER,
  password: process.env.GOOGLE_APP_PASSWORD,
};

export const mailInfo = {
  email: 'indiflex.corp@gmail.com',
  passwd: '<google-app-passwd>',
  sender: '"bnm" <indiflex.corp@gmail.com>',

  service: 'gmail',
  host: 'smtp.gmail.com',
  port: '587',
  secure: false,
  tls: { rejectUnauthorize: false },
  maxConnections: 5,
  maxMessages: 10,
  auth: { user: senderInfo.user, pass: senderInfo.password },
};
