interface LeadData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  platformInterest: string[];
  message: string;
  source: string;
  ip?: string;
}

const BASE_STYLES = `
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: #0f172a;
  line-height: 1.6;
  margin: 0;
  padding: 0;
`;

const HEADER_STYLES = `
  background-color: #0f172a;
  padding: 32px 40px;
  text-align: center;
  border-radius: 16px 16px 0 0;
`;

const CONTAINER_STYLES = `
  max-width: 600px;
  margin: 40px auto;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const CONTENT_STYLES = `
  padding: 40px;
  background-color: #ffffff;
`;

const FOOTER_STYLES = `
  padding: 32px 40px;
  background-color: #f8fafc;
  text-align: center;
  border-radius: 0 0 16px 16px;
  border-top: 1px solid #e2e8f0;
`;

const LOGO_TEXT = `
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: #ffffff;
  margin: 0;
`;

/**
 * Generates the HTML for the Admin Notification email.
 */
export function getAdminNotificationTemplate(data: LeadData, timestamp: string): string {
  return `
    <div style="background-color: #f1f5f9; padding: 40px 20px; ${BASE_STYLES}">
      <div style="${CONTAINER_STYLES}">
        <!-- Header -->
        <div style="${HEADER_STYLES}">
          <h1 style="${LOGO_TEXT}">ISNAP <span style="color: #94a3b8; font-style: italic;">Enterprise</span></h1>
        </div>
        
        <!-- Content -->
        <div style="${CONTENT_STYLES}">
          <div style="margin-bottom: 32px;">
            <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #22c55e; margin: 0 0 8px 0;">New Lead Acquired</p>
            <h2 style="font-size: 24px; font-weight: 800; margin: 0 0 8px 0; color: #0f172a; letter-spacing: -0.02em;">Contact Form Submission</h2>
            <p style="color: #64748b; font-size: 14px; margin: 0;">Submitted on ${timestamp}</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
            <tr>
              <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9; width: 35%;">
                <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8;">Client Name</span>
              </td>
              <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9;">
                <strong style="color: #0f172a; font-size: 15px;">${data.fullName}</strong>
              </td>
            </tr>
            <tr>
              <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8;">Company</span>
              </td>
              <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="color: #0f172a; font-size: 15px;">${data.companyName}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8;">Email Address</span>
              </td>
              <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9;">
                <a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none; font-size: 15px;">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8;">Phone</span>
              </td>
              <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="color: #0f172a; font-size: 15px;">${data.phone}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8;">Platforms</span>
              </td>
              <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="color: #0f172a; font-size: 15px;">${data.platformInterest.join(", ")}</span>
              </td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; padding: 24px; border-radius: 12px; border: 1px solid #f1f5f9;">
            <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin: 0 0 12px 0;">Message Content</p>
            <p style="color: #334155; font-size: 15px; margin: 0; white-space: pre-wrap;">${data.message}</p>
          </div>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px dashed #e2e8f0;">
             <p style="font-size: 11px; color: #94a3b8; margin: 0;">Source: ${data.source} • IP: ${data.ip || "Unknown"}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Generates the HTML for the User Auto-Reply email.
 */
export function getUserAutoReplyTemplate(data: LeadData): string {
  return `
    <div style="background-color: #f1f5f9; padding: 40px 20px; ${BASE_STYLES}">
      <div style="${CONTAINER_STYLES}">
        <!-- Header -->
        <div style="${HEADER_STYLES}">
           <h1 style="${LOGO_TEXT}">ISNAP</h1>
        </div>
        
        <!-- Content -->
        <div style="${CONTENT_STYLES}">
          <h2 style="font-size: 24px; font-weight: 800; margin: 0 0 16px 0; color: #0f172a; letter-spacing: -0.02em;">Message Received, ${data.fullName.split(" ")[0]}.</h2>
          
          <p style="color: #475569; font-size: 16px; margin: 0 0 24px 0;">
            Thank you for reaching out to ISNAP. We have received your inquiry regarding <strong>${data.companyName}</strong>'s marketplace strategy.
          </p>

          <p style="color: #475569; font-size: 16px; margin: 0 0 32px 0;">
            Our growth strategists are currently reviewing your specific requirements for <strong>${data.platformInterest.join(", ")}</strong> and will be in touch within 24 hours to schedule an introductory consultation.
          </p>
          
          <div style="text-align: center; margin-bottom: 32px;">
             <a href="https://isnap.in/how-it-works" style="display: inline-block; background-color: #0f172a; color: #ffffff; font-size: 14px; font-weight: 700; text-decoration: none; padding: 14px 28px; border-radius: 8px;">Explore Our Methodology</a>
          </div>
          
          <div style="background-color: #f8fafc; padding: 24px; border-radius: 12px; border: 1px solid #f1f5f9; margin-bottom: 24px;">
            <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin: 0 0 12px 0;">Your Message to Us:</p>
            <p style="color: #64748b; font-size: 14px; font-style: italic; margin: 0; white-space: pre-wrap;">"${data.message}"</p>
          </div>

          <p style="color: #475569; font-size: 16px; margin: 0;">
            Best regards,<br/>
            <strong style="color: #0f172a;">The ISNAP Team</strong>
          </p>
        </div>
        
        <!-- Footer -->
        <div style="${FOOTER_STYLES}">
          <p style="color: #94a3b8; font-size: 12px; margin: 0 0 8px 0;">
            ISNAP Operating Systems • HiTech City, Hyderabad, India
          </p>
          <p style="color: #94a3b8; font-size: 12px; margin: 0;">
            <a href="https://isnap.in" style="color: #94a3b8; text-decoration: underline;">isnap.in</a> • 
            <a href="mailto:support@isnap.in" style="color: #94a3b8; text-decoration: underline;">support@isnap.in</a>
          </p>
        </div>
      </div>
    </div>
  `;
}

