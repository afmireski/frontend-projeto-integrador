import axios from 'axios';
import Cookies from 'js-cookie';
import Reward from '@/components/myTypes/RewardType';

async function CreateReward(reward: Reward) {
        const token = Cookies.get("authToken");

        try {
            const response = await axios.post(
                `${process.env.API_URL}/rewards/new`, reward,
                {
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json',
                    }
                }
            );
            
            if (response.status === 200) {
                return response.data;
            } else {
                return response.data;
            }
        } catch (error) {
            console.error("Erro ao cadastrar recompensa", error);
            throw error;
        }
}

export default CreateReward;
