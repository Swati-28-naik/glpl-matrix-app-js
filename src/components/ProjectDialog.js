import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const ProjectDialog = ({ open, onClose, onSubmit }) => {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name: projectName, description: projectDescription });
        setProjectName('');
        setProjectDescription('');
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add New Project</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Project Name"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Project Description"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Add Project
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProjectDialog;