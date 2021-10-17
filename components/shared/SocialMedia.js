import React from "react";
import { Icon } from "..";
import { socialMediaIcons } from "../../constants/contactDetailsData";
import { Flex } from "../../styles/main.style";

const SocialMedia = (color, ...props) => {
  return (
    <Flex space={20} {...props}>
      {socialMediaIcons.map((mediaIcon) => (
        <Icon
          key={mediaIcon.id}
          size="sm"
          component={mediaIcon.icon}
          iconcolor={color}
        />
      ))}
    </Flex>
  );
};

export default SocialMedia;
