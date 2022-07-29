import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import SellIcon from '@mui/icons-material/Sell';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

export const SideBarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title: "Clientes",
        icon: <PersonIcon />,
        link: "/clientes"
    },
    {
        title: "Productos",
        icon: <InventoryIcon />,
        link: "/productos"
    },
    {
        title: "Pedidos",
        icon: <SellIcon />,
        link: "/pedidos"
    },
    {
        title: "Organizacion",
        icon: <CorporateFareIcon />,
        link: "/organizacion"
    }
] 

