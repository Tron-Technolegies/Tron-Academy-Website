export const handleChatClick = (name) => {
  const phoneNumber = "+918330077882"; // Replace with the actual phone number
  const message = `Hello! I would like to ${name}`; // Replace with your message
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

export const handleEnquiryFormClick = ({ name, email, course, message }) => {
  const phoneNumber = "+918330077882";
  const messageContent = ` NAME : ${name}\n EMAIL : ${email}\n course : ${course}\n MESSAGE : ${message}`;
  const encodedMessage = encodeURIComponent(messageContent);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

/*Popup Form Enquiry Function*/
export const popupFormEnquiry = ({ fullName, contactNumber, email, location, option }) => {
  const phoneNumber = "+918330077882";
  const messageContent = `NAME: ${fullName}\nCONTACT NUMBER: ${contactNumber}\nEMAIL: ${email}\nLOCATION: ${location}\nCOURSE: ${option}`;
  const encodedMessage = encodeURIComponent(messageContent);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};