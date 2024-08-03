import { ContentBox } from '../apps/system';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Switch } from '../ui/switch';
import { ContentBoxSelectItem } from './Control-Centre';

export function Wallet() {
  return (
    <div className="space-y-6">
      <ContentBox
        title="Payment Cards"
        className="flex flex-row justify-between items-center"
      >
        <span>Debit or Credit Card</span>
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          Add Card...
        </Button>
      </ContentBox>

      <div>
        <ContentBox title="Payment Details" className="space-y-2">
          <div className="flex flex-col">
            <span>Transaction defaults</span>
            <span className="text-xs text-neutral-400">
              Choose the default payment information you want to use when making
              a purchase with Apple Pay. Addresses and payment options can be
              changed at the time of transaction.
            </span>
          </div>

          <Separator className="bg-white/10" />

          <ContentBoxSelectItem
            title="Shipping Address"
            defaultValue={0}
            values={[
              {
                title: 'Sweden',
                value: 'sweden'
              }
            ]}
          />

          <Separator className="bg-white/10" />

          <ContentBoxSelectItem
            title="Email"
            defaultValue={0}
            values={[
              {
                title: 'elmerssonrasmus@gmail.com',
                value: 'elmerssonrasmus@gmail.com'
              }
            ]}
          />

          <Separator className="bg-white/10" />

          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <span>Hide My Email</span>
                <span className="text-xs text-neutral-400">
                  Forwards To: elmerssonrasmus@gmail.com
                </span>
                <span className="text-xs text-neutral-400 mt-2">
                  Create a unique, random address that forwards to your personal
                  inbox and can be deleted at any time. If you need to reference
                  or manage this email address, you can find it in
                </span>
                <span className="text-sm text-blue-500">iCloud Settings.</span>
              </div>
              <Switch />
            </div>
          </div>

          <Separator className="bg-white/10" />

          <ContentBoxSelectItem
            title="Phone"
            defaultValue={0}
            values={[
              {
                title: '46735455725',
                value: '46735455725'
              }
            ]}
          />
        </ContentBox>

        <ContentBox className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span>Compatible Cards</span>
            <span className="text-xs text-neutral-400">
              Verifies that your saved cards in Safari Autofill are compatible
              with Apple Pay and allows you to use them in Wallet.
            </span>
          </div>
          <Switch />
        </ContentBox>

        <ContentBox className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span>Add Orders to Wallet</span>
            <span className="text-xs text-neutral-400">
              Orders from participationg merchants will be automatically added
              to wallet on your iPhone.
            </span>
          </div>
          <Switch checked />
        </ContentBox>
      </div>

      <div className="flex flex-row items-center justify-end space-x-2">
        <Button className="bg-neutral-500 text-white p-2 h-6 text-sm">
          See how your data is managed...
        </Button>
        <Button className="bg-neutral-500 text-white px-2 h-6 text-lg rounded-full">
          ?
        </Button>
      </div>
    </div>
  );
}
