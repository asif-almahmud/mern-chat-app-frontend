import { FC, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

interface IUseTabView {
  tabs: { label: string; view: JSX.Element }[];
}

const useTabView: FC<IUseTabView> = ({ tabs }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: 500 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        // indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
        // sx={{ borderBottom: "1px solid #ccc" }}
      >
        {tabs.map(({ label }, index) => (
          <Tab label={label} {...a11yProps(index)} key={label} />
        ))}
      </Tabs>

      {tabs.map(({ label, view }, index) => (
        <TabPanel value={value} index={index} key={label}>
          {view}
        </TabPanel>
      ))}
    </Box>
  );
};

export default useTabView;
