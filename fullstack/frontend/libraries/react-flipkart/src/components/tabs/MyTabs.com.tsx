import * as React from 'react';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import { TabList, TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import { MyProps } from '../../pages/lessons/props/MyProps';
import { Mylabels } from '../labels/MyLabels.com';
import { H1 } from '../../pages/lessons/elements/H1';
import { MyButton } from '../button/MyButton.com';
import { MyRatings } from '../ratting/MyRatings.com';
import { MyTransfer } from '../transferlist/MyTransfer.com';
import { MyAvtar } from '../avtar/MyAvtar.com';
import { MyDivider } from '../divider/MyDivider.com';
import { MyCheckbox } from '../checkbox/MyCheckbox.com';
import { MyTable } from '../table/MyTable.com';
import { MyTooltip } from '../tooltip/MyTooltip.com';
import { MyRadio } from '../radio/MyRadio.com';
import { MyIcons } from '../icons/MyIcons.com';
import { MySnacksbar } from '../snackbar/MySnackbar.com';
import { MyFragment } from '../fragment/MyFragment.com';
import { MyUseStateHook } from '../hook/MyUseStateHook.com';
import { MyLimitTags } from '../limittags/MylimitTags.com';
import { MyGlobal } from '../global/MyGlobal.com';
import { MyGithubpicker } from '../githubpicker/MyGithubpicker.com';
export let MyTabs:React.FC<{}>=()=>{
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
console.log("newValue",typeof newValue)
    setValue(`${newValue}`);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="props" value="1" />
            <Tab label="Elemetnts" value="2" />
            <Tab label="mui elemts" value="3" />
            <Tab label="fragment" value="4" />
            <Tab label="hookes" value="5" />
          </TabList>
        </Box>
        
        <h1>Def of Props</h1>
        <p> type of object where the value of attributes of a tag is stored. The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. Basically, these props components are read-only components</p>
        
        1.MyLabels<Mylabels/>
        <TabPanel value="1"><MyProps/></TabPanel>
        <TabPanel value="2"><H1/></TabPanel>
        <TabPanel value="3">

1.Buttons<MyButton/><br />
2.MyRatings<MyRatings/><br />
3.MyAvtar<MyAvtar/><br />
4.MyDivider<MyDivider/><br />
5.MyCheckbox<MyCheckbox/><br />
6.MyTransfer<MyTransfer/><br />
7.MyTable<MyTable/><br />
8.MyTooltip<MyTooltip/><br />
9.MyRadio<MyRadio/><br />
10.MyIcons<MyIcons/><br /><br />
11.MySnackbar<MySnacksbar/>
        </TabPanel>

        <TabPanel value="4">
          <MyFragment/>
        </TabPanel>
        <TabPanel value="5">
<h1>Def of Hooks</h1>
<p color='red'>A hook can be used in a function component. The documentation often calls this returned hook useStyles .
   It accepts one argument: the props that will be used for "interpolation" in the style sheet.</p>
1.limit tags<MyLimitTags/><br />
2.State hooks<MyUseStateHook/><br /><br />
3.Global<MyGlobal/><br /><br />
4.github<MyGithubpicker/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}