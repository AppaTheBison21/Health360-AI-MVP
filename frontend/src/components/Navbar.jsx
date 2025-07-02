import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const links = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/training', label: 'Training' },
    { to: '/diet', label: 'Diet' },
    { to: '/mentalhealth', label: 'Mental Health' },
    { to: '/symptomchecker', label: 'Symptom Checker' },
    { to: '/profile', label: 'Profile' },
  ];
  return (
    <nav className="p-4 bg-white shadow flex space-x-4">
      {links.map(link => (
        <NavLink key={link.to} to={link.to} className="hover:underline">
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
