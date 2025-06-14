// src/pages/Services.jsx

import React from 'react';
import styles from './Services.module.css';

const servicesData = [
  {
    title: 'Wired & Wireless Networking',
    items: [
      'Enterprise-grade Network Design & Rollout',
      'WiFi 6, Mesh Networks',
      'LAN/WAN/SD-WAN Design & Optimization',
      'Structured Cabling & Switching'
    ]
  },
  {
    title: 'Compute & Storage Solutions',
    items: [
      'Servers & Virtualization Platforms',
      'SAN, NAS, Object Storage',
      'Data Backup & Disaster Recovery'
    ]
  },
  {
    title: 'Data Center & Cloud Solutions',
    items: [
      'DCN Setup (Core to Access Layers)',
      'Public, Private & Hybrid Cloud',
      'VMware, Hyper-V, SDN Infrastructure'
    ]
  },
  {
    title: 'Cybersecurity Solutions',
    items: [
      'Firewalls, UTM, EDR, Zero Trust Frameworks',
      'SOC & SIEM Deployment'
    ]
  },
  {
    title: 'FTTH & ISP Services',
    items: [
      'FTTH Planning & Deployment',
      'ONU, OLT, Routers Supply',
      'ISP Infrastructure Support'
    ]
  },
  {
    title: 'AMC & Facility Management',
    items: [
      '24x7 Network & Server Monitoring',
      'SLA-Based Helpdesk Support',
      'Preventive & Corrective Maintenance'
    ]
  },
  {
    title: 'Managed Services',
    items: [
      'Railwire Partner (Rajasthan, West Bengal)',
      'Field Ops & Infrastructure Maintenance',
      'Subscriber Support & Service Delivery'
    ]
  }
];

const Services = () => {
  return (
    <div className={styles.servicesSection}>
      <h1>Our Services</h1>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3>{service.title}</h3>
            <ul>
              {service.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
