import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react'
import { IData } from '../models/IData';
import { DataService } from '../shared/services/DataService'

export default function Dados() {
    const [rows, setRows] = useState<IData[]>([]);

    useEffect(() => {
        DataService.PegarTudo()
            .then((result) => {
                if (result instanceof Error) {
                    alert(result.message)
                } else {
                    console.log(result)
                    setRows(result)
                }
            })

    }, []);

    return (
        <TableContainer component={Paper} variant="outlined">
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Produto</TableCell>
                        <TableCell>Quantidade</TableCell>
                        <TableCell>Preço</TableCell>
                        <TableCell>Tipo</TableCell>
                        <TableCell>Industria</TableCell>
                        <TableCell>Origem</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row: IData) => (
                        <TableRow>
                            <TableCell>{row.product}</TableCell>
                            <TableCell>{row.quantity}</TableCell>
                            <TableCell>{row.price}</TableCell>
                            <TableCell>{row.type}</TableCell>
                            <TableCell>{row.industry}</TableCell>
                            <TableCell>{row.origin}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}