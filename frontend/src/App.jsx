import { useEffect, useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import * as api from './api';

export default function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    try {
      setError(null);
      const data = await api.fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleCreate = async (user) => {
    try {
      setError(null);
      const created = await api.createUser(user);
      setUsers((prev) => [created, ...prev]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdate = async (user) => {
    try {
      setError(null);
      const updated = await api.updateUser(editingUser.id, user);
      setUsers((prev) => prev.map((u) => (u.id === updated.id ? updated : u)));
      setEditingUser(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this user?')) return;
    try {
      setError(null);
      await api.deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
      if (editingUser?.id === id) setEditingUser(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="app">
      <h1>Users</h1>

      {error && <div className="error">{error}</div>}

      <div className="card">
        <h2>{editingUser ? 'Edit User' : 'Add User'}</h2>
        <UserForm
          key={editingUser?.id ?? 'new'}
          initialValues={editingUser}
          onSubmit={editingUser ? handleUpdate : handleCreate}
          onCancel={editingUser ? () => setEditingUser(null) : undefined}
        />
      </div>

      <div className="card">
        <h2>User List</h2>
        {loading ? (
          <p className="empty">Loading...</p>
        ) : (
          <UserList
            users={users}
            onEdit={setEditingUser}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}
