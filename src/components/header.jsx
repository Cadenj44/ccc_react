import '../views/home.css';
import { Box, Grid } from '@mui/material';
import image from '../assets/cccSunrise.jpg'

function Header() {
    const styles = {
        heroContainer: {
          height: 700,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          padding: 150,
          margin: -150,
        }
       };

    return (
        <Box className='homeHeader'>
            <Grid container spacing={4} columns={2} 
            style={styles.heroContainer}>
                <Grid item xs={4} md={10}>
                    <h1>Love God.</h1>
                    <h1>Love Others.</h1>
                    <h1>Make Disciples.</h1>
                </Grid>
            </Grid>
        </Box>
    );
  }
  
  export default Header;