import React from 'react';
import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({setValue}) => {
    return (
        <>
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: "100%",
                    borderRadius: "23px"
                }}
            >
                <InputBase
                    style={{  width: "100%",height:"48px"}}
                    placeholder={`Search new contacts`}
                    fontSize={"small"}
                    onChange={(e) => setValue(e.target.value)}/>
                <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                    <SearchIcon/>
                </IconButton>

            </Paper>
        </>
    );
};

export default Search;
