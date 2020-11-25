import style from './InputText.module.css';


export const InputText = ({ input, meta, ...props }) => {
    let isError = meta.touched && meta.error;

    return (
        <div className={isError && style.error }>
            <input {...input} placeholder={props.placeholder} type={props.type}></input>
            <div>
                {isError &&  <span>{meta.error}</span>}
            </div>

        </div>
    );
}
