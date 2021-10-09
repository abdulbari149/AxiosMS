import React from "react";
import { Main, Container } from "../styles/main.style";
import { workgalleryData } from "../constants/workgalleryData";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box } from "@mui/system";
import { Tab } from "@mui/material";
import { supabase } from "../utils/supabase";

const WorkGallery = () => {
  const [data, setData] = useState("");
  const [value, setValue] = React.useState("all");

  async function getTabData(name) {
    try {
      const { data, error } = await supabase.storage.getBucket(name);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  const handleChange = async (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
    const data = getTabData(newValue)
    setData(data)
  
  };
  return (
    <Main name="work">
      <Container>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {workgalleryData.tabNames.map((name, idx) => (
                <Tab label={name} key={idx} value={name.toLowerCase()} />
              ))}
            </TabList>
          </Box>
          {workgalleryData.panels.map((panel) => (
            <TabPanel value={panel.name.toLowerCase()}></TabPanel>
          ))}
        </TabContext>
      </Container>
    </Main>
  );
};

export default WorkGallery;
