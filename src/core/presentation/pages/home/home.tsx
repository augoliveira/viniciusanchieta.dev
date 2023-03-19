'use client';

import { motion } from 'framer-motion';
import type { HomePageProps } from '~/core/domain';
import {
  EmailIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon
} from '~/core/presentation/common/icons';
import {
  ExperienceTag,
  HeaderTag,
  HeroTag,
  LineTag,
  ProjectTag,
  SocialButtonTag
} from './components';

function HomePage({
  loadExperiencesResponse,
  loadProjectsResponse
}: HomePageProps) {
  function handleScrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <motion.section id='resume' className='mt-40 flex flex-col gap-4'>
        <HeroTag />
      </motion.section>
      <motion.section className='mt-24 flex gap-24 sm:flex-col sm:gap-9'>
        <p className='text-lg font-light uppercase text-white'>Experience</p>
        <div className='flex w-full flex-col gap-8'>
          {loadExperiencesResponse.map(experience => (
            <ExperienceTag
              key={experience.company}
              company={experience.company}
              description={experience.description}
              endDate={experience.endDate}
              location={experience.location}
              position={experience.position}
              startDate={experience.startDate}
            />
          ))}
        </div>
      </motion.section>
      <LineTag />
      <motion.section
        className='mt-24 flex w-full flex-col gap-12 sm:gap-9'
        id='projects'
      >
        <p className='text-lg font-light uppercase text-white'>projects</p>
        <div className='flex w-full flex-row flex-wrap justify-between gap-7'>
          {loadProjectsResponse.map(project => (
            <ProjectTag
              key={project.name}
              description={project.description}
              links={project.links}
              name={project.name}
            />
          ))}
        </div>
      </motion.section>
      <LineTag />
      <motion.footer
        className='mt-24 mb-12 flex w-full items-start justify-between gap-14 sm:flex-col sm:gap-9'
        id='contact'
      >
        <p className='text-lg font-light uppercase text-white'>contact</p>
        <div className='flex flex-wrap justify-center gap-3'>
          <SocialButtonTag
            title='Send an email'
            url='mailto:contact@viniciusanchieta.dev'
            icon={<EmailIcon />}
          />
          <SocialButtonTag
            title='LinkedIn'
            url='https://www.linkedin.com/in/viniciusanchieta'
            icon={<LinkedinIcon />}
          />
          <SocialButtonTag
            title='Instagram'
            url='https://www.instagram.com/viniciusanchieta.dev'
            icon={<InstagramIcon />}
          />
          <SocialButtonTag
            title='GitHub'
            url='https://github.com/viniciusanchieta'
            icon={<GitHubIcon width={20} height={19} />}
          />
        </div>
      </motion.footer>
    </>
  );
}

export default HomePage;
