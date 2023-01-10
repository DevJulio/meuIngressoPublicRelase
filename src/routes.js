import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adm from "./pages/adm";
import Burn from "./pages/burnTicket";
import Buy from "./pages/buyPage";
import CreateEvent from "./pages/createEvent";
import Detail from "./pages/description";
import Events from "./pages/events";
import EventsInfo from "./pages/eventsInfo";
import GetTicket from "./pages/getTicketBack";
import Home from "./pages/home";
import Login from "./pages/login";
import Privacy from "./pages/privacy";
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
        <Route path="/recuperar-ingresso" element={<GetTicket />} />
        <Route path="/politica-privacidade" element={<Privacy />} />
        <Route path="/adm/login" element={<Login />} />
        <Route path="/adm" element={<Adm />} />
        <Route path="/adm/criar-evento" element={<CreateEvent />} />
        <Route path="/adm/seleciona-evento" element={<EventsInfo />} />
        <Route path="/adm/lista-de-compras" element={<PurchaseList />} />
        <Route path="/adm/lista-de-eventos" element={<Events />} />
        <Route path="/adm/editar-evento" element={<UpdateEvent />} />
        <Route path="/adm/liberar-entrada" element={<Burn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesList;
