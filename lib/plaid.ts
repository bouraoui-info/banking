import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

// Set up your Plaid configuration
const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox, // Use 'sandbox' for development, switch to 'development' or 'production' as needed
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});

// Initialize Plaid API client
export const plaidClient = new PlaidApi(configuration);

