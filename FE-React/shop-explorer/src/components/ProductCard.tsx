import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useCartStore } from "../store/cartStore";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    try {
      addItem(product); // optimistic UI update
    } catch {
      alert("Failed to add product to cart");
    }
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardMedia
          component="img"
          height="180"
          image={product.images?.[0]}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            {product.title}
          </Typography>

          <Typography variant="body2" color="text.secondary" noWrap>
            {product.description}
          </Typography>

          <Typography variant="h6" color="primary" mt={1}>
            Rp {product.price}
          </Typography>
        </CardContent>
      </Link>

      <Button
        variant="contained"
        color="primary"
        sx={{ m: 2 }}
        onClick={handleAddToCart}
      >
        Beli yuk!
      </Button>
    </Card>
  );
}
