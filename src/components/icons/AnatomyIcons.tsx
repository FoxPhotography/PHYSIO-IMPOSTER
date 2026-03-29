// Custom Anatomy Icons
import { GiMuscleUp } from 'react-icons/gi';

interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

// Flexed Biceps from react-icons
export const MuscleIcon = ({ size = 48, color = 'currentColor' }: IconProps) => (
  <GiMuscleUp size={size} color={color} />
);

// Neuron Icon
export const NeuronIcon = ({ size = 48, color = 'currentColor', strokeWidth = 2 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cell body */}
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth={strokeWidth} fill="none"/>
    
    {/* Dendrites (top) */}
    <path d="M12 9 L12 6 M10 7 L8 4 M14 7 L16 4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    
    {/* Dendrites (sides) */}
    <path d="M9 12 L6 12 M9.5 10.5 L7 8 M9.5 13.5 L7 16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    <path d="M15 12 L18 12 M14.5 10.5 L17 8 M14.5 13.5 L17 16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    
    {/* Axon (bottom) */}
    <path d="M12 15 L12 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    <circle cx="12" cy="17" r="0.5" fill={color}/>
    <circle cx="12" cy="19" r="0.5" fill={color}/>
  </svg>
);

// Joint Icon
export const JointIcon = ({ size = 48, color = 'currentColor', strokeWidth = 2 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Upper bone */}
    <rect x="9" y="2" width="6" height="7" rx="1" stroke={color} strokeWidth={strokeWidth} fill="none"/>
    
    {/* Joint capsule */}
    <ellipse cx="12" cy="12" rx="5" ry="3.5" stroke={color} strokeWidth={strokeWidth} fill="none"/>
    <path d="M7 12 Q7 10, 9 9.5" stroke={color} strokeWidth={strokeWidth} fill="none"/>
    <path d="M17 12 Q17 10, 15 9.5" stroke={color} strokeWidth={strokeWidth} fill="none"/>
    <path d="M7 12 Q7 14, 9 14.5" stroke={color} strokeWidth={strokeWidth} fill="none"/>
    <path d="M17 12 Q17 14, 15 14.5" stroke={color} strokeWidth={strokeWidth} fill="none"/>
    
    {/* Lower bone */}
    <rect x="9" y="15" width="6" height="7" rx="1" stroke={color} strokeWidth={strokeWidth} fill="none"/>
    
    {/* Joint space indicators */}
    <line x1="10" y1="12" x2="14" y2="12" stroke={color} strokeWidth={strokeWidth * 0.5} strokeDasharray="1 1"/>
  </svg>
);

// Bone Icon
export const BoneIcon = ({ size = 48, color = 'currentColor', strokeWidth = 2 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Top end */}
    <circle cx="8" cy="6" r="2.5" stroke={color} strokeWidth={strokeWidth} fill="none"/>
    <circle cx="8" cy="6" r="1.2" stroke={color} strokeWidth={strokeWidth} fill="none"/>
    
    {/* Shaft */}
    <path d="M9 7.5 L15 16.5" stroke={color} strokeWidth={strokeWidth * 1.5} strokeLinecap="round"/>
    
    {/* Bottom end */}
    <circle cx="16" cy="18" r="2.5" stroke={color} strokeWidth={strokeWidth} fill="none"/>
    <circle cx="16" cy="18" r="1.2" stroke={color} strokeWidth={strokeWidth} fill="none"/>
    
    {/* Bone texture */}
    <line x1="10" y1="9" x2="11" y2="10" stroke={color} strokeWidth={strokeWidth * 0.5} opacity="0.5"/>
    <line x1="11.5" y1="11" x2="12.5" y2="12" stroke={color} strokeWidth={strokeWidth * 0.5} opacity="0.5"/>
    <line x1="13" y1="13.5" x2="14" y2="14.5" stroke={color} strokeWidth={strokeWidth * 0.5} opacity="0.5"/>
  </svg>
);

// All Categories Icon (Flame)
export const AllIcon = ({ size = 48, color = 'currentColor', strokeWidth = 2 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M12 2C12 2 8 6 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 6 12 2 12 2Z" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
    <path 
      d="M12 14C12 14 9 16 9 18.5C9 20.433 10.567 22 12.5 22C14.433 22 16 20.433 16 18.5C16 16 12 14 12 14Z" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
    <path 
      d="M12 8C12 8 10 9.5 10 11C10 12.1046 10.8954 13 12 13C13.1046 13 14 12.1046 14 11C14 9.5 12 8 12 8Z" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);
