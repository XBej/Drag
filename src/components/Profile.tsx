import React, { useEffect, useState } from 'react';
import { getProfile } from '../services/api';
import { toast } from 'react-toastify';
import DashboardLayout from './DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Star, Key, User } from 'lucide-react';

interface ProfileData {
  name: string;
  points: number;
  subscriptionPlan: string;
  apiKey: string;
}

const Profile: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setProfileData(response.data);
      } catch (error) {
        toast.error(error.response?.data?.error || 'Failed to fetch profile');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="p-3 rounded-full bg-red-500/10">
              <User className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Username</p>
              <p className="text-lg font-semibold text-white">{profileData?.name}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="p-3 rounded-full bg-red-500/10">
              <Star className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Points</p>
              <p className="text-lg font-semibold text-white">{profileData?.points}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="p-3 rounded-full bg-red-500/10">
              <Crown className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Plan</p>
              <p className="text-lg font-semibold text-white">{profileData?.subscriptionPlan}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="p-3 rounded-full bg-red-500/10">
              <Key className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">API Key</p>
              <p className="text-xs font-mono text-white truncate w-32" title={profileData?.apiKey}>
                {profileData?.apiKey}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">API Information</h3>
                <p className="text-gray-400">Your API key grants access to our services. Keep it secure and never share it publicly.</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <p className="text-sm font-mono text-gray-300 break-all">{profileData?.apiKey}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Profile;

