/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Replace with your email credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",  // ✅ Replace with your Gmail
    pass: "your-email-password"   // ✅ Replace with an App Password (NOT your Gmail password)
  }
});

exports.sendEmailNotification = functions.firestore
  .document("contactMessages/{docId}")
  .onCreate(async (snap: { data: () => any; }, context: any) => {
    const data = snap.data();
    const mailOptions = {
      from: `"Portfolio Contact" <your-email@gmail.com>`,
      to: "govindb2922@gmail.com", // ✅ Replace with your email
      subject: `New Contact Message from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Subject: ${data.subject}
        Message: ${data.message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });
