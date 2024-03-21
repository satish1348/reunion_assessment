import React,{useEffect} from 'react';
import MUIDataTable from "mui-datatables";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { useState } from 'react';


const App = () => {
    const [users,setUsers]=useState([])
    const columns=[
        {
            name:"id",
            selector : row => row.id,
            sortable:true
        },
        {
            name:"name",
            selector : row => row.name,
            sortable:true
        },
        {
            name:"category",
            selector : row => row.category,
            sortable:true
        },
        {
            name:"subcategory",
            selector : row => row.subcategory,
            sortable:true
        },
        {
            name:"createdAt",
            selector : row => row.createdAt,
            sortable:true
        },
        {
            name:"updatedAt",
            selector : row => row.updatedAt,
            sortable:true
        },
        {
            name:"price",
            selector : row => row.price,
            sortable:true
        },
        {
            name:"sale_price",
            selector : row => row.sale_price,
            sortable:true
        },
    ];

    const options={
        selectableRows:false,
        elevation:0,
        rowsPerPage:10,
        rowsPerPageOption:[10,15,20],
        color:'skyblue',

    };
    useEffect(()=>{
        fetch('http://localhost:3000/sample.json')
        .then((res)=>res.json())
        .then(data=>{
             console.log(data?.users);
            setUsers(data?.users);
        });
    },[])
    const getMulTheme=()=>createTheme({
        typography:{
            fontFamily:"Poppins",
        },
        palette:{
            mode:'light',
        },
        components:{
            MuiTableCell:{
                styleOverrides:{
                    head:{
                        padding:"10px 4px",
                    },
                    body:{
                        padding:"7px 15px",
                        color:"light"
                    }
                }
            }
        }
    })
  return (
    <div className="bg-slate-700 py-10 min-h-screen grid place-items-center">
      <div className="w-10/12 max-w-4xl"> 
      <ThemeProvider theme={getMulTheme} >
      
      <MUIDataTable
        title={"REUNION FRONTEND ASSESSMENT"}
        data={users}
        columns={columns}
        options={options}
/>
      </ThemeProvider>
      </div>
    </div>
  );
};

export default App;