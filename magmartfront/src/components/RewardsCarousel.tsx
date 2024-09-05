import React, { useEffect, useState } from 'react';
import Swiper from 'swiper/bundle';
import { getAllRewards } from '@/app/api/getAllRewards' // Supondo que essa função já exista

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
  const [rewards, setRewards] = useState<Reward[]>([]); // Define o tipo como Reward[]

  useEffect(() => {
    const fetchRewards = async () => {
      const rewardsResponse = await getAllRewards();
      if (rewardsResponse.data) {
        setRewards(rewardsResponse.data); // Define o array de recompensas
      } else {
        console.error('Erro ao buscar recompensas', rewardsResponse.error);
      }
    };

    fetchRewards();
  }, []);

  useEffect(() => {
    if (rewards.length > 0) {
      new Swiper('.swiper-container', {
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 10,
      });
    }
  }, [rewards]);

  const renderRewardCards = () => {
    const rewardGroups = [];

    for (let i = 0; i < rewards.length; i += 5) {
      rewardGroups.push(rewards.slice(i, i + 5));
    }

    return rewardGroups.map((group, index) => (
      <div key={index} className="swiper-slide">
        <div className="bg-indigo-50 rounded-2xl h-96 flex flex-col justify-center items-center p-4">
          <h2 className="text-2xl font-semibold text-indigo-600">Recompensas {index + 1}</h2>
          <ul className="text-center text-indigo-600 mt-2">
            {group.map((reward, idx) => (
              <li key={idx}>{reward.name}: {reward.description}</li>
            ))}
          </ul>
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full relative">
      <div className="swiper centered-slide-carousel swiper-container relative">
        <div className="swiper-wrapper">
          {renderRewardCards()}
          <div className="swiper-slide">
            <div className="bg-indigo-50 rounded-2xl h-96 flex flex-col justify-center items-center p-4">
              <h2 className="text-2xl font-semibold text-indigo-600">Reconpensas</h2>
              <p className="text-center text-indigo-600 mt-2">Descrição do Novo Card</p>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default RewardsCarousel;
