import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useTime from '@/hooks/useTime';
import { format } from 'date-fns';

const fetchNameOfTheDay = async (date: string) => {
  const apiUrl = `http://sholiday.faboul.se/dagar/v2.1/${date}`;
  const response = await axios.get(apiUrl);
  return response.data.dagar[0]?.namnsdag || [];
};

const useNameOfTheDay = () => {
  const currentTime = useTime();
  const currentDate = format(currentTime, 'yyyy/MM/dd');

  return useQuery({
    queryKey: ['nameOfTheDay', currentDate],
    queryFn: () => fetchNameOfTheDay(currentDate)
  });
};

export default useNameOfTheDay;
