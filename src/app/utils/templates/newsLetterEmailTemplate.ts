export const newsletterEmailTemplate = (
  year: number,
  unsubscribeUrl: string
) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AutoShine Newsletter</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #F7F7F7; /* Neutral 100 */
    }
    table {
      max-width: 600px;
      margin: 20px auto;
      background-color: #FFFFFF; /* Background 100 */
      border-collapse: collapse;
      border-radius: 8px;
      overflow: hidden;
    }
    td {
      padding: 20px;
      text-align: center;
    }
    .header {
      background-color: #184e77; /* Primary 700 */
      color: #FFFFFF;
      padding: 20px;
    }
    .logo {
      font-size: 24px;
      margin: 0;
      display: inline-block;
      vertical-align: middle;
      color: #FFFFFF;
    }
    .logo-image {
      height: 40px;
      width: 40px;
      vertical-align: middle;
      margin-right: 10px;
    }
    .content {
      font-size: 16px;
      color: #333333;
    }
    .footer {
      font-size: 12px;
      color: #666666;
      background-color: #F1F1F1;
      padding: 10px;
    }
    .unsubscribe {
      font-size: 14px;
      color: #666666;
      margin-top: 10px;
    }
    .unsubscribe a {
      color: #184e77;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <table>
    <tr>
      <td class="header">
        <img
          src="https://i.ibb.co.com/ykq65QR/logo.png" 
          alt="AutoShine Logo"
          class="logo-image"
        />
        <span class="logo">AutoShine</span>
      </td>
    </tr>
    <tr>
      <td class="content">
        <p>Hi there,</p>
        <p>Welcome to the <b>AutoShine Newsletter</b>! We're thrilled to have you with us.</p>
        <p>At AutoShine, we offer premium carwash services to keep your vehicle sparkling clean, inside and out.</p>
        <p>Expect exclusive deals, car care tips, and updates on our latest services delivered straight to your inbox.</p>
        <p>Need a professional clean today? Visit our website or schedule your appointment now!</p>
        <p>Thank you for trusting us to keep your car shining!</p>
        <p>Best regards,<br>The AutoShine Team</p>
      </td>
    </tr>
    <tr>
      <td class="footer">
        <p>© ${year} AutoShine Carwash Services. All rights reserved.</p>
        <p class="unsubscribe">To unsubscribe, <a href="${unsubscribeUrl}">click here</a>.</p>
      </td>
    </tr>
  </table>
</body>
</html>
`;
