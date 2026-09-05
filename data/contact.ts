// ─────────────────────────────────────────────────────────────
//  contact.ts — Tutor contact information
//  Edit this file to update contact details.
//  No component code changes needed.
// ─────────────────────────────────────────────────────────────

export interface ContactData {
  email: string;
  phone: string;
  whatsapp?: string;
  address: string;
  /** Optional Google Maps embed URL */
  mapEmbedUrl?: string;
  /** Optional social links */
  socials?: {
    youtube?: string;
    facebook?: string;
    instagram?: string;
  };
}

// TODO: Replace all placeholder values below with real contact information.
const contact: ContactData = {
  email: "sumedhakarunanayake82@gmail.com", // TODO: Replace with real email
  phone: "+94 71 641 3100", // TODO: Replace with real phone number
  whatsapp: "+94 71 621 6262", // TODO: Replace with real WhatsApp number
  address: "Mirigama, Sri Lanka", // TODO: Replace with real address
  mapEmbedUrl: undefined, // TODO: Add Google Maps embed URL if needed
  socials: {
    youtube: undefined, // TODO: Add YouTube channel URL
    facebook: undefined, // TODO: Add Facebook page URL
    instagram: undefined, // TODO: Add Instagram profile URL
  },
};

export default contact;
