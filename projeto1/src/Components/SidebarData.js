import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArchiveIcon from '@mui/icons-material/Archive';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CreateIcon from '@mui/icons-material/Create';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/",
    },
    {
        title: "Cadastro",
        icon: <CreateIcon />,
        link: "/cadastro",
    },
    {
        title: "Apontamentos",
        icon: <AppsIcon />,
        link: "/apontamentos",
    },
    {
        title: "Follow up",
        icon: <FactCheckIcon />,
        link: "/followup",
    },
    {
        title: "Arquivo",
        icon: <ArchiveIcon />,
        link: "/arquivo",
    },
    {
        title: "Configurações",
        icon: <SettingsIcon />,
        link: "/configuracoes",
    },
    {
        title: "Logout",
        icon: <ExitToAppIcon />,
        link: "/logout",
    },
] 