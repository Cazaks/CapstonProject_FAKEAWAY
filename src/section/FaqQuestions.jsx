import SectionTitle from '../components/SectionTitle';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';

export default function FaxQuestions() {
  
  const [isOpen, setIsOpen] = useState(null);

  const data = [
    {
        question: 'What is FakeAway?',
        answer: 'FakeAway is a secure ticketing platform that prevents counterfeit tickets and ensures smooth, contactless event entry using QR codes and NFC technology.',
    },
    {
        question: 'How does ticket verification work?',
        answer: 'Each ticket has a unique QR code. At the event entrance, scanning the QR code instantly verifies its authenticity in real-time.',
    },
    {
        question: 'Can someone duplicate a ticket?',
        answer: 'No. FakeAway uses unique, tamper-proof codes for each ticket, making duplication or forgery nearly impossible.',
    },
    {
        question: 'Do I need a special device to scan tickets?',
        answer: 'No. Any smartphone or tablet with a camera can be used to scan QR codes, or you can integrate NFC devices for faster contactless entry.',
    },
    {
        question: 'Is this system suitable for both small and large events?',
        answer: 'Yes. FakeAway is designed to handle everything from intimate gatherings to large concerts and conferences efficiently.',
    },
    {
        question: 'How do I track attendees?',
        answer: 'The platform logs every ticket scan, allowing you to monitor attendees’ entry and exit in real-time and generate detailed reports.',
    },
    {
        question: 'Can I integrate FakeAway with other tools?',
        answer: 'Yes. FakeAway supports integrations with popular apps and event management tools to streamline your workflow.',
    },
    {
        question: 'Is attendee data secure?',
        answer: 'Absolutely. All personal and ticketing data is encrypted and stored securely to comply with privacy standards.',
    },
    {
        question: 'What happens if a ticket is invalid or already used?',
        answer: 'The system instantly flags duplicate or invalid tickets, preventing unauthorized entry and alerting the event staff.',
    },
    {
        question: 'How quickly can I set up FakeAway for my event?',
        answer: 'Setup is fast and straightforward. You can create and distribute tickets within minutes, and start scanning attendees right away.',
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center">
      
      <SectionTitle
        title="FAQ's"
        description="Looking for answers to your frequently asked questions? Check out our FAQ's section below to find."
      />

      <div className="mx-auto mt-12 w-full max-w-xl">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col border-b border-gray-200 bg-white">

            <h3
              className="flex cursor-pointer items-start justify-between gap-4 py-4 font-medium"
              onClick={() => setIsOpen(isOpen === index ? null : index)}
            >
              {item.question}
              {isOpen === index ? (
                <MinusIcon className="w-5 h-5 text-gray-500" />
              ) : (
                <PlusIcon className="w-5 h-5 text-gray-500" />
              )}
            </h3>

            <p
              className={`pb-4 text-sm leading-6 text-gray-500 ${
                isOpen === index ? 'block' : 'hidden'
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
