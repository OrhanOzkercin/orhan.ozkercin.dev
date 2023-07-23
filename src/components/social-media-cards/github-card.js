import { Github, Twitter } from '@/assets/icons';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
const GithubCard = ({ variant }) => {
  const [accountInfo, setAccountInfo] = useState('');

  return (
    <div className='flex items-center justify-between rounded-xl border bg-light-bg px-3 py-2 shadow-md dark:border-slate-600 dark:bg-dark-bg/95'>
      <div className='flex items-center gap-3'>
        <Github width='2em' height='2em' />
        <a
          href='https://github.com/OrhanOzkercin'
          className='font-medium transition-all hover:text-dark-text/70'
          target='_blank'
        >
          @orhanozkercin
        </a>
      </div>
      <a
        className='rounded-2xl bg-[#373e47] px-5 py-1 text-sm text-white transition-all hover:bg-[#373e47]/80'
        href='https://github.com/OrhanOzkercin'
        target='_blank'
      >
        Follow
      </a>
    </div>
  );
};

export default GithubCard;
