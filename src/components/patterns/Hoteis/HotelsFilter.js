import { Box, Button, Checkbox, Divider, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Text } from "../../core";
import SearchIcon from '@mui/icons-material/Search';


export const HotelsFilter = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginBlockEnd: '1rem'
        }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%'
        }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              // label="Data de Check-in"
              // value={value}
              // onChange={(newValue) => {
              //   setValue(newValue);
              // }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Checkout</InputLabel>
            <Select
              label="Checkout"
            // value={age}
            // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Adultos</InputLabel>
            <Select
              label="Adultos"
            // value={age}
            // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Crianças</InputLabel>
            <Select
              label="Crianças"
            // value={age}
            // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Preço</InputLabel>
            <Select
              label="Preço"
            // value={age}
            // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Cidade</InputLabel>
            <Select
              label="Cidade"
            // value={age}
            // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Divider orientation="horizontal" />
      <Box>
        <Text sx={{ padding: '1rem' }}>Categoria</Text>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '100%',
          maxWidth: 450
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox defaultChecked />
            <Text>2 Estrelas</Text>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox />
            <Text>3 Estrelas</Text>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox />
            <Text>4 Estrelas</Text>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox />
            <Text>5 Estrelas</Text>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flex: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: 320, width: '100%' }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<SearchIcon />}
            sx={{ backgroundColor: '#007a73', width: '100%' }}
          >
            Pesquisar
          </Button>
        </Box>
        <Box sx={{ display: 'flex', flex: 1 }} />
      </Box>
    </Box>
  );
};