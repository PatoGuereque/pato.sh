import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { useRouter } from 'next/router';
import Link from '../Link';
const routes = [
  {
    name: 'Base64 Encoder',
    route: '/encoding/base64encoder',
    icon: CodeIcon,
  },
  {
    name: 'Base64 Decoder',
    route: '/encoding/base64decoder',
    icon: CodeOffIcon,
  },
];

const Navigation = () => {
  const router = useRouter();

  return (
    <List size="sm" sx={{ '--List-item-radius': '8px' }}>
      <ListItem nested sx={{ p: 0 }}>
        <Box
          sx={{
            mb: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            id="nav-list-browse"
            textColor="neutral.500"
            fontWeight={700}
            sx={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '.1rem',
            }}
          >
            Tools
          </Typography>
          <IconButton
            size="sm"
            variant="plain"
            color="primary"
            sx={{ '--IconButton-size': '24px' }}
          >
            <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
          </IconButton>
        </Box>
        <List
          aria-labelledby="nav-list-browse"
          sx={{
            '& .JoyListItemButton-root': { p: '8px' },
          }}
        >
          {routes.map(({ icon: Icon, name, route }) => (
            <ListItem key={route} component={Link} href={route}>
              {router.pathname === route ? (
                <ListItemButton variant="soft" color="primary">
                  <ListItemDecorator sx={{ color: 'inherit' }}>
                    <Icon />
                  </ListItemDecorator>
                  <ListItemContent>{name}</ListItemContent>
                </ListItemButton>
              ) : (
                <ListItemButton sx={{ color: 'neutral.500' }}>
                  <ListItemDecorator sx={{ color: 'inherit' }}>
                    <Icon />
                  </ListItemDecorator>
                  <ListItemContent>{name}</ListItemContent>
                </ListItemButton>
              )}
            </ListItem>
          ))}
        </List>
      </ListItem>
    </List>
  );
};

export default Navigation;
