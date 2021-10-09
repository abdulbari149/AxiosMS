import React from "react";
import { ContactList, ContactBox } from "../styles/form.style";
import { Form, Logo, Icon } from ".";
import {
  Main,
  Container,
  TextContainer,
  Flex,
  Heading4,
  Heading2,
  Text,
} from "../styles/main.style";
import {
  contactDetails,
  socialMediaIcons,
} from "../constants/contactDetailsData";

const ContactUs = () => {
  return (
    <Main style={{ marginBottom: 0 }} name="contactus" background="black">
      <Heading2 style={{ padding: "30px 0px 0px 10px" }} color="white"> Contact Us </Heading2>
      <Container>
        <Flex>
          <ContactList>
            <Flex space={30} direction="column" alignItems="center" justifyContent="flex-start">
              {contactDetails.map((detail) => (
                <ContactBox key={detail.id} color={detail.color}>
                  <Icon component={detail.icon} color={detail.color} />
                  <TextContainer>
                    <Heading4 color="white">{detail.title}</Heading4>

                    <span style={{ fontSize: 15, color:"white", opacity: .8 }} >{detail.text}</span>
                  </TextContainer>
                </ContactBox>
              ))}
            </Flex>

            <Flex space={20}>
              {socialMediaIcons.map((mediaIcon) => (
                <Icon
                  key={mediaIcon.id}
                  size="sm"
                  component={mediaIcon.icon}
                  color={mediaIcon.color}
                />
              ))}
            </Flex>
          </ContactList>
          <Form />
        </Flex>
      </Container>
    </Main>
  );
};

export default ContactUs;
