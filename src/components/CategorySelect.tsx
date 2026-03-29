import type { MuscleCategory } from '../App.tsx';
import { MuscleIcon, BoneIcon, NeuronIcon, JointIcon, AllIcon } from './icons/AnatomyIcons.tsx';
import './CategorySelect.css';

interface CategorySelectProps {
  onSelect: (category: MuscleCategory) => void;
}

const CategorySelect = ({ onSelect }: CategorySelectProps) => {
  return (
    <div className="category-screen">
      <div className="category-header">
        <div className="logo-container">
          <img src="/logo.png" alt="Physio SOS" className="game-logo" />
        </div>
        <p className="game-subtitle">Choose Your Category</p>
      </div>

      <div className="category-cards">
        <button 
          className="category-card muscles"
          onClick={() => onSelect('muscles')}
        >
          <div className="card-icon">
            <MuscleIcon size={48} strokeWidth={2} />
          </div>
          <h2>Muscles</h2>
        </button>

        <button 
          className="category-card bones"
          onClick={() => onSelect('bones')}
        >
          <div className="card-icon">
            <BoneIcon size={48} strokeWidth={2} />
          </div>
          <h2>Bones</h2>
        </button>

        <button 
          className="category-card nerves"
          onClick={() => onSelect('nerves')}
        >
          <div className="card-icon">
            <NeuronIcon size={48} strokeWidth={2} />
          </div>
          <h2>Nerves</h2>
        </button>

        <button 
          className="category-card joints"
          onClick={() => onSelect('joints')}
        >
          <div className="card-icon">
            <JointIcon size={48} strokeWidth={2} />
          </div>
          <h2>Joints</h2>
        </button>

        <button 
          className="category-card category-all"
          onClick={() => onSelect('all')}
        >
          <div className="card-icon">
            <AllIcon size={52} strokeWidth={2.5} />
          </div>
          <h2>ALL</h2>
        </button>
      </div>
    </div>
  );
};

export default CategorySelect;
