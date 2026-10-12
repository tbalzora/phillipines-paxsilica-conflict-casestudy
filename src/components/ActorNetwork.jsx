import styles from './ActorNetwork.module.css';

export default function ActorNetwork({ title, caption, nodes = [] }) {
  return (
    <figure className={styles.figure}>
      {title ? <figcaption className={styles.title}>{title}</figcaption> : null}
      <p className={styles.note}>
        Relationships move in more than one direction. No single node sits above the
        rest as the sole source of authority.
      </p>
      <ul className={styles.grid} aria-label={caption || title || 'Actor network'}>
        {nodes.map((node) => (
          <li key={node.id} className={`${styles.node} ${styles[node.id] || ''}`}>
            {node.label}
          </li>
        ))}
      </ul>
      <div className={styles.links} aria-hidden="true">
        <span>petition</span>
        <span>consultation</span>
        <span>regulation</span>
        <span>investment</span>
        <span>policy</span>
        <span>refusal</span>
      </div>
      {caption ? <p className={styles.caption}>{caption}</p> : null}
    </figure>
  );
}
