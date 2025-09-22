 

'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const tabs = [
  {
    id: 'tab-1',
    title: 'General questions',
    faqs: [
      { q: 'What is this platform used for?', a: 'Our platform helps businesses, educators, and event organizers host seamless webinars, virtual summits.' },
      { q: 'Do I need to install any software?', a: 'No, our platform is fully web-based! You and your attendees can join from any device without downloads.' },
      { q: 'Can I customize my event page?', a: 'Yes! You can add your logo, brand colors, and custom content to create a personalized event experience.' },
      { q: 'Is the platform secure?', a: 'Absolutely! We use enterprise-grade security measures, including end-to-end encryption, to keep your data safe.' },
      { q: 'What kind of support do you offer?', a: 'We provide 24/7 live chat, email support, and dedicated account managers for enterprise users.' },
      { q: 'Can I record my webinars and events?', a: 'Yes, all sessions can be recorded and shared with attendees for on-demand viewing.' },
      { q: 'Does it integrate with other tools?', a: 'Yes! We offer seamless integrations with CRMs, marketing automation tools, and collaboration platforms.' },
      { q: 'How many attendees can join a webinar?', a: 'Our plans support anywhere from 50 to unlimited attendees, depending on your needs.' }
    ]
  },
  {
    id: 'tab-2',
    title: 'Features and functionality',
    faqs: [
      { q: 'What kind of support do you offer?', a: 'We provide 24/7 live chat, email support, and dedicated account managers for enterprise users.' },
      { q: 'Can I record my webinars and events?', a: 'Yes, all sessions can be recorded and shared with attendees for on-demand viewing.' },
      { q: 'Does it integrate with other tools?', a: 'Yes! We offer seamless integrations with CRMs, marketing automation tools, and collaboration platforms.' },
      { q: 'How many attendees can join a webinar?', a: 'Our plans support anywhere from 50 to unlimited attendees, depending on your needs.' }
    ]
  },
  {
    id: 'tab-3',
    title: 'Support and security',
    faqs: [
      { q: 'Can I customize my event page?', a: 'Yes! You can add your logo, brand colors, and custom content to create a personalized event experience.' },
      { q: 'Is the platform secure?', a: 'Absolutely! We use enterprise-grade security measures, including end-to-end encryption, to keep your data safe.' },
      { q: 'What kind of support do you offer?', a: 'We provide 24/7 live chat, email support, and dedicated account managers for enterprise users.' },
      { q: 'Can I record my webinars and events?', a: 'Yes, all sessions can be recorded and shared with attendees for on-demand viewing.' }
    ]
  }
];

const FaqArea = () => {
  const [activeTab, setActiveTab] = useState('tab-1');
  const [openFaqs, setOpenFaqs] = useState<{ [key: string]: number | null }>({});

  const toggleFaq = (tabId: string, index: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [tabId]: (prev as Record<string, number | null>)[tabId] === index ? null : index
    }));
  };


  return (
    <section className="uxora-section-padding5 uxora-tab-section">
      <div className="container">
        <div className="uxora-section-title center max-width-1050">
          <h1 className="title">If you have any questions, ask us</h1>
          <p className="uxora-default-data data2">
            Our expert team is here to help. We're committed to providing clear answers quickly, ensuring you have the information needed for a great experience.
          </p>
        </div>
        <div className="uxora-tab-wrap">
          <ul className="tabs">
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={`tab-link ${activeTab === tab.id ? 'current' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </li>
            ))}
          </ul>

          {tabs.map(tab => (
            <div key={tab.id} id={tab.id} className={`uxora-tab-content ${activeTab === tab.id ? 'current' : ''}`}>
              <div className="uxora-faq-wrap1">
                {tab.faqs.map((faq, index) => (
                  <div key={index} className={`uxora-faq-item ${openFaqs[tab.id] === index ? 'open' : ''}`}>
                    <div className="uxora-faq-header" onClick={() => toggleFaq(tab.id, index)}>
                      <h3>{faq.q}</h3>
                      <div className="uxora-active-icon">
                        <Image
                          className="plasicon"
                          src="/assets/images/faq/mynus.svg"
                          alt="toggle icon"
                          width={16}
                          height={16}
                        />
                      </div>
                    </div>
                    {openFaqs[tab.id] === index && (
                      <div className="uxora-faq-body">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqArea;
