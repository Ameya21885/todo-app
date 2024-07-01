import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const ButtonComp = ({ title, icon, onClick }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={icon} onClick={onClick} color="secondary">
        {title}
      </Button>
    </Stack>
  );
};

export default ButtonComp;
