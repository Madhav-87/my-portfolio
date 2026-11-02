import { useState } from 'react';
import SectionContainer from '../section-container/SectionContainer';

const certificates = [
  { title: 'JavaScript', issuer: 'Infosys Springboard', file: '/JavaScript-Cert.pdf' },
  { title: 'Introduction to Git and GitHub', issuer: 'Google / Coursera', file: '/Google Git and GitHub Certificate.pdf' },
  { title: 'Google AI Essentials', issuer: 'Google / Coursera', file: '/Google AI Essentials.pdf' },
  { title: 'React Basics', issuer: 'Meta / Coursera', file: '/react_certificate.pdf' },
];

function handleCardKeyDown(event, action) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    action();
  }
}

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <SectionContainer id="certificates" height="520px">
      <div className="gap-10-column text-center d-flex">
        <div className="color-blue fw-5">Credentials</div>
        <div className="heading-4">Continuous learning</div>
        <div className="color-grey">Recent credentials.</div>
      </div>
      <div className="d-flex gap-25 laptop-grid-column">
        {certificates.map((certificate) => (
          <div
            key={certificate.title}
            tabIndex={0}
            role="button"
            aria-label={`Open ${certificate.title} certificate`}
            className="cursor-target hover-lift cert-container"
            onClick={() => setSelectedCertificate(certificate)}
            onKeyDown={(event) => handleCardKeyDown(event, () => setSelectedCertificate(certificate))}
          >
            <div className="cert-icon"><span className="material-symbols-outlined">license</span></div>
            <div className="cert-info-panel">
              <div className="cert-title">{certificate.title}</div>
              <div className="cert-subtxt">{certificate.issuer}</div>
            </div>
          </div>
        ))}
      </div>
      {selectedCertificate && (
        <div className="certificate-modal" role="dialog" aria-modal="true" aria-label={`${selectedCertificate.title} certificate`}>
          <div className="blur-background" onClick={() => setSelectedCertificate(null)} />
          <div className="cert-container long">
            <div className="flex flex-col gap-10 width-100 height-100">
              <iframe title={`${selectedCertificate.title} certificate`} src={`${selectedCertificate.file}#toolbar=0`} width="100%" height="90%" />
              <button className="cursor-target magic-btn gen-btn" onClick={() => setSelectedCertificate(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </SectionContainer>
  );
}
