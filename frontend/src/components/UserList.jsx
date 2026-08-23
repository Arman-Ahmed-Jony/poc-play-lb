export default function UserList({ users, onEdit, onDelete }) {
  if (users.length === 0) {
    return <p className="empty">No users yet. Add one above.</p>;
  }

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-item">
          <div className="user-info">
            <strong>{user.name}</strong>
            <span>{user.email}</span>
          </div>
          <div className="user-actions">
            <button className="btn-edit" onClick={() => onEdit(user)}>
              Edit
            </button>
            <button className="btn-danger" onClick={() => onDelete(user.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
