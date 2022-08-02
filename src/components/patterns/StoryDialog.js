import { Text, Dialog, DialogContent, DialogTitle, IconButton } from "../core"
import CloseIcon from '@mui/icons-material/Close';

export const StoryDialog = ({ url, open = true, handleClose }) => {

    return (
        <Dialog fullScreen PaperProps={{
            style: {
                backgroundColor: `#000000E0`
            },
        }} open={open} onClose={handleClose} >
            <DialogContent sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <iframe src={url} frameBorder="0" scrolling="no" style={{ minWidth: '18.75rem', minHeight: '37.5rem', display: 'block' }}></iframe>
                <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 20, right: 20, backgroundColor: '#000', '&:hover': {backgroundColor: '#000'} }}>
                    <CloseIcon sx={{ color: '#FFFFFF', transition: '.3s', '&:hover': {transform: 'rotate(90deg)'}}}/>
                </IconButton>
            </DialogContent>
        </Dialog>
    )
} 