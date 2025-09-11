import { Menu, Button, Text, Avatar, Switch } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconFileText,
  IconMoon,
  IconSun,
  IconMoonStars,
} from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Profilemenu() {
      const [checked, setChecked] = useState(false);
  const [opened, setOpened] = useState(false);

  return (
    <Menu  opened={opened} onChange={setOpened}
shadow="md" width={200}>
      <Menu.Target>
          <div className='gap-2 flex align items-center justify-center text-1.5 text-xl' ><Avatar src="avatar.png" alt="it's me" />
            Marshall</div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=>setOpened(true)}>
        <Menu.Label></Menu.Label>
        <Link to="/profile"><Menu.Item  leftSection={<Avatar size={25} />} >
          Profile
        </Menu.Item> </Link>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText size={14} />}>
          Resume
        </Menu.Item>
        <Menu.Item
          leftSection={<IconMoon size={14} />}
          rightSection={ <Switch  checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      size="md"
      color="dark.4"
      onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
      offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />}
    />
                      }
        >
          Dark Mode
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={<IconArrowsLeftRight size={14} />}
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<IconTrash size={14} />}
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
export default Profilemenu