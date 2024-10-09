# FreshCredit

FreshCredit is a decentralized financial application aimed at empowering users to take control of their financial data. The app leverages blockchain, AI, and a variety of APIs to provide users with an innovative and secure way to manage, share, and protect their credit report and financial information.

## Features

- **Credit Report Management**: Users can sync data from financial institutions and credit bureaus to generate a private credit report stored on their device.
- **Blockchain Integration**: The app uses the Polkadot SDK/Substrate blockchain framework to hash and validate credit reports, ensuring the integrity of the data without storing the report itself on the blockchain.
- **OAuth Authentication**: Support for Google, Microsoft, and Facebook OAuth to securely access user accounts and data.
- **APIs**: Integration with various APIs like Plaid, Twilio, SendGrid, Stripe, and more for seamless financial operations.
- **AI-powered Recommendations**: An AI assistant helps users make decisions about their financial data and report management, including identifying recurring payments or financial activities worth tracking.
- **User-controlled Data Sharing**: Users can toggle access to their report, generate expiring links, or use QR codes for sharing with providers.
- **Risk Score Algorithm Sandbox**: A drag-and-drop interface for users to build their own risk score algorithms, with options to make algorithms public or private.
- **Secure Enclave**: Credit reports are stored securely on the user’s device (mobile and desktop), never on the blockchain or external servers.

## Tech Stack

- **Frontend**: React, Next.js, React Native for mobile versions
- **Backend**: Node.js, Express
- **Database**: PostgreSQL, Firebase Firestore, and MongoDB
- **Blockchain**: Polkadot SDK/Substrate for decentralized validation
- **APIs**: Plaid, Twilio, SendGrid, Stripe, Array, Optery, and more
- **AI**: Integration with various LLM providers to assist users in data review and financial decision-making

## Getting Started

### Prerequisites

To run this project locally, you need:

- Node.js v18+
- Docker (optional, for containerized setup)
- PostgreSQL or Firebase Firestore for the database
- Google Cloud, AWS, or Azure cloud services for deployment

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/devonshigaki/freshcredit.git