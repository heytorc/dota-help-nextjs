import { steamApi } from '../services/axios';

export const handleHeroes = async () => {
  try {
    const { data: heroes } = await steamApi.get(`/IEconDOTA2_${process.env.DOTA_APP_ID}/GetHeroes/v1`);

    return heroes;
  } catch (error) {
    console.log(error);
  }
};

export const handleHeroImage = (heroName: string, size: 'small' | 'large' | 'full' | 'vert'): string => {
  const sizeObject = {
    'small': 'sb',
    'large': 'lg',
    'full': 'full',
    'vert': 'vert'
  }

  const realHeroName = heroName.split('npc_dota_hero_')[1] || heroName;

  const url = `${process.env.NEXT_PUBLIC_DOTA_IMAGES_API}/heroes/${realHeroName}_${sizeObject[size]}.png`;
  return url;
};