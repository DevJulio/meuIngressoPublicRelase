import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adm from "./pages/adm";
import Buy from "./pages/buyPage";
import CreateEvent from "./pages/createEvent";
import Detail from "./pages/description";
import Events from "./pages/events";
import Home from "./pages/home";
import PurchaseList from "./pages/purchaseList";
import TickeReady from "./pages/ticket";
import UpdateEvent from "./pages/updateEvent";

function RoutesList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes" element={<Detail />} />
        <Route path="/compra" element={<Buy />} />
        <Route path="/ticket" element={<TickeReady />} />
        <Route path="/adm" element={<Adm />} />
        <Route path="/adm/criar-evento" element={<CreateEvent />} />
        <Route path="/adm/lista-de-compras" element={<PurchaseList />} />
        <Route path="/adm/lista-de-eventos" element={<Events />} />
        <Route path="/adm/editar-evento" element={<UpdateEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesList;