import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuTop from "../../components/Menu";
import { TitleSite, TitleTop } from "./style";

import { ListProd, BodyStyle } from "./style";

function createData(name, size, color, description, unit) {
    return { name, size, color, description, unit };
  }
  
  const rows = [
    createData('Blusa', 'M', 'Branca', 'Blusa com manga longa', 4.0),
    createData('Casaco', 'P', 'Preta', 'Casaco de lã', 4),
    createData('Jaqueta', 'M', 'Rosa', 'Jaqueta de couro', 6),
    createData('Sobretudo', 'G', 'Branca', 'Sobretudo de veludo', 4),
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
            <TableCell>Produto </TableCell>
            <TableCell align="center">Tamanho</TableCell>
            <TableCell align="center">Cor</TableCell>
            <TableCell align="center">Detalhes</TableCell>
            <TableCell align="center">Qtd</TableCell>
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
              <TableCell align="center">{row.color}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.unit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </BodyStyle>
    </>
    )
}