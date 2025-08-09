import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>My Profile</h2>
      <p>Имя: Дамир</p>
      <p>Email: Damir@example.com</p>
      <p>Академия: Amjilt Cyber Scool</p>
      <button onClick={() => navigate('/projects')}>Go to My Projects</button>
    </div>
  );
};

export default Profile;
