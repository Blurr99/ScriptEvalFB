import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { Box, Text } from '@mantine/core';
import { mkConfig, generateCsv, download } from 'export-to-csv';


const data = [
  {
    name: {
      student: 'jhone',
      id: '220122',
    },
    marks: '10',
    
  },
  {
    name: {
      student: 'Zachary',
      id: '220123',
    },
    marks: '10',
    
  },
  {
    name: {
      student: 'jhone',
      id: '220124',
    },
    marks: '10',

  },
  {
    name: {
      student: 'Zachary',
      id: '220125',
    },
    marks: '10',
    
  },
  {
    name: {
      student: 'jhone',
      id: '220121',
    },
    marks: '10',
   
  },
];

// Define columns outside of the component
const columns = [
  {
    accessorKey: 'name.student',
    header: 'Student Name',
  },
  {
    accessorKey: 'name.id',
    header: 'Student ID',
  },
  {
    accessorKey: 'marks',
    header: 'Max Marks',
  },
];

const csvConfig = mkConfig({
  fieldSeparator: ',',
  decimalSeparator: '.',
  useKeysAsHeaders: true,
});

const TableResult = () => {
  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(data);
    download(csvConfig)(csv);
  };

  // const table = useMantineReactTable({
  //   columns,
  //   data,
 
  //   columnFilterDisplayMode: 'popover',
  //   paginationDisplayMode: 'pages',
  //   positionToolbarAlertBanner: 'bottom',
  //   renderTopToolbarCustomActions: ({ table }) => (
  //     <Box
  //       sx={{
  //         display: 'flex',
  //         gap: '16px',
  //         padding: '8px',
  //         flexWrap: 'wrap',
  //       }}
  //     >
  //       <button
  //         onClick={handleExportData}
  //         className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
  //       >
  //         <IconDownload className="mr-2" />
  //         Export All Data
  //       </button>
  //     </Box>
  //   ),
  // });

  return (
    <MantineReactTable
      columns={columns}
      data={data}
      renderDetailPanel={({ row }) => (
        <Box
          sx={{
            display: 'grid',
            margin: 'auto',
            gridTemplateColumns: '1fr 1fr',
            width: '100%',
          }}
        > 
          <Text>Address: {row.original.address}</Text>
          <Text>City: {row.original.city}</Text>
          <Text>State: {row.original.state}</Text>
          <Text>Country: {row.original.country}</Text>
        </Box>
      )}

    />
  );
};

export default TableResult;
