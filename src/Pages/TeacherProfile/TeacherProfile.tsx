import { Avatar, Button, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
const Profile = () => {
    return (
      <Card>
        <CardHeader
          avatar={<Avatar alt="User Avatar" />}
          title="John Doe"
          subheader="Web Developer"
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Personal Information</Typography>
              <Typography variant="body1">Email: john.doe@example.com</Typography>
              <Typography variant="body1">Phone: +1 (555) 123-4567</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">About Me</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
                consequat eros, a vehicula odio. Proin eu massa sit amet mauris
                sodales rutrum quis at velit. Donec auctor eget enim eu faucibus.
                Morbi vel nisi convallis, iaculis enim at, venenatis nunc.
              </Typography>
            </Grid>
          </Grid>
          <Button variant="contained" color="primary">
            Edit Profile
          </Button>
        </CardContent>
      </Card>
    );
  };
  
  export default Profile;