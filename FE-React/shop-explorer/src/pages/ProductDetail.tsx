import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../api/products";
import { useCartStore } from "../store/cartStore";
import { Button, Grid } from "@mui/material";

export default function ProductDetail() {
  const { id } = useParams();
  const addItem = useCartStore((state) => state.addItem);

  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id!),
  });

  if (isLoading) return <p>Loading...</p>;

  const handleAdd = () => {
    try {
      addItem(data!); // optimistic update
    } catch {
      alert("Failed to add item");
    }
  };

  return (
    <Grid
      container
      spacing={3}
      sx={{
        justifyContent: "center",
        backgroundColor: "#fff"
      }}
    >
      <div>
        <img src={data!.images[0]} style={{maxWidth: "500px", width: "100%"}} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "10px 0",
        }}
      >
        <div>
          <h1>{data!.title}</h1>
          <p>{data!.description}</p>
          <p>Rp {data!.price}</p>
        </div>

        <Button variant="contained" color="primary" onClick={handleAdd}>
          Beli yuk!
        </Button>
      </div>
    </Grid>
  );
}
