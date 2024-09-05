// services/rewardsService.ts
import Cookies from 'js-cookie';

export interface Reward {
    id: string;
    tierId: string;
    name: string;
    description: string;
    experienceRequired: number;
    type: string;
    prize: any; // O tipo pode variar dependendo da estrutura da recompensa
  }
  
  export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
  }
  
  export async function getAllRewards(): Promise<ApiResponse<Reward[]>> {
    try {
      const token = Cookies.get('authToken');
      const response = await fetch(`${process.env.API_URL}/rewards`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      });
  
      if (response.ok) {
        return { success: true };
      } else {
        return { success: false};
      }
    } catch (error) {
      return { success: false};
    }
  }
  