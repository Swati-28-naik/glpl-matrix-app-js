import React from 'react';
import { Drawer, List, ListItem, ListItemText, Radio } from '@mui/material';

const DrawerMenu = ({ open, onClose, selectedValue, onSelect }) => {
    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <List>
                {['Option 1', 'Option 2', 'Option 3'].map((text, index) => (
                    <ListItem button key={text} onClick={() => onSelect(text)}>
                        <Radio
                            checked={selectedValue === text}
                            onChange={() => onSelect(text)}
                        />
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default DrawerMenu;