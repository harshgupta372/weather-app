'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingCard = () => {
  const [pageviews, setPageviews] = useState(100);
  const [isYearly, setIsYearly] = useState(false);

  const price = pageviews * 0.16;
  const discountedPrice = price * 0.75;

  return (
    <Card className="w-full max-w-md">
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">{pageviews}K PAGEVIEWS</h2>
          <p className="text-4xl font-extrabold">
            ${isYearly ? discountedPrice.toFixed(2) : price.toFixed(2)} <span className="text-base font-normal text-muted-foreground">/ month</span>
          </p>
        </div>
        <Slider
          value={[pageviews]}
          onValueChange={(value) => setPageviews(value[0])}
          max={200}
          step={1}
          className="mb-6"
        />
        <div className="flex items-center justify-between mb-6">
          <span>Monthly Billing</span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <span>Yearly Billing</span>
          {isYearly && <span className="text-sm text-green-500 ml-2">25% discount</span>}
        </div>
        <hr className="my-6" />
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-green-500" />
            Unlimited websites
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-green-500" />
            100% data ownership
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-green-500" />
            Email reports
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Start my trial</Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;