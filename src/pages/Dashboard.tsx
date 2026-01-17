import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Footer from 'components/common/Footer';
import TaskToday from 'components/sections/dashboard/TaskToday';
import WeekCalendar from 'components/sections/dashboard/WeekCalendar';

const Dashboard = () => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }}>
      <Stack p={3.5} spacing={3.5} direction="column" width={{ xs: 1, md: 'calc(100% - 460px)' }}>
        <h1>Hello</h1>
        <Footer />
      </Stack>

      <Box
        width={{ xs: 1, md: 460 }}
        height={{ xs: 'auto', md: 'calc(100vh - 90px)' }}
        overflow="scroll"
        bgcolor="info.main"
        position="sticky"
        top={90}
        sx={{
          '&:hover, &:focus': {
            '&::-webkit-scrollbar-thumb': {
              visibility: 'visible',
            },
          },
        }}
      >
        <Stack direction="column" p={3.5} spacing={3.5} width={1}>
          <WeekCalendar />
          <TaskToday />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Dashboard;
