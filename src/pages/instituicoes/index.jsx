import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import MenuTop from "../../components/Menu";

import { TitleSite, TitleTop } from "./style";
import {  BodyStyle } from "./style";

function createData(name, address, district, tell, email, ) {
    return { name, address, district, tell, email };
  }
  
  const rows = [
    createData('Viva Melhor', 'Rua Doutor do Fim, 14', 'Jd dom Bosco', '011 985581875', 'viva@gmail.com'),
    createData('Menos Frio', 'Rua Luiz de Fora, 20', 'Jd Feliz', '0119858585', 'menos@gmail.com'),
    createData('Lã feliz ', 'Rua dom Bosco, 100', 'Jd Rosa', '011 985858585', 'la@gmail.com'),
    createData('Mais Feliz', 'Rua Felizberto', 'Jd Fim do mundo', '011 958584545', 'masfeliz@gmail.com'),
  ];

export default function Produtos() {
       
    return (
    <>
    <TitleTop>
      <TitleSite>Coleta Solidaria</TitleSite> 
      <MenuTop />
    </TitleTop>
    <BodyStyle>
    
       
    <TableContainer component={Paper}>
      <Table width={200} sx={{ minnWidth: 450 }} size='medium' aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Instituição </TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Endereço</TableCell>
            <TableCell align="center">Telefone</TableCell>
            <TableCell align="center">E-mail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.size}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.district}</TableCell>
              <TableCell align="center">{row.tell}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </BodyStyle>
    </>
    )
}