import React, { useState, useEffect } from "react";
import {
  Main,
  Container,
  Heading2,
  Flex,
  Box as MainBox,
} from "../styles/main.style";
import { Tab } from "../styles/portfolio.style";
import { workgalleryData } from "../constants/workgalleryData";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { supabase } from "../utils/supabase";
import { Image } from ".";
import { useRouter } from "next/dist/client/router";

const WorkGallery = () => {
  const [images, setImages] = useState(null);
  const [value, setValue] = React.useState("all");
  const router = useRouter();

  useEffect(() => {
    getImages("all");
  }, []);

  const handleChange = async (event, newValue) => {
    setValue(newValue);
    getImages(newValue);
  };

  async function getImages(folder) {


    const { data, error } = await supabase.storage
      .from("portfolio")
      .list(folder, {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    const URLs = [];
    for await (let image of data) {
      const { data: imageData, error } = await supabase.storage
        .from("portfolio")
        .getPublicUrl(`${folder}/${image.name}`);
      URLs.push(imageData.publicURL);
    }
    console.log(URLs);
    setImages([...URLs]);
  }

  return (
    <Main name="work">
      <Container style={{ marginTop: "100px" }} direction="column">
        <Heading2> Our Work </Heading2>
        <TabContext defaultValue="all" value={value}>
          <TabList onChange={handleChange}>
            {workgalleryData.tabNames.map((tab, idx) => (
              <Tab label={tab} key={idx} value={tab.toLowerCase()} />
            ))}
          </TabList>
          {workgalleryData.tabNames.map((tab, index) => (
            <TabPanel
              sx={{
                width: "100%",
              }}
              key={index}
              value={tab.toLowerCase()}
            >
              <Flex direction="row" wrap="wrap" space={20}>
                {!!images
                  ? images?.map((img, idx) => (
                      <MainBox
                        key={idx}
                        layout={3}
                        style={{ height: "500px", overflow: "hidden" }}
                      >
                        <Image
                          loading="lazy"
                          loader={() => img}
                          objectFit="cover"
                          src={img}
                          layout="fill"
                        />
                      </MainBox>
                    ))
                  : null}
              </Flex>
            </TabPanel>
          ))}
        </TabContext>
      </Container>
    </Main>
  );
};

export default WorkGallery;
