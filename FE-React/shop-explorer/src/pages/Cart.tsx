import { useCartStore } from "../store/cartStore";
import { Button, Grid, Card } from "@mui/material";

export default function Cart() {
  const { items, updateQty, removeItem } = useCartStore();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <h1>Carts</h1>

      <Grid container spacing={3} direction="column">
        {items.map((item) => (
          <Card key={item.id} variant="outlined" sx={{ padding: "10px" }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
              <h3>{item.title}</h3>
              <Button color="error" onClick={() => removeItem(item.id)}>
                Remove
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                gap: "3px",
                alignItems: "center",
              }}
            >
              <Button onClick={() => updateQty(item.id, item.quantity - 1)}>
                -
              </Button>
              {item.quantity}
              <Button onClick={() => updateQty(item.id, item.quantity + 1)}>
                +
              </Button>
            </div>
          </Card>
        ))}
      </Grid>

      <h2>Total: Rp {subtotal}</h2>
    </>
  );
}
