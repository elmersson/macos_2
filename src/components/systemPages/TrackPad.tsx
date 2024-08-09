import { ContentBox } from '../apps/system';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Switch } from '../ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ContentBoxSelectItem } from './Control-Centre';
import { Slider } from './Sound';

export function TrackPad() {
  return (
    <div>
      <TrackpadTabs />
      <div className="flex flex-row items-center justify-end pt-6 space-x-2">
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Set Up Bluetooth Trackpad...
        </Button>
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}

function TrackpadTabs() {
  return (
    <div className="space-y-3">
      <Tabs defaultValue="24" className="w-full">
        <TabsList className="grid w-full grid-cols-3 p-0">
          <TabsTrigger value="click" className="rounded-lg p-0 text-md">
            Point & Click
          </TabsTrigger>
          <TabsTrigger value="zoom" className="rounded-lg p-0 text-md">
            Scroll & Zoom
          </TabsTrigger>
          <TabsTrigger value="more" className="rounded-lg p-0 text-md">
            More Gestures
          </TabsTrigger>
        </TabsList>
        <TabsContent value="click">
          <ContentBox className="space-y-1">
            <div className="flex flex-row justify-between space-x-6">
              <span>Tracking speed</span>
              <div className="flex flex-col w-[60%] space-y-2">
                <Slider defaultValue={[30]} numberOfMarks={10} />
                <div className="flex flex-row justify-between text-sm">
                  <span>Slow</span>
                  <span>Fast</span>
                </div>
              </div>
            </div>
            <Separator className="bg-white/10" />
            <div className="flex flex-row justify-between space-x-6">
              <span>Click</span>
              <div className="flex flex-col w-[60%] space-y-2">
                <Slider defaultValue={[50]} numberOfMarks={3} />
                <div className="flex flex-row justify-between text-sm">
                  <span>Light</span>
                  <span>Medium</span>
                  <span>Firm</span>
                </div>
              </div>
            </div>
            <Separator className="bg-white/10" />

            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Force Click and haptic feedback</span>
                <span className="text-sm text-neutral-400">
                  Click then press firmly for Wuick Look, Look up, and variable
                  speed media controls.
                </span>
              </div>
              <Switch checked />
            </div>
            <Separator className="bg-white/10" />
            <ContentBoxSelectItem
              title="Look up & data detectors"
              values={[
                { title: 'Force Click with One Finger', value: 'force' }
              ]}
              defaultValue={0}
            />
            <Separator className="bg-white/10" />
            <ContentBoxSelectItem
              title="Secondary click"
              values={[
                { title: 'Click or Tap with Two Fingers', value: 'two' }
              ]}
              defaultValue={0}
            />
            <Separator className="bg-white/10" />

            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Tap to click</span>
                <span className="text-sm text-neutral-400">
                  Tap with one finger
                </span>
              </div>
              <Switch checked />
            </div>
          </ContentBox>
        </TabsContent>
        <TabsContent value="zoom">
          <ContentBox className="space-y-1">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Natural scrolling</span>
                <span className="text-sm text-neutral-400">
                  Content tracks finger movement
                </span>
              </div>
              <Switch />
            </div>
            <Separator className="bg-white/10" />
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Zoom in or out</span>
                <span className="text-sm text-neutral-400">
                  Pinch with two fingers
                </span>
              </div>
              <Switch checked />
            </div>
            <Separator className="bg-white/10" />
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Smart zoom</span>
                <span className="text-sm text-neutral-400">
                  Double-tap with two fingers
                </span>
              </div>
              <Switch checked />
            </div>
            <Separator className="bg-white/10" />
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Rotate</span>
                <span className="text-sm text-neutral-400">
                  Rotate with two fingers
                </span>
              </div>
              <Switch checked />
            </div>
          </ContentBox>
        </TabsContent>
        <TabsContent value="more">
          <ContentBox className="space-y-1">
            <ContentBoxSelectItem
              title="Swipe between pages"
              values={[
                {
                  title: 'Scroll Left or Right with Two Fingers',
                  value: 'scroll'
                }
              ]}
              defaultValue={0}
            />
            <Separator className="bg-white/10" />
            <ContentBoxSelectItem
              title="Swipe between full screen applications"
              values={[
                {
                  title: 'Swipe Left or Right with Three Fingers',
                  value: 'swipe'
                }
              ]}
              defaultValue={0}
            />
            <Separator className="bg-white/10" />
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Notification Centre</span>
                <span className="text-sm text-neutral-400">
                  Swipe left from the right edge with two fingers
                </span>
              </div>
              <Switch checked />
            </div>
            <Separator className="bg-white/10" />
            <ContentBoxSelectItem
              title="Mission Control"
              values={[
                { title: 'Swipe Up with Three Fingers', value: 'three' }
              ]}
              defaultValue={0}
            />
            <Separator className="bg-white/10" />
            <ContentBoxSelectItem
              title="App Exposé"
              values={[
                { title: 'Swipe Down with three Fingers', value: 'three' }
              ]}
              defaultValue={0}
            />
            <Separator className="bg-white/10" />
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Launchpad</span>
                <span className="text-sm text-neutral-400">
                  Pinch with thumb and three fingers
                </span>
              </div>
              <Switch checked />
            </div>
            <Separator className="bg-white/10" />
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Show Desktop</span>
                <span className="text-sm text-neutral-400">
                  Spread with thumb and three fingers
                </span>
              </div>
              <Switch checked />
            </div>
          </ContentBox>
        </TabsContent>
      </Tabs>
    </div>
  );
}
