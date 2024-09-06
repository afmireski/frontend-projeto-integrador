import React, { useEffect, useState } from 'react';
import Swiper from 'swiper/bundle';
import { getAllRewards } from '@/app/api/getAllRewards'; // Ajuste o caminho conforme necessário
import { getUserRewards } from '@/app/api/getUserRewards'; // Função para buscar recompensas do usuário
import { claimReward } from '@/app/api/claimReward'; // Função para reivindicar a recompensa

export interface Reward {
  id: string;
  tierId: string;
  name: string;
  description: string | null;
  experienceRequired: number;
  type: string;
  prize: { pokemon_id: string } | any; // O tipo do prêmio pode ser mais específico
  prizeType: string;
  can_claim: boolean;    // Booleano para verificar se a recompensa pode ser reivindicada
  claimed_at: boolean;   // Booleano para verificar se a recompensa foi reivindicada
  userId: string;
  tier: {
    id: number;
    previousTierId: string | null;
    name: string;
    minimalExperience: number;
    limitExperience: number;
  };
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

  // Verifica o status da recompensa para o usuário
  const getUserRewardStatus = (rewardId: string) => {
    const userReward = userRewards.find((userReward) => userReward.id === rewardId);
    return userReward || { can_claim: false, claimed_at: false }; // Retorna valores padrão se não encontrado
  };

  // Reivindica uma recompensa
  const handleClaimReward = async (rewardId: string) => {
    try {
      const response = await claimReward(rewardId);
      if (response.ok) {
        // Atualiza as recompensas do usuário após a reivindicação
        const updatedUserRewards = await getUserRewards();
        if (updatedUserRewards.data) {
          setUserRewards(updatedUserRewards.data);
        }
      } else {
        console.error('Erro ao reivindicar recompensa');
      }
    } catch (error) {
      console.error('Erro ao reivindicar recompensa', error);
    }
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
            <h2 className="text-2xl font-semibold text-indigo-600">Recompensas {index + 1}</h2>
            <ul className="text-center text-slate-600 mt-2">
              {group.map((reward, idx) => {
                const { can_claim, claimed_at } = getUserRewardStatus(reward.id);

                // Determina o estilo de acordo com o status da recompensa
                let textStyle = {};
                if (claimed_at) {
                  // Recompensa já coletada (laranja)
                  textStyle = { fontWeight: 'bold', color: 'orange' };
                } else if (can_claim) {
                  // Recompensa disponível para coleta (verde)
                  textStyle = { fontWeight: 'bold', color: 'green' };
                } else {
                  // Recompensa indisponível (cinza)
                  textStyle = { fontWeight: 'bold', color: 'gray' };
                }

                return (
                  <li
                    key={idx}
                    style={textStyle}
                    onClick={() => can_claim && handleClaimReward(reward.id)}
                    className={can_claim ? 'cursor-pointer' : ''}
                  >
                    {reward.name}: {reward.description || 'Sem descrição'}
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
