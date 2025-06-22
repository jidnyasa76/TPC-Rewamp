import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Team from './components/Committee/Team.jsx';
import Events from './components/Events.jsx';
import Statistics from './components/Statistics.jsx';
import Placement from './components/Placement.jsx';
import Contact from './components/Contact.jsx';
import Layout from './Layout.jsx';

import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/team" element={<Team />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/placements" element={<Placement />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
