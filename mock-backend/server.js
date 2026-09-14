const express = require('express');

const app = express();
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || '127.0.0.1';

const bankingFavorites = [
  {
    id: 'favorite-service-payments',
    type: 'SERVICE_PAYMENT',
    title: 'Pago de servicios',
    description: 'Luz, agua, internet, telefonia y otros servicios frecuentes.',
    icon: 'receipt-text',
    route: '/banking/services/payments',
    enabled: true,
  },
  {
    id: 'favorite-own-transfers',
    type: 'OWN_TRANSFER',
    title: 'Transferencia entre mis cuentas',
    description: 'Mueve dinero entre tus cuentas del mismo banco.',
    icon: 'repeat',
    route: '/banking/transfers/own',
    enabled: true,
  },
  {
    id: 'favorite-third-party-transfers',
    type: 'THIRD_PARTY_TRANSFER',
    title: 'Transferencia a terceros',
    description: 'Transfiere a cuentas de otros usuarios del banco.',
    icon: 'send',
    route: '/banking/transfers/third-party',
    enabled: true,
  },
  {
    id: 'favorite-card-payments',
    type: 'CARD_PAYMENT',
    title: 'Pago de tarjetas',
    description: 'Paga tarjetas de credito propias o de terceros.',
    icon: 'credit-card',
    route: '/banking/cards/payments',
    enabled: true,
  },
  {
    id: 'favorite-mobile-topups',
    type: 'MOBILE_TOPUP',
    title: 'Recargas',
    description: 'Recarga celulares y billeteras digitales.',
    icon: 'smartphone',
    route: '/banking/topups',
    enabled: true,
  },
];

app.use(express.json());

app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-User-Id');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');

  if (request.method === 'OPTIONS') {
    response.sendStatus(204);
    return;
  }

  next();
});

app.get('/health', (request, response) => {
  response.json({
    status: 'ok',
    service: 'banking-mock-api',
  });
});

app.get('/api/bank/favorites', (request, response) => {
  const userId = request.header('X-User-Id') || 'USER-001';

  response.json({
    userId,
    bankId: 'BANK-DEMO',
    favorites: bankingFavorites,
  });
});

app.get('/api/favorites', (request, response) => {
  response.redirect(307, '/api/bank/favorites');
});

app.use((request, response) => {
  response.status(404).json({
    error: 'NOT_FOUND',
    message: 'Mock endpoint not found.',
    path: request.path,
  });
});

app.listen(port, host, () => {
  console.log(`Banking mock API running at http://${host}:${port}`);
  console.log(`GET http://${host}:${port}/api/bank/favorites`);
});
