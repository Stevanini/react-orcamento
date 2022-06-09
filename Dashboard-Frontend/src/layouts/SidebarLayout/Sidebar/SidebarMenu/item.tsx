import { FC, ReactNode, useState, useContext } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import clsx from "clsx";
import { SidebarContext } from "src/contexts/SidebarContext";

import { Button, Badge, Collapse, ListItem } from "@mui/material";

import ExpandLessTwoToneIcon from "@mui/icons-material/ExpandLessTwoTone";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";

interface SidebarMenuItemProps {
  children?: ReactNode;
  link?: string;
  icon?: any;
  badge?: string;
  open?: boolean;
  active?: boolean;
  name: string;
}

const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  children,
  link,
  icon: Icon,
  badge,
  open: openParent,
  active,
  name,
  ...rest
}) => {
  const [menuToggle, setMenuToggle] = useState<boolean>(!!openParent);

  const { toggleSidebar } = useContext(SidebarContext);

  const toggleMenu = (): void => {
    setMenuToggle((Open) => !Open);
  };

  if (children) {
    return (
      <ListItem component="div" className="Mui-children" key={name} {...rest}>
        <Button
          className={clsx({ "Mui-active": menuToggle })}
          startIcon={Icon && <Icon />}
          endIcon={
            menuToggle ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />
          }
          onClick={toggleMenu}
        >
          {name}
        </Button>
        <Collapse in={menuToggle}>{children}</Collapse>
      </ListItem>
    );
  }

  return (
    <ListItem
      button
      key={name}
      classes={{ root: "Mui-active" }}
      component={RouterLink}
      to={link || "dashboard"}
      {...rest}
    >
      <Button onClick={toggleSidebar} startIcon={Icon && <Icon />}>
        {name}
        {badge && <Badge badgeContent={badge} />}
      </Button>
    </ListItem>
  );
};

export default SidebarMenuItem;
