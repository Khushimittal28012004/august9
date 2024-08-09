import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CardComponent = ({ id, image, name, company, position }) => {
  const navigate = useNavigate();

  const cardStyles = {
    backgroundColor: '#ffffff', // Changed to white for Facebook-like card
    width: '100%',
    maxWidth: '300px', // Set a max width for the card
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    overflow: 'hidden',
    margin: '10px auto', // Center the card and add some margin
  };

  const imageStyles = {
    width: '100%',
    height: '200px', // Set a fixed height for the image
    objectFit: 'cover',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  };

  const contentStyles = {
    padding: '20px',
    height: 'auto', // Set a dynamic height based on content
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const buttonStyles = {
    marginTop: '10px',
    borderColor: '#28a745',
    color: '#28a745',
    alignSelf: 'center',
  };

  return (
    <div style={cardStyles}>
      <img src={image} alt={name} style={imageStyles} />
      <div style={contentStyles}>
        <div style={{ fontWeight: 'bold', marginTop: '10px' }}>{name}</div>
        <div>{company}</div>
        <div>{position}</div>
        <Button
          variant="outline-success"
          style={buttonStyles}
          onClick={() => navigate(`/profile/${id}`)}
        >
          Read more
        </Button>
      </div>
    </div>
  );
};

export default CardComponent;

