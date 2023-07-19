import React from 'react';
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import {Box, Typography} from "@mui/material";

const InfoModal = ({open, setOpen,users}) => {
    const handleClose = () => {
        setOpen(false);
    };
    const BootstrapDialog = styled(Dialog)(({theme}) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(3),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(3),
        },
    }));
console.log(users)
    function BootstrapDialogTitle(props) {
        const {children, onClose, ...other} = props;


        return (
            <>
            <DialogTitle sx={{m: 0, p: 3}} {...other}>
                {children}
                {onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: -1,
                            color: (theme) => theme.palette.grey[800],
                        }}
                    >
                        <CloseIcon/>
                    </IconButton>
                ) : null}
            </DialogTitle>
            </>
        );
    }

    return (
        <React.Fragment>
            {users.map((item,index)=>
                <BootstrapDialog
                    key={index}
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                        <Typography   id="parent-modal-title">{users[0].name}</Typography>
                    </BootstrapDialogTitle>
                    <DialogContent>
                        <Box  className={"modal-box"}>
                            <span>Телефон:</span> <p>{users[0].phone}</p>
                            <span>Почта:</span><p>{users[0].email}</p>
                            <span>Дата приема:</span> <p>{users[0].hire_date}</p>
                            <span>Должность:</span><p>{users[0].position_name}</p>
                            <span>Подразделение:</span><p>{users[0].department}</p>
                        </Box>
                        <Box className={"modal-box-sub"}>
                            <Typography  className={"modal-box-sub-title"}>Дополнительная информация:</Typography>
                            <p>
                                {users[0].department}
                            </p>
                        </Box>

                    </DialogContent>

                </BootstrapDialog>
            )}


        </React.Fragment>
    );
};

export default InfoModal;
