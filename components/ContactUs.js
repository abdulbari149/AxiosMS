import React from "react";
import { ContactList, ContactBox } from "../styles/form.style";
import { EmailForm, Icon, SocialMedia } from ".";
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
} from "../constants/contactDetailsData";
import { useMediaQuery } from "../hooks"
import { useTheme } from "styled-components"

const ContactUs = () => {

  const theme = useTheme()
  const isMobile = useMediaQuery(`(max-width: ${theme.breakPoints.small.max}px`)


  return (
    <Main id="contactus" style={{ marginBottom: 0 }} name="contactus" background="black">
      <Heading2 style={{ padding: "30px 0px 0px 10px" }} color="white">
        Contact Us
      </Heading2>
      <Container>
        <Flex mobile={isMobile}>
          <ContactList mobile={isMobile}>
            <Flex
              space={30}
              direction="column"
              alignItems="center"
              justifyContent="flex-start"
            >
              {contactDetails.map((detail) => (
                <ContactBox key={detail.id} color={detail.color}>
                  <Icon component={detail.icon} color={detail.color} />
                  <TextContainer>
                    <Heading4 color="white">{detail.title}</Heading4>

                    <span
                      style={{ fontSize: 15, color: "white", opacity: 0.8 }}
                    >
                      {detail.text}
                    </span>
                  </TextContainer>
                </ContactBox>
              ))}
            </Flex>

            <SocialMedia color="white" /> 
          </ContactList>

          <EmailForm mobile={isMobile}/>
        </Flex>
      </Container>
    </Main>
  );
};

export default ContactUs;