/**
 * Generates the HTML for the OTP Security Code email.
 */
export function getOtpEmailTemplate(otp: string, expiryMinutes: number): string {
  return `
    <div style="background-color: #0a0a0a; padding: 40px 20px; ${BASE_STYLES}">
      <div style="${CONTAINER_STYLES}; border-color: #ffffff10; background: #111111;">
        <!-- Header -->
        <div style="${HEADER_STYLES}; background: #000000;">
          <h1 style="${LOGO_TEXT}">ISNAP <span style="color: #666; font-style: italic;">Terminal</span></h1>
        </div>
        
        <!-- Content -->
        <div style="${CONTENT_STYLES}; background: #111111; color: #ffffff;">
          <div style="text-align: center; margin-bottom: 32px;">
            <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; color: #22c55e; margin: 0 0 12px 0;">Authentication Required</p>
            <h2 style="font-size: 28px; font-weight: 800; margin: 0; color: #ffffff; letter-spacing: -0.02em;">Your Security Code</h2>
          </div>

          <div style="background-color: #000000; padding: 32px; border-radius: 20px; border: 1px solid #ffffff10; text-align: center; margin-bottom: 32px;">
            <span style="font-size: 42px; font-weight: 900; letter-spacing: 0.3em; color: #ffffff; font-family: monospace;">${otp}</span>
          </div>

          <p style="color: #888888; font-size: 14px; text-align: center; margin: 0 0 32px 0;">
            This code will expire in <strong>${expiryMinutes} minutes</strong>. <br/>
            If you did not request this code, please ignore this email.
          </p>

          <div style="padding-top: 24px; border-top: 1px solid #ffffff05; text-align: center;">
             <p style="font-size: 11px; color: #444; margin: 0; text-transform: uppercase; letter-spacing: 0.1em;">Secure Session Protocol v2.0</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Generates the HTML for a Suspicious Login Alert.
 */
export function getSecurityAlertTemplate(data: any): string {
  return `
    <div style="background-color: #0a0a0a; padding: 40px 20px; ${BASE_STYLES}">
      <div style="${CONTAINER_STYLES}; border-color: #ef444430; background: #111111;">
        <!-- Header -->
        <div style="${HEADER_STYLES}; background: #000000;">
          <h1 style="${LOGO_TEXT}; color: #ef4444;">SECURITY ALERT</h1>
        </div>
        
        <!-- Content -->
        <div style="${CONTENT_STYLES}; background: #111111; color: #ffffff;">
          <h2 style="font-size: 22px; font-weight: 800; margin: 0 0 16px 0; color: #ffffff;">New Admin Login Detected</h2>
          <p style="color: #888888; font-size: 15px; margin: 0 0 24px 0;">
            A successful login to the ISNAP Terminal was detected with the following details:
          </p>

          <div style="background-color: #000000; padding: 24px; border-radius: 12px; border: 1px solid #ffffff10; margin-bottom: 24px;">
            <p style="font-size: 13px; color: #888; margin: 0 0 8px 0;">Device/Browser: <strong style="color: #fff;">${data.browser}</strong></p>
            <p style="font-size: 13px; color: #888; margin: 0 0 8px 0;">Location: <strong style="color: #fff;">${data.location || "Unknown"}</strong></p>
            <p style="font-size: 13px; color: #888; margin: 0;">IP Address: <strong style="color: #fff;">${data.ip}</strong></p>
          </div>

          <p style="color: #888888; font-size: 14px; margin: 0;">
            If this was not you, please contact the infrastructure team immediately.
          </p>
        </div>
      </div>
    </div>
  `;
}
