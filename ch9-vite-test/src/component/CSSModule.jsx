import styles from '@styles/CSSModule.module.scss';

const CSSModule = () => {
  return (
    <>
      <div className={styles.wrapper}>
        안녕하세요, 저는 <span className={'something'}>CSSModule!</span>
      </div>
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        안녕하세요, 저는 <span className={'something'}>CSSModule!</span>
      </div>
      <div className={styles.wrapper2}>
        안녕하세요, 저는 <span className={'css'}>CSSModule!</span>
      </div>
    </>
  );
};

export default CSSModule;
