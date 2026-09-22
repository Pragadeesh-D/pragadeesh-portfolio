import { ExternalLink } from 'lucide-react';
import '../../styles/certifications.css';

const ISSUER_META = {
  'google-cloud': { label: 'G', className: 'cert-card__issuer-icon--google-cloud' },
  microsoft:      { label: 'M', className: 'cert-card__issuer-icon--microsoft' },
  codsoft:        { label: 'C', className: 'cert-card__issuer-icon--codsoft' },
  default:        { label: '?', className: 'cert-card__issuer-icon--default' },
};

/**
 * CertCard — displays a single certification.
 * credlyUrl is null until the user provides it; never fabricated.
 */
export default function CertCard({ cert }) {
  const {
    name, issuer, issuerLogo, date, expiresLabel,
    credlyUrl, tags, highlight, note,
  } = cert;

  const meta = ISSUER_META[issuerLogo] || ISSUER_META.default;
  const hasLink   = Boolean(credlyUrl);
  // Show tags only on highlighted certs (Google Cloud × 2, Microsoft)
  const showTags  = highlight && tags && tags.length > 0;
  // Show "link to be added" notice only for highlighted certs awaiting Credly URL
  const showPending = highlight && !hasLink;

  return (
    <article
      className={`cert-card${highlight ? ' cert-card--highlight' : ''}`}
      aria-labelledby={`cert-${cert.id}-title`}
    >
      {/* Issuer row */}
      <div className="cert-card__issuer-badge">
        <div
          className={`cert-card__issuer-icon ${meta.className}`}
          aria-hidden="true"
        >
          {meta.label}
        </div>
        <span className="cert-card__issuer-name">{issuer}</span>
      </div>

      {/* Name */}
      <h3 id={`cert-${cert.id}-title`} className="cert-card__name">
        {name}
      </h3>

      {/* Issuing date */}
      {date && <p className="cert-card__date">Issued: {date}</p>}

      {/* Expiration */}
      {expiresLabel && (
        <p className={`cert-card__date${expiresLabel === 'Does not expire' ? ' cert-card__date--noexpiry' : ''}`}>
          {expiresLabel}
        </p>
      )}

      {/* Tags — only for highlighted certs */}
      {showTags && (
        <div className="cert-card__tags">
          {tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Note (internship / completion certs) */}
      {note && <p className="cert-card__note">{note}</p>}

      {/* Actions */}
      <div className="cert-card__actions">
        {hasLink ? (
          <a
            href={credlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary btn--sm"
            aria-label={`Verify ${name} credential on Credly (opens in a new tab)`}
          >
            <ExternalLink size={13} aria-hidden="true" />
            Verify Credential
          </a>
        ) : showPending ? (
          <p className="cert-card__pending">
            Credential verification link to be added
          </p>
        ) : null}
      </div>
    </article>
  );
}
