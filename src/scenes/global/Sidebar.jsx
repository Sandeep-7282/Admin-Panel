import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="15px">
              <Box display="flex" justifyContent="center" alignItems="center">
              <svg
      width="150"
      height="150"
      viewBox="0 0 90 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(1.4065934065934016 1.4065934065934016) scale(1 1)">
        <path
          d="M 59.573 78.078 c -2.789 -1.155 -2.789 -5.105 0 -6.26 c 0.396 -0.164 0.584 -0.618 0.42 -1.013 l -1.461 -3.528 c -0.164 -0.396 -0.618 -0.584 -1.013 -0.42 c -2.789 1.155 -5.581 -1.638 -4.426 -4.426 c 0.164 -0.396 -0.024 -0.85 -0.42 -1.013 l -3.528 -1.462 c -0.396 -0.164 -0.85 0.024 -1.013 0.42 c -1.155 2.789 -5.105 2.789 -6.26 0 c -0.164 -0.396 -0.618 -0.584 -1.013 -0.42 l -3.528 1.461 c -0.396 0.164 -0.584 0.618 -0.42 1.013 c 1.155 2.789 -1.638 5.582 -4.427 4.427 c -0.396 -0.164 -0.85 0.024 -1.013 0.42 l -1.461 3.528 c -0.164 0.396 0.024 0.85 0.42 1.013 c 2.789 1.155 2.789 5.105 0 6.26 c -0.396 0.164 -0.584 0.618 -0.42 1.013 l 1.461 3.528 c 0.164 0.396 0.618 0.584 1.013 0.42 c 2.789 -1.155 5.581 1.638 4.426 4.426 c -0.164 0.396 0.024 0.85 0.42 1.013 l 3.528 1.461 c 0.396 0.164 0.85 -0.024 1.013 -0.42 c 1.155 -2.789 5.105 -2.789 6.26 0 c 0.164 0.396 0.618 0.584 1.013 0.42 l 3.528 -1.461 c 0.396 -0.164 0.584 -0.618 0.42 -1.013 c -1.155 -2.789 1.638 -5.581 4.427 -4.426 c 0.396 0.164 0.85 -0.024 1.013 -0.42 l 1.461 -3.528 C 60.156 78.696 59.968 78.243 59.573 78.078 z M 45 80.062 c -2.824 0 -5.114 -2.289 -5.114 -5.114 c 0 -2.824 2.29 -5.114 5.114 -5.114 s 5.114 2.289 5.114 5.114 C 50.114 77.773 47.824 80.062 45 80.062 z"
          fill="#495057"
        />
        <path
          d="M 45 37.368 L 45 37.368 c -8.855 0 -16.034 -7.179 -16.034 -16.034 v -5.3 C 28.966 7.179 36.145 0 45 0 h 0 c 8.855 0 16.034 7.179 16.034 16.034 v 5.3 C 61.034 30.189 53.855 37.368 45 37.368 z"
          fill="#495057"
        />
        <path
          d="M 45 37.368 c -14.007 0 -25.362 11.355 -25.362 25.362 v 9.678 c 0 1.426 1.156 2.581 2.581 2.582 l 7.148 0 c 0.002 -0.017 0.012 -0.02 0.012 -0.041 c 0 -0.167 -0.081 -0.2 -0.153 -0.23 c -1.994 -0.828 -2.944 -3.122 -2.12 -5.114 l 1.462 -3.53 c 0.826 -1.993 3.12 -2.944 5.113 -2.12 c 0.074 0.031 0.156 0.065 0.273 -0.052 c 0.118 -0.118 0.084 -0.199 0.054 -0.272 c -0.825 -1.99 0.123 -4.285 2.114 -5.113 l 3.534 -1.462 c 0.962 -0.4 2.025 -0.401 2.992 -0.002 c 0.967 0.4 1.721 1.152 2.122 2.119 c 0.031 0.074 0.064 0.155 0.23 0.155 c 0.166 0 0.199 -0.082 0.229 -0.153 c 0.4 -0.966 1.152 -1.72 2.12 -2.12 c 0.968 -0.401 2.034 -0.4 3 0.003 l 3.524 1.459 c 0.966 0.399 1.72 1.152 2.12 2.12 c 0.401 0.968 0.4 2.033 -0.003 3 c -0.028 0.067 -0.061 0.149 0.056 0.267 c 0.119 0.118 0.2 0.084 0.269 0.053 c 2.006 -0.825 4.295 0.129 5.118 2.121 l 1.46 3.526 c 0.824 1.994 -0.125 4.286 -2.114 5.114 c -0.077 0.032 -0.157 0.065 -0.157 0.232 c 0 0.021 0.01 0.025 0.013 0.042 l 7.147 0 c 1.426 0 2.582 -1.156 2.582 -2.582 v -9.68 C 70.362 48.723 59.007 37.368 45 37.368 z"
          fill="#495057"
        />
      </g>
    </svg>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Sandeep
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
