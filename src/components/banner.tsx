import React, { useRef, useEffect } from 'react';
// @ts-ignore
import { LeonSans } from '../scripts/leonsans';
import styled from 'styled-components';
import { THEME } from '../utils/style';
import {
  wave as waveImport,
  fade,
  draw,
  shrinkAndPulse,
  stretchAndBounceBack,
} from '../utils/leonAnimations';

const BannerDiv = styled.div`
  height: 20vh;
  overflow: visible;
`;

const Overlay = styled.div`
  height: 20vh;
`;

const DEFAULT_LEON = {
  text: 'Will Golledge',
  color: [THEME.palette.text],
  tracking: 0.5,
  weight: 300,
};

const PIXEL_RATIO = 2;

const Banner = () => {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let { clientWidth, clientHeight } = mount.current as HTMLDivElement;

    let leon: any,
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D,
      sequence: Function[] = [],
      isWave: boolean,
      counter = 0;

    const setupCanvas = () => {
      canvas.width = clientWidth * PIXEL_RATIO;
      canvas.height = clientHeight * PIXEL_RATIO;
      canvas.style.width = clientWidth + 'px';
      canvas.style.height = clientHeight + 'px';
      ctx.scale(PIXEL_RATIO, PIXEL_RATIO);
    };

    const replaceCanvas = () => {
      canvas = mount.current!.removeChild(canvas);
      canvas = document.createElement('canvas');
      mount.current!.appendChild(canvas);
      ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      setupCanvas();
    };

    const genNewLeon = (currentlyIsWave?: boolean) => {
      isWave = !!currentlyIsWave;
      replaceCanvas();
      return new LeonSans({
        ...DEFAULT_LEON,
        size:
          clientWidth > THEME.breakpoints.desktop ? 100 : clientWidth / 7.15,
        ...(isWave && {
          isWave: true,
          pathGap: 0.00000000001,
          amplitude: 0,
          fps: 30,
        }),
      });
    };

    const animate = (t: number) => {
      requestAnimationFrame(animate);

      ctx.clearRect(0, 0, clientWidth, clientHeight);

      const x = (clientWidth - leon.rect.w) / 2;
      const y = (clientHeight - leon.rect.h) / 2;

      leon.position(x, y);
      leon.draw(ctx);
      if (isWave) leon.wave(ctx, t);
    };

    const init = () => {
      canvas = document.createElement('canvas');
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      mount.current!.appendChild(canvas);
      ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

      setupCanvas();

      requestAnimationFrame(animate);
      sequence[0](true);
    };

    const handleResize = () => {
      ({ clientWidth, clientHeight } = mount.current as HTMLDivElement);
      leon.size = clientWidth > 800 ? 100 : clientWidth / 7.15;
      setupCanvas();
    };

    const fadeAndRestart = () => {
      leon = genNewLeon();
      fade({
        leon,
        onComplete: () => {
          counter = 0;
          sequence[0]();
        },
      });
    };

    const wave = () => {
      counter += 1;
      leon = genNewLeon(true);
      waveImport({
        leon,
        onComplete: () => {
          isWave = false;
          counter >= sequence.length ? fadeAndRestart() : sequence[counter]();
        },
      });
    };

    sequence.push((isFirst: boolean) => {
      leon = genNewLeon();
      draw({
        leon,
        isFirst,
        onComplete: wave,
      });
    });
    sequence.push(() => {
      leon = genNewLeon();
      stretchAndBounceBack({
        leon,
        onComplete: wave,
      });
    });
    sequence.push(() => {
      leon = genNewLeon();
      shrinkAndPulse({
        leon,
        onComplete: wave,
      });
    });

    init();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <BannerDiv>
      <Overlay ref={mount} />
    </BannerDiv>
  );
};

export default Banner;
