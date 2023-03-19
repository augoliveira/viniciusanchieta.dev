import type { ExperienceProps } from './interfaces';

function ExperienceComponent({
  position,
  company,
  location,
  description,
  endDate,
  startDate
}: ExperienceProps) {
  function handleCompany(): string {
    const hasCompany = !!company;
    if (!hasCompany) {
      return location;
    }

    return `${company} / ${location}`;
  }

  return (
    <section
      className='flex flex-col gap-3 font-light'
      role='region'
      aria-label='Experience'
    >
      <div className='flex items-start justify-between sm:flex-col'>
        <p className='text-2xl text-white sm:text-xl'>{position}</p>
        <p className='text-base text-gray-100 sm:text-sm'>
          {startDate} - {endDate}
        </p>
      </div>
      <p className='text-sm text-blue-200'>{handleCompany()}</p>
      <pre className='whitespace-pre-wrap font-inter text-base leading-6 text-gray-100'>
        {description}
      </pre>
    </section>
  );
}

export default ExperienceComponent;
