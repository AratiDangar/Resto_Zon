import React from "react";
import FaqCard from "./FaqCard";

export const faqs = [
  {
    question: "What cuisines does Resto Zon offer?",
    content:
      "Resto Zon offers a diverse range of culinary delights, including a variety of cuisines to suit different preferences. Our menu is crafted with passion and care to ensure a delightful dining experience.",
  },
  {
    question: "Can I make a reservation at Resto Zon?",
    content:
      "Yes, you can make a reservation at Resto Zon. We offer convenient online booking through our website. Visit the 'Reservations' page to secure your table for an unforgettable dining experience.",
  },
  {
    question: "Does Resto Zon provide takeout or delivery services?",
    content:
      "Absolutely! Resto Zon offers both takeout and delivery services. Enjoy your favorite dishes from the comfort of your home. Check our online menu for options and place your order.",
  },
  {
    question: "Are there vegetarian or vegan options on the menu?",
    content:
      "Yes, we understand and cater to various dietary preferences. Resto Zon's menu includes a selection of vegetarian and vegan options, ensuring there's something for everyone.",
  },
  {
    question: "What are the opening hours of Resto Zon?",
    content:
      "Our opening hours vary, and you can find the current operating hours on the 'Contact' page of our website. We look forward to welcoming you during our business hours.",
  },
];

const FaqList = () => {
  return (
    <ul className="mt-[38px]">
      {faqs.map((item, index) => (
        <FaqCard key={index} item={item} />
      ))}
    </ul>
  );
};

export default FaqList;
