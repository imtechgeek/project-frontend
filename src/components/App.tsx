import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Search } from './Search';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { fetchData } from '../utils/getData';
import { Records } from '../utils/types';
import { Tooltip } from '@mui/material';

const StyledBody = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: #264653;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  align-items: center;
  justify-content: flex-start;
  color: black;
`;
const StyledGrid = styled(DataGrid)`
  max-width: 840px;
  width: 90%;
  background-color: #f1f9f9;
  margin-bottom: 30px;
  color: #307373;
  word-break: break-all;
`;
const Text = styled.span`
  word-wrap: normal;
  word-break: normal;
`;

function App() {
  const [data, setData] = useState<Records[]>([]);
  const [searchedText, setSearchedText] = useState<string>('');

  const handleSearch = async () => {
    setData([]);
    const records = await fetchData(searchedText);
    setData(records);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchedText((e.target as HTMLInputElement).value);
  };

  const columns: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Title',
      width: 250,
      align: 'left',

      renderCell: (params: any) => (
        <Tooltip title={params.value}>
          <Text>{params.value}</Text>
        </Tooltip>
      ),
    },
    {
      field: 'first_author',
      headerName: 'First Author',
      width: 150,
      align: 'center',
    },
    {
      field: 'second_author',
      headerName: 'Second Author',
      width: 150,
      align: 'center',
    },
    {
      field: 'publisher',
      headerName: 'Publisher',
      width: 200,
      align: 'left',
      renderCell: (params: any) => (
        <Tooltip title={params.value}>
          <Text>{params.value}</Text>
        </Tooltip>
      ),
    },
    {
      field: 'language',
      headerName: 'Language',
      width: 150,
      align: 'center',
    },
    {
      field: 'publication_types',
      headerName: 'Type',
      width: 200,
    },
    {
      field: 'url',
      headerName: 'URL',
      width: 200,
      renderCell: (params: any) => (
        <Tooltip title={params.value}>
          <Text>{params.value}</Text>
        </Tooltip>
      ),
    },
  ];
  return (
    <StyledBody>
      <Header />
      <Search
        onSearch={handleSearch}
        handleChange={handleChange}
        searchText={searchedText}
      />
      {data.length > 0 && (
        <StyledGrid
          sx={{
            color: '#307373',
            '& .MuiDataGrid-cell:hover': {
              color: '#307373',
            },
          }}
          rows={data}
          columns={columns}
          getRowId={(row) => row.doi}
        />
      )}
    </StyledBody>
  );
}

export default App;
