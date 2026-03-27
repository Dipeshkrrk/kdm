"use server";

export async function submitContactForm(prevState: unknown, formData: FormData) {
  // Simulate network delay for premium feel
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { success: false, message: "Please fill out all required fields." };
  }

  // Normally we would send an email via Resend, SendGrid, etc.
  console.log("Contact form submitted:", { name, email, message });

  return { 
    success: true, 
    message: "Thank you for reaching out. A partner will be in contact shortly." 
  };
}
