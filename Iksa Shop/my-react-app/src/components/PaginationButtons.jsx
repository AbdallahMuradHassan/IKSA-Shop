import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationButtons(count, page, onChange) {
    return (
        <Stack spacing={2}>
            {/* The Pagination Component */}
            <Pagination
                count={count}
                page={page}
                onChange={onChange}
                color="primary"
                showFirstButton
                showLastButton
            />


        </Stack>
    );
}