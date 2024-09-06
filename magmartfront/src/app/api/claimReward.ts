// src/app/api/claimReward.ts
import Cookies from 'js-cookie';

export const claimReward = async (rewardId: string) => {
    const token = Cookies.get('authToken');
    const response = await fetch(`${process.env.API_URL}/rewards/${rewardId}/claim`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
      },
    });
    return response;
  };
  