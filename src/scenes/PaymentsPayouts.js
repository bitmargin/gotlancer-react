import React, { PureComponent } from 'react';
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Tab,
  Tabs,
  Typography,
  withStyles,
  withTheme
} from '@material-ui/core';
import { compose } from 'redux';

import Header from '../components/Header';
import Footer from '../components/Footer';

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  card: {
    borderRadius: theme.spacing(1.5),
    borderColor: theme.palette.divider,
    borderStyle: 'solid'
  },
  cardIcon: {
    width: theme.spacing(8),
    height: theme.spacing(7)
  }
})

class PaymentsPayouts extends PureComponent {
  state = {
    activeTab: 0,
    currentEntry: '',
    loading: false
  }

  handleTabChange = (event, newValue) => {
    this.setState({ activeTab: newValue });
  }

  render = () => (
    <div className={this.props.classes.root}>
      <Header />
      <Box mt={8} ml={2} mr={2} mb={8}>
        <Grid container>
          <Grid item md={2} />
          <Grid item md={8}>
            <Box mb={2}>
              <Breadcrumbs aria-label="breadcrumb" separator=">">
                <Link color="inherit" href="/account_settings">Account</Link>
                <Typography variant="body2" color="textSecondary">Payments &amp; Payouts</Typography>
              </Breadcrumbs>
            </Box>
            <Box mb={2}>
              <Typography variant="h5" color="textPrimary">Payments &amp; Payouts</Typography>
            </Box>
            <Grid container>
              <Grid item lg={6}>
                <Tabs value={this.state.activeTab} onChange={this.handleTabChange}>
                  <Tab label="Payments" />
                  <Tab label="Payouts" />
                  <Tab label="Taxes" />
                </Tabs>
                {this.renderPanel({
                  index: 0,
                  body: (
                    <Box mt={4}>
                      <Typography variant="h6" color="textPrimary">Payment methods</Typography>
                      <Box mt={2} mb={2}>
                        <Typography variant="body2" color="textPrimary">Add a payment method using our secure payment system, then start your project with Gotlancer</Typography>
                      </Box>
                      <Button variant="contained" size="large">Add Payment Method</Button>
                    </Box>
                  )
                })}
                {this.renderPanel({
                  index: 1,
                  body: (
                    <Box mt={4}>
                      <Typography variant="h6" color="textPrimary">Payout methods</Typography>
                      <Box mt={2}>
                        <Typography variant="body2" color="textPrimary">When you receive a payment for a reservation, we call that payment to you a "payout". Our secure payment system supports several payout methods, which can be set up below. Go to FAQ.</Typography>
                      </Box>
                      <Box mt={2}>
                        <Typography variant="subtitle1" color="textPrimary">To get paid, you need to set up a payout method</Typography>
                      </Box>
                      <Typography variant="body2" color="textPrimary">Airbnb releases payouts about 24 hours after a guest’s scheduled check-in time. The time it takes for the funds to appear in your account depends on your payout method. Learn more</Typography>
                      <Box mt={2}>
                        <Typography variant="h6" color="textPrimary">Add Bank</Typography>
                      </Box>
                      <Box mt={2} mb={2}>
                        <Typography variant="body2" color="textPrimary">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</Typography>
                      </Box>
                      <Button variant="contained" size="large">Add Indian Bank</Button>
                      <Box mt={3}>
                        <Typography variant="h6" color="textPrimary">Add Payoneer</Typography>
                      </Box>
                      <Box mt={2} mb={2}>
                        <Typography variant="body2" color="textPrimary">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</Typography>
                      </Box>
                      <Button variant="contained" size="large">Add Payoneer</Button>
                      <Box mt={3}>
                        <Typography variant="h6" color="textPrimary">Add PayPal</Typography>
                      </Box>
                      <Box mt={2} mb={2}>
                        <Typography variant="body2" color="textPrimary">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</Typography>
                      </Box>
                      <Button variant="contained" size="large">Add PayPal</Button>
                      <Box mt={3}>
                        <Typography variant="h6" color="textPrimary">Add Skrill</Typography>
                      </Box>
                      <Box mt={2} mb={2}>
                        <Typography variant="body2" color="textPrimary">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</Typography>
                      </Box>
                      <Button variant="contained" size="large">Add Skrill</Button>
                      <Box mt={3}>
                        <Typography variant="h6" color="textPrimary">Add Nagad</Typography>
                      </Box>
                      <Box mt={2} mb={2}>
                        <Typography variant="body2" color="textPrimary">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</Typography>
                      </Box>
                      <Button variant="contained" size="large">Add Nagad</Button>
                      <Box mt={3}>
                        <Typography variant="h6" color="textPrimary">Add Bkash</Typography>
                      </Box>
                      <Box mt={2} mb={2}>
                        <Typography variant="body2" color="textPrimary">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</Typography>
                      </Box>
                      <Button variant="contained" size="large">Add Bkash</Button>
                    </Box>
                  )
                })}
                {this.renderPanel({
                  index: 2,
                  body: (
                    <Box mt={4}>
                      <Typography variant="h6" color="textPrimary">Add VAT</Typography>
                      <Box mt={2} mb={2}>
                        <Typography variant="body2" color="textPrimary">If you are registered for VAT or your stay is for business, you may not be charged VAT on Gotlancer service fees. To get started, enter your business’s VAT ID Number. Learn more about VAT.</Typography>
                      </Box>
                      <Button variant="contained" size="large">Add VAT ID Number</Button>
                      <Box mt={3}>
                        <Typography variant="h6" color="textPrimary">Add PAN</Typography>
                      </Box>
                      <Box mt={2} mb={2}>
                        <Typography variant="body2" color="textPrimary">If you are registered for VAT or your stay is for business, you may not be charged VAT on Gotlancer service fees. To get started, enter your business’s VAT ID Number. Learn more about VAT.</Typography>
                      </Box>
                      <Button variant="contained" size="large">Add PAN ID Number</Button>
                      <Box mt={3}>
                        <Typography variant="h6" color="textPrimary">Add GST</Typography>
                      </Box>
                      <Box mt={2} mb={2}>
                        <Typography variant="body2" color="textPrimary">If you are registered for VAT or your stay is for business, you may not be charged VAT on Gotlancer service fees. To get started, enter your business’s VAT ID Number. Learn more about VAT.</Typography>
                      </Box>
                      <Button variant="contained" size="large">Add GST ID Number</Button>
                    </Box>
                  )
                })}
              </Grid>
              <Grid item lg={2} />
              <Grid item lg={4}>
                <Card className={this.props.classes.card}>
                  <CardContent>
                    <img alt="" className={this.props.classes.cardIcon} src={require('../assets/images/account-settings/payments-and-payouts.svg')} />
                    <Typography variant="body1">Let's make your account more secure</Typography>
                    <Typography variant="body2">Your account security: Medium</Typography>
                    <Typography variant="body2">We’re always working on ways to increase safety in our community. That’s why we look at every account to make sure it’s as secure as possible.</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={2} />
        </Grid>
      </Box>
      <Footer />
    </div>
  )

  renderPanel = ({ index, body }) => (
    <div role="tabpanel" hidden={this.state.activeTab !== index}>
      {body}
    </div>
  )
}

export default compose(
  withStyles(styles),
  withTheme
)(PaymentsPayouts);