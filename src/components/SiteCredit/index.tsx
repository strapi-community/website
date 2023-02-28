import styles from './index.module.scss'

export const SiteCredit = () => {
  return (
    <a
      className={styles.siteCredit}
      href="https://www.ottr.com.np/"
      target="_blank"
      rel="noreferrer"
    >
      <span>Designed by </span>
      <span className={styles.container}>
        <span className={styles.name} data-text="Ottr">
          Ottr
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
          viewBox="0 0 32 31.095"
        >
          <g id="logo" transform="translate(-84.898 -55.815)">
            <path
              id="reye"
              d="M103,70.523a1.513,1.513,0,1,1-1.512-1.514A1.514,1.514,0,0,1,103,70.523Z"
              transform="translate(-0.594 -0.52)"
              fill="currentColor"
            />
            <path
              id="leye"
              d="M115.192,70.523a1.512,1.512,0,1,1-1.511-1.514A1.513,1.513,0,0,1,115.192,70.523Z"
              transform="translate(-1.074 -0.52)"
              fill="currentColor"
            />
            <path
              id="head"
              d="M101.8,55.815a15.151,15.151,0,0,0-12.9,7.242H87.317a2.419,2.419,0,0,0,0,4.839V66.68a1.2,1.2,0,1,1,0-2.406h2.289l.174-.305a13.883,13.883,0,0,1,25.906,6.94v6.337a3.921,3.921,0,0,1-7.759.8,4.787,4.787,0,0,0,2.933-3.517c0-1-1.623-1.814-3.622-1.814s-3.623.812-3.623,1.814a4.789,4.789,0,0,0,2.933,3.517,3.92,3.92,0,0,1-7.758-.8A6.04,6.04,0,0,0,87.13,75.028a14.766,14.766,0,0,1-.585-4.12H85.333a16.019,16.019,0,0,0,16,16V85.695a14.8,14.8,0,0,1-13.4-8.551,4.825,4.825,0,0,1,9.648.1,5.134,5.134,0,0,0,9.662,2.423,5.133,5.133,0,0,0,9.661-2.423V70.908A15.111,15.111,0,0,0,101.8,55.815Zm3.036,18.778a4.7,4.7,0,0,1,4.794,0c-.131.631-1.278,2.348-2.4,2.348S104.958,75.206,104.839,74.593Z"
              fill="currentColor"
            />
          </g>
        </svg>
      </span>
    </a>
  );
};
