import { useState } from 'react';
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import type { User, Product } from './types';

const sampleUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://cdn.vectorstock.com/i/1000v/44/88/simple-male-avatar-icon-vector-58404488.jpg',
};

const sampleProduct: Product = {
  id: '101',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with active noise cancellation.',
  imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
  inStock: true,
};

export default function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleEdit = (userId: string) => {
    setAlertMessage(`Editing user ID: ${userId}`);
    setShowAlert(true);
  };

  const handleAddToCart = (productId: string) => {
    setAlertMessage(`Added product ${productId} to cart!`);
    setShowAlert(true);
  };

  return (
    <div style={{ maxWidth: '850px', margin: '40px auto', padding: '0 16px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        Internal Component Library
      </h1>

      {showAlert && (
        <div style={{ marginBottom: '20px' }}>
          <AlertBox
            type="success"
            message={alertMessage}
            onClose={() => setShowAlert(false)}
          >
            <p style={{ fontSize: '12px', marginTop: '4px' }}>Action processed successfully.</p>
          </AlertBox>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <UserProfileCard
          user={sampleUser}
          showEmail={true}
          showRole={true}
          onEdit={handleEdit}
        >
          <p style={{ fontSize: '12px', color: '#6b7280' }}>Last login: 2 hours ago</p>
        </UserProfileCard>

        <ProductDisplay
          product={sampleProduct}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        >
          <p style={{ fontSize: '12px', color: '#6b7280' }}>Free standard shipping available</p>
        </ProductDisplay>
      </div>
    </div>
  );
}