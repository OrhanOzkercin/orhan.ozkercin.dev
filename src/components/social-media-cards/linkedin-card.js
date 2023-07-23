import { Linkedin } from '@/assets/icons';
import React, { useState } from 'react';
const LinkedinCard = ({ variant }) => {
  const [accountInfo, setAccountInfo] = useState('');

  return (
    <div className='flex items-center justify-between rounded-xl border bg-light-bg px-3 py-2 shadow-md dark:border-slate-600 dark:bg-dark-bg/95'>
      <div className='flex items-center gap-3'>
        <Linkedin width='2em' height='2em' />
        <a
          href='https://www.linkedin.com/in/orhanozkercin/'
          className='font-medium transition-all hover:text-dark-text/70'
          target='_blank'
        >
          @orhanozkercin
        </a>
      </div>
      <a
        className='rounded-2xl bg-[#0a66c2] px-5 py-1 text-base text-sm text-white transition-all hover:bg-[#0a66c2]/80'
        href='https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=orhanozkercin'
        target='_blank'
      >
        Follow
      </a>
    </div>
  );
};

export default LinkedinCard;
