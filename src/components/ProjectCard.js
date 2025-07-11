import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const ProjectCard = ({ project, onEdit, onDelete }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {project.description}
                </Typography>
                <Button onClick={() => onEdit(project.id)} color="primary">
                    Edit
                </Button>
                <Button onClick={() => onDelete(project.id)} color="secondary">
                    Delete
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;