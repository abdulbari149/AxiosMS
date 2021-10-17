import Image from "./shared/Image";
import { BannerText } from "../styles/banner.style";
import { Heading1, Flex, Heading2, Text, Main } from "../styles/main.style";
import Button from "./shared/Button";
// import BannerImg from "/"
const Banner = ({ banner }) => {
  return (
    <Main name={banner.name} background="gradient">
      <Image
        c_height={banner.height}
        width={banner.width}
        height={banner.height}
        src={`/images/banner-${banner.name}-img.png`}
      />
      <BannerText
        direction="column"
        justifyContent="center"
        alignItems={banner.align}
      >
        {banner.content.title.tag === "h1" && (
          <Heading1 color={banner.content.title.textColor}>
            {banner.content.title.text}
          </Heading1>
        )}
        {banner.content.title.tag === "h2" && (
          <Heading2 color={banner.content.title.textColor}>
            {banner.content.title.text}
          </Heading2>
        )}
        <Text color={banner.content.body.textColor}>
          {banner.content.body.text}
        </Text>

        <Flex space={20} alignItems={banner.align} justifyContent={banner.align} >
          {banner.buttons.map(({ id, size, content, route, ...buttonProps }) => (
            <Button
              key={id}
              w={size.width}
              h={size.height}
              route={route}
              {...buttonProps}
            >
              {content}
            </Button>
          ))}
        </Flex>
      </BannerText>
    </Main>
  );
};

export default Banner;
