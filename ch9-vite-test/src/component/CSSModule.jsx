import styles from '@styles/CSSModule.module.css';

const CSSModule = () => {
  return (
    <>
      <div className={styles.wrapper}>
        안녕하세요, 저는 <span className={'something'}>CSSModule!</span>
      </div>
      <div className={styles.wrapper2}>
        안녕하세요, 저는 <span className={'mycss'}>CSSModule!</span>
      </div>
    </>
  );
};

export default CSSModule;
