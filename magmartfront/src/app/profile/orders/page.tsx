"use client";

import GetPurchases from '@/APIs/getPurchases';
import "@/app/globals.css";
import BasicBreadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Order from "@/components/Order/Index";
import { Container, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { useEffect, useState } from "react";

const formatDate = (isoDate: any) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export default function Orders() {
  const mockUserExample = {
    id: "42e91734-910f-4b17-939e-239aea154fa9",
  };

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
        const data = await GetPurchases(mockUserExample.id);
        console.log(data)
        data[8].items.push(data[0].items[0]);
        setOrders(data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
      } catch (error) {
        console.log(error);
        throw new Error();
      }
    }

    fetchData();
  }, []);

  const orderList = orders.length 
  ? (<Container className="my-4">
    <Typography variant="h4" gutterBottom>
      Histórico de pedidos
    </Typography>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Data do pedido</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Itens</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order: any) => (
            <TableRow key={order.id}>
              <TableCell>{formatDate(order.created_at)}</TableCell>
              <TableCell>{order.is_approved ? "Aprovado" : "Aguardando confirmação"}</TableCell>
              <TableCell>{order.items.reduce((accumulator: any, currentValue: any) => accumulator + currentValue.quantity, 0)}</TableCell>
              <TableCell>P${order.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </Container>) 
  : <Container className="my-4">Nenhuma compra encontrada</Container>;

  return (
    <div style={{ "backgroundColor": "rgb(242, 243, 244)" }}>
      <Navbar />
      <Container className="my-4">
        <BasicBreadcrumbs path={breadcrumbs} />
        <hr className="h-px mb-8 mt-4" style={{ "color": "rgb(222, 224, 228)" }}></hr>
      </Container>
      {/* {orderList} */}
      <Container>
        {orders.map((order: any, key) => (
          <Order key={key} order={order} />
        ))}
      </Container>
      <Footer />
    </div>
  );
}
