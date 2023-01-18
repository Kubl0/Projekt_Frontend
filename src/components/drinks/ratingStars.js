import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function SimpleRating({ drink }) {
  const [grades, setGrades] = React.useState(drink.grades);
  const [newRating, setNewRating] = React.useState(
    grades.length > 0 ? grades.reduce((acc, x) => acc + x) / grades.length : 0
  );

  React.useEffect(() => {
    setNewRating(
      grades.length > 0 ? grades.reduce((acc, x) => acc + x) / grades.length : 0
    );
  }, [grades]);

  return (
    <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
      <Rating
        name="simple-controlled"
        value={newRating}
        precision={1}
        onChange={(e) => {
          setGrades(
            grades.length > 0
              ? [...grades, Number(e.target.value)]
              : [Number(e.target.value)]
          );
          console.log(grades);
        }}
      />
      <Typography className="ocena">
        {" "}
        Ocena: {Math.round(newRating * 10) / 10}
      </Typography>
    </Box>
  );
}
