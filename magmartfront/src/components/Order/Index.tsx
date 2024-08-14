"use client";

import "@/app/globals.css";
import { formatDate } from '@/utils/date';
import ChevronRight from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import Link from "next/link";

export default function Order({ order }) {
  console.log(order);
  return (
    <div className="flex my-6 flex-col rounded" style={{ backgroundColor: "white", fontSize: "14px" }}>
      <div className="mx-3 mt-5 mb-2 w-full flex justify-between items-center">
        <div>{formatDate(order.created_at)}</div>
        <div>
          <Link
            href={{
              pathname: "/profile/orders/details/[id]",
              query: { order },
            }}
            as={`/profile/orders/details/${order.id}`}
            style={{
                marginRight: "2rem"
            }}
          >
            <Button
              className="uppercase font-semibold"
              variant="contained"
              endIcon={<ChevronRight />}
              style={{
                backgroundColor: "rgb(255, 101, 0)",
                fontSize: "0.75rem"
              }}
            >
              Ver Detalhes
            </Button>
          </Link>
        </div>
      </div>
      <hr className="my-1" style={{ "color": "rgb(222, 224, 228)" }}></hr>
      <div className="mx-3 my-2 w-full flex justify-between items-center font-bold">
      {order.is_accepted ? (
        <div className="text-green-600">Pagamento confirmado</div>
        ) : (
        <div className="text-red-600">Aguardando confirmação</div>
        )}
        <div style={{ margin: '0 2.5rem' }}>Total da compra: R${order.total}</div>
      </div>
      <hr className="my-1" style={{ "color": "rgb(222, 224, 228)" }}></hr>
      {order.items.map((item: any, key: any) => (
        <Grid key={key} container spacing={2} className="mt-1 mb-4 ml-1">
          <Grid item xs={6} md={1} className="flex justify-center items-center">
            <img src={item.pokemons.image_url} alt={item.pokemons.name} style={{ width: '4.25rem', height: '4.25rem', border: '1px solid rgb(222, 224, 228)' }} />
          </Grid>
          <Grid item xs={6} md={8} className="grid items-center">
            <p><b>{item.pokemons.name}</b></p>
            <p>Quantidade: {item.quantity}</p>
            <p>R${item.price}</p>
          </Grid>
          <Grid item xs={4} md={3} className="flex items-center justify-center">Total: R${item.total}</Grid>
        </Grid>
      ))}
    </div>
  );
}
