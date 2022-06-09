import { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { Drawer, Hidden } from '@mui/material';

import { SidebarContext } from 'src/contexts/SidebarContext';
import { Logo } from 'src/components';

import SidebarMenu from './SidebarMenu';
import { SidebarWrapper, TopSection } from './styles';

function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();

  return (
    <>
      <Hidden lgDown>
        <SidebarWrapper>
          <Scrollbars autoHide>
            <TopSection>
              <Logo />
            </TopSection>
            <SidebarMenu />
          </Scrollbars>
        </SidebarWrapper>
      </Hidden>

      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={sidebarToggle}
          onClose={closeSidebar}
          variant="temporary"
          elevation={9}>
          <SidebarWrapper>
            <Scrollbars autoHide>
              <TopSection>
                <Logo />
              </TopSection>
              <SidebarMenu />
            </Scrollbars>
          </SidebarWrapper>
        </Drawer>
      </Hidden>
    </>
  );
}

export default Sidebar;
