import React from "react";

/**
 * Official YouTube Logo
 * Red rounded rectangle (#FF0000) with white play triangle (#FFFFFF)
 */
export function YouTubeIcon({
  size = 20,
  className = "",
  colored = true,
}: {
  size?: number;
  className?: string;
  colored?: boolean;
}) {
  if (colored) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
          fill="#FF0000"
        />
        <polygon points="9.545,15.568 9.545,8.432 15.818,12" fill="#FFFFFF" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    </svg>
  );
}

/**
 * Official Google Gmail Logo
 * 4-color M emblem (Blue, Green, Yellow, Red)
 */
export function GmailIcon({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M34.9 448h81.5V250.2L0 163v250.2C0 432.5 15.7 448 34.9 448"
        fill="#4285F4"
      />
      <path
        d="M395.6 448h81.5c19.3 0 34.9-15.7 34.9-34.9V163l-116.4 87.3"
        fill="#34A853"
      />
      <path
        d="M395.6 99v151.3L512 163v-46.5c0-43.2-49.3-67.8-83.8-41.9"
        fill="#FBBC04"
      />
      <path
        d="M116.4 250.2V99L256 203.7 395.6 99v151.3L256 355"
        fill="#EA4335"
      />
      <path
        d="M0 116.4V163l116.4 87.3V99L83.8 74.5C49.2 48.6 0 73.2 0 116.4"
        fill="#C5221F"
      />
    </svg>
  );
}

/**
 * Official WhatsApp Logo
 * Authentic WhatsApp green bubble (#25D366) with white telephone handset
 */
export function WhatsAppIcon({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1.1 509.4 37 378.6C14.8 340.2 3.2 296.7 3.3 252.4 3.3 113.2 116.6 0 255.8 0c67.5 0 130.9 26.3 178.6 74s73.9 111.1 73.9 178.6C508.2 391.8 394.9 505 255.8 505h-.1c-42.3 0-83.8-10.6-120.7-30.7z"
        fill="#FFFFFF"
      />
      <path
        d="M255.8 42.6c-115.8 0-209.9 94.1-210 209.8 0 39.5 11.2 78.2 32.2 111.7l5 7.9-21.2 77.4 79.4-20.8 7.7 4.5c32.2 19.1 69.2 29.2 106.8 29.2h.1c115.7 0 209.8-94.1 209.9-209.8.2-55.7-21.9-109.1-61.4-148.4-39.3-39.4-92.8-61.6-148.5-61.5"
        fill="#25D366"
      />
      <path
        d="M192.7 146.9c-4.7-10.5-9.7-10.7-14.2-10.9l-12.1-.1c-4.2 0-11 1.6-16.8 7.9s-22.1 21.6-22.1 52.6 22.6 61 25.8 65.2 43.6 69.9 107.8 95.2c53.3 21 64.1 16.8 75.7 15.8 11.6-1.1 37.3-15.3 42.6-30s5.3-27.4 3.7-30-5.8-4.2-12.1-7.4-37.3-18.4-43.1-20.5-10-3.2-14.2 3.2c-4.2 6.3-16.3 20.5-20 24.7s-7.4 4.7-13.7 1.6c-6.3-3.2-26.6-9.8-50.7-31.3-18.8-16.7-31.4-37.4-35.1-43.7s-.4-9.7 2.8-12.9c2.8-2.8 6.3-7.4 9.5-11.1s4.2-6.3 6.3-10.5 1.1-7.9-.5-11.1c-1.8-3-14-34.2-19.6-46.7"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/**
 * Official Google Maps Pin Logo
 * 4-color pin marker (Red, Blue, Yellow, Green)
 */
export function GoogleMapsIcon({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="77.3 0 357.4 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M310.1 8.5c-17-5.4-35.6-8.5-54.5-8.5C201.1 0 152 24.7 119.1 63.8l84.3 70.8z"
        fill="#1A73E8"
      />
      <path
        d="M119.1 63.8C93.2 94.7 77.3 135 77.3 178.3c0 33.6 6.6 60.7 17.8 85.1l108.3-128.8z"
        fill="#EA4335"
      />
      <path
        d="M256 110.2c37.9 0 68.4 30.5 68.4 68.4 0 16.6-6.2 32.1-16.2 44.1 0 0 53.8-64.2 106.3-126.5-21.7-41.8-59.2-73.5-104.4-87.8L203.4 134.6c12.8-14.7 31.3-24.4 52.6-24.4"
        fill="#4285F4"
      />
      <path
        d="M256 246.7c-37.9 0-68.4-30.5-68.4-68.4 0-16.6 5.8-32.1 15.9-43.7L95.1 263.3c18.6 41 49.5 74.2 81.2 115.6l131.9-156.6c-12.8 15.1-31.3 24.4-52.2 24.4"
        fill="#FBBC04"
      />
      <path
        d="M305.9 422.3c59.6-93.2 128.8-135.3 128.8-243.6 0-29.8-7.3-57.6-20.1-82.4L176.3 379c10.1 13.1 20.5 28.2 30.5 43.7 36.4 56.1 26.3 89.3 49.5 89.3s13.2-33.6 49.6-89.7"
        fill="#34A853"
      />
    </svg>
  );
}

/**
 * Phone Dialer / Call App Logo
 * Vibrant green squircle (#10B981) with white phone handset
 */
export function PhoneIcon({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="6" fill="#10B981" />
      <path
        d="M16.5 14.1c-.6-.4-1.7-.9-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.7.7.2 1.4.2 2 .1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/**
 * Official Facebook Logo
 */
export function FacebookIcon({
  size = 20,
  className = "",
  colored = false,
}: {
  size?: number;
  className?: string;
  colored?: boolean;
}) {
  if (colored) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="12" fill="#1877F2" />
        <path
          d="M15.5 12.073h-2.25v8.385H10.125v-8.385H8.078v-3.47h2.047V6.43c0-2.025 1.206-3.13 3.047-3.13.882 0 1.808.157 1.808.157v1.988h-1.019c-1.004 0-1.317.623-1.317 1.262v1.896h2.241l-.387 3.47z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

/**
 * Official Instagram Logo
 */
export function InstagramIcon({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
