import { useNavigate } from 'react-router-dom';
import img_1 from '../assets/Pro1.png'
import img_2 from '../assets/Pro_2.png'
import img_3 from '../assets/Pro_3.png'


const Projects = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        <li><strong>Project 1:</strong> Первый проект продажи авто
          <div>
            <img src={img_1} alt="Cars" style={{width:"450px"}}/>
          </div>
        </li>
        <li><strong>Project 2:</strong> To Do List</li>
        <div>
          <img src={img_3} alt="To Do List" style={{width: "450px"}}/>
        </div>
        <li><strong>Project 3:</strong> Продажа Iphone 16</li>
        <div>
          <img src={img_2} alt="Iphone_16" style={{width: "450px"}}/>
        </div>
      </ul>
      <button onClick={() => navigate('/about')}>Go to About Me</button>
    </div>
  );
};

export default Projects;
