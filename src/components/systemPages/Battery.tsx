import { ContentBox } from '../apps/system';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { ContentBoxSelectItem } from './Control-Centre';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { useEffect, useState } from 'react';
import { ChartContainer, type ChartConfig } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { format, subHours } from 'date-fns';

const topChartConfig = {
  desktop: {
    color: '#32d74b'
  }
} satisfies ChartConfig;

const bottomChartConfig = {
  desktop: {
    color: '#0b84ff'
  }
} satisfies ChartConfig;

const generateChartData = () => {
  const data = [];
  const now = new Date();
  for (let i = 0; i < 8; i++) {
    const time = subHours(now, i * 3);
    data.unshift({
      time: format(time, 'HH'),
      usage: Math.floor(Math.random() * 50)
    });
  }
  return data;
};

export function Battery() {
  return (
    <div>
      <ContentBox className="flex flex-row justify-between">
        <span>Battery Health</span>
        <div className="flex flex-row space-x-2 text-neutral-500 items-center">
          <span>Normal</span>
          <IoInformationCircleOutline className="size-6" />
        </div>
      </ContentBox>

      <div>
        <ContentBox
          title="Energy Mode"
          subTitle="Yor Mac can optimise either its battery usage with Low Power Mode or its performace in resource-intensive tasks with Higher Power Mode."
          className="space-y-1"
        >
          <ContentBoxSelectItem
            title="On battery"
            description="Your Mac will automatically choose the best level of performance and energy usage."
            defaultValue={0}
            values={[
              {
                title: 'Automatic',
                value: 'automatic'
              }
            ]}
          />

          <Separator className="bg-white/10" />

          <ContentBoxSelectItem
            title="On power adapter"
            description="Your Mac will automatically choose the best level of performance and energy usage."
            defaultValue={0}
            values={[
              {
                title: 'Automatic',
                value: 'automatic'
              }
            ]}
          />
        </ContentBox>

        <Graphs />
      </div>

      <div className="flex flex-row items-center justify-end pt-6 space-x-2">
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Options...
        </Button>
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}

function Graphs() {
  const [chartData, setChartData] = useState(generateChartData());

  useEffect(() => {
    const interval = setInterval(
      () => {
        setChartData(generateChartData());
      },
      60 * 60 * 1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      <ContentBox className="p-0">
        <Tabs defaultValue="24" className="w-full">
          <TabsList className="grid w-full grid-cols-2 p-2">
            <TabsTrigger value="24" className="rounded-lg">
              Last 24 Hours
            </TabsTrigger>
            <TabsTrigger value="10" className="rounded-lg">
              Last 10 Days
            </TabsTrigger>
          </TabsList>
          <TabsContent value="24" className="w-full p-2">
            <span className="font-bold">Energy Usage</span>
            <ChartContainer
              config={topChartConfig}
              className="min-h-[200px] w-full "
            >
              <BarChart data={chartData} barSize={20}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="time" stroke="#444" />
                <YAxis orientation="right" stroke="#444" />
                <Bar
                  dataKey="usage"
                  fill="var(--color-desktop)"
                  radius={[3, 3, 0, 0]}
                />
              </BarChart>
            </ChartContainer>

            <span className="font-bold">Screen On Usage</span>
            <ChartContainer
              config={bottomChartConfig}
              className="min-h-[200px] w-full "
            >
              <BarChart data={chartData} barSize={20}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="time" stroke="#444" />
                <YAxis orientation="right" stroke="#444" />
                <Bar
                  dataKey="usage"
                  fill="var(--color-desktop)"
                  radius={[3, 3, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="10" className="text-sm">
            <div className="grid w-full grid-cols-2 bg-neutral-700 p-1">
              <span>Name</span>
              <span>Type</span>
            </div>
            <div className="grid w-full grid-cols-2 py-1 px-2 bg-neutral-400">
              <span>MacBook Pro Microphone</span>
              <span>Built-in</span>
            </div>
          </TabsContent>
        </Tabs>
      </ContentBox>
    </div>
  );
}
