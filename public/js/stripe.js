import axios from 'axios';
import { showAlert } from './alerts.js';

const stripe = Stripe(
  'pk_test_51MJSPEIFsPEyySaIosIdGJ7maPMpkp5VfNwgeT4DJ5xp4gznAovmHz02S7Ere6VzEWI2FpbaqQo2PPMpprA6yFZN00LMKRGbHm'
);

export const bookTour = async (tourId) => {
  try {
    // Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    // Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    showAlert('error', error);
  }
};
