import {
  ContactSectionWrapper,
  ContactTitle,
  ContactList,
  ContactItem,
} from "./ContactSectionStyled";

export const ContactSection = () => {
  return (
    <ContactSectionWrapper id="contacts">
      <ContactTitle>Контакти</ContactTitle>
      <ContactList>
        <ContactItem href="mailto:danik.kyrteu2@gmail.com">
          danik.kyrteu2@gmail.com
        </ContactItem>
        <ContactItem href="tel:+380996696197">+380 996 696 197</ContactItem>
        <ContactItem href="https://goo.gl/maps/..." target="_blank">
          Київ, вул. Ломоносова, 33
        </ContactItem>
      </ContactList>
    </ContactSectionWrapper>
  );
};
