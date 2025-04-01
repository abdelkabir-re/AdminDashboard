import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Dashboard from './page/dashboard/Dashboard';
import Team from './page/team/Team';
import Contacts from './page/contacts/Contacts';
import Invoices from './page/invoices/Invoices';
import Form from './page/form/Form';
import Calender from './page/calender/Calender';
import Faq from './page/faq/Faq';
import BarChart from './page/barChart/BarChart';
import PieChart from './page/pieChart/PieChart';
import LineChart from './page/lineChart/LineChart';
import Geography from './page/geography/Geography';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />

      <Route path="contacts" element={<Contacts/>} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calender" element={<Calender/>} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geography />} /> 
    </Route>
   
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)