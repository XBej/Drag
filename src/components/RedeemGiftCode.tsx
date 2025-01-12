import React, { useState } from 'react';
import { redeemGiftCode } from '../services/api';
import { toast } from 'react-toastify';
import DashboardLayout from './DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Gift } from 'lucide-react';

const RedeemGiftCode: React.FC = () => {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await redeemGiftCode(code);
      toast.success(response.data);
      setCode('');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to redeem gift code');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-md mx-auto">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <div className="flex flex-col items-center mb-6">
              <div className="p-3 rounded-full bg-red-500/10 mb-4">
                <Gift className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-xl font-semibold text-white">Redeem Gift Code</h2>
              <p className="text-gray-400 text-sm mt-2 text-center">
                Enter your gift code below to claim your rewards
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter gift code"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                required
              />
              <Button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white"
                disabled={isLoading}
              >
                {isLoading ? 'Redeeming...' : 'Redeem Code'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default RedeemGiftCode;

