"use client";

import GetPurchases from '@/APIs/getPurchases';
import "@/app/globals.css";
import BasicBreadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Order from "@/components/Order/Index";
import { Container } from '@mui/material';
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

export default function Orders() {
  const userToken = Cookies.get("authToken");

  const [orders, setOrders] = useState([]);

  const breadcrumbs = [
    {
      name: "Perfil",
      url: "/profile",
    },
    {
      name: "Minhas Compras",
      url: "/profile/orders",
      active: true,
    },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await GetPurchases(userToken);
        setOrders(data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
      } catch (error) {
        console.log(error);
        throw new Error();
      }
    }

    fetchData();
  }, []);

  return (
    <div style={{ "backgroundColor": "rgb(242, 243, 244)" }}>
      <Navbar />
      <Container className="my-4">
        <BasicBreadcrumbs path={breadcrumbs} />
        <hr className="h-px mb-8 mt-4" style={{ "color": "rgb(222, 224, 228)" }}></hr>
      </Container>
      <Container>
        {orders.map((order: any, key) => (
          <Order key={key} order={order} />
        ))}
      </Container>
      <Footer />
    </div>
  );
}
