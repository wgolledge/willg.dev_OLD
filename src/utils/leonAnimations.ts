import { Elastic, Expo, Power1, TweenMax } from 'gsap';
import { THEME } from './style';
// * needed to force inclusion in tree shaking
// @ts-ignore
import ColorPropsPlugin from 'gsap/ColorPropsPlugin';
ColorPropsPlugin;

// * the animations here mutate the leon object by reference 🤫

interface IAnimProps {
  leon: any;
  onComplete: Function;
  isFirst?: boolean;
}

export const wave = ({ leon, onComplete }: IAnimProps) => {
  leon.drawing.forEach((letter: any) => {
    letter.value = 0;
  });
  TweenMax.fromTo(
    leon,
    2.5,
    { amplitude: 0 },
    {
      amplitude: 0.4,
      delay: 1,
      ease: Expo.easeIn,
      repeat: 1,
      yoyo: true,
      onComplete,
    },
  );
};

export const fade = ({ leon, onComplete }: IAnimProps) => {
  const mutableColor = {
    color: THEME.palette.text,
  };
  let tick = 0;
  TweenMax.fromTo(
    mutableColor,
    2.5,
    { colorProps: { color: THEME.palette.text } },
    {
      colorProps: { color: THEME.palette.background },
      ease: Expo.easeIn,
      repeat: 0,
      yoyo: false,
      onUpdate: () => {
        tick++;
        if (tick > 25) leon.color = [mutableColor.color];
      },
      onComplete,
    },
  );
};

export const draw = ({ leon, onComplete, isFirst }: IAnimProps) => {
  const total = leon.drawing.length;
  for (let i = 0; i < total; i++) {
    TweenMax.fromTo(
      leon.drawing[i],
      2,
      { value: 0 },
      {
        delay: i * 0.08 + (!isFirst ? 1.5 : 0),
        value: 1,
        ease: Expo.easeOut,
        onComplete: () => {
          if (i === total - 1) onComplete();
        },
      },
    );
  }
};

export const stretchAndBounceBack = ({ leon, onComplete }: IAnimProps) => {
  const bounceBack = () => {
    TweenMax.fromTo(
      leon,
      0.7,
      { tracking: 2.5 },
      {
        tracking: 0.5,
        ease: Elastic.easeOut,
        repeat: 0,
        yoyo: true,
        onComplete,
      },
    );
  };
  TweenMax.fromTo(
    leon,
    2,
    { tracking: 0.5 },
    {
      tracking: 2.5,
      delay: 1.5,
      ease: Power1.easeIn,
      repeat: 0,
      yoyo: false,
      onComplete: bounceBack,
    },
  );
};

export const shrinkAndPulse = ({ leon, onComplete }: IAnimProps) => {
  const pulse = () => {
    TweenMax.fromTo(
      leon,
      2,
      { weight: 10 },
      {
        weight: 300,
        ease: Elastic.easeOut,
        repeat: 0,
        yoyo: true,
        onComplete,
      },
    );
  };
  TweenMax.fromTo(
    leon,
    3.2,
    { weight: 300 },
    {
      weight: 0.1,
      ease: Expo.easeIn,
      repeat: 0,
      yoyo: false,
      onComplete: pulse,
    },
  );
};
