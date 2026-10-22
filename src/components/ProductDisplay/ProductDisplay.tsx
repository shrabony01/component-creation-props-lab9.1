import React from 'react';
import { ProductDisplayProps } from '../../types';

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white max-w-sm flex flex-col justify-between">
      <div>
        {product.imageUrl && (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-44 object-cover rounded mb-3"
          />
        )}
        <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
        <p className="text-xl font-bold text-gray-900 mt-1">
          ${product.price.toFixed(2)}
        </p>

        {showDescription && (
          <p className="text-sm text-gray-600 mt-2">{product.description}</p>
        )}

        {showStockStatus && (
          <span
            className={`inline-block mt-2 px-2 py-0.5 text-xs font-semibold rounded ${
              product.inStock
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        )}
      </div>

      <div className="mt-4">
        {onAddToCart && (
          <button
            type="button"
            disabled={!product.inStock}
            onClick={() => onAddToCart(product.id)}
            className={`w-full py-2 px-4 rounded font-medium text-sm text-white transition-colors ${
              product.inStock
                ? 'bg-indigo-600 hover:bg-indigo-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {product.inStock ? 'Add to Cart' : 'Unavailable'}
          </button>
        )}

        {children && <div className="mt-3 pt-2 border-t">{children}</div>}
      </div>
    </div>
  );
};