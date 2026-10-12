import ExternalLink from './ExternalLink';
import styles from './VideoEmbed.module.css';

export default function VideoEmbed({ video }) {
  return (
    <section className={styles.wrap} aria-labelledby={`${video.id}-title`}>
      <h3 id={`${video.id}-title`} className={styles.title}>
        {video.title}
      </h3>
      <p className={styles.meta}>
        <span>{video.source}</span>
        <span aria-hidden="true"> · </span>
        <time>{video.date}</time>
      </p>

      {video.embedUrl ? (
        <div className={styles.frame}>
          <iframe
            src={video.embedUrl}
            title={`${video.title} (${video.date})`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className={styles.placeholder} role="region" aria-label="Video placeholder">
          <p>
            Embed unavailable in this build. Open the source page for the government
            presentation or briefing video.
          </p>
          <ExternalLink href={video.pageUrl}>Open video source page</ExternalLink>
        </div>
      )}

      <div className={styles.why}>
        <h4>Why watch this?</h4>
        <p>{video.whyWatch}</p>
      </div>

      <p className={styles.captionNote}>
        Space for captions: use the player caption controls when available. A written
        summary is provided below for accessibility and study use.
      </p>

      <details className={styles.transcript}>
        <summary>Transcript / summary</summary>
        <p>{video.transcriptSummary}</p>
      </details>
    </section>
  );
}
