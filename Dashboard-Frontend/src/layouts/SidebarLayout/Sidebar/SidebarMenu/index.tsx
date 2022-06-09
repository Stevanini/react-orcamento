import { useLocation, matchPath } from 'react-router-dom';
import { ListSubheader } from '@mui/material';

import SidebarMenuItem from './item';
import menuItems, { MenuItem } from './items';

import { MenuWrapper, SubMenuWrapper } from './styles';

const renderSidebarMenuItems = ({
  items,
  path,
}: {
  items: MenuItem[];
  path: string;
}) => (
  <SubMenuWrapper>
    {/* @ts-ignore */}
    {items.reduce((ev, item) => reduceChildRoutes({ ev, item, path }), [])}
  </SubMenuWrapper>
);

const reduceChildRoutes = ({
  ev,
  path,
  item,
}: {
  ev: JSX.Element[];
  path: string;
  item: MenuItem;
}): Array<JSX.Element> => {
  const key = item.name;

  const exactMatch = item.link
    ? !!matchPath(
        {
          path: item.link,
          end: true,
        },
        path,
      )
    : false;

  if (item.items) {
    const partialMatch = item.link
      ? !!matchPath(
          {
            path: item.link,
            end: false,
          },
          path,
        )
      : false;

    ev.push(
      <SidebarMenuItem
        key={key}
        active={partialMatch}
        open={partialMatch}
        name={item.name}
        icon={item.icon}
        link={item.link}
        badge={item.badge}>
        {renderSidebarMenuItems({
          path,
          items: item.items,
        })}
      </SidebarMenuItem>,
    );
  } else {
    ev.push(
      <SidebarMenuItem
        key={key}
        active={exactMatch}
        name={item.name}
        link={item.link}
        badge={item.badge}
        icon={item.icon}
      />,
    );
  }

  return ev;
};

function SidebarMenu() {
  const location = useLocation();

  return (
    <>
      {menuItems.map(section => (
        <MenuWrapper
          key={section.heading}
          subheader={
            <ListSubheader component="div" disableSticky>
              {section.heading}
            </ListSubheader>
          }>
          {renderSidebarMenuItems({
            items: section.items,
            path: location.pathname,
          })}
        </MenuWrapper>
      ))}
    </>
  );
}

export default SidebarMenu;
