import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function MUI(){
    return (
        <div>
            <h1>Matrial UI</h1>
            <Button variant='outlined' startIcon={<DeleteIcon />}>Click Me!</Button>

            <Button  variant='contained' disabled>Disabled Me!</Button>
              
            <Button  variant='contained' startIcon={<DeleteIcon />} color='error'>Click Me!</Button>

            <Button  variant='contained' startIcon={<DeleteIcon />} color='success' size='small'>Click Me!</Button>
            <Button  variant='contained' endIcon={<SendIcon />} color='success' size='large'>Click Me!</Button>



        </div>
    )
}