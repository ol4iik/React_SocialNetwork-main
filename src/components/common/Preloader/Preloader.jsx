import preloader from './preloader.svg';
import style from './Preloader.module.css';

const Preloader = () => {
    return <div className={style.preloader}>
        <img src={preloader} alt='preloader'/>
    </div>
}
export default Preloader;