import React from 'react';
import type { UserProfileCardProps } from '../../types';

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white max-w-sm">
      <div className="flex items-center gap-3">
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={`${user.name}'s avatar`}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-700">
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}

        <div>
          <h3 className="font-semibold text-lg text-gray-800">{user.name}</h3>
          {showRole && <p className="text-sm text-gray-600">{user.role}</p>}
          {showEmail && <p className="text-sm text-gray-500">{user.email}</p>}
        </div>
      </div>

      {onEdit && (
        <button
          type="button"
          onClick={() => onEdit(user.id)}
          className="mt-3 w-full py-1.5 px-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors"
        >
          Edit Profile
        </button>
      )}

      {children && <div className="mt-3 pt-3 border-t">{children}</div>}
    </div>
  );
};