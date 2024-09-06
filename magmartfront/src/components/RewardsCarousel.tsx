import React, { useEffect, useState } from 'react';
import Swiper from 'swiper/bundle';
import { getAllRewards } from '@/app/api/getAllRewards'; // Ajuste o caminho conforme necessário
import { getUserRewards } from '@/app/api/getUserRewards'; // Função para buscar recompensas do usuário

interface Reward {
  id: string;
  tierId: string;
  name: string;
  description: string;
  experienceRequired: number;
  type: string;
  prize: any; // O tipo pode variar dependendo da estrutura da recompensa
}

const RewardsCarousel = () => {
  const [allRewards, setAllRewards] = useState<Reward[]>([]); // Todas as recompensas disponíveis
  const [userRewards, setUserRewards] = useState<Reward[]>([]); // Recompensas do usuário

  useEffect(() => {
    // Função para buscar todas as recompensas
    const fetchRewards = async () => {
      const rewardsResponse = await getAllRewards();
      if (rewardsResponse.data) {
        setAllRewards(rewardsResponse.data);
      } else {
        console.error('Erro ao buscar recompensas', rewardsResponse.error);
      }
    };

    // Função para buscar recompensas do usuário
    const fetchUserRewards = async () => {
      const userRewardsResponse = await getUserRewards();
      if (userRewardsResponse.data) {
        setUserRewards(userRewardsResponse.data);
      } else {
        console.error('Erro ao buscar recompensas do usuário', userRewardsResponse.error);
      }
    };

    fetchRewards();
    fetchUserRewards();
  }, []);

  useEffect(() => {
    // Inicializa o Swiper
    if (allRewards.length > 0) {
      new Swiper('.swiper-container', {
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 10,
      });
    }
  }, [allRewards]);

  // Verifica se o usuário já possui a recompensa
  const hasUserReward = (rewardId: string) => {
    return userRewards.some((userReward) => userReward.id === rewardId);
  };

  const renderRewardCards = () => {
    const rewardGroups = [];

    // Divide as recompensas em grupos de 5
    for (let i = 0; i < allRewards.length; i += 5) {
      rewardGroups.push(allRewards.slice(i, i + 5));
    }

    return rewardGroups.map((group, index) => (
      <div key={index} className="swiper-slide">
        <div className="swiper-slide w-full max-w-md mx-auto">
          <div className="bg-indigo-50 rounded-2xl h-96 flex flex-col justify-center items-center p-4">
            <h2 className="text-2xl font-semibold text-red-600">Recompensas {index + 1}</h2>
            <ul className="text-center text-slate-600 mt-2">
              {group.map((reward, idx) => {
                const userHasReward = hasUserReward(reward.id);
                return (
                  <li
                    key={idx}
                    style={{
                      fontWeight: userHasReward ? 'bold' : 'normal',
                      color: userHasReward ? 'orange' : 'inherit',
                    }}
                  >
                    {reward.name}: {reward.description}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-row w-full">
      <div className="swiper centered-slide-carousel swiper-container relative max-w-full overflow-hidden">
        <div className="flex flex-row swiper-wrapper max-w-screen-lg overflow-hidden">
          {renderRewardCards()}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default RewardsCarousel;
