'use client';

import { motion } from 'motion/react';
import { Section, Container, Heading } from './ui';

const differentiators = [
  {
    title: 'Licensed & Insured',
    description: 'All guards are fully licensed, background-checked, and insured across California and Nevada.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'De-escalation Trained',
    description: 'Specialized training in conflict resolution ensures safety while maintaining a professional environment.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.15 6.15 0 006.15 6.15h2.1a6.15 6.15 0 006.15-6.15V9.75a1.575 1.575 0 00-3.15 0" />
      </svg>
    ),
  },
  {
    title: 'Custom Security Plans',
    description: 'Every event and venue gets a tailored security plan designed around your specific needs and risks.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export function WhyECT() {
  return (
    <Section className="bg-gray-900/50">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <Heading as="h2" className="mb-4">
            Why Choose ECT Security
          </Heading>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional, reliable, and tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              className="text-center px-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: i * 0.15,
              }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-neon/10 border border-neon/30 text-neon mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
