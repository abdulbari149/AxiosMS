import React from "react";
import { ContactList, Cols } from "../styles/form.style";
import { Form, Logo, Icon } from ".";
import { Main, Container, Flex, Heading3, Text, Box } from "../styles/main.style";
import { contactDetails, socialMediaIcons } from "../constants/contactDetailsData"
import IoIcons, { IoMdLocate } from "react-icons/io"
 
const ContactUs = () => {
  return (
    <Main name="contactus" background="black">
      <Container>
        <Flex>
          <ContactList>
            <Logo />
            {contactDetails.map(detail => (
              <Box layout={1} key={detail.id} color={detail.color}>
                <Icon component={detail.icon} color={detail.color} />
                <Heading3>{detail.title}</Heading3>
                <Text>{detail.text}</Text>
              </Box>
            ))}
            <Flex space={20}>
              {socialMediaIcons.map(mediaIcon => <Icon key={mediaIcon.id} size="sm" component={mediaIcon.icon} color={mediaIcon.color} />)}
            </Flex>
          </ContactList>
          <Form />
        </Flex>
      </Container>
    </Main>
  );
};

export default ContactUs;
